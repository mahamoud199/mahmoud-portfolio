import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Brain, ShoppingCart, Utensils, Calculator, Smartphone, GraduationCap, Network, Palette } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import ImageLightbox from './ImageLightbox';

// Import school app images
import schoolDashboard from '@/assets/school-app/dashboard.webp';
import schoolLogin from '@/assets/school-app/login.webp';
import schoolMenu from '@/assets/school-app/menu.webp';
import schoolClasses from '@/assets/school-app/classes.webp';

// Import design images
import pizzaCard1 from '@/assets/designs/pizza-card-1.png';
import pizzaCard2 from '@/assets/designs/pizza-card-2.png';
import pizzaBanner from '@/assets/designs/pizza-banner.png';
import pizzaPoster from '@/assets/designs/pizza-poster.png';
import salonBanner from '@/assets/designs/salon-banner.png';
import healthPoster from '@/assets/designs/health-poster.png';
import sudaniBanner from '@/assets/designs/sudani-banner.png';

// Import CCNA network image
import ccnaNetwork from '@/assets/designs/ccna-network.jpg';

// Import calculator images
import calcLight1 from '@/assets/calculator/calc-light-1.jpg';
import calcLight2 from '@/assets/calculator/calc-light-2.jpg';
import calcDark from '@/assets/calculator/calc-dark.jpg';
import calcHistory from '@/assets/calculator/calc-history.jpg';

