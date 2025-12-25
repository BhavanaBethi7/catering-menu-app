import { motion } from "framer-motion";
import BrandedNavbar from "./BrandedNavbar";

export default function PageContainer({ children }) {
  return (
    <>
      <BrandedNavbar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          width: "100%",
          minHeight: "100vh",
          padding: "16px",
          paddingTop: "80px", // space for navbar
          overflowX: "hidden",
        }}
      >
        {children}
      </motion.div>
    </>
  );
}