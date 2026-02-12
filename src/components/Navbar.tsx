import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Demo", href: "/demo" },
  { label: "Muammo", href: "/#muammo" },
  { label: "Yechim", href: "/#yechim" },
  { label: "Qanday ishlaydi?", href: "/#qanday-ishlaydi" },
  { label: "Jamoa", href: "/#jamoa" },
  { label: "Yo'l xaritasi", href: "/#yol-xaritasi" },
  { label: "Reja", href: "/#reja" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleNav = (href: string) => {
    setOpen(false);
    if (href.startsWith("/#")) {
      if (location.pathname !== "/") {
        window.location.href = href;
      } else {
        const el = document.querySelector(href.replace("/", ""));
        el?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="font-display text-xl font-bold text-gradient">
          AgriGuard AI
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) =>
            item.href === "/demo" ? (
              <Link
                key={item.label}
                to="/demo"
                className="text-sm font-medium px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(item.href);
                }}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            )
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="flex flex-col gap-2 p-4">
              {navItems.map((item) =>
                item.href === "/demo" ? (
                  <Link
                    key={item.label}
                    to="/demo"
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium px-4 py-2 rounded-lg bg-primary/10 text-primary text-center"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(item.href);
                    }}
                    className="text-sm text-muted-foreground py-2 px-4"
                  >
                    {item.label}
                  </a>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
