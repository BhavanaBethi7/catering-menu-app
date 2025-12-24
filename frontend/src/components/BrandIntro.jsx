import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";



const BRAND = "SRI SIDDHI VINAYAKA CATERERS";

export default function BrandIntro() {
  const [stage, setStage] = useState(0);
  const [showFoodType, setShowFoodType] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: "radial-gradient(circle at left, #FFF3E8, #F5EFE6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ================= PAN + TEXT ================= */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: stage >= 1 ? 0.6 : 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        style={{ position: "absolute" }}
      >
        <svg width="420" height="420" viewBox="0 0 420 420">
          <defs>
  <path
    id="circlePath"
    d="
      M 210 210
      m -120 0
      a 120 120 0 1 1 240 0
      a 120 120 0 1 1 -240 0
    "
    fill="none"
  />

  {/* PERFECT CIRCULAR CLIP FOR LOGO */}
  <clipPath id="logoClip" clipPathUnits="userSpaceOnUse">
    <circle cx="210" cy="210" r="55" />
  </clipPath>
</defs>

          <motion.g
            initial={{ rotate: 0 }}
            animate={{ rotate: -90 }}
            transition={{ duration: 2.6, ease: "easeInOut" }}
            style={{ transformOrigin: "50% 50%" }}
            onAnimationComplete={() =>
              setTimeout(() => setStage(1), 300)
            }
          >
            {/* Circular Text */}
            <motion.text
              fill="#7B1E3C"
              fontSize="15"
              fontFamily="'Playfair Display', serif"
              letterSpacing="4"
              opacity={stage === 0 ? 1 : 0}
            >
              <textPath
                href="#circlePath"
                startOffset="25%"
                textAnchor="middle"
              >
                {BRAND.split("").map((char, i) => (
                  <motion.tspan
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: 0.7 + i * 0.05,
                      duration: 0.25,
                    }}
                  >
                    {char}
                  </motion.tspan>
                ))}
              </textPath>
            </motion.text>

            {/* Pan */}
            <g transform="translate(210 210)">
                <motion.image
  href={logo}
  x={-55}
  y={-55}
  width={110}
  height={110}
  clipPath="url(#logoClip)"
  animate={{ opacity: stage >= 2 ? 0.65 : 0 }}
  transition={{ duration: 1.2, ease: "easeInOut" }}
  preserveAspectRatio="xMidYMid slice"
/>
              <motion.circle
                r="110"
                fill="#2B2B2B"
                stroke="#E09F1F"
                strokeWidth="4"
                animate={{ opacity: stage < 2 ? 1 : 0 }}
                transition={{ duration: 1 }}
/>
              {/* Handle hides but pan stays */}
              <motion.rect
                x="-220"
                y="-12"
                width="90"
                height="24"
                rx="12"
                fill="#2B2B2B"
                animate={{ opacity: stage === 0 ? 1 : 0 }}
                transition={{ duration: 0.6 }}
              />
            </g>
          </motion.g>
        </svg>
      </motion.div>

      {/* ================= LOGO OVERLAY (FADE IN ON CTA) ================= */}
     <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: stage >= 2 ? 1 : 0 }}
  transition={{ duration: 1.2, ease: "easeInOut" }}
  style={{
    position: "absolute",
    width: "220px",   // exact pan diameter
    height: "220px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none",
  }}
>
  {/* Inner circular frame */}
  <div
    style={{
      width: "80px",
      height: "80px",
      borderRadius: "50%",
      background: "#FFF8EE",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "inset 0 0 0 2px #E09F1F",
    }}
  >
    <img
      src={logo}
      alt="Brand Logo"
      style={{
        width: "150px",
        height: "150px",
        objectFit: "contain",
      }}
    />
  </div>
</motion.div>

      {/* ================= CENTER TEXT ================= */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: stage >= 1 ? 1 : 0,
          y: stage >= 1 ? 0 : 30,
        }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        onAnimationComplete={() =>
          stage === 1 && setTimeout(() => setStage(2), 800)
        }
        style={{
          position: "absolute",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "42px",
            letterSpacing: "4px",
            color: "#7B1E3C",
            marginBottom: "10px",
          }}
        >
          {BRAND}
        </h1>
        <p style={{ color: "#555" }}>
          Traditional taste. Modern planning.
        </p>
      </motion.div>

      {/* ================= CTA ================= */}
       <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: stage >= 2 ? 1 : 0,
          y: stage >= 2 ? 0 : 20,
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        onClick={() => navigate("/menu")}
        style={{
          position: "absolute",
          bottom: "120px",
          padding: "14px 40px",
          borderRadius: "30px",
          border: "none",
          background: "#7B1E3C",
          color: "#fff",
          fontSize: "16px",
          letterSpacing: "1px",
          cursor: "pointer",
          boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
        }}
      >
        Create Menu
      </motion.button>

      

    </div>
  );
}
