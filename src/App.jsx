import React, { useState } from "react";

function App() {
  const [page, setPage] = useState("home");

  const destinations = [
    "🌕 Moon Base Alpha",
    "🔴 Mars Colony",
    "🪐 Saturn Ring Resort",
    "🌍 Earth Orbit Hotel",
    "🟡 Venus Sky City",
    "🔵 Neptune Paradise",
    "🟤 Mercury Camp",
    "❄️ Europa Station",
    "☄️ Pluto Adventure",
    "🌌 Jupiter Space Hub",
  ];

  const gallery = [
    "🌕 Moon Surface",
    "🔴 Mars Landscape",
    "🪐 Saturn Rings",
    "🌍 Earth from Space",
    "☄️ Meteor Shower",
    "🌌 Milky Way Galaxy",
    "⭐ Star Cluster",
    "🚀 Rocket Launch",
    "🛰️ Space Station",
    "🌠 Cosmic Nebula",
  ];

  const packages = [
    "🚀 Starter Space Trip",
    "🌕 Moon Explorer",
    "🔴 Mars Adventure",
    "🪐 Saturn Luxury Tour",
    "🌍 Earth Orbit Cruise",
    "⭐ Galaxy Discovery",
    "☄️ Pluto Expedition",
    "🛰️ Space Station Stay",
    "🌠 Nebula Journey",
    "🌌 Ultimate Universe Tour",
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "linear-gradient(rgba(16, 16, 20, 0.8),rgba(5,5,30,0.9)),url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        color: "white",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      {/* Navbar */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          padding: "20px",
          background: "rgba(19, 11, 11, 0.5)",
          backdropFilter: "blur(10px)",
          flexWrap: "wrap",
        }}
      >
        {["home", "destinations", "gallery", "packages", "contact"].map(
          (item) => (
            <button
              key={item}
              onClick={() => setPage(item)}
              style={{
                padding: "12px 25px",
                border: "none",
                borderRadius: "25px",
                cursor: "pointer",
                color: "white",
                fontWeight: "bold",
                background:
                  page === item
                    ? "linear-gradient(135deg,#00F5FF,#8A2BE2)"
                    : "rgba(239, 9, 9, 0.93)",
              }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          )
        )}
      </div>

      {/* Home */}
      {page === "home" && (
        <div
          style={{
            textAlign: "center",
            padding: "100px 20px",
          }}
        >
          <h1
            style={{
              fontSize: "30px",
              background:
                "linear-gradient(90deg,#00F5FF,#FF00FF,#FFD700)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            <em>🚀 Space Tourism Portal 🌌</em>
          </h1>

          <p
            style={{
              maxWidth: "900px",
              margin: "20px auto",
              fontSize: "22px",
              lineHeight: "1.8",
            }}
          >
            Explore the universe with luxury space travel experiences.
            Visit distant planets, orbital hotels, and breathtaking
            cosmic destinations.
          </p>

          <button
            style={{
              padding: "15px 35px",
              border: "none",
              borderRadius: "30px",
              color: "white",
              cursor: "pointer",
              fontSize: "18px",
              background:
                "linear-gradient(135deg,#00F5FF,#8A2BE2)",
            }}
          >
            Start Journey 🚀
          </button>
        </div>
      )}

      {/* Destinations */}
      {page === "destinations" && (
        <div style={{ padding: "30px" }}>
          <h1 style={{ textAlign: "center" }}>
            🌍 Popular Destinations
          </h1>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(250px,1fr))",
              gap: "20px",
            }}
          >
            {destinations.map((item, index) => (
              <div
                key={index}
                style={{
                  padding: "20px",
                  borderRadius: "20px",
                  background:
                    "linear-gradient(135deg,#6a11cb,#2575fc)",
                  boxShadow:
                    "0 0 20px rgba(37,117,252,0.5)",
                }}
              >
                <h3>{item}</h3>
                <p>
                  Discover amazing space adventures and luxury
                  experiences.
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Gallery */}
      {page === "gallery" && (
        <div style={{ padding: "30px" }}>
          <h1 style={{ textAlign: "center" }}>
            📸 Space Gallery
          </h1>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(250px,1fr))",
              gap: "20px",
            }}
          >
            {gallery.map((item, index) => (
              <div
                key={index}
                style={{
                  padding: "25px",
                  borderRadius: "20px",
                  textAlign: "center",
                  background:
                    "linear-gradient(135deg,#11998e,#38ef7d)",
                }}
              >
                <h2>{item}</h2>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Packages */}
      {page === "packages" && (
        <div style={{ padding: "30px" }}>
          <h1 style={{ textAlign: "center" }}>
            🎫 Travel Packages
          </h1>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(250px,1fr))",
              gap: "20px",
            }}
          >
            {packages.map((item, index) => (
              <div
                key={index}
                style={{
                  padding: "20px",
                  borderRadius: "20px",
                  textAlign: "center",
                  background:
                    "linear-gradient(135deg,#ff512f,#dd2476)",
                }}
              >
                <h3>{item}</h3>
                <h2>$99,999</h2>

                <button
                  style={{
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "20px",
                    background: "white",
                    color: "#0b0a0a",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Contact */}
      {page === "contact" && (
        <div
          style={{
            maxWidth: "600px",
            margin: "50px auto",
            padding: "30px",
            background: "rgba(247, 226, 226, 0.24)",
            borderRadius: "20px",
            backdropFilter: "blur(10px)",
          }}
        >
          <h1 style={{ textAlign: "center" }}>
            📞 Contact Us
          </h1>

          <input
            type="text"
            placeholder="Your Name"
            style={inputStyle}
          />

          <input
            type="email"
            placeholder="Your Email"
            style={inputStyle}
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            style={inputStyle}
          ></textarea>

          <button
            style={{
              width: "100%",
              padding: "15px",
              border: "none",
              borderRadius: "10px",
              color: "white",
              cursor: "pointer",
              background:
                "linear-gradient(135deg,#00F5FF,#8A2BE2)",
            }}
          >
            Send Message 🚀
          </button>
        </div>
      )}
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "15px",
  margin: "10px 0",
  borderRadius: "10px",
  border: "none",
  outline: "none",
};

export default App;