import { useNavigate } from "react-router-dom";

export default function ViewMenuButton() {
  const navigate = useNavigate();

  return (
    <div style={{ marginTop: "30px" }}>
      <button onClick={() => navigate("/view-menu")}
        style={{
    backgroundColor: "#7b1e3a",
    color: "#fff",
    padding: "12px 24px",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
  }}
>
        View Menu
      </button>
      
    </div>
  );
}
