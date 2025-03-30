"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface NavLink {
  id: string;
  name: string;
  path: string;
}

interface MobileMenuProps {
  navLinks: NavLink[];
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const MobileMenu = ({
  navLinks,
  mobileMenuOpen,
  setMobileMenuOpen,
}: MobileMenuProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [setMobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [setMobileMenuOpen]);
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  return (
    <AnimatePresence>
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 md:hidden"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-secondary/80 to-secondary-foreground/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Content */}
          <div className="relative flex h-full flex-col items-center justify-center px-6">
            {/* Close button */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute right-6 top-6 rounded-full bg-background/10 p-2 text-white backdrop-blur-sm transition-all hover:bg-background/20 cursor-pointer"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Menu items */}
            <div className="flex w-full max-w-md flex-col items-center space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{
                    delay: 0.1 + index * 0.1,
                    duration: 0.3,
                  }}
                  className="w-full"
                >
                  <Link
                    href={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group relative flex w-full items-center justify-center overflow-hidden rounded-lg bg-white/30 p-4 text-xl font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20"
                  >
                    <motion.span
                      initial={{ width: "0%" }}
                      whileHover={{ width: "100%" }}
                      className="absolute bottom-0 left-0 h-0.5 bg-white/70"
                    />
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
