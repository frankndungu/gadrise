"use client";

import { useEffect, useRef } from "react";
import styles from "./Location.module.css";

export default function MapEmbed() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<unknown>(null);

  useEffect(() => {
    if (!mapRef.current) return;
    let cancelled = false;

    const loadMap = async () => {
      const L = (await import("leaflet")).default;

      // Bail if the effect was cleaned up while the import was resolving
      if (cancelled || !mapRef.current) return;

      // Also bail if Leaflet already initialised this container
      if (
        (mapRef.current as HTMLElement & { _leaflet_id?: number })._leaflet_id
      )
        return;

      if (!document.querySelector('link[href*="leaflet.css"]')) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        document.head.appendChild(link);
      }

      const icon = L.icon({
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });

      const coords: [number, number] = [0.5143, 35.2698];
      const map = L.map(mapRef.current, {
        center: coords,
        zoom: 13,
        scrollWheelZoom: false,
      });
      mapInstance.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map);

      L.marker(coords, { icon })
        .addTo(map)
        .bindPopup(
          '<div style="text-align:center;padding:8px"><strong>Malel Heights</strong><br/><small>Elgon View, Eldoret</small></div>',
        )
        .openPopup();
    };

    loadMap();

    return () => {
      cancelled = true;
      if (mapInstance.current) {
        (mapInstance.current as { remove: () => void }).remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return <div ref={mapRef} className={styles.map} />;
}
