import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMenu } from "../context/MenuContext";

import MenuTypeBadge from "../components/MenuTypeBadge";
import UpgradeMessage from "../components/UpgradeMessage";
import PageContainer from "../components/PageContainer";
import MenuTypeSelector from "../components/MenuTypeSelector";
import VegNonVegSelector from "../components/VegNonVegSelector";
import MealTypeSelector from "../components/MealTypeSelector";
import CategoryBlock from "../components/CategoryBlock";
import ViewMenuButton from "../components/ViewMenuButton";
import MenuNavigation from "../components/MenuNavigation";

export default function MenuSelection() {
  const navigate = useNavigate();
  const { menuType, foodType, mealType, menuPage } = useMenu();

  const [menu, setMenu] = useState(null);
  const [loading, setLoading] = useState(false);

  /* ---------------- FETCH MENU ---------------- */
  useEffect(() => {
    if (!foodType || !mealType) {
      setMenu(null);
      return;
    }

    const fetchMenu = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:5000/api/menu?mealType=${mealType}&foodType=${foodType}`
        );
        const data = await response.json();
        setMenu(data);
      } catch (error) {
        console.error("Error fetching menu:", error);
        setMenu(null);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, [foodType, mealType]);

  /* ---------------- PAGE DATA ---------------- */
  const pageData = menu?.[menuPage] || {};

  return (
    <>
      <PageContainer>
        {/* Sticky indicators */}
        <MenuTypeBadge />
        <UpgradeMessage />

        {/* STEP 1 */}
        {!menuType && <MenuTypeSelector />}

        {/* STEP 2 */}
        {menuType && <VegNonVegSelector />}
        <div className="festive-divider" />

        {/* STEP 3 */}
        {menuType && foodType && <MealTypeSelector />}

        {/* STEP 4 */}
        {loading && (
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            Loading menu...
          </p>
        )}

        {/* MENU CONTENT */}
        {Object.entries(pageData).map(([category, items]) => (
          <CategoryBlock
            key={category}
            title={category}
            data={items}
            parentKey={category}
          />
        ))}

        {/* PAGE NAVIGATION */}
        {menu && <MenuNavigation />}
        <div className="festive-divider" />

        {/* STEP 5 */}
        {menu && (
          <ViewMenuButton onClick={() => navigate("/review")} />
        )}
      </PageContainer>
    </>
  );
}
