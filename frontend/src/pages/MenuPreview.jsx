import { useMenu } from "../context/MenuContext";
import PageContainer from "../components/PageContainer";

export default function MenuPreview() {
  const { selectedItems, mealType, foodType } = useMenu();
  const hasItems = Object.keys(selectedItems).length > 0;

  return (
    <PageContainer>
      <div style={outerWrapper}>
        {/* ===== PRINTABLE AREA ===== */}
        <div className="print-area" style={card}>
          {/* Catering Name */}
          <h1 style={title}>SRI SIDDHI VINAYAKA CATERERS</h1>

          {/* Customer Details */}
          <div style={detailsRow}>
            {/* LEFT */}
            <div>
              <p><strong>Customer Name:</strong> ____________________</p>
              <p><strong>Venue:</strong> ____________________</p>
            </div>

            {/* RIGHT */}
            <div style={{ textAlign: "right" }}>
              <p><strong>Date:</strong> ____________________</p>
              <p><strong>Members:</strong> ____________________</p>
            </div>
          </div>

          <p style={{ marginBottom: "20px" }}>
            <strong>Menu Type:</strong>{" "}
            {mealType?.toUpperCase()} ({foodType?.toUpperCase()})
          </p>

          <hr />

          {/* Menu */}
          <div style={{ marginTop: "24px" }}>
            {!hasItems && <p>No items selected.</p>}

            {Object.entries(selectedItems).map(([category, items]) => (
              <div key={category} style={{ marginBottom: "20px" }}>
                <h3 style={{ textTransform: "uppercase" }}>{category}</h3>
                <ul>
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ===== ACTION BUTTONS (NOT PRINTED) ===== */}
        <div className="no-print" style={btnRow}>
          <button onClick={() => window.print()} style={primaryBtn}>
            Download Menu (PDF)
          </button>

          <button onClick={() => window.print()} style={secondaryBtn}>
            Print Menu
          </button>
        </div>
      </div>
    </PageContainer>
  );
}

/* ================= STYLES ================= */

const outerWrapper = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const card = {
  width: "100%",
  maxWidth: "800px",
  padding: "32px",
  background: "#fff",
  borderRadius: "16px",
  boxShadow: "0 15px 40px rgba(0,0,0,0.12)",
};

const title = {
  textAlign: "center",
  marginBottom: "24px",
  letterSpacing: "2px",
};

const detailsRow = {
  display: "flex",
  justifyContent: "space-between",
  gap: "40px",
  marginBottom: "24px",
  flexWrap: "wrap",
};

const btnRow = {
  marginTop: "40px",
  display: "flex",
  gap: "20px",
  flexWrap: "wrap",
  justifyContent: "center",
};

const primaryBtn = {
  padding: "14px 36px",
  borderRadius: "30px",
  border: "none",
  background: "#7B1E3C",
  color: "#fff",
  fontSize: "15px",
  fontWeight: "600",
  letterSpacing: "1px",
  cursor: "pointer",
  boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
};

const secondaryBtn = {
  padding: "14px 36px",
  borderRadius: "30px",
  border: "2px solid #7B1E3C",
  background: "#fff",
  color: "#7B1E3C",
  fontSize: "15px",
  fontWeight: "600",
  letterSpacing: "1px",
  cursor: "pointer",
};
