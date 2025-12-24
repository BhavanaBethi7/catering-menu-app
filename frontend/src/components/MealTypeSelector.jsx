import { useMenu } from "../context/MenuContext";

const MEALS = [
  { key: "breakfast", label: "Breakfast", emoji: "🍳" },
  { key: "lunch", label: "Lunch & Dinner", emoji: "🍛" },
  
];

export default function MealTypeSelector() {
  const { foodType, mealType, setMealType } = useMenu();

  if (!foodType) return null;

  return (
    <div style={container} className="meal-type-section">
      <h2 style={title}>Select Meal Type</h2>

      <div style={wrapper}>
        {MEALS.map((meal) => (
          <div
            key={meal.key}
            style={{
              ...card,
              ...(mealType === meal.key ? active : {}),
            }}
            onClick={() => setMealType(meal.key)}
          >
            <span style={emoji}>{meal.emoji}</span>
            <span>{meal.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const container = {
  marginTop: "40px",
  marginBottom: "60px", // ✅ CLEAR GAP BELOW MEAL TYPE
  textAlign: "center",
};

const title = {
  fontSize: "26px",
  color: "#7b1e3a",
  marginBottom: "24px",
};

const wrapper = {
  display: "flex",
  justifyContent: "center",
  gap: "24px",
  flexWrap: "wrap",
};

const card = {
  width: "160px",
  height: "110px",
  borderRadius: "16px",
  border: "2px solid #ddd",
  background: "#fff",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "18px",
  transition: "all 0.25s ease",
};

const active = {
  borderColor: "#7b1e3a",
  background: "#fdf1f4",
  fontWeight: 600,
  transform: "scale(1.05)",
  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
};

const emoji = {
  fontSize: "30px",
  marginBottom: "6px",
};
