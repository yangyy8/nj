var map;
var markerLayer;
var layerGroup;
var MAP_SIZE = [11, 15];
var SEARCH_HEIGHT = 100;
var esservice;
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
  console.log('id',id);
		//map.zoomTo(14);
		markerLayer.clearLayers();
		mapSqlSearch("DH_PT学校", "ID='" + id + "'", 0, 5, function(features) {
			if (features.length > 0) {
				var x = features[0].properties.SMX;
				var y = features[0].properties.SMY;
				var tm = L.marker([y, x]).bindPopup(mc);
				markerLayer.addLayer(tm);
				tm.openPopup();
				map.flyTo(L.latLng(y, x), 12);
				// getStudents(id, parseFloat(x), parseFloat(y));
			}
			else {
				alert("地图库中未录入该地址的坐标。");
			}
		});
	}

  //dz_mlpxx_3201_pt	DH_PT学校
export function mapSqlSearch(tableName, attributeFilter, from, to, callback) {
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
