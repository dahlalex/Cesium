// Hide animation, timeline and dataAttribution
const animation = document.querySelector("div.cesium-viewer-animationContainer");
animation.style.display = 'none';
const timeline = document.querySelector("div.cesium-viewer-timelineContainer");
timeline.style.display = 'none';
const bottom = document.querySelector("div.cesium-credit-textContainer");
bottom.style.display = 'none';
const dataAttribution = document.querySelector(".cesium-credit-expand-link");
dataAttribution.classList.add('hide-element');