"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

type FormState = "idle" | "loading" | "success" | "error";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validateForm(data: {
  name: string;
  email: string;
  message: string;
}): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim() || data.name.trim().length < 2)
    errors.name = "NAME_IDENTIFIER must be ≥ 2 characters.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "UPLINK_SOURCE is not a valid address.";
  if (!data.message.trim() || data.message.trim().length < 10)
    errors.message = "ENCRYPTED_MESSAGE must be ≥ 10 characters.";
  return errors;
}

const requestTypes = [
  { value: "collaboration", label: "SYSTEM_COLLAB" },
  { value: "consulting", label: "ARCH_CONSULT" },
  { value: "fulltime", label: "FULL_TIME_ROLE" },
  { value: "other", label: "OTHER_QUERY" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const [formState, setFormState] = useState<FormState>("idle");
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [serverError, setServerError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "collaboration",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError("");

    // Client-side validation first
    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});
    setFormState("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "TRANSMISSION_FAILED");
      }

      setFormState("success");
      setFormData({ name: "", email: "", type: "collaboration", message: "" });
      setTimeout(() => setFormState("idle"), 5000);
    } catch (err) {
      setServerError(
        err instanceof Error ? err.message : "SYSTEM_ERROR: Unknown failure."
      );
      setFormState("error");
      setTimeout(() => setFormState("idle"), 4000);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-32 px-6 md:px-12 bg-background terminal-grid"
    >
      {/* Ambient */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-primary/8 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-secondary/8 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
      >
        {/* Left: Info panel */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-4 space-y-10 order-2 lg:order-1"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-12 bg-primary" />
              <span className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase">
                Stage 04 / Terminal
              </span>
            </div>
            <h2 className="text-4xl font-headline font-bold tracking-tighter text-on-surface">
              SYSTEM
              <br />
              <span className="text-primary drop-shadow-[0_0_10px_rgba(0,210,255,0.3)]">
                OUTREACH
              </span>
            </h2>
            <p className="text-on-surface-variant text-sm leading-relaxed mt-4 max-w-xs">
              Initiate a direct uplink. All transmissions are logged and
              responded to within 24 hours.
            </p>
          </div>

          {/* Stats widgets */}
          <div className="space-y-4">
            {/* Network graph */}
            <div className="glass-panel p-4 border-l-2 border-primary/40 relative overflow-hidden group">
              <div className="flex justify-between items-center mb-3">
                <span className="font-mono text-[9px] text-primary/60 tracking-widest uppercase">
                  Network_Traffic
                </span>
                <span className="text-[10px] text-primary/40">●</span>
              </div>
              <div className="h-14 flex items-end gap-1 px-1">
                {[40, 70, 55, 80, 35, 90, 60].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-primary/20 group-hover:bg-primary/30 transition-all duration-700"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div className="mt-2 font-mono text-[8px] text-on-surface-variant/30 flex justify-between">
                <span>0.0.0.0</span>
                <span>CONNECTED_SECURELY</span>
              </div>
            </div>

            {/* Status indicators */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-panel p-4 border-l-2 border-secondary/40">
                <span className="font-mono text-[9px] text-secondary/60 block mb-1 uppercase">
                  Core_Load
                </span>
                <div className="text-xl font-headline font-bold">3.2%</div>
                <div className="w-full bg-surface-container-highest h-0.5 mt-2 overflow-hidden">
                  <div className="bg-secondary h-full w-[3.2%] shadow-[0_0_8px_#edb1ff]" />
                </div>
              </div>
              <div className="glass-panel p-4 border-l-2 border-primary/40">
                <span className="font-mono text-[9px] text-primary/60 block mb-1 uppercase">
                  Uptime
                </span>
                <div className="text-xl font-headline font-bold">99.9</div>
                <div className="flex items-center gap-1 mt-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_#00d2ff]" />
                  <span className="font-mono text-[8px] text-on-surface-variant/50 uppercase">
                    System_Live
                  </span>
                </div>
              </div>
            </div>

            {/* Identity card */}
            <div className="p-4 border border-outline-variant/20 bg-surface-container-lowest/50">
              <div className="text-xs font-headline font-bold tracking-wider mb-1">
                WILMARX
              </div>
              <div className="text-[10px] font-mono text-primary/60 uppercase mb-3">
                Chief_Information_Officer
              </div>
              <div className="space-y-0.5 font-mono text-[9px] text-on-surface-variant/40">
                <p>&gt; COMPANY: STAPPL_INC</p>
                <p>&gt; GITHUB: marx-wil</p>
                <p>&gt; LATENCY: 14MS</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Terminal form */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-8 order-1 lg:order-2"
        >
          <div className="glass-panel-dark overflow-hidden shadow-2xl border border-white/8 ring-1 ring-primary/5">
            {/* Terminal chrome */}
            <div className="bg-surface-container-high px-4 py-3 flex items-center justify-between border-b border-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <span className="font-mono text-[10px] text-on-surface-variant/50 tracking-widest uppercase">
                wilmarx@sys:~/contact.sh — 80×24
              </span>
              <div className="w-12" />
            </div>

            {/* Terminal body */}
            <div className="p-8 bg-surface-container-lowest/90 font-mono text-sm min-h-[500px] relative">
              {/* Scanline */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
                <div className="w-full h-0.5 bg-primary/20 absolute animate-scan-line" />
              </div>

              <div className="space-y-6 text-on-surface relative z-10">
                {/* Boot messages */}
                <div className="space-y-1 text-[11px]">
                  <p className="text-primary/80">
                    # INITIALIZING COMMUNICATION PROTOCOL...
                  </p>
                  <p className="text-on-surface-variant/40">
                    # ENCRYPTION: AES-256-GCM / QUANTUM-LINK ACTIVE
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  {formState === "success" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="py-12 text-center space-y-4"
                    >
                      <div className="text-3xl font-headline font-bold text-primary text-glow">
                        TRANSMISSION_SENT
                      </div>
                      <p className="text-on-surface-variant/60 text-sm">
                        Signal received. Wilmarx will respond within 24 hours.
                      </p>
                      <div className="font-mono text-[10px] text-primary/50 animate-pulse">
                        &gt; CLOSING_CHANNEL...
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-7"
                    >
                      {/* Name */}
                      <div className="group">
                        <div className="flex items-center gap-4">
                          <label
                            className="whitespace-nowrap text-[12px]"
                            style={{
                              color: formErrors.name ? "#ffb4ab" : undefined,
                            }}
                          >
                            NAME_IDENTIFIER:
                          </label>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => {
                              setFormData((d) => ({ ...d, name: e.target.value }));
                              if (formErrors.name)
                                setFormErrors((err) => ({ ...err, name: undefined }));
                            }}
                            className="bg-transparent border-none outline-none p-0 text-secondary w-full placeholder:text-on-surface-variant/20 font-mono text-[12px]"
                            placeholder="[Enter_subject_name]"
                          />
                        </div>
                        <div
                          className="h-px w-full transition-colors mt-1.5"
                          style={{
                            background: formErrors.name
                              ? "#ffb4ab"
                              : "rgba(60,73,78,0.3)",
                          }}
                        />
                        {formErrors.name && (
                          <p className="mt-1 font-mono text-[9px] text-error">
                            !! {formErrors.name}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div className="group">
                        <div className="flex items-center gap-4">
                          <label
                            className="whitespace-nowrap text-[12px]"
                            style={{
                              color: formErrors.email ? "#ffb4ab" : undefined,
                            }}
                          >
                            UPLINK_SOURCE:
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => {
                              setFormData((d) => ({ ...d, email: e.target.value }));
                              if (formErrors.email)
                                setFormErrors((err) => ({ ...err, email: undefined }));
                            }}
                            className="bg-transparent border-none outline-none p-0 text-secondary w-full placeholder:text-on-surface-variant/20 font-mono text-[12px]"
                            placeholder="[user@domain.net]"
                          />
                        </div>
                        <div
                          className="h-px w-full transition-colors mt-1.5"
                          style={{
                            background: formErrors.email
                              ? "#ffb4ab"
                              : "rgba(60,73,78,0.3)",
                          }}
                        />
                        {formErrors.email && (
                          <p className="mt-1 font-mono text-[9px] text-error">
                            !! {formErrors.email}
                          </p>
                        )}
                      </div>

                      {/* Type */}
                      <div className="group">
                        <div className="flex items-center gap-4">
                          <label className="text-primary whitespace-nowrap text-[12px]">
                            REQUEST_TYPE:
                          </label>
                          <select
                            value={formData.type}
                            onChange={(e) =>
                              setFormData((d) => ({
                                ...d,
                                type: e.target.value,
                              }))
                            }
                            className="bg-transparent border-none outline-none p-0 text-secondary w-full font-mono text-[12px] cursor-pointer appearance-none"
                          >
                            {requestTypes.map((t) => (
                              <option
                                key={t.value}
                                value={t.value}
                                className="bg-surface-container-highest"
                              >
                                {t.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="h-px w-full bg-outline-variant/30 group-focus-within:bg-primary transition-colors mt-1.5" />
                      </div>

                      {/* Message */}
                      <div className="group">
                        <div className="flex flex-col gap-3">
                          <label
                            className="text-[12px]"
                            style={{
                              color: formErrors.message ? "#ffb4ab" : undefined,
                            }}
                          >
                            ENCRYPTED_MESSAGE:
                          </label>
                          <textarea
                            rows={4}
                            value={formData.message}
                            onChange={(e) => {
                              setFormData((d) => ({ ...d, message: e.target.value }));
                              if (formErrors.message)
                                setFormErrors((err) => ({ ...err, message: undefined }));
                            }}
                            className="bg-transparent border-none outline-none p-0 text-secondary w-full placeholder:text-on-surface-variant/20 font-mono text-[12px] resize-none"
                            placeholder="[Transmit_payload_data_here...]"
                          />
                        </div>
                        <div
                          className="h-px w-full transition-colors mt-1.5"
                          style={{
                            background: formErrors.message
                              ? "#ffb4ab"
                              : "rgba(60,73,78,0.3)",
                          }}
                        />
                        {formErrors.message && (
                          <p className="mt-1 font-mono text-[9px] text-error">
                            !! {formErrors.message}
                          </p>
                        )}
                      </div>

                      {/* Server error */}
                      {serverError && (
                        <div className="px-3 py-2 border border-error/30 bg-error/5 font-mono text-[10px] text-error">
                          !! SYSTEM_ERROR: {serverError}
                        </div>
                      )}

                      {/* Submit row */}
                      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-2">
                        <div className="flex items-center gap-2 text-[11px]">
                          <span className="text-on-surface-variant/40">
                            _SYSTEM_STATUS:
                          </span>
                          <span
                            className="animate-pulse uppercase text-[10px]"
                            style={{
                              color:
                                formState === "error"
                                  ? "#ffb4ab"
                                  : "#a5e7ff",
                            }}
                          >
                            {formState === "loading"
                              ? "TRANSMITTING..."
                              : formState === "error"
                              ? "TRANSMISSION_FAILED"
                              : "Awaiting_Input"}
                          </span>
                          <span className="blinking-cursor" />
                        </div>

                        <button
                          type="submit"
                          disabled={formState === "loading"}
                          className="glitch-hover relative group overflow-hidden bg-primary/5 hover:bg-primary/15 border border-primary/40 text-primary px-10 py-4 font-headline font-bold tracking-[0.2em] transition-all duration-200 uppercase text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <span className="relative z-10">
                            {formState === "loading"
                              ? "TRANSMITTING..."
                              : "SEND REQUEST"}
                          </span>
                          <div className="absolute inset-0 bg-primary/15 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Security footnote */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 px-2">
            <div className="flex items-center gap-2 text-[9px] font-mono text-on-surface-variant/30">
              <span>🔒</span>
              <span>END-TO-END ENCRYPTED VIA ARCHITECT_SHIELD_V4</span>
            </div>
            <div className="text-[9px] font-mono text-on-surface-variant/30">
              TIMESTAMP: 2026.04.04_UTC
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
