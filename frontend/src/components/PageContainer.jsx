import { motion } from "framer-motion";
import BrandedNavbar from "./BrandedNavbar";

export default function PageContainer({ children }) {
  return (
    <>
      <BrandedNavbar />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={containerStyle}
      >
        {children}
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
