"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function TimeGreeting() {
  const [greeting, setGreeting] = useState("");
  const [subtext, setSubtext] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    
    if (hour >= 5 && hour < 12) {
      setGreeting("Good Morning.");
      setSubtext("Systems active. The coffee is brewing. Let's build.");
    } else if (hour >= 12 && hour < 18) {
      setGreeting("Good Afternoon.");
      setSubtext("Deep work mode. Breaking things to fix them better.");
    } else if (hour >= 18 && hour < 22) {
      setGreeting("Good Evening.");
      setSubtext("Reviewing the day's logs. Planning the next sprint.");
    } else {
      setGreeting("Still Awake?");
      setSubtext("The world sleeps. The compiler runs. Still here.");
    }
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <AnimatePresence mode="wait">
        <motion.h1
          key={greeting}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold tracking-tighter"
        >
          {greeting}
        </motion.h1>
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.p
          key={subtext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-muted-foreground text-lg md:text-xl font-light"
        >
          {subtext}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
