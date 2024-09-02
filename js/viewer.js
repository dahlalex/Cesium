import { customImageryProviderViewModels } from "./basemap.js";

Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3NDdmYmM4ZC0xOGZiLTQxNjYtOWExYy04ZWM0MWI1ZmEzNWQiLCJpZCI6MTIzODQ3LCJpYXQiOjE2NzU4NDAzODd9.7guexD45dFK2X4utONKZvYQmDHbrhCkt_S0Iyg6U3aY';

export const viewer = new Cesium.Viewer("cesiumContainer", {
  imageryProviderViewModels: customImageryProviderViewModels,
  terrainProviderViewModels: [],
  terrain: Cesium.Terrain.fromWorldTerrain(),
  baseLayerPicker: true,
  sceneModePicker: false,
  geocoder: false,
  shadows: false,
  timeline: true,
  animation: true,
  infoBox: true,
  skyBox: false,
  skyAtmosphere: false,
  selectionIndicator: false,
});

viewer.scene.globe.depthTestAgainstTerrain = false;
// compass
viewer.extend(Cesium.CesiumWidgetMixin);
viewer.compass.enabled = true;

// Local timezone
viewer.animation.viewModel.timeFormatter = function(date, viewModel) {
  const isoString = Cesium.JulianDate.toIso8601(date);
  let dateTime = luxon.DateTime.fromISO(isoString);
  dateTime = dateTime.setZone("local");
  return dateTime.toLocaleString(luxon.DateTime.TIME_SIMPLE);
};
// Maximum and minimum Zoom Distance
viewer.scene.screenSpaceCameraController.maximumZoomDistance = 50000;
viewer.scene.screenSpaceCameraController.minimumZoomDistance = 20.0;
viewer.scene.screenSpaceCameraController.enableCollisionDetection = true;
// Right drag
viewer.scene.screenSpaceCameraController.tiltEventTypes = Cesium.CameraEventType.RIGHT_DRAG;
// remove zoom EventTypes.
viewer.scene.screenSpaceCameraController.zoomEventTypes.shift();

