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
      style={{
        maxWidth: "1400px",
        margin: "auto",
        padding: "3rem",
      }}
    >
      {children}
    </motion.div>
    </>
  )
};

const container = {
  maxWidth: "1100px",
  margin: "0 auto",
  background: "#ffffff",
  borderRadius: "16px",
  padding: "30px 40px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
};
