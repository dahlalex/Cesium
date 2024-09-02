export const customImageryProviderViewModels = [
  new Cesium.ProviderViewModel({
    name: "Mask bakgrund",
    iconUrl: "https://karta.hallstahammar.se/img/png/mask.png",
    tooltip: "Mask background",
    creationFunction: function () {
      return new Cesium.WebMapServiceImageryProvider({
        url: new Cesium.Resource({ url: "https://karta.hallstahammar.se/geoserver/wms" }),
        layers: "Hallstahammar:y_mask,Hallstahammar:scb_tatort_2023_hallsta",
        parameters: {}
      });
    },
  }),
  new Cesium.ProviderViewModel({
    name: "Ortofoto 2024",
    iconUrl: "https://karta.hallstahammar.se/img/png/orto.png",
    tooltip: "Ortofoto 2024",
    creationFunction: function () {
      return new Cesium.WebMapServiceImageryProvider({
        url: new Cesium.Resource({ url: "https://karta.hallstahammar.se/geoserver/wms" }),
        layers: "ortofoto",
        parameters: {}
      });
    },
  }),
  new Cesium.ProviderViewModel({
    name: "Topografiska kartan, grå",
    iconUrl: "https://karta.hallstahammar.se/img/png/gra.png",
    tooltip: "Karta, grå",
    creationFunction: function () {
      return new Cesium.WebMapServiceImageryProvider({
        url: new Cesium.Resource({ url: "https://karta.hallstahammar.se/geoserver/wms" }),
        layers: "topowebbkartan_nedtonad,Hallstahammar:y_mask",
        parameters: {}
      });
    },
  }),
  new Cesium.ProviderViewModel({
    name: "Topografiska kartan, färg",
    iconUrl: "https://karta.hallstahammar.se/img/png/farg.png",
    tooltip: "Karta, färg",
    creationFunction: function () {
      return new Cesium.WebMapServiceImageryProvider({
        url: new Cesium.Resource({ url: "https://karta.hallstahammar.se/geoserver/wms" }),
        layers: "topowebbkartan,Hallstahammar:y_mask",
        parameters: {}
      });
    },
  })
];