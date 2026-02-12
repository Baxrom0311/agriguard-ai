import { motion } from "framer-motion";
import { ArrowLeft, Play } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Demo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Orqaga qaytish
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              AgriGuard AI <span className="text-gradient">Platformasi</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              UV + AI + IoT tizimining to'liq ishlash jarayoni bilan tanishing
            </p>
          </motion.div>

          {/* Video placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card glow-uv max-w-4xl mx-auto overflow-hidden mb-12"
          >
            <div className="aspect-video bg-muted/30 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-primary/30 transition-colors">
                  <Play className="w-8 h-8 text-primary ml-1" />
                </div>
                <p className="text-sm text-muted-foreground">Demo video tez orada yuklanadi</p>
              </div>
            </div>
          </motion.div>

          {/* Video description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <div className="glass-card p-8">
              <h2 className="font-display font-bold text-xl mb-4">
                AgriGuard AI — Aqlli Hasharot Nazorat Tizimi
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-primary mb-2">Videoda nima ko'rsatilgan:</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Ushbu video AgriGuard AI platformasining to'liq ishlash jarayonini namoyish etadi.
                    IoT kameralar orqali hasharotlarni real vaqtda aniqlash, AI modeli tomonidan
                    zararli hasharotni ajratish, maqsadli UV nurlanish va fermerning mobil ilovasida
                    natijalarni monitoring qilish — barchasi real vaqt rejimida ko'rsatiladi.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-primary mb-2">Muammo va yechimga bog'liqligi:</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Videodagi har bir qadam qishloq xo'jaligidagi mavjud muammolar — kimyoviy zaharlar,
                    resurs isrofi, hosil yo'qotilishi bilan bevosita bog'langan. AgriGuard AI aynan
                    shu muammolarni hal qilish uchun ishlab chiqilgan bo'lib, 60-70% energiya tejash
                    va ekologik toza hasharot nazoratini ta'minlaydi.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-primary mb-2">Ishlatilgan texnologiyalar:</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {[
                      "Raspberry Pi",
                      "Arduino",
                      "UV LEDs",
                      "YOLO v8",
                      "TensorFlow Lite",
                      "FastAPI",
                      "PostgreSQL",
                      "React.js",
                      "React Native",
                      "Solar Panels",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Prototype link */}
            <div className="glass-card p-6 text-center">
              <h3 className="font-display font-semibold mb-2">Ishlayotgan prototip</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Prototip hozirda ishlab chiqish jarayonida. Tayyor bo'lgach bu yerda havola paydo bo'ladi.
              </p>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted text-muted-foreground text-sm">
                🔧 Ishlab chiqilmoqda...
              </span>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Demo;
