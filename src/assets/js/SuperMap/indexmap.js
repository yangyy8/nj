var map;
var markerLayer;
var layerGroup;
var MAP_SIZE = [11, 15];
var SEARCH_HEIGHT = 100;
var esservice;
//地图加载

export function createMapL(id) {


 var searchResult=window.vm.getpcs("320116").then(function(result){
    console.log("所有异步已经完成");
 });

return false;
  map = L.map('mainMap', {
    crs: L.CRS.EPSG4326,
    preferCanvas: true,
    center: [32.03613281, 118.78211975],
    maxZoom: 18,
    zoom: 10,
    maxZoom: 16,
    zoomControl: false,
    attributionControl: false,
    closePopupOnClick: false //点击地图不关闭popup框
  });
  L.supermap.wmtsLayer("http://10.33.66.183:2333/iserver/services/map-wmts-GADT/wmts-china", {
    layer: "GADT",
    style: "default",
    tilematrixSet: "ChinaPublicServices_GADT",
    format: "image/png",
    transparent: true
  }).addTo(map);
  markerLayer = L.featureGroup().addTo(map);

  esservice = new SuperMap.ElasticSearch("http://10.33.69.24:9200/");
  getSearch(id);
  //var url = "http://10.33.66.183:8090/iserver/services/map-ugcv5-njcaihuimapsymbol/rest/maps/nj_caihui@mapsymbol";
  //加载图层
  //L.supermap.tiledMapLayer(url).addTo(map);
}

//查询行政区划
export function getSearch(id) {
  markerLayer.clearLayers();
  var sqlParam = new SuperMap.GetFeaturesBySQLParameters({
    queryParameter: {
      name: "XZ_QU_A@ORCL_gt8",
      attributeFilter: "ADMINCODE='1CHN" + id + "'"
    },
    datasetNames: ["ORCL_gt8:XZ_QU_A"]
  });

  // 列出选中的区域。
  L.supermap
    .featureService("http://10.33.66.183:2333/iserver/services/data-gt8/rest/data")
    .getFeaturesBySQL(sqlParam, function(serviceResult) {
      var resultData = serviceResult.result.features;
      var resultList = resultData.features;

      var layers = [];
      for (var index = 0; index < resultList.length; index++) {
        var resultLayer = L.polygon(changeLonAndLat(resultList[index].geometry.coordinates), {
          color: 'red',
          fillColor: 'red',
          fillOpacity: 0.2,
          className: 'pcs-layer'
        });
        var center = L.latLngBounds(changeLonAndLat(resultList[index].geometry.coordinates)).getCenter();
        layers.push(resultLayer);
      }
      layerGroup = L.layerGroup(layers);
      map.addLayer(layerGroup);
    });

    var parameters = new Array();
    parameters.push({index: "es_lz_lzxx", type: "doc"});
    var searchObject = {
      "query": {
        "bool": {
          "must": [
{
  "term": {
  "ZJZL.keyword": "16"
    }
},

  {
  "term": {
  "DJDWXZQH.keyword": "3201"
  }
  }
          ]//,
          //"filter": {
          //	"range" {
          //		"gte": '',
          //		"lte": '',
          //	}
          //}
        }
      },
      "size": 0,
      "aggs": {
        "all_counts": {
          "terms": {"field": "GJDQ.keyword"}
        }
      }
    };



    parameters.push(searchObject);
     //根据条件获取某区的临住总数
    esservice.msearch({body: parameters}, function(error, result) {
      var buckets = result.responses[0].aggregations.all_counts.buckets;
      console.log('========',buckets.length);
      var sum=0;
      for (var i = 0; i < buckets.length; i++) {
        //buckets[i].key;
        //buckets[i].doc_count

        // var point = [32.03613281 + i / 100, 118.78211975];
        // renderMarker(point, 'cz');
        //
         sum=sum+buckets[i].doc_count;


      }
      //name
      var searchResult = [
        { dm: '320116000000', mc: '六合分局', num: sum},
        ];
        queryZrqByServer(searchResult[0]);
    });

}
//调用数据集获取坐标   分局
export function queryZrqByServer(data) {

  //数据集SQL查询服务参数
  var sqlParam = new SuperMap.GetFeaturesBySQLParameters({
    queryParameter: {
      name: "gajg_fj_3201_pg@ORCL_gt8",
      attributeFilter: "DWBM='" + data.dm + "'"
    },
    datasetNames: ["ORCL_gt8:gajg_fj_3201_pg"] //数据集名称
  });

  //向服务器发送请求，并对返回的结果进行处理
  L.supermap.featureService("http://10.33.66.183:2333/iserver/services/data-gt8/rest/data").getFeaturesBySQL(sqlParam, function(serviceResult) {
    //debugger;

    var features = serviceResult.result.features.features;
      console.log('111------',features);
    for (var i = 0; i < features.length; i++) {
      var center = L.latLngBounds(changeLonAndLat(features[i].geometry.coordinates)).getCenter();
      //features[i].properties.DWDM;

      renderMarker([center.lat, center.lng], data);

    }
  });
}
export function renderMarker(point, data) {

  //debugger;
  // 画圆
  var myIcon = L.divIcon({
    html: "<div style='line-height:40px;text-align:center'>" + data.num + "</div>",
    className: 'my-div-icon',
    iconSize: 40
  });
  var tempMarker = L.marker(point, {
    icon: myIcon,
    pcsdm: data.dm,
    pcsmc: data.mc,
    num: data.num
  });
  markerLayer.addLayer(tempMarker);

  markerLayer.on("mousemove", function(e) {
    e.layer.bindPopup("<div style='font-weight:bold; font-size: 13px; padding-bottom:5px'>" + e.layer.options.pcsmc + "</div><div>" + "总数：" + e.layer.options.num + "</div>").openPopup();
  });
  markerLayer.on("mouseout", function(e) {
    e.layer.closePopup();
  });

  tempMarker.on('click', function(e) {
    // alert(e.target.options.pcsmc);
   //  requestTableData(e.target.options.pcsdm, 1);
   //从库里得到派出所数据

     var searchResult=window.vm.getpcs("2222");

    //name

      for (var i = 0; i < searchResult.length; i++) {
           renderPCS(searchResult[i]);
      }



  });
}
//获取派出所
function renderPCS(data) {
  markerLayer.clearLayers();

  //数据集SQL查询服务参数
  var sqlParam = new SuperMap.GetFeaturesBySQLParameters({
    queryParameter: {
      name: "gajg_pcs_3201_pg@ORCL_gt8",
      attributeFilter: "DWBM='" + data.dm + "'"
    },
    datasetNames: ["ORCL_gt8:gajg_pcs_3201_pg"] //数据集名称
  });

  //向服务器发送请求，并对返回的结果进行处理
  L.supermap.featureService("http://10.33.66.183:2333/iserver/services/data-gt8/rest/data").getFeaturesBySQL(sqlParam, function(serviceResult) {
    //debugger;

    var features = serviceResult.result.features.features;

    for (var i = 0; i < features.length; i++) {
      var center = L.latLngBounds(changeLonAndLat(features[i].geometry.coordinates)).getCenter();
      //features[i].properties.DWDM;

      renderMarkerpcs([center.lat, center.lng], data);

    }
  });
}

