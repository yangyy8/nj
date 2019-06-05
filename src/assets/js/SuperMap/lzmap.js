var map;
var markerLayer;
var layerGroup;
var MAP_SIZE = [11, 15];
var SEARCH_HEIGHT = 100;
var esservice;
export function createMapL() {
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

  esservice = new SuperMap.ElasticSearch("http://192.168.3.136:9200/");

  //var url = "http://10.33.66.183:8090/iserver/services/map-ugcv5-njcaihuimapsymbol/rest/maps/nj_caihui@mapsymbol";
  //加载图层
  //L.supermap.tiledMapLayer(url).addTo(map);
}
export function getSearh(obj){

  if (layerGroup != null)
    {layerGroup.clearLayers();}

  // 以下为查询ES，由于es_lz_lzxx被删除，暂时注释掉。
  // 数据模拟
  // for (var i = 0; i < 5; i++) {
  //   var point = [32.03613281 + i / 100, 118.78211975];
  //   renderMarker(point, 'cz');
  //   //社会面
  //
  //   var point = [32.03613281, 118.78211975 + i / 100];
  //   renderMarker(point, 'lz');
  //   //旅馆
  // }
  // return;

  // 以下为查询ES，由于es_lz_lzxx被删除，暂时注释掉。
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
}
,
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



  // if (obj.zjzl != "") {
  //   var rr=getTerm("ZJZL", obj.zjzl, true);
  //   console.log('rr',JSON.parse(rr));
  //
  //   searchObject.query.bool.must.push(rr);
  // }



  parameters.push(searchObject);
console.log('parameters',parameters);
  esservice.msearch({body: parameters}, function(error, result) {
    var buckets = result.responses[0].aggregations.all_counts.buckets;
    console.log(buckets);
    for (var i = 0; i < buckets.length; i++) {
      //buckets[i].key;
      //buckets[i].doc_count
      var point = [32.03613281 + i / 100, 118.78211975];
      renderMarker(point, 'cz');

      var point = [32.03613281, 118.78211975 + i / 100];
      renderMarker(point, 'lz');
    }
  });
}

export function getTerm(key, value, istext) {
		if (istext) {
			key = key + ".keywork";
		}


		if (value instanceof Array) { //数组}

			return {'terms':{'" + key + "':['" + value.join("','") + "']}};
		}
		else {
			return {'term':{'" + key + "':{'value':'" + value + "'}}};
		}
	}

export function renderMarker(point, classname) {
      // 画圆
      var myIcon = L.divIcon({
          html: "",
          className: 'my-div-icon ' + classname,
          iconSize:14
      });

      var tempMarker = L.marker(point, { icon: myIcon});
      //tempMarker.on('click', function(e) {
      //  alert(e.target.options.dm);
      //});
      markerLayer.addLayer(tempMarker);

  //markerLayer.on("mousemove", function(e) {
  //	e.layer.bindPopup("<div style='font-weight:bold; font-size: 13px; padding-bottom:5px'>" + e.layer.options.mc + "</div><div>" + "个数：" + e.layer.options.number + "</div>").openPopup();
  //});
  //markerLayer.on("mouseout", function(e) {
  //	e.layer.closePopup();
  //});
  }


  //处理geometry数据数组中经纬度 与 leaflet.js API中构建polygon(纬，经)矛盾
  var changeLonAndLat = function(arr){
      var arrresult = [];
      for(var k=0; k<arr.length; k++){
          var arr1 = [];
          for(var i=0; i<arr[k].length; i++){
              var arr2 = [];
              for(var j=0; j<arr[k][i].length; j++){
                  var arr3 = [];
                  var temp = arr[k][i][j][0];
                  var t1 = arr[k][i][j][0];
                  var t2 = arr[k][i][j][1];
                  temp = t1;
                  t1 = t2;
                  t2 = temp;
                  arr3.push(t1,t2);
                  arr2.push(arr3);
              }
              arr1.push(arr2);
          }
          arrresult.push(arr1);
      }
      return arrresult;
  }

