var map;
var markerLayer;
var layerGroup;
var MAP_SIZE = [11, 15];
var SEARCH_HEIGHT = 100;

//地图加载
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

}

export function getSearch() {
  markerLayer.clearLayers();
  var searchResult=window.lxsvm.getBZHDZ(function(data){
    for (var i = 0; i < data.length; i++) {
         renderBzhid(data[i]);
    }
  });
}

//获取标准化地址
function renderBzhid(data) {
  markerLayer.clearLayers();
   var mm=data.dm.split("号");
   var  uurl="DZMC='"+mm[0]+"号'";

    mapSqlSearch(uurl, 0, 5, function(features) {
      if (features.length > 0) {
        // var x = features[0].properties.SMX;
        // var y = features[0].properties.SMY;
       for (var i = 0; i < features.length; i++) {
         console.log(features[i]);
         var mc=features[i].properties.DZMC;
        renderMarkerbzh(features[i].geometry.coordinates.reverse(), data,mc);
        }
      }
      else {
        //alert("地图库中未录入该地址的坐标。");
      }
    });

  // });
}

function mapSqlSearch(attributeFilter, from, to, callback) {
  //向服务器发送请求，并对返回的结果进行处理
  var url = "http://10.33.66.183:2333/iserver/services/data-gt8/rest/data";
  var sqlParam = new SuperMap.GetFeaturesBySQLParameters({
                          queryParameter: {
                              name: "dz_mlp@ORCL_gt8",
                              attributeFilter: attributeFilter
                          },
                          datasetNames: ["ORCL_gt8:dz_mlp"], //数据集名称
                          fromIndex:0,
                          toIndex:10
                      });
   L.supermap.featureService(url).getFeaturesBySQL(sqlParam, function (serviceResult) {
          var features = serviceResult.result.features.features;
    callback(features);
  });
}

export function renderMarkerbzh(point, data,mc) {

  //debugger;
  // 画圆
  var myIcon = L.divIcon({
    html: "<div style='line-height:40px;text-align:center;font-weight:bold'>" + data.count + "</div>",
    className: 'my-div-icon lz',
    iconSize: 50
  });
  var tempMarker = L.marker(point, {
    icon: myIcon,
    pcsdm: data.dm,
    pcsmc: mc,
    num: data.count
  });
  markerLayer.addLayer(tempMarker);

  markerLayer.on("mousemove", function(e) {
    e.layer.bindPopup("<div style='font-weight:bold; font-size: 13px; padding-bottom:5px'>" + e.layer.options.pcsmc + "</div><div>" + "总人数：" + e.layer.options.num + "</div>").openPopup();
  });
  markerLayer.on("mouseout", function(e) {
    e.layer.closePopup();
  });

  tempMarker.on('click', function(e) {

    window.lxsvm.getRyxx(1,5,data.dm,mc,'');

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
