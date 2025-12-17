import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.Cesium.Ion.defaultAccessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3YjI3OTBkZC01N2YyLTQ3NWItOGVkMi1lNDA3NDVlNGY3OTUiLCJpZCI6MzY5ODc0LCJpYXQiOjE3NjU4MDQwNjB9.D9aPH4p-IStuncmb_OgzJbrHtJPGDbOvnxaSHDlMiVQ";

    const Cesium = window.Cesium;

    const viewer = new Cesium.Viewer("cesiumContainer", {
      animation: true,
      timeline: true,
      baseLayerPicker: false,
      geocoder: false,
      sceneModePicker: true,
      navigationHelpButton: false,
      homeButton: true,
      fullscreenButton: true,
      shouldAnimate: true
    });

    // 🌍 Earth
    viewer.scene.globe.enableLighting = true;

    // 🛰️ Probes
    for (let i = 0; i < 20; i++) {
      viewer.entities.add({
        position: Cesium.Cartesian3.fromDegrees(
          78 + Math.random(),
          13 + Math.random(),
          300000
        ),
        point: {
          pixelSize: 6,
          color: Cesium.Color.CYAN
        }
      });
    }

    // 🌕 Moon
    viewer.entities.add({
      name: "Moon",
      position: Cesium.Cartesian3.fromDegrees(0, 0, 384400000),
      ellipsoid: {
        radii: new Cesium.Cartesian3(1737400, 1737400, 1737400),
        material: Cesium.Color.GRAY
      }
    });

    // 🔴 Mars
    viewer.entities.add({
      name: "Mars",
      position: Cesium.Cartesian3.fromDegrees(120, 20, 225000000000),
      ellipsoid: {
        radii: new Cesium.Cartesian3(3389500, 3389500, 3389500),
        material: Cesium.Color.RED.withAlpha(0.8)
      }
    });

    viewer.camera.flyHome(2);
  }, []);

  return (
    <>
      <div id="cesiumContainer"></div>

      <div className="hud left">
        <h3>ASTRAVEDA</h3>
        <p>Mission Control</p>
        <p>Active Probes: 20</p>
        <p>Q-Link: ONLINE</p>
        <p>AI Status: NORMAL</p>
      </div>

      <div className="hud right">
        <p>Earth • Moon • Mars</p>
        <p>Telemetry Live</p>
        <p>Navigation: ACTIVE</p>
      </div>
    </>
  );
}

export default App;
