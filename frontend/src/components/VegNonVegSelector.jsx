import { useMenu } from "../context/MenuContext";

export default function VegNonVegSelector() {
  const { foodType, setFoodType, setMealType } = useMenu();

  const handleSelect = (type) => {
    setFoodType(type);
    setMealType(""); // reset meal type if food changes
  };

  return (
    <div className="selector-container">
      <h2 className="selector-title">Select Food Type</h2>

      <div className="card-group">
        {/* VEG */}
        <div
          className={`premium-card selectable ${
            foodType === "veg" ? "selected" : ""
          }`}
          onClick={() => handleSelect("veg")}
        >
          <h3>Vegetarian</h3>
          <p className="hint">Includes sweets and desserts..</p>
        </div>

        {/* NON-VEG */}
        <div
          className={`premium-card selectable ${
            foodType === "nonveg" ? "selected" : ""
          }`}
          onClick={() => handleSelect("nonveg")}
        >
          <h3>Non-Vegetarian</h3>
          <p className="hint">Includes Meat & Seafood</p>
        </div>
      </div>
    </div>
  );
}
