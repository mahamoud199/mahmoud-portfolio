import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, MapPin, ChevronDown, Linkedin, Download } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import profileLogo from '@/assets/profile-logo.png';

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/Mahamoud199', label: 'Facebook' },
  { icon: Twitter, href: 'https://x.com/mmwdmmd554019', label: 'X' },
  { icon: Instagram, href: 'https://www.instagram.com/mahmoud_199mohamed', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/محمود-محمد-080990328', label: 'LinkedIn' },
];

const HeroSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <motion.div 
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/15 rounded-full blur-[100px]"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/40 rounded-full"
          style={{
            left: `${15 + i * 10}%`,
            top: `${25 + (i % 4) * 15}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 15, 0],
            opacity: [0.2, 0.7, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 5 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
      
      <motion.div 
        className="container relative z-10 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col items-center text-center">
          {/* Profile Image with Advanced Animations */}
          <motion.div 
            className="relative mb-8"
            initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
          >
            {/* Rotating outer ring */}
            <motion.div
              className="absolute -inset-4 rounded-full border-2 border-primary/30 border-dashed"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Pulsing glow effect */}
            <motion.div
              className="absolute -inset-2 rounded-full bg-gradient-primary opacity-20 blur-xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Secondary rotating ring */}
            <motion.div
              className="absolute -inset-6 rounded-full border border-primary/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              {/* Orbiting dots */}
              <motion.div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full shadow-glow" />
              <motion.div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-accent rounded-full" />
            </motion.div>

            <motion.div 
              className="w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden shadow-glow relative"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Gradient border */}
              <div className="absolute inset-0 rounded-full bg-gradient-primary p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-background">
                  <motion.img 
                    src={profileLogo} 
                    alt="Mahmoud M.S."
                    className="w-full h-full object-cover object-top"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    whileHover={{ scale: 1.1 }}
                  />
                </div>
              </div>
              
              {/* Shine effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%', opacity: 0 }}
                whileHover={{ x: '100%', opacity: 1 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>

            {/* Floating badge */}
            <motion.div 
              className="absolute -bottom-2 -right-2 w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.2, rotate: 15 }}
            >
              <motion.span 
                className="text-primary-foreground font-bold text-sm"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                IT
              </motion.span>
            </motion.div>

            {/* Status indicator */}
            <motion.div 
              className="absolute -top-1 -left-1 w-6 h-6 bg-green-500 rounded-full border-4 border-background"
              animate={{ 
                scale: [1, 1.2, 1],
                boxShadow: [
                  '0 0 0 0 rgba(34, 197, 94, 0.4)',
                  '0 0 0 10px rgba(34, 197, 94, 0)',
                  '0 0 0 0 rgba(34, 197, 94, 0)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Name & Title */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.span 
              className="text-foreground inline-block"
              whileHover={{ scale: 1.05 }}
            >
              {t('hero.name1')}
            </motion.span>
            <motion.span 
              className="block text-gradient"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {t('hero.name2')}
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {t('hero.role1')}
            </motion.span>
            <span className="mx-2 text-primary">|</span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              {t('hero.role2')}
            </motion.span>
            <span className="mx-2 text-primary">|</span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              {t('hero.role3')}
            </motion.span>
          </motion.p>

          {/* Location - Only city, no specific neighborhood */}
          <motion.div 
            className="flex items-center gap-2 text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <MapPin className="w-5 h-5 text-primary" />
            </motion.div>
            <span>{t('hero.location')}</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-wrap gap-4 justify-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                className="bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity px-8 relative overflow-hidden group"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="relative z-10">{t('hero.projects')}</span>
                <motion.div 
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/50 text-foreground hover:bg-primary/10 px-8"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('hero.contact')}
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="/cv/mahmoud-cv.pdf" download>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold hover:opacity-90 transition-opacity px-8 gap-2"
                >
                  <Download className="w-5 h-5" />
                  {t('hero.downloadCV')}
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                aria-label={social.label}
                whileHover={{ scale: 1.2, y: -5, rotate: [0, -10, 10, 0] }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="w-8 h-8 text-primary/60" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
