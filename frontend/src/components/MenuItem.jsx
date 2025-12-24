import { useMenu } from "../context/MenuContext";
import { motion } from "framer-motion";

export default function MenuItem({ categoryKey, item }) {
  const { selectedItems, toggleItem } = useMenu();

  const isChecked =
    selectedItems[categoryKey]?.includes(item) || false;

  return (
    <motion.label
      whileHover={{ x: 6 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "6px 10px",
        borderRadius: "8px",
        cursor: "pointer",
        background: isChecked ? "rgba(123, 30, 60, 0.08)" : "transparent",
      }}
    >
      {/* Hidden native checkbox (still accessible) */}
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => toggleItem(categoryKey, item)}
        style={{ accentColor: "#7b1e3c", cursor: "pointer" }}
      />

      {/* Item text */}
      <span
        style={{
          fontSize: "0.95rem",
          color: isChecked ? "#1F6F5B" : "#3B2F2F",
fontWeight: isChecked ? 600 : 400,

          transition: "all 0.2s ease",
        }}
      >
        {item}
      </span>
    </motion.label>
  );
}
