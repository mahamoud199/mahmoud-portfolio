import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import profileLogo from '@/assets/profile-logo.png';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-8 border-t border-border/50 bg-background">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/30">
              <img src={profileLogo} alt="Mahmoud M.S." className="w-full h-full object-cover" />
            </div>
            <span className="text-lg font-bold text-foreground">{t('hero.name1')}</span>
          </motion.div>
          
          <motion.p 
            className="text-muted-foreground text-sm flex items-center gap-1"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {t('footer.madeWith')} <Heart className="w-4 h-4 text-primary fill-primary" /> {t('footer.inSudan')}
          </motion.p>
          
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;