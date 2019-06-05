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
   // esservice = new SuperMap.ElasticSearch("http://10.33.69.24:9200/");
  //var url = "http://10.33.66.183:8090/iserver/services/map-ugcv5-njcaihuimapsymbol/rest/maps/nj_caihui@mapsymbol";
  //加载图层
  //L.supermap.tiledMapLayer(url).addTo(map);
}

export function queryZrqByServer(data) {

  //数据集SQL查询服务参数
  var sqlParam = new SuperMap.GetFeaturesBySQLParameters({
    queryParameter: {
      name: "gajg_zrq_3201_pg@ORCL_gt8",
      attributeFilter: "DWBM='" + data.dm + "'"
    },
    datasetNames: ["ORCL_gt8:gajg_zrq_3201_pg"] //数据集名称
  });

  //向服务器发送请求，并对返回的结果进行处理
  L.supermap.featureService("http://10.33.66.183:2333/iserver/services/data-gt8/rest/data").getFeaturesBySQL(sqlParam, function(serviceResult) {
    //debugger;
    var features = serviceResult.result.features.features;
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
    // className: 'my-div-icon',
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
    e.layer.bindPopup("<div style='font-weight:bold; font-size: 13px; padding-bottom:5px'>" + e.layer.options.pcsmc + "</div><div>" + "个数：" + e.layer.options.num + "</div>").openPopup();
  });
  markerLayer.on("mouseout", function(e) {
    e.layer.closePopup();
  });

  tempMarker.on('click', function(e) {
    // alert(e.target.options.pcsmc);
    requestTableData(e.target.options.pcsdm, 1);
  });
}

// 点击派出所marker, 获取常住人员列表
export function requestTableData(pcsdm, curpage) {
  //ES 请求
  var total = 1000;
  var html = new Array();
  for (var i = 0; i < 15; i++) {
    html.push("<tr><td>单位" + i + "</td><td>111</td><td>111</td><td>111</td><td>111</td></tr>");
  }
  $("#cztablebody").html(html.toString());
  createPage(curpage, total, pcsdm);
  $('.bottompanel').show(200);
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

export function createPage(curPage, total, pcsdm) {
  var COUNT = 10;
  var pageHtml = "";
  var start = (curPage % COUNT == 0) ? (parseInt(curPage / COUNT - 1) * COUNT + 1) : (parseInt(curPage / COUNT) * COUNT + 1);
  if (curPage > 1) {
    pageHtml += "<span onclick='requestTableData('" + pcsdm + "'," + (start - COUNT) + ")'>&lt;</span>";
  }
  for (var i = 0; i < COUNT; i++) {
    var np = start + i;
    if (np < total + 1) {
      if (np == curPage) {
        pageHtml += "<span style='background-color: #3992d0'>" + np + "</span>";
      }
      else {
        pageHtml += "<span onclick=\"requestTableData('" + pcsdm + "'," + np + ")\">" + np + "</span>";
      }
    }
  }

  if (start + COUNT < total + 1) {
    pageHtml += "<span onclick=\"requestTableData('" + pcsdm + "'," + (start + COUNT) + ")\">&gt;</span>";
  }

  $(".pagepanel").html(pageHtml);
}