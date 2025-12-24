import { useMenu } from "../context/MenuContext";
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function UpgradeMessage() {
  const { upgradeMessage, setUpgradeMessage } = useMenu();
  const timerRef = useRef(null);

  useEffect(() => {
    if (!upgradeMessage) return;

    // Clear previous timer if any
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setUpgradeMessage("");
      timerRef.current = null;
    }, 3000);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [upgradeMessage, setUpgradeMessage]);

  return (
    <AnimatePresence>
      {upgradeMessage && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          style={toast}
        >
          {upgradeMessage}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const toast = {
  position: "fixed",
  top: "20px",
  left: "50%",
  transform: "translateX(-50%)",
  padding: "10px 22px",
  borderRadius: "20px",
  background: "#2e7d32",
  color: "#fff",
  fontSize: "14px",
  fontWeight: 500,
  letterSpacing: "0.3px",
  boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
  zIndex: 9999,
};
