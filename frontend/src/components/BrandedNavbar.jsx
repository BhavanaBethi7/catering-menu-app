import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMenu } from "../context/MenuContext";
import menuRules from "../data/menuRules";
import { color } from "framer-motion";

export default function BrandedNavbar() {
  const navigate = useNavigate();
  const { menuType } = useMenu();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  if (!menuType) return null;

  return (
    <div style={nav}>
      {/* LEFT */}
      <div style={left}>
        <button style={backBtn} onClick={() => navigate(-1)}>
          ← Back
        </button>
        <span style={brand}>Sri Siddhi Vinayaka Caterers</span>
      </div>

      {/* RIGHT */}
      <div style={{ position: "relative" }} ref={dropdownRef}>
        <button style={btn} onClick={() => setOpen((p) => !p)}>
          View Menu Rules
        </button>

        {open && (
          <div style={dropdown}>
            <div style={dropdownTitle}>
              {menuType.toUpperCase()} MENU RULES
            </div>

            <div style={ruleList}>
              {Object.entries(menuRules[menuType]).map(
                ([category, limit]) => (
                  <div key={category} style={rule}>
                    <span>{category}</span>
                    <strong>{limit}</strong>
                  </div>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const nav = {
  position: "sticky",
  top: 0,
  zIndex: 1000,
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "12px 20px",
  background: "#fff",
  borderBottom: "2px solid #eee",
};

const left = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
  color: "#333",
};

const brand = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#7b1e3a",
  whiteSpace: "nowrap",
};

const backBtn = {
  padding: "6px 12px",
  borderRadius: "12px",
  border: "1px solid #ccc",
  background: "#fff",
  cursor: "pointer",
  fontSize: "14px",
};

const btn = {
  padding: "8px 16px",
  borderRadius: "18px",
  border: "none",
  background: "#7b1e3a",
  color: "#fff",
  cursor: "pointer",
  fontSize: "14px",
};

const dropdown = {
  position: "absolute",
  right: 0,
  top: "46px",
  width: "280px",
  background: "#fff",
  borderRadius: "14px",
  boxShadow: "0 14px 40px rgba(0,0,0,0.25)",
  padding: "14px",
};

const dropdownTitle = {
  fontSize: "14px",
  fontWeight: "600",
  color: "#7b1e3a",
  marginBottom: "10px",
  textAlign: "center",
};

const ruleList = {
  maxHeight: "260px",
  overflowY: "auto",
  paddingRight: "6px",
};

const rule = {
  display: "flex",
  justifyContent: "space-between",
  fontSize: "13px",
  padding: "6px 0",
  borderBottom: "1px dashed #ddd",
};
