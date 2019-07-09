var map;
var markerLayer;
var layerGroup;
var MAP_SIZE = [11, 15];
var SEARCH_HEIGHT = 100;
var esservice;
var resultLayer;
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

  esservice = new SuperMap.ElasticSearch("http://10.33.69.24:9200/");

  //var url = "http://10.33.66.183:8090/iserver/services/map-ugcv5-njcaihuimapsymbol/rest/maps/nj_caihui@mapsymbol";
  //加载图层
  //L.supermap.tiledMapLayer(url).addTo(map);
}


// 左边列表点击
export	function createDWMap(id, mc) {

		//map.zoomTo(14);
		markerLayer.clearLayers();
	//	mapSqlSearch("DH_PT学校", "ID='" + id + "'", 0, 5,0, function(features) {
 var see=window.ffvm.getinfo(id,function(data) {


    mapSqlSearch("dz_mlp", "DZMC='" + data + "'", 0, 5, function(features) {
     var arr=[];
      if (features.length > 0) {
				var x = features[0].properties.SMX;
				var y = features[0].properties.SMY;
				// var tm = L.marker([y, x]).bindPopup(mc);
        //
				// markerLayer.addLayer(tm);
				// tm.openPopup();
				// map.flyTo(L.latLng(y, x), 12);

        arr.push(y);
        arr.push(x);
        // getStudents(id, parseFloat(x), parseFloat(y));
      }else {
          var ss=window.ffvm.getXY(data.dm,function(datae){
            console.log('datae',datae);
            if(datae!=undefined && datae.ycoord>0 && datae.xcoord>0){

             arr.push(datae.ycoord);
             arr.push(datae.xcoord);
           }

          });
      }


        var relt=window.ffvm.getXXDZ(id,function(data) {
   console.log('-----',data);
        for (var i = 0; i < data.length; i++) {
          var num=data[i].count;
          var id=data[i].dm;
             mapSqlSearch("dz_mlp", "DZMC='" +id + "'", 0, 5, function(features) {
               if(features.length>0){
                for (var j = 0; j < features.length; j++) {
                //  var mc=features[j].properties.DZMC;
                    renderMarkerbzh(features[j].geometry.coordinates.reverse(),id,id,arr,num,mc);
                 }
               }else {
                 var ss=window.ffvm.getXY(data.dm,function(datae){
                   if(datae!=undefined && datae.ycoord>0 && datae.xcoord>0){
                    var das=[];
                    das.push(datae.ycoord);
                    das.push(datae.xcoord);
                    //console.log(das,data);
                    renderMarkerbzh(das,id,id,arr,num,mc);
                  }

                 });
               }
              });
            }
    });
   });
  });
}

  export function renderMarkerbzh(point,dm,mc,arr,num,xmc) {

     measureDistance(point[0],point[1],arr[0],arr[1],dm,mc,num,xmc);
    //debugger;
    // 画圆
    // var myIcon = L.divIcon({
    //   html: "<div style='line-height:40px;text-align:center;font-weight:bold'>" + data.count + "</div>",
    //   className: 'my-div-icon lz',
    //   iconSize: 50
    // });
    // var tempMarker = L.marker(point, {
    //   icon: myIcon,
    //   pcsdm: data.dm,
    //   pcsmc: mc,
    //   num: data.count
    // });
    // markerLayer.addLayer(tempMarker);
    //
    // markerLayer.on("mousemove", function(e) {
    //   e.layer.bindPopup("<div style='font-weight:bold; font-size: 13px; padding-bottom:5px'>" + e.layer.options.pcsmc + "</div><div>" + "总人数：" + e.layer.options.num + "</div>").openPopup();
    // });
    // markerLayer.on("mouseout", function(e) {
    //   e.layer.closePopup();
    // });
    //
    // tempMarker.on('click', function(e) {
    //   // alert(e.target.options.pcsmc);
    //  //  requestTableData(e.target.options.pcsdm, 1);
    //  //从库里得到派出所数据
    //
    // //  window.vm.getRyxx(1,5,data.dm,mc,'');
    //
    // });
  }
  function measureDistance(x1,y1,x2,y2,dm,mc,num,xmc) {

         var polyLine = L.polyline([[x1, y1], [x2, y2]], {color: "red"});
         var marker1 = L.marker([x1, y1]), marker2 = L.marker([x2, y2]);
         	var tm = marker2.bindPopup(xmc);
         markerLayer.addLayer(tm);
         var distanceMeasureParam = new SuperMap.MeasureParameters(polyLine);
         L.supermap
             .measureService("http://10.33.66.183:2334/iserver/services/map-world/rest/maps/World")
             .measureDistance(distanceMeasureParam, function (serviceResult) {
               var  gl=parseInt(serviceResult.result.distance/1000);

               if(gl>window.ffvm.jlsz){
                 markerLayer.addLayer(polyLine);
                 markerLayer.addLayer(marker1);
               }else {
                 return;
               }
                 var content = "<div style='line-height:25px;'>距离： 大约 <font style='color:red;font-weight:bold;font-size:16px;'>" + gl  + "</font>  公里<br/>"+mc+" <br/>总人数："+num+"</div>";

                 marker1.bindPopup(content).openPopup(marker1.getLatLng());
                 marker1.on("mousemove", function(e) {
                    marker1.bindPopup(content).openPopup(marker1.getLatLng());
                 });
                 marker1.on('click', function(e) {

                      window.ffvm.getRyxx(1,5,dm,mc,'');
                 });
             });
 }
  //dz_mlpxx_3201_pt	DH_PT学校
export function mapSqlSearch(tableName, attributeFilter, from, to ,callback) {
  //向服务器发送请求，并对返回的结果进行处理
  var sqlParam = new SuperMap.GetFeaturesBySQLParameters({
                          queryParameter: {
                              name: tableName + "@ORCL_gt8",
                              attributeFilter: attributeFilter
                          },
                          datasetNames: ["ORCL_gt8:" + tableName], //数据集名称
                          fromIndex:0,
                          toIndex:10
                      });

   L.supermap.featureService("http://10.33.66.183:2333/iserver/services/data-gt8/rest/data").getFeaturesBySQL(sqlParam, function (serviceResult) {
          var features = serviceResult.result.features.features;
    callback(features);
  });
}
