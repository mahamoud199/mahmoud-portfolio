import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import CertificatesSection from '@/components/CertificatesSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import profileLogo from '@/assets/profile-logo.png';

const Index = () => {
  const { language } = useLanguage();
  
  const siteTitle = language === 'ar' 
    ? 'محمود محمد - مطور ويب وتطبيقات | Portfolio'
    : 'Mahmoud Mohamed - Web & App Developer | Portfolio';
  
  const siteDescription = language === 'ar'
    ? 'بورتفوليو محمود محمد محمد سعيد - مطور ويب وتطبيقات، متخصص شبكات CCNA، مصمم جرافيك. طالب تقانة المعلومات بجامعة النيل الأبيض، السودان.'
    : 'Portfolio of Mahmoud Mohamed Mohamed Said - Web & App Developer, CCNA Network Specialist, Graphic Designer. IT Student at White Nile University, Sudan.';

  return (
    <>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <meta name="keywords" content="محمود محمد, Mahmoud Mohamed, مطور ويب, Web Developer, تطبيقات أندرويد, Android Apps, CCNA, شبكات, Networks, تصميم, Design, السودان, Sudan, Flutter, Kotlin, PHP" />
        <meta name="author" content="Mahmoud Mohamed Mohamed Said" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mahmoud-portfolio.lovable.app" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={profileLogo} />
        <meta property="og:locale" content={language === 'ar' ? 'ar_SD' : 'en_US'} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://mahmoud-portfolio.lovable.app" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={profileLogo} />
        
        {/* Additional SEO */}
        <link rel="canonical" href="https://mahmoud-portfolio.lovable.app" />
        <meta name="theme-color" content="#14b8a6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Mahmoud Portfolio" />
        
        {/* Structured Data - Person Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Mahmoud Mohamed Mohamed Said",
            "alternateName": "محمود محمد محمد سعيد",
            "jobTitle": ["Web Developer", "App Developer", "Network Specialist", "Graphic Designer"],
            "url": "https://mahmoud-portfolio.lovable.app",
            "email": "Mahamud199mohamed@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Kosti",
              "addressCountry": "Sudan"
            },
            "sameAs": [
              "https://www.facebook.com/Mahamoud199",
              "https://x.com/mmwdmmd554019",
              "https://www.instagram.com/mahmoud_199mohamed",
              "https://www.linkedin.com/in/محمود-محمد-080990328"
            ],
            "knowsAbout": ["Web Development", "Android Development", "CCNA", "Networking", "Graphic Design", "Flutter", "Kotlin", "PHP"]
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <CertificatesSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
