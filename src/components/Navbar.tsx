import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Moon, Sun, Languages } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import profileLogo from '@/assets/profile-logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass py-3 shadow-lg' : 'bg-transparent py-5'
    }`}>
      <div className="container px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a 
            href="#home" 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/50 shadow-glow"
              animate={{ 
                boxShadow: [
                  '0 0 10px hsl(174 72% 56% / 0.3)',
                  '0 0 20px hsl(174 72% 56% / 0.5)',
                  '0 0 10px hsl(174 72% 56% / 0.3)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <img src={profileLogo} alt="Mahmoud M.S." className="w-full h-full object-cover object-top" />
            </motion.div>
            <span className="text-xl font-bold text-foreground hidden sm:block">
              {language === 'ar' ? 'محمود' : 'Mahmoud'}
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-muted-foreground hover:text-primary font-medium transition-colors rounded-lg hover:bg-primary/10"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {link.name}
              </motion.button>
            ))}
          </div>

          {/* Theme & Language Toggle + CTA */}
          <div className="hidden md:flex items-center gap-2">
            {/* Language Toggle */}
            <motion.button
              onClick={toggleLanguage}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title={language === 'ar' ? 'English' : 'العربية'}
            >
              <Languages className="w-5 h-5 text-blue-500" />
            </motion.button>

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-indigo-500" />
              )}
            </motion.button>

            <Button 
              className="bg-gradient-primary text-primary-foreground hover:opacity-90"
              onClick={() => handleNavClick('#contact')}
            >
              {t('nav.hire')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center text-foreground"
              whileTap={{ scale: 0.9, rotate: 180 }}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-indigo-500" />
              )}
            </motion.button>

            {/* Mobile Language Toggle */}
            <motion.button
              onClick={toggleLanguage}
              className="w-10 h-10 flex items-center justify-center text-foreground"
              whileTap={{ scale: 0.9 }}
            >
              <Languages className="w-5 h-5 text-blue-500" />
            </motion.button>

            <motion.button
              className="w-10 h-10 flex items-center justify-center text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden mt-4 pb-4 border-t border-border/50 pt-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-4 py-3 text-foreground hover:text-primary font-medium transition-colors rounded-lg hover:bg-primary/10 ${language === 'ar' ? 'text-right' : 'text-left'}`}
                  initial={{ opacity: 0, x: language === 'ar' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {link.name}
                </motion.button>
              ))}
              <Button 
                className="mt-2 bg-gradient-primary text-primary-foreground hover:opacity-90"
                onClick={() => handleNavClick('#contact')}
              >
                {t('nav.hire')}
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
