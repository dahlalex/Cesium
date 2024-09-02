import { viewer } from './viewer.js';


let handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);

// Define the click event handler
handler.setInputAction(function(click) {
  // Pick the feature that was clicked
  let pickedFeature = viewer.scene.pick(click.position);
  
  if (!pickedFeature) {
    return;
  } else {
    // Get the properties of the picked feature
    let properties = pickedFeature.primitive.properties;
    // Create an HTML table to display properties in a readable format
    let propertyHtml = '<table class="cesium-infoBox-defaultTable">';
    propertyHtml += '<tr>';
    propertyHtml += '<td>' + "Datum" + '</td>';
    propertyHtml += '<td>' + "2024" + '</td>';
    propertyHtml += '</tr>';
    propertyHtml += '</table>';
    // Set the selected entity to display properties in the infobox
    viewer.selectedEntity = new Cesium.Entity({
      name: '3D Tile Properties',
      description: propertyHtml
    });
  }
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);
