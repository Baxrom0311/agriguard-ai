import { motion } from "framer-motion";
import { Lightbulb, Wrench, Rocket, Flag } from "lucide-react";

const stages = [
  {
    icon: Lightbulb,
    title: "Idea",
    status: "Tugallangan",
    active: true,
    items: ["Muammo tahlili", "Bozor tadqiqoti", "Texnik konsepsiya"],
  },
  {
    icon: Wrench,
    title: "Prototype",
    status: "Hozirda",
    active: true,
    items: ["AI model o'qitish", "Hardware prototipi", "Web dashboard"],
  },
  {
    icon: Rocket,
    title: "MVP",
    status: "Keyingi bosqich",
    active: false,
    items: ["Beta-test fermerlar bilan", "Mobil ilova", "Solar integratsiya"],
  },
  {
    icon: Flag,
    title: "Launched",
    status: "Reja",
    active: false,
    items: ["B2B sotuvlar", "API platforma", "Mintaqaviy kengaytirish"],
  },
];

const RoadmapSection = () => {
  return (
    <section id="yol-xaritasi" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Yo'l xaritasi</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3">
            Loyiha <span className="text-gradient">yo'l xaritasi</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stages.map((stage, i) => (
            <motion.div
              key={stage.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card p-6 relative ${stage.active ? "glow-green border-primary/30" : ""}`}
            >
              {/* Connector line on desktop */}
              {i < stages.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
              )}
              
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
                stage.active ? "bg-primary/20" : "bg-muted"
              }`}>
                <stage.icon className={`w-5 h-5 ${stage.active ? "text-primary" : "text-muted-foreground"}`} />
              </div>
              <h3 className="font-display font-semibold text-lg">{stage.title}</h3>
              <span className={`text-xs font-medium mt-1 inline-block ${
                stage.active ? "text-primary" : "text-muted-foreground"
              }`}>
                {stage.status}
              </span>
              <ul className="mt-4 space-y-2">
                {stage.items.map((item) => (
                  <li key={item} className="text-xs text-muted-foreground flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${stage.active ? "bg-primary" : "bg-muted-foreground/30"}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
