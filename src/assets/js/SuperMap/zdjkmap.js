var map;
var markerLayer;
var layerGroup;
var MAP_SIZE = [11, 15];
var SEARCH_HEIGHT = 100;
var esservice;
var polygonLayer;
//地图加载
export function createMapL() {
  map = L.map('mainMap', {
    crs: L.CRS.EPSG4326,
    preferCanvas: true,
    center: [32.03613281, 118.78211975],
    maxZoom: 18,
    minZoom: 13,
    zoom: 15,
    zoomControl: true,
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

  //var editableLayers = new L.FeatureGroup();
  var options = {
    position: 'topleft',
    draw: {
      polyline: false,
      polygon: {},
      circle: {},
      rectangle: {},
      marker: false,
      remove: true,
      circlemarker: false
    }
  };
  var drawControl = new L.Control.Draw(options);
  map.addControl(drawControl);
  map.on(L.Draw.Event.CREATED, function(e) {
    var arr = [];

    if (e.layerType == "circle") {
      var latLng = e.layer.getLatLng();
      var radius = e.layer.getRadius();
      var queryResult = L.supermap.plotting.query(map).getGObjectsInCircle(latLngs, radius);
    } else {
      var latLngs = e.layer.getLatLngs();
      var ps = latLngs[0];
      for (var i = 0; i < ps.length + 1; i++) {
        var arr1 = [];
        if (i == ps.length) {
          arr1.push(ps[0].lat);
          arr1.push(ps[0].lng);
        } else {
          arr1.push(ps[i].lat);
          arr1.push(ps[i].lng);
        }
        arr.push(arr1);
      }
    }


    polygonLayer = L.polygon(arr);
    polygonLayer.addTo(map);

    var geometryParam = new SuperMap.GetFeaturesByGeometryParameters({
      datasetNames: ['ORCL_gt8:dz_mlpxx_3201_pt'],
      geometry: polygonLayer,
      spatialQueryMode: 'INTERSECT',
      fromIndex: 0,
      toIndex: 999
    });
    L.supermap.featureService("http://10.33.66.183:2333/iserver/services/data-gt8/rest/data").getFeaturesByGeometry(geometryParam, function(serviceResult) {

      var resultdata = serviceResult.result.features.features;
      //var markers = [];
      //var ids = [];
      //for(var i = 0; i < resultdata.length; i++) {
      //	ids.push(resultdata[i].properties.JWPTBH);
      //}

      // 获取所有的范围的点。输出到页面
      // 代码写在这，从ES中获取数据的标准化地址ID，然后筛选。
      for (var i = 0; i < resultdata.length; i++) {
        //markers.push({SMY:resultdata[i].properties.SMY, SMY:resultdata[i].properties.SMX, DZID:resultdata[i].properties.JWPTBH, DZMC:resultdata[i].properties.DZMC});
        //ids.push(resultdata[i].properties.JWPTBH);
        var tm = L.marker([resultdata[i].properties.SMY, resultdata[i].properties.SMX]).bindPopup(resultdata[i].properties.DZMC);
        markerLayer.addLayer(tm);
      }
      console.log(resultdata);
    });

  })
}
export function doSearch(className) {
  console.log('------',className);
		//删除
		if (markerLayer != null) {
			markerLayer.clearLayers();
		}
		if (polygonLayer != null) {
			polygonLayer.remove();
		}

		$("." + className)[0].click();
	}