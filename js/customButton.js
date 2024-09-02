import { viewer } from "./viewer.js";

function createButton(title, labelText, onChangeCallback) {

  const toolbar = document.getElementById("toolbar");

  // Create the checkbox element
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", onChangeCallback);

  // Create the label element
  const label = document.createElement("label");
  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(labelText));

  // Create the button element
  const button = document.createElement("button");
  button.classList.add("cesium-button");
  button.setAttribute("title", title);
  button.appendChild(label);

  toolbar.appendChild(button)
}

// Function to toggle Shadow Chexkbox
function toggleShadows() {
  const shadowMap = viewer.scene.shadowMap;
  shadowMap.enabled = !shadowMap.enabled;
  const animation = document.querySelector("div.cesium-viewer-animationContainer");
  const timeline = document.querySelector("div.cesium-viewer-timelineContainer");
  animation.style.display = animation.style.display === 'none' ? 'block' : 'none';
  timeline.style.display = timeline.style.display === 'none' ? 'block' : 'none';
  viewer.forceResize();
}
// Function to toggle Fastighet Checkbox
let fastighetlayer;
function toggleFastighetLayer() {
  if (this.checked) {
    // Add a WMS imagery layer
    fastighetlayer = new Cesium.ImageryLayer(
      new Cesium.WebMapServiceImageryProvider({
      url:
        "https://karta.hallstahammar.se/geoserver/ows",
      layers: "fastighet_kvalitet",
      parameters: {
        transparent: true,
        format: "image/png",
      },
      })
    );
    viewer.imageryLayers.add(fastighetlayer);
  } else {
    viewer.imageryLayers.remove(fastighetlayer);
  }
}

// Create Shadow button
const shadowButton = createButton("Skuggor", "Skuggor", toggleShadows);
// Create Fastighet button
const fastighetButton = createButton("Fastighet", "Fastigheter", toggleFastighetLayer);
