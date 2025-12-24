import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMenu } from "../context/MenuContext";
import menuRules from "../data/menuRules";

export default function BrandedNavbar() {
  const navigate = useNavigate();
  const { menuType } = useMenu();
  const [open, setOpen] = useState(false);

  if (!menuType) return null;

  return (
    <div style={nav}>
      {/* LEFT: Back + Brand */}
      <div style={left}>
        <button style={backBtn} onClick={() => navigate(-1)}>
          ← Back
        </button>
        <span style={brand}>Sri Siddhi Vinayaka Caterers</span>
      </div>

     

      {/* RIGHT */}
      <div style={{ position: "relative" }}>
        <button style={btn} onClick={() => setOpen(!open)}>
          View Menu Rules 
        </button>

        {open && (
          <div style={dropdown}>
            {Object.entries(menuRules[menuType]).map(
              ([category, limit]) => (
                <div key={category} style={rule}>
                  <strong>{category}</strong> : {limit}
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}

const nav = {
  position: "sticky",
  top: 0,
  zIndex: 1000,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "14px 28px",
  background: "#fff",
  borderBottom: "2px solid #eee",
};

const brand = {
  fontSize: "18px",
  fontWeight: "600",
  color: "#7b1e3a",
};

const badge = {
  padding: "6px 14px",
  borderRadius: "20px",
  background: "#fdf1f4",
  border: "1px solid #7b1e3a",
  color: "#7b1e3a",
  fontSize: "14px",
};

const btn = {
  padding: "8px 14px",
  borderRadius: "18px",
  border: "none",
  background: "#7b1e3a",
  color: "#fff",
  cursor: "pointer",
};

const dropdown = {
  position: "absolute",
  right: 0,
  top: "44px",
  width: "260px",
  background: "#fff",
  borderRadius: "12px",
  boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
  padding: "14px",
};

const rule = {
  fontSize: "13px",
  padding: "6px 0",
  borderBottom: "1px dashed #ddd",
};
const left = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
};

const backBtn = {
  padding: "6px 12px",
  borderRadius: "12px",
  border: "1px solid #ccc",
  background: "#fff",
  cursor: "pointer",
  fontSize: "14px",
};
