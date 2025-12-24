import { useMenu } from "../context/MenuContext";
import menuRules from "../data/menuRules";

export default function MenuTypeSelector() {
  const { menuType, setMenuType } = useMenu();

  return (
    <div style={container}>
      <h1 style={title}>Choose Menu Category</h1>
      <p style={subtitle}>
        Please review the conditions before selecting a menu
      </p>

      <div style={cards}>
        {["Standard", "Special", "Deluxe"].map((type) => (
          <div
            key={type}
            style={{
              ...card,
              ...(menuType === type ? active : {}),
            }}
            onClick={() => setMenuType(type)}
          >
            <h3>{type}</h3>

            <ul style={list}>
              {Object.entries(menuRules[type])
                
                .map(([category, limit]) => (
                  <li key={category}>
                    {category} : {limit}
                  </li>
                ))}
            </ul>

            <p style={note}>More items available as per menu</p>
          </div>
        ))}
      </div>
    </div>
  );
}
const container = {
  textAlign: "center",
  marginTop: "40px",
  padding: "0 20px",
};

const title = {
  fontSize: "32px",
  color: "#7b1e3a",
};

const subtitle = {
  marginBottom: "30px",
  color: "#555",
};

const cards = {
  display: "flex",
  justifyContent: "center",
  gap: "24px",
  flexWrap: "wrap",
  
};

const card = {
  width: "280px",
  padding: "22px",
  borderRadius: "18px",
  border: "2px solid #ddd",
  background: "#fff",
  cursor: "pointer",
  textAlign: "left",
};

const active = {
  borderColor: "#7b1e3a",
  background: "#fdf1f4",
};

const list = {
  paddingLeft: "18px",
  fontSize: "14px",
};

const note = {
  fontSize: "12px",
  color: "#777",
  marginTop: "10px",
};
