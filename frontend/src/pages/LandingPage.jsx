import { useState } from "react";
import BrandIntro from "../components/BrandIntro";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro ? (
        <BrandIntro onFinish={() => setShowIntro(false)} />
      ) : (
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "#FFF8EE",
          }}
        >
          <h1>SRI SIDDI VINAYAKA CATERERS</h1>
          <p>Traditional taste. Modern planning.</p>

          <button
            style={{ marginTop: "2rem" }}
            onClick={() => navigate("/menu")}
          >
            Create Menu
          </button>
        </div>
      )}
    </>
  );
}
