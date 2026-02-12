import { motion } from "framer-motion";

const phases = [
  {
    phase: "1-bosqich",
    title: "Tadqiqot & Dizayn",
    duration: "2 hafta",
    tasks: [
      "Hasharot dataset to'plash va tayyorlash",
      "YOLO modelini o'qitish uchun muhit sozlash",
      "Hardware komponentlar tanlash va buyurtma",
      "UI/UX dizayn yaratish",
    ],
    techs: ["Python", "LabelImg", "Figma"],
  },
  {
    phase: "2-bosqich",
    title: "AI Model + Hardware",
    duration: "3 hafta",
    tasks: [
      "YOLO modelini hasharot aniqlash uchun o'qitish",
      "Raspberry Pi + Camera integratsiyasi",
      "UV LED nazorat tizimi yaratish",
      "Solar panel ulanishi",
    ],
    techs: ["TensorFlow", "YOLO", "Raspberry Pi", "Arduino"],
  },
  {
    phase: "3-bosqich",
    title: "Backend & Frontend",
    duration: "3 hafta",
    tasks: [
      "FastAPI backend yaratish",
      "Real-time data pipeline",
      "React dashboard ishlab chiqish",
      "React Native mobil ilova",
    ],
    techs: ["FastAPI", "PostgreSQL", "React.js", "React Native"],
  },
  {
    phase: "4-bosqich",
    title: "Test & Optimallashtirish",
    duration: "2 hafta",
    tasks: [
      "Dala sharoitida test",
      "AI model aniqligini oshirish",
      "Energiya samaradorligini optimallashtirish",
      "Fermerlar bilan beta-test",
    ],
    techs: ["IoT", "AI/ML", "Testing"],
  },
];

const aiTools = [
  { name: "YOLO v8", desc: "Real-time hasharot aniqlash" },
  { name: "TensorFlow Lite", desc: "Edge device'larda AI" },
  { name: "OpenCV", desc: "Tasvir qayta ishlash" },
  { name: "GPT API", desc: "Fermerga maslahatlar" },
];

const ImplementationSection = () => {
  return (
    <section id="reja" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Amalga oshirish</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3">
            Qanday <span className="text-gradient">amalga oshiramiz?</span>
          </h2>
        </motion.div>

        {/* Phases */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-primary">{phase.phase}</span>
                <span className="text-xs text-muted-foreground">{phase.duration}</span>
              </div>
              <h3 className="font-display font-semibold text-lg mb-3">{phase.title}</h3>
              <ul className="space-y-2 mb-4">
                {phase.tasks.map((task) => (
                  <li key={task} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">→</span>
                    {task}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {phase.techs.map((tech) => (
                  <span key={tech} className="text-xs px-2 py-1 rounded bg-primary/10 text-primary">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-display font-semibold text-xl text-center mb-8">
            AI vositalari & yechimlar
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {aiTools.map((tool) => (
              <div key={tool.name} className="glass-card glow-uv p-4 text-center">
                <h4 className="font-display font-semibold text-sm text-accent">{tool.name}</h4>
                <p className="text-xs text-muted-foreground mt-1">{tool.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImplementationSection;
