import LatLng = google.maps.LatLng;
import MVCArray = google.maps.MVCArray;
import HeatmapLayer = google.maps.visualization.HeatmapLayer;
import HeatmapLayerOptions = google.maps.visualization.HeatmapLayerOptions;
import WeightedLocation = google.maps.visualization.WeightedLocation;
import GoogleMap = google.maps.Map;

const weightedLocation: WeightedLocation = { location: new LatLng(0, 0), weight: 0 };

const heatmapLayerOptions: HeatmapLayerOptions = {};
const heatmapLayerOptionsData1: HeatmapLayerOptions = { data: new MVCArray([new LatLng(0, 0)]) };
const heatmapLayerOptionsData2: HeatmapLayerOptions = {
    data: new MVCArray([{ location: new LatLng(0, 0), weight: 0 }]),
};
const heatmapLayerOptionsData3: HeatmapLayerOptions = {
    data: new MVCArray([new LatLng(0, 0), { location: new LatLng(0, 0), weight: 0 }]),
};
const heatmapLayerOptionsData4: HeatmapLayerOptions = { data: [new LatLng(0, 0)] };
const heatmapLayerOptionsData5: HeatmapLayerOptions = { data: [{ location: new LatLng(0, 0), weight: 0 }] };
const heatmapLayerOptionsData6: HeatmapLayerOptions = {
    data: [new LatLng(0, 0), { location: new LatLng(0, 0), weight: 0 }],
};

const heatmapLayer: HeatmapLayer = new HeatmapLayer();
const heatmapLayer1: HeatmapLayer = new HeatmapLayer({});

heatmapLayer.getData(); // $ExpectType MVCArray<LatLng | WeightedLocation>

heatmapLayer.getMap(); // $ExpectType Map

heatmapLayer.setData(new MVCArray([new LatLng(0, 0)]));
heatmapLayer.setData(new MVCArray([{ location: new LatLng(0, 0), weight: 0 }]));
heatmapLayer.setData(new MVCArray([new LatLng(0, 0), { location: new LatLng(0, 0), weight: 0 }]));
heatmapLayer.setData([new LatLng(0, 0)]);
heatmapLayer.setData([{ location: new LatLng(0, 0), weight: 0 }]);
heatmapLayer.setData([new LatLng(0, 0), { location: new LatLng(0, 0), weight: 0 }]);

heatmapLayer.setMap(new GoogleMap(document.body));

heatmapLayer.setOptions({});

export {};
