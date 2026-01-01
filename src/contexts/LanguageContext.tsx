import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'rtl' | 'ltr';
}

const translations = {
  ar: {
    // Navbar
    'nav.home': 'الرئيسية',
    'nav.about': 'نبذة عني',
    'nav.skills': 'المهارات',
    'nav.projects': 'المشاريع',
    'nav.contact': 'التواصل',
    'nav.hire': 'توظيفي',
    
    // Hero
    'hero.name1': 'محمود محمد',
    'hero.name2': 'محمد سعيد',
    'hero.role1': 'طالب تقانة معلومات',
    'hero.role2': 'مطور مبتدئ',
    'hero.role3': 'مصمم جرافيك',
    'hero.location': 'السودان - كوستي',
    'hero.projects': 'مشاريعي',
    'hero.contact': 'تواصل معي',
    'hero.downloadCV': 'تحميل السيرة الذاتية',
    
    // About
    'about.title': 'نبذة عني',
    'about.summary': 'ملخص احترافي',
    'about.summaryText': 'طالب تقانة معلومات متحفز ولدي خبرة عملية قوية في تطوير الويب، تطبيقات الموبايل، الشبكات (CCNA)، والأنظمة المدعومة بالذكاء الاصطناعي. شغوف ببناء حلول واقعية، الأتمتة، والمنصات الرقمية الحديثة. ماهر في التنفيذ التقني والتصميم الإبداعي، مع خبرة عملية في مشاريع أكاديمية ومستقلة متعددة.',
    'about.education': 'التعليم',
    'about.university': 'جامعة النيل الأبيض',
    'about.faculty': 'كلية علوم الحاسوب وتقانة المعلومات',
    'about.degree': 'بكالوريوس تقانة المعلومات - الفصل السادس',
    'about.since': 'منذ 2022',
    'about.courses': 'الدورات والشهادات',
    'about.personalInfo': 'معلومات شخصية',
    'about.nationality': 'الجنسية:',
    'about.sudanese': 'سوداني',
    'about.locationLabel': 'الموقع:',
    
    // Skills
    'skills.title': 'المهارات',
    'skills.networking': 'الشبكات',
    'skills.webDev': 'تطوير الويب',
    'skills.appDev': 'تطوير التطبيقات',
    'skills.design': 'التصميم',
    'skills.soft': 'المهارات الشخصية',
    'skills.tools': 'الأدوات التي أستخدمها',
    'skills.teamwork': 'العمل ضمن فريق',
    'skills.problemSolving': 'حل المشكلات',
    'skills.selfLearning': 'التعلم الذاتي',
    'skills.timeManagement': 'تنظيم الوقت',
    'skills.communication': 'التواصل الفعال',
    'skills.analytical': 'التفكير التحليلي',
    
    // Projects
    'projects.title': 'المشاريع',
    'projects.subtitle': 'مجموعة من المشاريع التي قمت بتنفيذها في مجالات تطوير الويب والتطبيقات والشبكات والتصميم',
    'projects.demo': 'Demo متاح عند الطلب',
    'projects.viewDesign': 'عرض التصميم',
    
    // Contact
    'contact.title': 'تواصل معي',
    'contact.subtitle': 'أنا دائماً مستعد للتواصل ومناقشة الفرص الجديدة والمشاريع المثيرة',
    'contact.info': 'معلومات التواصل',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'الهاتف',
    'contact.location': 'الموقع',
    'contact.follow': 'تابعني على',
    'contact.send': 'أرسل رسالة',
    'contact.name': 'الاسم',
    'contact.namePlaceholder': 'أدخل اسمك',
    'contact.emailPlaceholder': 'أدخل بريدك الإلكتروني',
    'contact.subject': 'الموضوع',
    'contact.subjectPlaceholder': 'موضوع الرسالة',
    'contact.message': 'الرسالة',
    'contact.messagePlaceholder': 'اكتب رسالتك هنا...',
    'contact.sendBtn': 'إرسال الرسالة',
    
    // Footer
    'footer.madeWith': 'صُنع بـ',
    'footer.inSudan': 'في السودان',
    'footer.rights': 'جميع الحقوق محفوظة',
    
    // Design categories
    'design.socialMedia': 'بوستات سوشيال ميديا',
    'design.posters': 'بوسترات',
    'design.businessCards': 'كروت أعمال',
    'design.billboards': 'لوحات إعلانية',
    'design.branding': 'هويات بصرية',
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.hire': 'Hire Me',
    
    // Hero
    'hero.name1': 'Mahmoud Mohamed',
    'hero.name2': 'Mohamed Said',
    'hero.role1': 'IT Student',
    'hero.role2': 'Junior Developer',
    'hero.role3': 'Graphic Designer',
    'hero.location': 'Sudan - Kosti',
    'hero.projects': 'My Projects',
    'hero.contact': 'Contact Me',
    'hero.downloadCV': 'Download CV',
    
    // About
    'about.title': 'About Me',
    'about.summary': 'Professional Summary',
    'about.summaryText': 'Motivated Information Technology student with strong practical experience in web development, mobile applications, networking (CCNA), and AI-powered systems. Passionate about building real-world solutions, automation, and modern digital platforms. Skilled in both technical implementation and creative design, with hands-on experience in multiple academic and freelance projects.',
    'about.education': 'Education',
    'about.university': 'White Nile University',
    'about.faculty': 'Faculty of Computer Science & IT',
    'about.degree': 'BSc Information Technology - 6th Semester',
    'about.since': 'Since 2022',
    'about.courses': 'Courses & Certifications',
    'about.personalInfo': 'Personal Info',
    'about.nationality': 'Nationality:',
    'about.sudanese': 'Sudanese',
    'about.locationLabel': 'Location:',
    
    // Skills
    'skills.title': 'Skills',
    'skills.networking': 'Networking',
    'skills.webDev': 'Web Development',
    'skills.appDev': 'App Development',
    'skills.design': 'Design',
    'skills.soft': 'Soft Skills',
    'skills.tools': 'Tools I Use',
    'skills.teamwork': 'Teamwork',
    'skills.problemSolving': 'Problem Solving',
    'skills.selfLearning': 'Self Learning',
    'skills.timeManagement': 'Time Management',
    'skills.communication': 'Communication',
    'skills.analytical': 'Analytical Thinking',
    
    // Projects
    'projects.title': 'Projects',
    'projects.subtitle': 'A collection of projects in web development, apps, networking, and design',
    'projects.demo': 'Demo available on request',
    'projects.viewDesign': 'View Design',
    
    // Contact
    'contact.title': 'Contact Me',
    'contact.subtitle': 'I\'m always ready to discuss new opportunities and exciting projects',
    'contact.info': 'Contact Information',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.follow': 'Follow Me',
    'contact.send': 'Send Message',
    'contact.name': 'Name',
    'contact.namePlaceholder': 'Enter your name',
    'contact.emailPlaceholder': 'Enter your email',
    'contact.subject': 'Subject',
    'contact.subjectPlaceholder': 'Message subject',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Write your message...',
    'contact.sendBtn': 'Send Message',
    
    // Footer
    'footer.madeWith': 'Made with',
    'footer.inSudan': 'in Sudan',
    'footer.rights': 'All rights reserved',
    
    // Design categories
    'design.socialMedia': 'Social Media Posts',
    'design.posters': 'Posters',
    'design.businessCards': 'Business Cards',
    'design.billboards': 'Billboards',
    'design.branding': 'Branding',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'ar';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ar']] || key;
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage, 
      t, 
      dir: language === 'ar' ? 'rtl' : 'ltr' 
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
