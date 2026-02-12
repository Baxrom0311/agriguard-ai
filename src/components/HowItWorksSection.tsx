import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Hasharot aniqlash",
    desc: "IoT kameralar dalada hasharotlarni suratga oladi va tizimga yuboradi.",
    color: "border-primary",
  },
  {
    num: "02",
    title: "AI Tahlil",
    desc: "Sun'iy intellekt (YOLO modeli) hasharotni aniqlaydi va turini ajratadi: zararli yoki foydali.",
    color: "border-accent",
  },
  {
    num: "03",
    title: "Maqsadli UV Zarbasi",
    desc: "Faqat zararli hasharot topilgan joyga UV nurlanish yo'naltiriladi. Foydali hasharotlarga zarar yetmaydi.",
    color: "border-glow-uv",
  },
  {
    num: "04",
    title: "Real-time Monitoring",
    desc: "Fermer telefon orqali dalani nazorat qiladi, statistikalarni ko'radi va ogohlantirishlar oladi.",
    color: "border-primary",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="qanday-ishlaydi" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Jarayon</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3">
            Qanday <span className="text-gradient">ishlaydi?</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card p-6 border-l-4 ${step.color}`}
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl font-display font-bold text-muted-foreground/30">{step.num}</span>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
