import ImageMarker from "react-image-marker";
import bodyImage from "./media/bodyChart.JPG";
import { useState } from "react";
import "./App.css";

export default function BodyChart() {
  let [markers, setMarkers] = useState([]);
  console.log(markers);
  const CustomMarker = () => {
    return (
      <div
        className="image-marker__marker image-marker__marker--default"
        data-testid="marker"
      ></div>
    );
  };

  return (
    <div className="BodyChart">
      <button disabled={!markers.length > 0} onClick={() => setMarkers([])}>
        Reset
      </button>
      <button
        disabled={!markers.length > 0}
        onClick={() => setMarkers((prev) => prev.slice(0, -1))}
      >
        Remove Marker
      </button>
      <ImageMarker
        className="pain_image"
        src={bodyImage}
        markers={markers}
        onAddMarker={(marker) => setMarkers((prev) => [...prev, marker])}
        markerComponent={CustomMarker}
      />
    </div>
  );
}
