import { viewer } from "./viewer.js";

let camera = viewer.camera;

// Extent 
let minLon = 15.5;
let maxLon = 16.8;
let minLat = 59.1;
let maxLat = 59.8;
let duration = 0.5;

camera.changed.addEventListener(function() {
  let position = camera.positionCartographic;
  let lon = Cesium.Math.toDegrees(position.longitude);
  let lat = Cesium.Math.toDegrees(position.latitude);
  let height = position.height;

  if (lon < minLon) {
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(minLon, lat, height),
      duration: duration,
    });
  } else if (lon > maxLon) {
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(maxLon, lat, height),
      duration: duration,
    });
  } else if (lat < minLat) {
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(lon, minLat, height),
      duration: duration,
    });
  } else if (lat > maxLat) {
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(lon, maxLat, height),
      duration: duration,
    });
  }
});

// The camera at start
const center = Cesium.Cartesian3.fromDegrees(16.230721, 59.569010);
const heading = Cesium.Math.toRadians(0.0);
const pitch = Cesium.Math.toRadians(-90.0);
const range = 50000.0;
viewer.camera.lookAt(center, new Cesium.HeadingPitchRange(heading, pitch, range));
viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);

// Home button
let extent = Cesium.Rectangle.fromDegrees(16.0, 59.45, 16.4, 59.7);
Cesium.Camera.DEFAULT_VIEW_RECTANGLE = extent;
Cesium.Camera.DEFAULT_VIEW_FACTOR = 0;