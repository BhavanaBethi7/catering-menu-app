import { useMenu } from "../context/MenuContext";
import { useNavigate } from "react-router-dom";
import PageContainer from "../components/PageContainer";

export default function ReviewMenu() {
  const { selectedItems, menuType, foodType, mealType } = useMenu();
  const navigate = useNavigate();

  if (!selectedItems || Object.keys(selectedItems).length === 0) {
    return (
      <PageContainer>
        <h2>No items selected</h2>
        <button onClick={() => navigate("/menu")}>
          Go back to menu
        </button>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <h1>Review Your Menu</h1>

      <p>
        <strong>Menu Type:</strong> {menuType} <br />
        <strong>Food Type:</strong> {foodType} <br />
        <strong>Meal Type:</strong> {mealType}
      </p>

      {Object.entries(selectedItems).map(([category, items]) => (
        <div key={category} style={{ marginBottom: "2rem" }}>
          <h3>{category}</h3>
          <ul>
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}

      <button onClick={() => navigate("/menu")}>
        Edit Menu
      </button>
    </PageContainer>
  );
}
