import { motion } from "framer-motion";
import { ArrowDown, Zap, Leaf, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { icon: Zap, label: "Energiya tejash", value: "60-70%", color: "text-primary" },
  { icon: Shield, label: "Maqsadli nazorat", value: "AI + UV", color: "text-accent" },
  { icon: Leaf, label: "Ekologik toza", value: "100%", color: "text-primary" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
          UzTech Hackathon 2025
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6"
        >
          <span className="text-gradient">AgriGuard</span>{" "}
          <span className="text-foreground">AI</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
        >
          UV + AI + IoT = Aqlli hasharot nazorati. Qishloq xo'jaligida zararkunandalarni
          sun'iy intellekt yordamida aniqlash va maqsadli UV nurlanish bilan yo'q qilish tizimi.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto mb-12"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card px-6 py-4 flex items-center gap-3 flex-1">
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
              <div className="text-left">
                <div className={`text-lg font-bold font-display ${stat.color}`}>{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#muammo"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#muammo")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
          >
            Batafsil
            <ArrowDown className="w-4 h-4" />
          </a>
          <Link
            to="/demo"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg border border-border bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/80 transition-colors"
          >
            Demoni ko'rish
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16"
        >
          <ArrowDown className="w-5 h-5 mx-auto text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
