import { motion } from 'framer-motion';
import { Network, Code, Smartphone, Palette, Users, Brain, Cpu, Server, Layers, Wrench, Terminal, Monitor } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const SkillsSection = () => {
  const { t, language } = useLanguage();

  const technicalSkills = [
    {
      category: t('skills.networking'),
      icon: Network,
      iconColor: 'text-cyan-400',
      skills: ['CCNA', 'VLANs', 'VTP', 'Router-on-a-Stick', 'ACLs', 'Routing'],
      color: 'from-cyan-500 to-blue-500',
    },
    {
      category: t('skills.webDev'),
      icon: Code,
      iconColor: 'text-emerald-400',
      skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      color: 'from-emerald-500 to-teal-500',
    },
    {
      category: t('skills.appDev'),
      icon: Smartphone,
      iconColor: 'text-violet-400',
      skills: ['Android (Kotlin)', 'Flutter', 'Java', 'C++', 'Python'],
      color: 'from-violet-500 to-purple-500',
    },
    {
      category: t('skills.design'),
      icon: Palette,
      iconColor: 'text-pink-400',
      skills: language === 'ar' 
        ? ['بوستات سوشيال ميديا', 'بوسترات', 'كروت أعمال', 'لوحات إعلانية', 'هويات بصرية']
        : ['Social Media Posts', 'Posters', 'Business Cards', 'Billboards', 'Branding'],
      color: 'from-pink-500 to-rose-500',
    },
  ];

  const softSkills = [
    { name: t('skills.teamwork'), icon: Users, iconColor: 'text-blue-400' },
    { name: t('skills.problemSolving'), icon: Brain, iconColor: 'text-purple-400' },
    { name: t('skills.selfLearning'), icon: Cpu, iconColor: 'text-green-400' },
    { name: t('skills.timeManagement'), icon: Layers, iconColor: 'text-orange-400' },
    { name: t('skills.communication'), icon: Server, iconColor: 'text-cyan-400' },
    { name: t('skills.analytical'), icon: Terminal, iconColor: 'text-pink-400' },
  ];

  const tools = [
    { name: 'Git/GitHub', icon: Terminal, color: 'text-orange-400' },
    { name: 'VS Code', icon: Code, color: 'text-blue-400' },
    { name: 'Android Studio', icon: Smartphone, color: 'text-green-400' },
    { name: 'Figma', icon: Palette, color: 'text-purple-400' },
    { name: 'Packet Tracer', icon: Network, color: 'text-cyan-400' },
    { name: 'GNS3', icon: Server, color: 'text-teal-400' },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-secondary/20">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      {/* Animated background */}
      <motion.div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px]"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <div className="container relative z-10 px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">{t('skills.title')}</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {technicalSkills.map((category, index) => (
            <ScrollReveal key={category.category} delay={index * 0.1} direction={index % 2 === 0 ? 'left' : 'right'}>
              <motion.div 
                className="glass rounded-2xl p-6 shadow-card group cursor-pointer"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 0 60px hsl(174 72% 56% / 0.15)',
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <category.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-foreground">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.span 
                      key={skill}
                      className="px-4 py-2 bg-secondary/50 text-foreground rounded-full text-sm font-medium hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Soft Skills */}
        <ScrollReveal delay={0.2}>
          <motion.div 
            className="glass rounded-2xl p-8 shadow-card"
            whileHover={{ boxShadow: '0 0 40px hsl(174 72% 56% / 0.1)' }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">{t('skills.soft')}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  className="flex flex-col items-center gap-3 p-4 bg-secondary/30 rounded-xl group cursor-default"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: 'hsl(174 72% 56% / 0.1)',
                  }}
                >
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    <skill.icon className={`w-6 h-6 ${skill.iconColor}`} />
                  </motion.div>
                  <span className="text-sm font-medium text-foreground text-center">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Tools */}
        <ScrollReveal delay={0.3}>
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">{t('skills.tools')}</p>
            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool, i) => (
                <motion.div 
                  key={tool.name}
                  className="px-6 py-3 glass rounded-full flex items-center gap-2 cursor-default"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ 
                    scale: 1.1,
                    borderColor: 'hsl(174 72% 56% / 0.5)',
                  }}
                >
                  <tool.icon className={`w-4 h-4 ${tool.color}`} />
                  <span className="text-foreground font-medium">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SkillsSection;
