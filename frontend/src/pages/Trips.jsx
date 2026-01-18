import { useState } from "react";

export default function Trips() {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadTrips = () => {
    setLoading(true);

    // STATIC DATA (NO BACKEND)
    setTimeout(() => {
      setTrips([
        {
          trip_name: "Bangalore ➜ Goa",
          city: "Goa",
          country: "India",
          details: [
            "Visit Baga & Calangute Beach",
            "Try Goan seafood",
            "Explore Fort Aguada"
          ]
        },
        {
          trip_name: "Bangalore ➜ Manali",
          city: "Manali",
          country: "India",
          details: [
            "Snow activities",
            "Mountain sightseeing",
            "Try Himachali food"
          ]
        },
        {
          trip_name: "Delhi ➜ Jaipur",
          city: "Jaipur",
          country: "India",
          details: [
            "Visit Amer Fort",
            "Explore local markets",
            "Try Rajasthani cuisine"
          ]
        }
      ]);
      setLoading(false);
    }, 800); // fake loading for UX
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Available Trips</h1>

      <button
        onClick={loadTrips}
        style={{
          padding: "10px 20px",
          background: "green",
          color: "white",
          borderRadius: "6px",
          border: "none"
        }}
      >
        Load Trips
      </button>

      {loading && <p>Loading trips... ⏳</p>}

      <div style={{ marginTop: "20px" }}>
        {trips.map((trip, i) => (
          <div
            key={i}
            style={{
              border: "1px solid gray",
              padding: "15px",
              borderRadius: "10px",
              marginBottom: "15px"
            }}
          >
            <h2>{trip.trip_name}</h2>
            <p>{trip.city}, {trip.country}</p>

            <p><b>On this journey you can:</b></p>
            <ul>
              {trip.details.map((d, idx) => (
                <li key={idx}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
