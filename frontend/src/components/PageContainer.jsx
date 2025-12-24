import { motion } from "framer-motion";
import BrandedNavbar from "./BrandedNavbar";

export default function PageContainer({ children }) {
  return (
    <>
      <BrandedNavbar />

      <motion.div
  initial={{ opacity: 0}}
  animate={{ opacity: 1}}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
  style={{
    width: "100%",
    maxHeight: "100vh",
    margin: "0 auto",
    padding: "16px",
    overflowY: "auto",
    WebkitOverflowScrolling: "touch",
    minHeight: "100vh",   // ✅ allow page growth
  }}
>
  <div
  style ={{
    maxWidth: "1200px",
    margin: "0 auto",
  }}
  >
  {children}
  </div>
</motion.div>

    </>
  );
}

/* ================================
   RESPONSIVE CONTAINER
================================ */
const containerStyle = {
  width: "100%",
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "24px",
};
