import axios from "axios";

const DIRECTIONS_API_ENDPOINT =
  "https://maps.googleapis.com/maps/api/directions/json";
const DISTANCE_MATRIX_API_ENDPOINT =
  "https://maps.googleapis.com/maps/api/distancematrix/json";
const PLACES_API_ENDPOINT =
  "https://maps.googleapis.com/maps/api/place/nearbysearch/json";

export const getDirections = async (origin, destination) => {
  const url = new URL(DIRECTIONS_API_ENDPOINT);
  url.searchParams.append("origin", origin);
  url.searchParams.append("destination", destination);
  url.searchParams.append("transit_mode", "TRANSIT");
  url.searchParams.append("key", process.env.REACT_APP_MAPS_API_KEY);
  return await axios.get(url.toString());
};

export const getDistance = async (origin, destination) => {
  const url = new URL(DISTANCE_MATRIX_API_ENDPOINT);
  url.searchParams.append("origins", origin);
  url.searchParams.append("destinations", destination);
  url.searchParams.append("transit_mode", "TRANSIT");
  url.searchParams.append("key", process.env.REACT_APP_MAPS_API_KEY);
  return await axios.get(url.toString());
};

export const getBusStops = async (locations) => {
  const searchBusStop = async (location) => {
    const url = new URL(PLACES_API_ENDPOINT);
    url.searchParams.append("rankby", `distance`);
    url.searchParams.append("types", `bus_station`);
    url.searchParams.append("location", `${location.lat},${location.lng}`);
    url.searchParams.append("key", process.env.REACT_APP_MAPS_API_KEY);
    const res = await axios.get(url.toString());
    return res.data.locations[0].position;
  };

  const resolvedLocations = await Promise.all(
    locations.map((location) => searchBusStop(location))
  );
  return resolvedLocations;
};
