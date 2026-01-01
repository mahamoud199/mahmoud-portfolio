import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { language, t } = useLanguage();

  const education = language === 'ar' ? [
    { semester: 'الفصل الأول', grade: '73.85%' },
    { semester: 'الفصل الثاني', grade: '74%' },
    { semester: 'الفصل الثالث', grade: '74%' },
    { semester: 'الفصل الخامس', grade: '81%' },
    { semester: 'الفصل السادس', grade: '80.2%' },
  ] : [
    { semester: '1st Semester', grade: '73.85%' },
    { semester: '2nd Semester', grade: '74%' },
    { semester: '3rd Semester', grade: '74%' },
    { semester: '5th Semester', grade: '81%' },
    { semester: '6th Semester', grade: '80.2%' },
  ];

  const courses = [
    'CCNA 200-301',
    'Microsoft Excel',
    'Microsoft PowerPoint',
    'Microsoft Word',
    'Java Programming',
    'C++ Programming',
    'English Language',
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Animated orb */}
      <motion.div 
        className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]"
        animate={{ 
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      
      <div className="container relative z-10 px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">{t('about.title')}</span>
            </h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Text */}
          <div className="space-y-6">
            <ScrollReveal direction="right">
              <motion.div 
                className="glass rounded-2xl p-8 shadow-card"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <motion.div 
                    className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <BookOpen className="w-5 h-5 text-primary" />
                  </motion.div>
                  {t('about.summary')}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {t('about.summaryText')}
                </p>
              </motion.div>
            </ScrollReveal>

            {/* Education */}
            <ScrollReveal direction="right" delay={0.1}>
              <motion.div 
                className="glass rounded-2xl p-8 shadow-card"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <motion.div 
                    className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </motion.div>
                  {t('about.education')}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-primary mt-2"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <div>
                      <h4 className="font-semibold text-foreground">{t('about.university')}</h4>
                      <p className="text-muted-foreground">{t('about.faculty')}</p>
                      <p className="text-sm text-primary">{t('about.degree')}</p>
                      <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{t('about.since')}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Grades */}
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {education.map((item, i) => (
                    <motion.div 
                      key={item.semester} 
                      className="bg-secondary/50 rounded-lg p-3 text-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ scale: 1.05, backgroundColor: 'hsl(174 72% 56% / 0.1)' }}
                    >
                      <p className="text-xs text-muted-foreground">{item.semester}</p>
                      <p className="text-lg font-bold text-primary">{item.grade}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          </div>

          {/* Courses & Certifications */}
          <ScrollReveal direction="left" delay={0.2}>
            <div>
              <motion.div 
                className="glass rounded-2xl p-8 shadow-card"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <motion.div 
                    className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Award className="w-5 h-5 text-primary" />
                  </motion.div>
                  {t('about.courses')}
                </h3>
                <div className="grid gap-3">
                  {courses.map((course, index) => (
                    <motion.div 
                      key={course}
                      className="flex items-center gap-4 p-4 bg-secondary/30 rounded-xl cursor-default"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ 
                        backgroundColor: 'hsl(174 72% 56% / 0.1)',
                        x: language === 'ar' ? -5 : 5,
                      }}
                    >
                      <motion.div 
                        className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.4 }}
                      >
                        {index + 1}
                      </motion.div>
                      <span className="text-foreground font-medium">{course}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Personal Info Card */}
              <motion.div 
                className="glass rounded-2xl p-8 shadow-card mt-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-bold text-foreground mb-4">{t('about.personalInfo')}</h3>
                <div className="space-y-3 text-muted-foreground">
                  {[
                    { label: t('about.nationality'), value: t('about.sudanese') },
                    { label: t('about.locationLabel'), value: t('hero.location') },
                  ].map((item, i) => (
                    <motion.div 
                      key={item.label}
                      className="flex justify-between"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                    >
                      <span>{item.label}</span>
                      <span className="text-foreground">{item.value}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;