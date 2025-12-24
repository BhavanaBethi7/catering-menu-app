import MenuItem from "./MenuItem";
import { motion } from "framer-motion";

export default function CategoryBlock({ title, data, parentKey, level = 0 }) {
  const isSubCategory = level > 0;

  return (
    <motion.div
  className="premium-card"
  whileHover={{ y: -6, boxShadow: "0 20px 45px rgba(0,0,0,0.12)" }}
  transition={{ type: "spring", stiffness: 250 }}
>
    
      {/* CATEGORY / SUBCATEGORY TITLE */}
      {title && (
        <h3
          style={{
            textTransform: "uppercase",
            letterSpacing: "1px",
            color: isSubCategory ? "#444" : "#7b1e3c",
            marginBottom: "1rem",
            borderBottom: isSubCategory
              ? "1px dashed #ddd"
              : "2px solid #eee",
            paddingBottom: "0.4rem",
            fontSize: isSubCategory ? "0.95rem" : "1.15rem",
            marginLeft: isSubCategory ? "1rem" : "0",
          }}
        >
          {title}
        </h3>
        
      )}
      

      {/* CASE 1: ARRAY → ITEMS (COLUMN-WISE FLOW) */}
      {Array.isArray(data) && (
        <div
          className="menu-items"
          style={{
            columnCount: 3,               // 👈 MAIN CHANGE
            columnGap: "3rem",
            paddingLeft: isSubCategory ? "1.5rem" : "0.5rem",
          }}
        >
          {data.map((item) => (
            <div
              key={item}
              style={{
                breakInside: "avoid",
                marginBottom: "0.6rem",
              }}
            >
              <MenuItem
                categoryKey={parentKey || title}
                item={item}
              />
            </div>
          ))}
        </div>
      )}

      {/* CASE 2: OBJECT → SUB-CATEGORIES */}
      {!Array.isArray(data) &&
        Object.entries(data).map(([subCategory, items]) => (
          <CategoryBlock
            key={subCategory}
            title={subCategory}
            data={items}
            parentKey={parentKey || title}
            level={level + 1}
          />
        ))}
    </motion.div>
  );
}
