import { useMenu } from "../context/MenuContext";

const pages = [
  "breakfast",
  "starters",
  "main",
  "cuisines",
  "desserts",
  "fruits",
];

export default function MenuNavigation() {
  const { menuPage, setMenuPage } = useMenu();
  const index = pages.indexOf(menuPage);

  if (index === -1) return null;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "2.5rem",
        gap: "1rem",
      }}
    >
      <button
        disabled={index === 0}
        onClick={() => setMenuPage(pages[index - 1])}
        style={{ opacity: index === 0 ? 0.4 : 1 }}
      >
        ← Previous
      </button>

      <button
        disabled={index === pages.length - 1}
        onClick={() => setMenuPage(pages[index + 1])}
        style={{ opacity: index === pages.length - 1 ? 0.4 : 1 }}
      >
        Next →
      </button>
    </div>
  );
}
