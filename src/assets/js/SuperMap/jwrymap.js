var map;
var markerLayer;
var layerGroup;
var MAP_SIZE = [11, 15];
var SEARCH_HEIGHT = 100;
var resultLayer;
//地图加载
export function createMapL() {
  map = L.map('mainMap', {
    crs: L.CRS.EPSG4326,
    preferCanvas: true,
    center: [31.910376, 118.525718],
    maxZoom: 18,
    // minZoom: 8,
    zoom: 11,
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

  // esservice = new SuperMap.ElasticSearch("http://10.33.69.24:9200/");

  //var url = "http://10.33.66.183:8090/iserver/services/map-ugcv5-njcaihuimapsymbol/rest/maps/nj_caihui@mapsymbol";
  //加载图层
  //L.supermap.tiledMapLayer(url).addTo(map);
}
export function getSearch() {
  markerLayer.clearLayers();

//划区域
  //endTime

  var  searchResult=window.czvm.getPCS(function(data){
    console.log('data',data);
    if(data!=undefined && data!=""){
    for (var i = 0; i < data.length; i++) {
         renderPCS(data[i]);
      }
     }else {
      alert("地图库中未录入该地址的坐标。");
    }

});
}

function loadHeatMap(x,y) {
  var heatNumbers=150,heatRadius=35;
  var num=parseInt(heatNumbers);
  num=(num>0)?num:0;
  var radius=parseInt(heatRadius);
  radius=(radius>0)?radius:0;
  var heatPoints=[];
  for(var i=0;i<num;i++){
    heatPoints[i]=[x,y,1]
  }
  resultLayer=L.heatLayer(heatPoints,{
    radius:radius,
    minOpacity:0.5
  }).addTo(map);

}
//获取派出所
function renderPCS(data) {


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
   var layers=[];
    for (var i = 0; i < features.length; i++) {
      var resultLayers = L.polygon(changeLonAndLat(features[i].geometry.coordinates), {
        color: 'red',
        fillColor: 'red',
        fillOpacity: 0.2,
        className: 'pcs-layer',
      });
      layers.push(resultLayers);

      layerGroup= L.layerGroup(layers);
      map.addLayer(layerGroup);
      var center = L.latLngBounds(changeLonAndLat(features[i].geometry.coordinates)).getCenter();
      renderMarkerpcs([center.lat, center.lng], data);

    }



  });
}
export function renderMarkerpcs(point, data) {
  //debugger;
  // 画圆
  var myIcon = L.divIcon({
    html: "<div style='line-height:40px;text-align:center;font-weight:bold'>" + data.count + "</div>",
    className: 'my-div-icon icon1',
    iconSize: 50
  });
  var tempMarker = L.marker(point, {
    icon: myIcon,
    pcsdm: data.dm,
    pcsmc: data.mc,
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

    var searchResult=window.czvm.getBZHDZ(data.dm,function(data){

        for (var i = 0; i < data.length; i++) {
             renderBzhid(data[i]);
        }
      });
  });

}





function renderBzhid(data) {
    markerLayer.clearLayers();
    mapSqlSearch("JWPTBH='"+data.dm+"'", 0, 5, function(features) {
      if (features.length > 0) {
       for (var i = 0; i < features.length; i++) {
         console.log(features[i].geometry.coordinates);
          var cc =features[i].geometry.coordinates;
         loadHeatMap(cc[1],cc[0])
         var mc=features[i].properties.JLXDZXZ;
        renderMarkerbzh(features[i].geometry.coordinates.reverse(), data,mc);
        }
      }
      else {
        //alert("地图库中未录入该地址的坐标。");
      }
    });
}

export function renderMarkerbzh(point, data,mc) {

  //debugger;
  // 画圆

  var myIcon = L.divIcon({
    html: "<div style='line-height:39px;text-align:center'>" + data.count + "</div>",
    className: 'my-div-icon cz',
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
    // alert(e.target.options.pcsmc);
   //  requestTableData(e.target.options.pcsdm, 1);
   //从库里得到派出所数据

    window.czvm.getRyxx(1,5,data.dm,mc);

  });
}

function mapSqlSearch(attributeFilter, from, to, callback) {
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
