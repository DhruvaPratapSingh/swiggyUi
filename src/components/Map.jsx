import React, { useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix for default marker icons in Leaflet
const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

const LeafletMapSearch = () => {
  const [markerPosition, setMarkerPosition] = useState([51.505, -0.09]);
  const inputRef = useRef(null);

  const handleSearch = () => {
    const inputValue = inputRef.current.value;
    if (!inputValue.trim()) return;

    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: inputValue }, (results, status) => {
      if (status === "OK" && results[0]) {
        const location = results[0].geometry.location;
        setMarkerPosition([location.lat(), location.lng()]);
      } else {
        alert("Place not found!");
      }
    });
  };

  // Load Google Maps script dynamically for geocoding
  React.useEffect(() => {
    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="p-5 mt-14 flex flex-col items-center">
      <div className="flex flex-col md:flex-row items-center space-x-2 mb-4">
        <input
          ref={inputRef}
          className="outline-none p-2 rounded-md border-2 border-gray-500 w-80"
          type="text"
          placeholder="Enter your location"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded-md "
        >
          Search
        </button>
      </div>
      <MapContainer
        center={markerPosition}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "400px", width: "80%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={markerPosition}>
          <Popup>
            Location: {markerPosition[0]}, {markerPosition[1]}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LeafletMapSearch;
