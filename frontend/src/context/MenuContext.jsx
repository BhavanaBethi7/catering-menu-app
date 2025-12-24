import { createContext, useContext, useState, useEffect } from "react";
import menuRules from "../data/menuRules";
import { MENU_ORDER } from "../data/menuOrder";

const MenuContext = createContext(null);

export function MenuProvider({ children }) {
  /* -----------------------------
     CORE USER SELECTIONS
  ------------------------------ */
  const [menuType, setMenuType] = useState("");
  const [foodType, setFoodType] = useState("");
  const [mealType, setMealType] = useState("");

  /* -----------------------------
     MENU PAGE NAVIGATION
  ------------------------------ */
  const [menuPage, setMenuPage] = useState(null);

  /* -----------------------------
     SELECTED ITEMS
  ------------------------------ */
  const [selectedItems, setSelectedItems] = useState({});

  /* -----------------------------
     UI HELPERS
  ------------------------------ */
  const [upgradeMessage, setUpgradeMessage] = useState("");
  const [focusCategory, setFocusCategory] = useState(null);

  /* -----------------------------
     AUTO PAGE SWITCH BASED ON MEAL
  ------------------------------ */
  useEffect(() => {
    if (!mealType) return;
    setMenuPage(mealType === "breakfast" ? "breakfast" : "starters");
  }, [mealType]);

  /* -----------------------------
     ITEM TOGGLE + AUTO UPGRADE
  ------------------------------ */
  const toggleItem = (category, item) => {
  setSelectedItems((prev) => {
    const current = prev[category] || [];
    const limit = menuRules?.[menuType]?.[category];

    /* ------------------
       REMOVE ITEM
    ------------------ */
    if (current.includes(item)) {
      const updatedCategory = current.filter((i) => i !== item);

      const updatedItems = {
        ...prev,
        [category]: updatedCategory,
      };

      // 🔽 DOWNGRADE CHECK
      const fitsMenu = (menu) =>
        Object.entries(menuRules[menu]).every(
          ([cat, max]) => (updatedItems[cat]?.length || 0) <= max
        );

      if (menuType === "Deluxe" && fitsMenu("Special")) {
        setMenuType("Special");
        setUpgradeMessage("Back to Special menu");
      } else if (
        menuType === "Special" &&
        fitsMenu("Standard")
      ) {
        setMenuType("Standard");
        setUpgradeMessage("Back to Standard menu");
      }

      return updatedItems;
    }

    /* ------------------
       ADD ITEM
    ------------------ */
    if (limit && current.length >= limit) {
      if (menuType === "Standard") {
        setMenuType("Special");
        setUpgradeMessage("Upgraded to Special menu");
      } else if (menuType === "Special") {
        setMenuType("Deluxe");
        setUpgradeMessage("Upgraded to Deluxe menu");
      }
    }

    return {
      ...prev,
      [category]: [...current, item],
    };
  });
};


  return (
    <MenuContext.Provider
      value={{
        menuType,
        setMenuType,
        foodType,
        setFoodType,
        mealType,
        setMealType,
        menuPage,
        setMenuPage,
        selectedItems,
        toggleItem,
        upgradeMessage,
        setUpgradeMessage,
        focusCategory,
        setFocusCategory,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used inside MenuProvider");
  }
  return context;
}