const ProjectsSection = () => {
  const { language, t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (images: string[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };
  
  const projects = [
    {
      title: language === 'ar' ? 'AI Network Designer' : 'AI Network Designer',
      subtitle: language === 'ar' ? 'مشروع التخرج' : 'Graduation Project',
      description: language === 'ar' 
        ? 'نظام ذكي لتصميم الشبكات تلقائياً باستخدام الذكاء الاصطناعي. يولّد تصميم شبكة كامل حسب متطلبات المستخدم مع رسوم بيانية توضح البنية.'
        : 'An intelligent system for automatic network design using AI. Generates complete network design based on user requirements with diagrams showing the structure.',
      tech: ['Python', 'AI/ML', 'CCNA', 'CCNP'],
      icon: Brain,
      featured: true,
      color: 'from-violet-500 to-purple-600',
    },
    {
      title: language === 'ar' ? 'نظام إدارة مدرسة' : 'School Management System',
      subtitle: language === 'ar' ? 'School Management' : 'Cross-Platform',
      description: language === 'ar' 
        ? 'نظام شامل (Android + Windows + Flutter) لإدارة الفصول والطلاب والمعلمين والنتائج والحضور مع دعم Dark/Light.'
        : 'Comprehensive system (Android + Windows + Flutter) for managing classes, students, teachers, results, and attendance with Dark/Light support.',
      tech: ['Flutter', 'Kotlin', 'Java', 'Windows'],
      icon: GraduationCap,
      color: 'from-amber-500 to-yellow-500',
      images: [schoolDashboard, schoolLogin, schoolMenu, schoolClasses],
      hasGallery: true,
    },
    {
      title: language === 'ar' ? 'أعمال التصميم الجرافيكي' : 'Graphic Design Portfolio',
      subtitle: language === 'ar' ? 'Graphic Design Portfolio' : 'Creative Works',
      description: language === 'ar' 
        ? 'مجموعة من تصاميم الهوية البصرية والبوسترات والبنرات وكروت الأعمال لعملاء متنوعين.'
        : 'Collection of branding designs, posters, banners, and business cards for various clients.',
      tech: ['Photoshop', 'Illustrator', 'Social Media', 'Branding'],
      icon: Palette,
      color: 'from-pink-500 to-rose-500',
      images: [pizzaPoster, pizzaCard1, pizzaCard2, pizzaBanner, salonBanner, healthPoster, sudaniBanner],
      hasDesignGallery: true,
    },
    {
      title: language === 'ar' ? 'مشروع شبكات CCNA' : 'CCNA Network Lab Project',
      subtitle: language === 'ar' ? 'Network Lab Project' : 'Enterprise Network',
      description: language === 'ar' 
        ? 'مشروع تطبيقي يشمل VLANs, VTP, Router-on-a-Stick, ACLs وربط بين فروع مع سياسات وصول.'
        : 'Practical project including VLANs, VTP, Router-on-a-Stick, ACLs and branch connectivity with access policies.',
      tech: ['CCNA', 'Packet Tracer', 'GNS3', 'Networking'],
      icon: Network,
      color: 'from-teal-500 to-cyan-500',
      images: [ccnaNetwork],
      hasCCNAGallery: true,
    },
    {
      title: language === 'ar' ? 'المتجر الإلكتروني ونظام الحجوزات' : 'E-Commerce & Booking System',
      subtitle: language === 'ar' ? 'Web Platforms' : 'Web Platforms',
      description: language === 'ar' 
        ? 'منصات ويب متكاملة تشمل متجر إلكتروني مرن للبيع والحجز، ونظام حجوزات متكامل مع لوحة تحكم للمشرف والمستخدم.'
        : 'Integrated web platforms including flexible e-commerce for selling and booking, and complete booking system with admin and user dashboard.',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      icon: ShoppingCart,
      color: 'from-cyan-500 to-blue-500',
      hasVideo: true,
      videoSrc: '/videos/ecommerce-demo.mp4',
    },
    {
      title: language === 'ar' ? 'نظام مطعم مذاق' : 'Mazaq Restaurant System',
      subtitle: language === 'ar' ? 'Restaurant System' : 'Restaurant Website',
      description: language === 'ar' 
        ? 'موقع لإدارة وعرض خدمات المطعم والطلبات مع واجهة مستخدم جذابة.'
        : 'Website for managing and displaying restaurant services and orders with attractive UI.',
      tech: ['HTML', 'CSS', 'PHP', 'MySQL'],
      icon: Utensils,
      color: 'from-orange-500 to-red-500',
      hasRestaurantVideo: true,
      restaurantVideoSrc: '/videos/restaurant-demo.mp4',
    },
    {
      title: language === 'ar' ? 'آلة حاسبة علمية' : 'Scientific Calculator',
      subtitle: language === 'ar' ? 'Android App' : 'Android App',
      description: language === 'ar' 
        ? 'تطبيق آلة حاسبة علمية لأندرويد مع دعم الوضع الداكن/الفاتح، سجل العمليات، دوال مثلثية (sin, cos, tan)، الجذر التربيعي، وميزة الذكاء الاصطناعي.'
        : 'Scientific calculator Android app with Dark/Light mode support, operation history, trigonometric functions (sin, cos, tan), square root, and AI feature.',
      tech: ['Kotlin', 'Android', 'Material Design', 'AI'],
      icon: Calculator,
      color: 'from-blue-500 to-indigo-500',
      images: [calcDark, calcLight1, calcLight2, calcHistory],
      hasCalculatorGallery: true,
    },
    {
      title: language === 'ar' ? 'نظام طلبات طعام' : 'Food Ordering System',
      subtitle: language === 'ar' ? 'Food Ordering System' : 'Multi-Platform',
      description: language === 'ar' 
        ? 'حل متكامل (موقع + تطبيق أندرويد) لعرض المنيو والطلب والتتبع.'
        : 'Complete solution (website + Android app) for displaying menu, ordering, and tracking.',
      tech: ['PHP', 'Android', 'MySQL'],
      icon: Smartphone,
      color: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Animated background orbs */}
      <motion.div 
        className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]"
        animate={{ 
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container relative z-10 px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">{t('projects.title')}</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              {t('projects.subtitle')}
            </p>
          </div>
        </ScrollReveal>

        {/* Featured Project */}
        {projects.filter(p => p.featured).map((project) => (
          <ScrollReveal key={project.title} direction="scale">
            <motion.div 
              className="mb-12 glass rounded-3xl p-8 md:p-12 shadow-card shadow-glow border border-primary/20 relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary" />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
                <motion.div 
                  className={`w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg shrink-0`}
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <project.icon className="w-12 h-12 md:w-16 md:h-16 text-white" />
                </motion.div>
                <div className={`text-center ${language === 'ar' ? 'md:text-right' : 'md:text-left'} flex-1`}>
                  <span className="text-primary font-semibold text-sm">{project.subtitle}</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-1 mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-lg mb-6">{project.description}</p>
                  <div className={`flex flex-wrap gap-2 justify-center ${language === 'ar' ? 'md:justify-start' : 'md:justify-start'}`}>
                    {project.tech.map((t, i) => (
                      <motion.span 
                        key={t} 
                        className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}

        {/* CCNA Project with Network Image */}
        {projects.filter(p => p.hasCCNAGallery).map((project) => (
          <ScrollReveal key={project.title} delay={0.1}>
            <motion.div 
              className="mb-12 glass rounded-3xl p-8 shadow-card border border-teal-500/20 relative overflow-hidden"
              whileHover={{ boxShadow: '0 0 60px hsl(174 72% 50% / 0.15)' }}
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Project Info */}
                <div className="lg:w-1/3">
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div 
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg shrink-0`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <project.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <div>
                      <span className="text-teal-400 text-xs font-medium">{project.subtitle}</span>
                      <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Network Image */}
                <div className="lg:w-2/3">
                  <motion.div
                    className="relative rounded-xl overflow-hidden bg-secondary/50 group/img"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <img 
                      src={ccnaNetwork} 
                      alt="CCNA Network Diagram"
                      className="w-full h-auto object-contain transition-transform duration-500 group-hover/img:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}

        {/* Project with Gallery (School Management) */}
        {projects.filter(p => p.hasGallery).map((project) => (
          <ScrollReveal key={project.title} delay={0.1}>
            <motion.div 
              className="mb-12 glass rounded-3xl p-8 shadow-card border border-amber-500/20 relative overflow-hidden"
              whileHover={{ boxShadow: '0 0 60px hsl(45 100% 50% / 0.15)' }}
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Project Info */}
                <div className="lg:w-1/3">
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div 
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg shrink-0`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <project.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <div>
                      <span className="text-primary/80 text-xs font-medium">{project.subtitle}</span>
                      <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Image Gallery */}
                <div className="lg:w-2/3">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {project.images?.map((img, i) => (
                      <motion.div
                        key={i}
                        className="relative rounded-xl overflow-hidden aspect-[9/16] bg-secondary/50 group/img cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ scale: 1.05, zIndex: 10 }}
                        onClick={() => openLightbox(project.images || [], i)}
                      >
                        <img 
                          src={img} 
                          alt={`${project.title} screenshot ${i + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end justify-center pb-4">
                          <span className="text-sm text-foreground font-medium">{language === 'ar' ? 'انقر للتكبير' : 'Click to zoom'}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}

        {/* Design Portfolio Gallery */}
        {projects.filter(p => p.hasDesignGallery).map((project) => (
          <ScrollReveal key={project.title} delay={0.1}>
            <motion.div 
              className="mb-12 glass rounded-3xl p-8 shadow-card border border-pink-500/20 relative overflow-hidden"
              whileHover={{ boxShadow: '0 0 60px hsl(330 100% 50% / 0.15)' }}
            >
              {/* Project Info */}
              <div className="flex items-start gap-4 mb-6">
                <motion.div 
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg shrink-0`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <project.icon className="w-8 h-8 text-white" />
                </motion.div>
                <div>
                  <span className="text-pink-400 text-xs font-medium">{project.subtitle}</span>
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{project.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-pink-500/10 text-pink-400 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Design Gallery - Masonry style */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {project.images?.map((img, i) => (
                  <motion.div
                    key={i}
                    className={`relative rounded-xl overflow-hidden bg-secondary/50 group/img cursor-pointer ${
                      i === 0 ? 'md:col-span-2 md:row-span-2' : ''
                    }`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ scale: 1.03, zIndex: 10 }}
                    onClick={() => openLightbox(project.images || [], i)}
                  >
                    <img 
                      src={img} 
                      alt={`Design work ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end p-4">
                      <span className="text-sm text-foreground font-medium">{t('projects.viewDesign')}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </ScrollReveal>
        ))}

        {/* E-Commerce & Booking Video Section */}
        {projects.filter(p => p.hasVideo).map((project) => (
          <ScrollReveal key={project.title} delay={0.1}>
            <motion.div 
              className="mb-12 glass rounded-3xl p-8 shadow-card border border-cyan-500/20 relative overflow-hidden"
              whileHover={{ boxShadow: '0 0 60px hsl(190 100% 50% / 0.15)' }}
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Project Info */}
                <div className="lg:w-1/3">
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div 
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg shrink-0`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <project.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <div>
                      <span className="text-cyan-400 text-xs font-medium">{project.subtitle}</span>
                      <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Video Demo */}
                <div className="lg:w-2/3">
                  <motion.div
                    className="relative rounded-xl overflow-hidden bg-secondary/50 aspect-video"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                  >
                    <video 
                      src={project.videoSrc}
                      controls
                      className="w-full h-full object-cover rounded-xl"
                      poster=""
                    >
                      {language === 'ar' ? 'متصفحك لا يدعم تشغيل الفيديو' : 'Your browser does not support video playback'}
                    </video>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}

        {/* Restaurant System Video Section */}
        {projects.filter(p => p.hasRestaurantVideo).map((project) => (
          <ScrollReveal key={project.title} delay={0.1}>
            <motion.div 
              className="mb-12 glass rounded-3xl p-8 shadow-card border border-orange-500/20 relative overflow-hidden"
              whileHover={{ boxShadow: '0 0 60px hsl(25 100% 50% / 0.15)' }}
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Project Info */}
                <div className="lg:w-1/3">
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div 
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg shrink-0`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <project.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <div>
                      <span className="text-orange-400 text-xs font-medium">{project.subtitle}</span>
                      <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Video Demo */}
                <div className="lg:w-2/3">
                  <motion.div
                    className="relative rounded-xl overflow-hidden bg-secondary/50 aspect-video"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                  >
                    <video 
                      src={project.restaurantVideoSrc}
                      controls
                      className="w-full h-full object-cover rounded-xl"
                      poster=""
                    >
                      {language === 'ar' ? 'متصفحك لا يدعم تشغيل الفيديو' : 'Your browser does not support video playback'}
                    </video>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}

        {/* Calculator App Gallery */}
        {projects.filter(p => p.hasCalculatorGallery).map((project) => (
          <ScrollReveal key={project.title} delay={0.1}>
            <motion.div 
              className="mb-12 glass rounded-3xl p-8 shadow-card border border-blue-500/20 relative overflow-hidden"
              whileHover={{ boxShadow: '0 0 60px hsl(220 100% 50% / 0.15)' }}
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Project Info */}
                <div className="lg:w-1/3">
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div 
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg shrink-0`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <project.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <div>
                      <span className="text-blue-400 text-xs font-medium">{project.subtitle}</span>
                      <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Calculator Screenshots */}
                <div className="lg:w-2/3">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {project.images?.map((img, i) => (
                      <motion.div
                        key={i}
                        className="relative rounded-xl overflow-hidden aspect-[9/16] bg-secondary/50 group/img cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ scale: 1.05, zIndex: 10 }}
                        onClick={() => openLightbox(project.images || [], i)}
                      >
                        <img 
                          src={img} 
                          alt={`Calculator screenshot ${i + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end justify-center pb-4">
                          <span className="text-sm text-foreground font-medium">{language === 'ar' ? 'انقر للتكبير' : 'Click to zoom'}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured && !p.hasGallery && !p.hasDesignGallery && !p.hasCCNAGallery && !p.hasVideo && !p.hasCalculatorGallery).map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.05} direction={index % 2 === 0 ? 'left' : 'right'}>
              <motion.div 
                className="glass rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-500 group h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <motion.div 
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg shrink-0`}
                    whileHover={{ rotate: [0, -15, 15, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    <project.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <div>
                    <span className="text-primary/80 text-xs font-medium">{project.subtitle}</span>
                    <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-secondary/50 text-foreground/80 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1 bg-secondary/50 text-muted-foreground rounded-full text-xs">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-12">
            <motion.p 
              className="text-muted-foreground"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {t('projects.demo')}
            </motion.p>
          </div>
        </ScrollReveal>
      </div>

      {/* Lightbox */}
      <ImageLightbox
        images={lightboxImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  );
};

export default ProjectsSection;
