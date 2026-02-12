import { motion } from "framer-motion";
import { Github, Linkedin, Code, Cpu, Palette, Database, Brain } from "lucide-react";

const team = [
  {
    name: "Jamoa a'zosi 1",
    role: "Team Lead / AI Engineer",
    skills: "Python, TensorFlow, YOLO",
    icon: Brain,
    tech: "AI/ML",
  },
  {
    name: "Jamoa a'zosi 2",
    role: "Hardware Engineer",
    skills: "Arduino, Raspberry Pi, IoT",
    icon: Cpu,
    tech: "Hardware",
  },
  {
    name: "Jamoa a'zosi 3",
    role: "Frontend Developer",
    skills: "React.js, TypeScript, UI/UX",
    icon: Palette,
    tech: "Frontend",
  },
  {
    name: "Jamoa a'zosi 4",
    role: "Backend Developer",
    skills: "FastAPI, PostgreSQL, DevOps",
    icon: Database,
    tech: "Backend",
  },
];



const techStack = [
  { name: "Raspberry Pi / Arduino", category: "Hardware" },
  { name: "UV LEDs + Camera", category: "Hardware" },
  { name: "YOLO / TensorFlow", category: "AI/ML" },
  { name: "Python (FastAPI)", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "React.js + Dashboard", category: "Frontend" },
  { name: "React Native", category: "Mobile" },
];

const TeamSection = () => {
  return (
    <section id="jamoa" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Jamoa</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3">
            Jamoa & <span className="text-gradient">Nega biz?</span>
          </h2>
        </motion.div>

        {/* Team members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <member.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold">{member.name}</h3>
              <p className="text-sm text-primary mt-1">{member.role}</p>
              <p className="text-xs text-muted-foreground mt-2">{member.skills}</p>
              <span className="inline-block mt-3 text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
                {member.tech}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Why us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card glow-green p-8 max-w-3xl mx-auto mb-12"
        >
          <h3 className="font-display font-bold text-xl mb-4 text-center">
            Nima uchun jamoamiz bu muammoni hal qila oladi?
          </h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-0.5">✓</span>
              AI va IoT bo'yicha amaliy tajriba — hasharotlarni aniqlash va real-time monitoring.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-0.5">✓</span>
              Hardware + Software integratsiyasi — Raspberry Pi, kameralar va UV LEDlarni dasturiy boshqarish.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-0.5">✓</span>
              Qishloq xo'jaligi sohasini chuqur tushunish — fermerlar bilan bevosita ishlash tajribasi.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-0.5">✓</span>
              To'liq texnologik stack — frontenddan AI modelgacha, barcha bosqichlarni qamrab oladigan jamoa.
            </li>
          </ul>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="font-display font-semibold text-lg mb-6">Texnologik Stack</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {techStack.map((tech) => (
              <span
                key={tech.name}
                className="px-4 py-2 rounded-full glass-card text-sm text-foreground"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
