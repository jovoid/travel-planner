import { useState } from "react";

export default function Trips() {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadTrips = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("http://localhost:5000/trips");
      const data = await response.json();
      setTrips(data);
    } catch {
      setError("Failed to load trips 😢 Make sure backend is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{padding:"30px"}}>
      <h1>Available Trips</h1>

      <button onClick={loadTrips} style={{
        padding:"10px 20px",
        background:"green",
        color:"white",
        borderRadius:"6px",
        border:"none"
      }}>
        Load Trips
      </button>

      {loading && <p>Loading trips... ⏳</p>}
      {error && <p style={{color:"red"}}>{error}</p>}

      <div style={{marginTop:"20px"}}>
        {trips.map((trip, i) => (
          <div key={i} style={{
            border:"1px solid gray",
            padding:"15px",
            borderRadius:"10px",
            marginBottom:"15px"
          }}>
            <h2>{trip.trip_name}</h2>
            <p>{trip.city}, {trip.country}</p>
            <p><b>Traveller:</b> {trip.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
