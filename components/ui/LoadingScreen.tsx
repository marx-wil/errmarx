"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_LINES = [
  "INITIALIZING WILMARX.SYS...",
  "LOADING CORE_MODULES...",
  "CALIBRATING 3D_ENGINE...",
  "ESTABLISHING SECURE_CHANNEL...",
  "DEPLOYING INTERFACE...",
];

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Simulate progressive loading with incremental ticks
    const steps = [20, 40, 60, 78, 92, 100];
    let stepIndex = 0;

    const advance = () => {
      if (stepIndex >= steps.length) return;
      const target = steps[stepIndex];
      stepIndex++;

      setProgress(target);
      setLineIndex(Math.min(stepIndex - 1, BOOT_LINES.length - 1));

      if (target < 100) {
        setTimeout(advance, 280 + Math.random() * 200);
      } else {
        // Brief pause at 100% before hiding
        setTimeout(() => setVisible(false), 600);
      }
    };

    const timer = setTimeout(advance, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-surface-container-lowest overflow-hidden"
        >
          {/* Noise overlay */}
          <div className="absolute inset-0 noise-texture pointer-events-none" />

          {/* Ambient glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[200px] opacity-20"
              style={{
                background:
                  "radial-gradient(circle, #00d2ff 0%, #edb1ff 50%, transparent 70%)",
              }}
            />
          </div>

          <div className="relative z-10 w-full max-w-sm px-8 text-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-12"
            >
              <div className="text-2xl font-headline font-black tracking-widest text-primary drop-shadow-[0_0_10px_rgba(0,210,255,0.5)]">
                WILMARX.SYS
              </div>
              <div className="text-[10px] font-mono text-on-surface-variant/40 uppercase tracking-[0.3em] mt-1">
                BOOT_SEQUENCE_v4.0.2
              </div>
            </motion.div>

            {/* Boot log */}
            <div className="mb-8 text-left space-y-1">
              {BOOT_LINES.slice(0, lineIndex + 1).map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="font-mono text-[10px] flex items-center gap-2"
                >
                  <span
                    className="text-primary"
                    style={{
                      opacity: i === lineIndex ? 1 : 0.4,
                    }}
                  >
                    &gt;
                  </span>
                  <span
                    style={{
                      color: i === lineIndex ? "#a5e7ff" : "#a5e7ff40",
                    }}
                  >
                    {line}
                  </span>
                  {i === lineIndex && (
                    <span className="blinking-cursor" style={{ width: 6 }} />
                  )}
                  {i < lineIndex && (
                    <span className="text-green-400/60 text-[9px] ml-auto">
                      OK
                    </span>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Progress bar */}
            <div className="space-y-2">
              <div className="h-px bg-outline-variant/20 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary/50 to-primary"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  style={{ boxShadow: "0 0 8px #00d2ff" }}
                />
              </div>
              <div className="flex justify-between font-mono text-[9px] text-on-surface-variant/30">
                <span>LOADING</span>
                <span className="text-primary/60">{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