export function renderMarkerpcs(point, data) {

  //debugger;
  // 画圆
  var myIcon = L.divIcon({
    html: "<div style='line-height:40px;text-align:center'>" + data.num + "</div>",
    className: 'my-div-icon',
    iconSize: 40
  });
  var tempMarker = L.marker(point, {
    icon: myIcon,
    pcsdm: data.dm,
    pcsmc: data.mc,
    num: data.num
  });
  markerLayer.addLayer(tempMarker);

  markerLayer.on("mousemove", function(e) {
    e.layer.bindPopup("<div style='font-weight:bold; font-size: 13px; padding-bottom:5px'>" + e.layer.options.pcsmc + "</div><div>" + "总数：" + e.layer.options.num + "</div>").openPopup();
  });
  markerLayer.on("mouseout", function(e) {
    e.layer.closePopup();
  });

  tempMarker.on('click', function(e) {
    // alert(e.target.options.pcsmc);
   //  requestTableData(e.target.options.pcsdm, 1);
   //从库里得到派出所数据

     var searchResult=window.vm.getpcs("2222");
    //name
      for (var i = 0; i < searchResult.length; i++) {
           renderBzhid(searchResult[i]);
      }

  });
}
//获取标准化地址
function renderBzhid(data) {
  //数据集SQL查询服务参数
  var sqlParam = new SuperMap.GetFeaturesBySQLParameters({
    queryParameter: {
      name: "gajg_pcs_3201_pg@ORCL_gt8",
      attributeFilter: "DWBM='" + data.dm + "'"
    },
    datasetNames: ["ORCL_gt8:gajg_pcs_3201_pg"] //数据集名称
  });

  //向服务器发送请求，并对返回的结果进行处理
  L.supermap.featureService("http://10.33.66.183:2333/iserver/services/data-gt8/rest/data").getFeaturesBySQL(sqlParam, function(serviceResult) {
    //debugger;

    var features = serviceResult.result.features.features;

    for (var i = 0; i < features.length; i++) {
      var center = L.latLngBounds(changeLonAndLat(features[i].geometry.coordinates)).getCenter();
      //features[i].properties.DWDM;

      window.vm.getRyxx(1,10,"111");

    }
  });
}










//处理geometry数据数组中经纬度 与 leaflet.js API中构建polygon(纬，经)矛盾
var changeLonAndLat = function(arr) {
  var arrresult = [];
  for (var k = 0; k < arr.length; k++) {
    var arr1 = [];
    for (var i = 0; i < arr[k].length; i++) {
      var arr2 = [];
      for (var j = 0; j < arr[k][i].length; j++) {
        var arr3 = [];
        var temp = arr[k][i][j][0];
        var t1 = arr[k][i][j][0];
        var t2 = arr[k][i][j][1];
        temp = t1;
        t1 = t2;
        t2 = temp;
        arr3.push(t1, t2);
        arr2.push(arr3);
      }
      arr1.push(arr2);
    }
    arrresult.push(arr1);
  }
  return arrresult;
}
