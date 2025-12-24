import { useMenu } from "../context/MenuContext";

export default function MenuTypeBadge() {
  const { menuType } = useMenu();

  if (!menuType) return null;

  return (
    <div style={badge}>
      Selected Menu:&nbsp;
      <strong>{menuType}</strong>
    </div>
  );
}
const badge = {
  position: "sticky",
  top: "10px",
  zIndex: 10,
  margin: "10px auto 20px",
  width: "fit-content",
  padding: "8px 18px",
  borderRadius: "20px",
  background: "#7b1e3a",
  color: "#fff",
  fontSize: "14px",
  boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
};
