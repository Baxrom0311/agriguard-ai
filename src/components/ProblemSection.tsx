import { motion } from "framer-motion";
import { Bug, Skull, Droplets, DollarSign } from "lucide-react";

const problems = [
  {
    icon: Bug,
    num: "01",
    title: "Zararkunandalar",
    desc: "Hasharotlar hosilning 30-40% gacha yo'qotilishiga sabab bo'ladi. An'anaviy usullar samarasiz.",
  },
  {
    icon: Skull,
    num: "02",
    title: "Kimyoviy zaharlar",
    desc: "Pestitsidlar tuproq, suv va mahsulotlarni zaharlab, inson salomatligiga xavf soladi.",
  },
  {
    icon: Droplets,
    num: "03",
    title: "Resurs isrofi",
    desc: "Butun dalaga kimyoviy ishlov berish — bu katta resurs isrofi va atrof-muhitga zarar.",
  },
  {
    icon: DollarSign,
    num: "04",
    title: "Iqtisodiy zarar",
    desc: "Fermerlar har yili minglab dollar yo'qotadi. O'zbekistonda agro-zarar milliardlab so'mni tashkil etadi.",
  },
];

const ProblemSection = () => {
  return (
    <section id="muammo" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-destructive uppercase tracking-wider">Muammo</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3">
            Qishloq xo'jaligidagi <span className="text-destructive">muammolar</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 group hover:border-destructive/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <span className="text-xs font-mono text-muted-foreground">{item.num}</span>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <item.icon className="w-5 h-5 text-destructive" />
                    <h3 className="font-display font-semibold text-lg">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