export function queryDataByServer(lx){
  markerLayer.clearLayers();

  //数据集SQL查询服务参数
  var sqlParam = new SuperMap.GetFeaturesBySQLParameters({
    queryParameter: {
      name: "gajg_" + lx + "_3201_pg@ORCL_gt8",
      attributeFilter: ""
    },
    datasetNames: ["ORCL_gt8:gajg_" + lx + "_3201_pg"], //数据集名称
    fromIndex:1,
    toIndex:1200
  });

  //向服务器发送请求，并对返回的结果进行处理
  var url = "http://10.33.66.183:2333/iserver/services/data-gt8/rest/data";
  L.supermap.featureService(url).getFeaturesBySQL(sqlParam, function (serviceResult) {
    var features = serviceResult.result.features.features;
    for (var i = 0; i < features.length; i++) {
      var center = L.latLngBounds(changeLonAndLat(features[i].geometry.coordinates)).getCenter();
      //features[i].properties.DWDM;
      renderMarker(center, features[i], 11);
    }
  });

  currentLx = lx;
}

function createDWMap(dzid, mc) {
  //map.zoomTo(14);
  mapSqlSearch("JWPTBH='32010100000001915459'", 0, 5, function(features) {
    if (features.length > 0) {
      var x = features[0].properties.SMX;
      var y = features[0].properties.SMY;

      map.flyTo(new SuperMap.LonLat(x, y), 13);
    }
    else {
      alert("地图库中未录入该地址的坐标。");
    }
  });
}
export function mapSqlSearch(attributeFilter, from, to, callback) {
  //向服务器发送请求，并对返回的结果进行处理
      var url = "http://10.33.66.183:2333/iserver/services/data-gt8/rest/data";

  var sqlParam = new SuperMap.GetFeaturesBySQLParameters({
                          queryParameter: {
                              name: "dz_mlpxx_3201_pt@ORCL_gt8",
                              attributeFilter: attributeFilter
                          },
                          datasetNames: ["ORCL_gt8:dz_mlpxx_3201_pt"], //数据集名称
                          fromIndex:0,
                          toIndex:10
                      });
   L.supermap.featureService(url).getFeaturesBySQL(sqlParam, function (serviceResult) {
          var features = serviceResult.result.features.features;
    callback(features);
  });
}

export function getOrgData(curPage) {
  var qx = $("#query_qx").val();
  var mc = $("#query_mc").val();

  //getSubmit("http://10.33.72.145:9435/service/getRedisDataByDm?tablename=dm_gx", function(data) {
  //debugger;
  //});
  var html = "";
  for (var i = 0; i < 25; i++) {
    var dzid = "32010100000001917332";
    var dzmc = "高校";
    html += "<div onclick=\"createDWMap('" + dzid + "','" + dzmc + "')\">" + dzmc + (curPage * 25 + i) + "</div>";
  }
  $("#resultpanel").html(html);

  //var curPage = 1;
  var total = 30;

  createPage(curPage, total);
}
export function createPage(curPage, total) {
  var COUNT = 8;
  var pageHtml = "";
  var start = (curPage % COUNT == 0) ? (parseInt(curPage / COUNT - 1) * COUNT + 1) : (parseInt(curPage / COUNT) * COUNT + 1);
  if (curPage > 1) {
    pageHtml += "<span onclick='getOrgData(" + (start - COUNT) + ")'>&lt;</span>";
  }
  for (var i = 0; i < COUNT; i++) {
    var np = start + i;
    if (np < total + 1) {
      if (np == curPage) {
        pageHtml += "<span style='background-color: #3992d0'>" + np + "</span>";
      }
      else {
        pageHtml += "<span onclick='getOrgData(" + np + ")'>" + np + "</span>";
      }
    }
  }

  if (start + COUNT < total + 1) {
    pageHtml += "<span onclick='getOrgData(" + (start + COUNT) + ")'>&gt;</span>";
  }

  $("#pagepanel").html(pageHtml);
}
