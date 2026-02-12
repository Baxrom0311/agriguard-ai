import { motion } from "framer-motion";
import { Camera, Brain, Lightbulb, Sun, Target, Wifi } from "lucide-react";

const solutions = [
  {
    icon: Camera,
    title: "IoT Kameralar",
    desc: "Dalada o'rnatilgan kameralar hasharotlarni real vaqtda suratga oladi.",
  },
  {
    icon: Brain,
    title: "AI Aniqlash",
    desc: "YOLO/TensorFlow modeli zararli hasharotni foydalisidan ajratadi.",
  },
  {
    icon: Target,
    title: "Maqsadli UV",
    desc: "Faqat zararli hasharotga UV nurlanish yo'naltiriladi — 60-70% energiya tejash.",
  },
  {
    icon: Sun,
    title: "Solar Energiya",
    desc: "Quyosh panellari bilan ishlaydi — to'liq avtonomlik va arzon ekspluatatsiya.",
  },
  {
    icon: Wifi,
    title: "IoT Monitoring",
    desc: "Real-time ma'lumotlar fermerning telefoniga uzatiladi.",
  },
  {
    icon: Lightbulb,
    title: "Gibrid Tizim",
    desc: "UV + feromonal tuzoq = samarasini 3-4 marta oshirish.",
  },
];

const SolutionSection = () => {
  return (
    <section id="yechim" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Yechim</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3">
            <span className="text-gradient">AgriGuard AI</span> — Aqlli yechim
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            IoT Sensor → AI Tahlil → Maqsadli UV Zarbasi → Real-time Monitoring
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {solutions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card p-6 glow-green hover:scale-[1.02] transition-transform"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
