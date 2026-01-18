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
          image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
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
          image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
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
          image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3",
          details: [
            "Visit Amer Fort",
            "Explore local markets",
            "Try Rajasthani cuisine"
          ]
        }
      ]);
      setLoading(false);
    }, 800);
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
              marginBottom: "20px"
            }}
          >
            {/* IMAGE */}
            <img
              src={trip.image}
              alt={trip.trip_name}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "10px"
              }}
            />

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
