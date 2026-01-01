import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Linkedin, Twitter, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { ScrollReveal } from './ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { z } from 'zod';

// Email validation schema
const emailSchema = z.string().trim().email();

const validateEmail = (email: string): boolean => {
  try {
    emailSchema.parse(email);
    return true;
  } catch {
    return false;
  }
};

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/Mahmoud199', label: 'Facebook', color: 'hover:bg-blue-600' },
  { icon: Twitter, href: 'https://x.com/mmwdmmd554019', label: 'X', color: 'hover:bg-gray-700' },
  { icon: Instagram, href: 'https://www.instagram.com/mahmoud_199mohamed', label: 'Instagram', color: 'hover:bg-pink-600' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/mahmoud-m-209694024', label: 'LinkedIn', color: 'hover:bg-blue-700' },
];

const ContactSection = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'Mahamud199mohamed@gmail.com',
      href: 'mailto:Mahamud199mohamed@gmail.com'
    },
    {
      icon: Phone,
      label: t('contact.phone'),
      value: '+249 0904628457',
      subValue: '+249 0110218812',
      href: 'tel:+2490904628457'
    },
    {
      icon: MapPin,
      label: t('contact.location'),
      value: t('hero.location'),
    },
  ];

  const formFields = [
    { label: t('contact.name'), type: 'text', placeholder: t('contact.namePlaceholder'), name: 'name' },
    { label: t('contact.email'), type: 'email', placeholder: t('contact.emailPlaceholder'), name: 'email' },
    { label: t('contact.subject'), type: 'text', placeholder: t('contact.subjectPlaceholder'), name: 'subject' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error(t('contact.fillAll') || 'Please fill all fields');
      return;
    }

    if (!validateEmail(formData.email)) {
      toast.error(t('contact.invalidEmail') || 'Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) throw error;

      toast.success(t('contact.success') || 'Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error: any) {
      console.error('Error sending message:', error);
      toast.error(t('contact.error') || 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-secondary/20">
      <div className="absolute inset-0 grid-pattern opacity-10" />

      {/* Animated glowing background */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container relative z-10 px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">{t('contact.title')}</span>
            </h2>
            <motion.div
              className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
            />
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <ScrollReveal direction="right">
                <motion.div
                  className="glass rounded-2xl p-8 shadow-card"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-2xl font-bold text-foreground mb-6">{t('contact.info')}</h3>

                  <div className="space-y-4">
                    {contactInfo.map((item, i) => (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        className="flex items-center gap-4 p-4 bg-secondary/30 rounded-xl hover:bg-primary/10 transition-colors group block"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ x: -5 }}
                      >
                        <motion.div
                          className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <item.icon className="w-5 h-5 text-primary" />
                        </motion.div>
                        <div>
                          <p className="text-sm text-muted-foreground">{item.label}</p>
                          <p className="text-foreground font-medium" dir={item.href?.startsWith('tel') ? 'ltr' : 'auto'}>{item.value}</p>
                          {item.subValue && (
                            <p className="text-foreground/70 text-sm" dir={item.href?.startsWith('tel') ? 'ltr' : 'auto'}>{item.subValue}</p>
                          )}
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>

              {/* Social Links */}
              <ScrollReveal direction="right" delay={0.1}>
                <motion.div
                  className="glass rounded-2xl p-8 shadow-card"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-xl font-bold text-foreground mb-6">{t('contact.follow')}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social, i) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-3 p-4 bg-secondary/30 rounded-xl text-foreground hover:text-white ${social.color} transition-all duration-300`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <social.icon className="w-5 h-5" />
                        <span className="font-medium">{social.label}</span>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <ScrollReveal direction="left" delay={0.2}>
              <motion.div
                className="glass rounded-2xl p-8 shadow-card h-full"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-6">{t('contact.send')}</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  {formFields.map((field, i) => (
                    <motion.div
                      key={field.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <label className="block text-sm font-medium text-foreground mb-2">{field.label}</label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        placeholder={field.placeholder}
                        disabled={isSubmitting}
                      />
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <label className="block text-sm font-medium text-foreground mb-2">{t('contact.message')}</label>
                    <textarea
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                      placeholder={t('contact.messagePlaceholder')}
                      disabled={isSubmitting}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-primary text-primary-foreground font-semibold py-6 hover:opacity-90 transition-opacity relative overflow-hidden group"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                          <Send className="w-5 h-5" />
                        )}
                        {isSubmitting ? (t('contact.sending') || 'Sending...') : t('contact.sendBtn')}
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.5 }}
                      />
                    </Button>
                  </motion.div>
                </form>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
