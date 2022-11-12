import React, { useEffect, useState } from "react";
import { MapComponent } from "../../components/map/Map";
import { useDebounce } from "../../hooks/useDebounce";
import {
  getBusStops,
  getDirections,
  getDistance,
} from "../../services/mapsService";
import "./CrowdedParts.css";
import PolylineUtil from "polyline-encoded";
import EventSystem from "../../modules/EventSystem";

export const CrowdedParts = () => {
  const [inputs, setInputs] = useDebounce(
    { origin: null, destination: null },
    1000
  );
  const [paths, setPaths] = useState([]);
  const [busStops, setBusStops] = useState([]);
  const [busStopDetails, setBusStopDetails] = useState([]);

  useEffect(() => {
    getBusStations();
  }, [inputs]);

  const onMapCenterChange = () => {
    // Commented for API key usage issues
    // getBusStations();
  };

  useEffect(() => {
    EventSystem.getInstance().addListener(
      "map_center_change",
      onMapCenterChange
    );
    return () => {
      EventSystem.getInstance().removeListener(
        "map_center_change",
        onMapCenterChange
      );
    };
  }, []);

  const getBusStations = async () => {
    if (inputs.origin == null || inputs.destination == null) return;
    if (inputs.origin.length <= 2 || inputs.destination.length <= 2) return;
    const distanceRes = await getDistance(inputs.origin, inputs.destination);
    if (distanceRes?.data?.rows != null && distanceRes?.data?.rows.length > 0) {
      const distanceText = distanceRes.data.rows[0].elements[0].distance.text;
      const distance = distanceRes.data.rows[0].elements[0].distance.value;
      // Increased distances cause the places api to get called multiple times to get bus stops
      if (distance > 6000) {
        alert(
          `System only supports distances below 6km due to API key pricing restrictions. The distance you are trying is ${distanceText}`
        );
        return;
      }
    } else {
      return;
    }
    setPaths([]);
    const res = await getDirections(inputs.origin, inputs.destination);
    if (
      res.data?.routes != null &&
      res.data?.routes.length > 0 &&
      res.data?.routes[0]?.legs != null &&
      res.data?.routes[0]?.legs.length > 0
    ) {
      const line = PolylineUtil.decode(
        res.data?.routes[0]?.overview_polyline?.points
      ).map((line) => ({ lat: line[0], lng: line[1] }));
      setPaths([line]);
      // This method calls the places API multiple times along the polyline to get bus stops
      // Commented to decrease the cost on the API
      // const stops = await getBusStops(line);
      // setBusStops(stops)
      // getBustStopsDetails(stops)
      // DUMMY STOPS since the above line is commented
      const DUMMY_STOPS = [
        {
          id: "1",
          position: "Malabe",
          lat: 6.43,
          lng: 79.529,
        },
        {
          id: "2",
          position: "Koswatta",
          lat: 6.44,
          lng: 79.529,
        },
      ];
      getBustStopsDetails(DUMMY_STOPS);
    }
  };

  // TODO Implement this
  // Get data from firebase firestore
  const getBusStopInOut = (stop) => {
    return {
      in: Math.floor(Math.random() * 10),
      out: Math.floor(Math.random() * 10),
    };
  };

  const getBustStopsDetails = (stops) => {
    const stopDetails = [];
    stops.map((stop) => {
      const inOut = getBusStopInOut(stop);
      stopDetails.push({ ...stop, ...inOut });
    });
    setBusStopDetails(stopDetails);
  };

  return (
    <div className="crowded-parts">
      <div className="crowded-parts-section">
        <div className="input-area">
          <div className="input">
            <label>Origin</label>
            <input
              type="text"
              onChange={(e) => setInputs({ ...inputs, origin: e.target.value })}
            />
          </div>
          <div className="input">
            <label>Destination</label>
            <input
              type="text"
              onChange={(e) =>
                setInputs({ ...inputs, destination: e.target.value })
              }
            />
          </div>
        </div>
        <MapComponent polylines={paths} markers={busStops} />
      </div>
      <div className="crowded-parts-section">
        <div className="table">
          <div className="table-row">
            <div className="header">Bus stop</div>
            <div className="header">In</div>
            <div className="header">Out</div>
          </div>
          {busStopDetails.map((detail, index) => (
            <div className="table-row" key={index}>
              <div className="cell">{detail.position}</div>
              <div className="cell">{detail.in}</div>
              <div className="cell">{detail.out}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
