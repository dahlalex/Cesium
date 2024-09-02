import { viewer } from "./viewer.js";

try {
  const tilesetUrls = [
  // Add more paths for additional models if needed
  ];

  // Loop through each path and load the tileset
  for (const tilesetUrl of tilesetUrls) {
      // Load tileset from the URL
      const tileset = await Cesium.Cesium3DTileset.fromUrl(tilesetUrl);
      
      // Add tileset to the scene
      viewer.scene.primitives.add(tileset);
      
      // Zoom to the tileset
      // viewer.zoomTo(tileset);
  }
} catch (error) {
  console.log(`Error loading tileset: ${error}`);
}