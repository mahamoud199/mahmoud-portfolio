import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, CheckCircle, Image, ExternalLink, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import ImageLightbox from './ImageLightbox';

// Import certificate images
import ccnaCert1 from '@/assets/certificates/ccna-certificate-1.jpg';
import ccnaCert2 from '@/assets/certificates/ccna-certificate-2.jpg';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  description: string;
  color: string;
  skills: string[];
  images?: string[];
  credentialUrl?: string;
}

const CertificatesSection = () => {
  const { language, t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const certificates: Certificate[] = [
    {
      title: 'CCNA 200-301',
      issuer: 'Cisco / Network Plus Training Center',
      date: '2025',
      description: language === 'ar' 
        ? 'شهادة شبكات سيسكو المعتمدة - أساسيات الشبكات والتوجيه والتبديل (60 ساعة تدريبية)'
        : 'Cisco Certified Network Associate - Networking, Routing & Switching fundamentals (60 hours training)',
      color: 'from-blue-500 to-cyan-500',
      skills: ['Networking', 'Routing', 'Switching', 'Security', 'VLANs', 'OSPF'],
      images: [ccnaCert1, ccnaCert2],
    },
    {
      title: 'Microsoft Office Specialist',
      issuer: 'Microsoft',
      date: '2023',
      description: language === 'ar' 
        ? 'إتقان برامج مايكروسوفت أوفيس: Excel, Word, PowerPoint'
        : 'Microsoft Office proficiency: Excel, Word, PowerPoint',
      color: 'from-green-500 to-emerald-500',
      skills: ['Excel', 'Word', 'PowerPoint'],
    },
    {
      title: 'Java Programming',
      issuer: language === 'ar' ? 'منصة تعليمية' : 'Online Platform',
      date: '2023',
      description: language === 'ar' 
        ? 'أساسيات البرمجة بلغة جافا والبرمجة الكائنية'
        : 'Java programming fundamentals and Object-Oriented Programming',
      color: 'from-orange-500 to-red-500',
      skills: ['Java', 'OOP', 'Data Structures'],
    },
    {
      title: 'C++ Programming',
      issuer: language === 'ar' ? 'منصة تعليمية' : 'Online Platform',
      date: '2022',
      description: language === 'ar' 
        ? 'البرمجة بلغة C++ وهياكل البيانات'
        : 'C++ programming and Data Structures',
      color: 'from-purple-500 to-pink-500',
      skills: ['C++', 'Algorithms', 'Problem Solving'],
    },
    {
      title: 'English Language',
      issuer: language === 'ar' ? 'معهد لغات' : 'Language Institute',
      date: '2022',
      description: language === 'ar' 
        ? 'شهادة إتقان اللغة الإنجليزية'
        : 'English Language Proficiency Certificate',
      color: 'from-indigo-500 to-blue-500',
      skills: ['Speaking', 'Writing', 'Reading'],
    },
  ];

  const openLightbox = (images: string[], startIndex: number = 0) => {
    setLightboxImages(images);
    setLightboxIndex(startIndex);
    setLightboxOpen(true);
  };

  const stats = [
    { 
      value: certificates.length, 
      label: language === 'ar' ? 'شهادة معتمدة' : 'Certificates',
      icon: Award 
    },
    { 
      value: certificates.reduce((acc, cert) => acc + cert.skills.length, 0), 
      label: language === 'ar' ? 'مهارة مكتسبة' : 'Skills Acquired',
      icon: Sparkles 
    },
    { 
      value: '3+', 
      label: language === 'ar' ? 'سنوات خبرة' : 'Years Learning',
      icon: Calendar 
    },
  ];

  return (
    <section id="certificates" className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-secondary/5 to-background">
      {/* Background decorations */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <motion.div 
        className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px]"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <motion.div 
        className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      <div className="container relative z-10 px-6">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4"
            >
              <Award className="w-4 h-4" />
              <span className="text-sm font-medium">
                {language === 'ar' ? 'الشهادات والإنجازات' : 'Certificates & Achievements'}
              </span>
            </motion.div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">{t('about.courses')}</span>
            </h2>
            
            <motion.div 
              className="w-24 h-1.5 bg-gradient-primary mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
            />
            
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
              {language === 'ar' 
                ? 'الشهادات والدورات التدريبية التي حصلت عليها لتطوير مهاراتي المهنية والتقنية'
                : 'Professional certificates and training courses I obtained to develop my technical skills'}
            </p>
          </div>
        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-4 rounded-2xl glass"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-gradient">{stat.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <ScrollReveal key={cert.title} delay={index * 0.1} direction={index % 2 === 0 ? 'left' : 'right'}>
              <motion.div 
                className="group relative h-full"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Card */}
                <div className="glass rounded-2xl overflow-hidden shadow-card h-full relative">
                  {/* Gradient border effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Top gradient bar */}
                  <div className={`h-1.5 bg-gradient-to-r ${cert.color}`} />
                  
                  {/* Certificate image preview */}
                  {cert.images && cert.images.length > 0 && (
                    <div 
                      className="relative h-32 overflow-hidden cursor-pointer"
                      onClick={() => openLightbox(cert.images!)}
                    >
                      <img 
                        src={cert.images[0]} 
                        alt={cert.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <motion.div 
                        className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="flex items-center gap-2 text-white text-sm font-medium">
                          <Image className="w-5 h-5" />
                          {language === 'ar' ? `عرض الشهادة (${cert.images.length})` : `View Certificate (${cert.images.length})`}
                        </div>
                      </motion.div>
                    </div>
                  )}
                  
                  <div className="p-6 relative z-10">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div 
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-lg shrink-0`}
                        whileHover={{ rotate: 12, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Award className="w-7 h-7 text-white" />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-foreground truncate">{cert.title}</h3>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${cert.color}`} />
                          {cert.issuer}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
                      {cert.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {cert.skills.map((skill) => (
                        <motion.span 
                          key={skill} 
                          className="px-3 py-1.5 bg-secondary/50 hover:bg-secondary text-foreground/80 rounded-lg text-xs flex items-center gap-1.5 transition-colors"
                          whileHover={{ scale: 1.05 }}
                        >
                          <CheckCircle className="w-3 h-3 text-primary" />
                          {skill}
                        </motion.span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{cert.date}</span>
                      </div>
                      
                      {cert.images && cert.images.length > 0 && (
                        <motion.button
                          onClick={() => openLightbox(cert.images!)}
                          className="text-xs text-primary hover:text-primary/80 flex items-center gap-1"
                          whileHover={{ x: 3 }}
                        >
                          {language === 'ar' ? 'عرض' : 'View'}
                          <ExternalLink className="w-3 h-3" />
                        </motion.button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Call to action */}
        <ScrollReveal delay={0.5}>
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <p className="text-muted-foreground mb-4">
              {language === 'ar' 
                ? 'مستمر في التعلم واكتساب مهارات جديدة'
                : 'Continuously learning and acquiring new skills'}
            </p>
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-white font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="w-4 h-4" />
              {language === 'ar' ? 'التطور المستمر' : 'Continuous Growth'}
            </motion.div>
          </motion.div>
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

export default CertificatesSection;
