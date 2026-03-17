"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { Mail } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formMessage, setFormMessage] = useState('');

  const handleContactSubmit = async (email: string) => {
    setFormStatus('loading');
    setFormMessage('');

    try {
      // Simulate form submission with a delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Here you would typically send the email to your backend
      // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify({ email }) })

      setFormStatus('success');
      setFormMessage('Thank you for contacting us! We\'ll get back to you shortly.');

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
        setFormMessage('');
      }, 3000);
    } catch (error) {
      setFormStatus('error');
      setFormMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="mediumSmall"
      sizing="mediumSizeLargeTitles"
      background="blurBottom"
      cardStyle="layered-gradient"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="solid"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="WhitePop"
          navItems={[
            { name: "Home", id: "/" },
            { name: "How It Works", id: "#how-it-works" },
            { name: "Before & After", id: "#before-after" },
            { name: "Benefits", id: "#benefits" },
            { name: "Reviews", id: "#testimonials" },
            { name: "FAQ", id: "#faq" },
            { name: "Contact", id: "/contact" }
          ]}
          button={{ text: "Shop Now", href: "/#pricing" }}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get In Touch"
          title="Contact Us"
          description="Have questions about WhitePop Pro? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
          tagIcon={Mail}
          tagAnimation="slide-up"
          inputPlaceholder="Enter your email"
          buttonText="Send Message"
          termsText="By submitting this form, you agree to our Terms and Conditions and Privacy Policy."
          onSubmit={handleContactSubmit}
          useInvertedBackground={false}
          ariaLabel="Contact us section"
        />
      </div>

      {formStatus !== 'idle' && (
        <div className="fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg bg-card border border-accent">
          {formStatus === 'loading' && (
            <p className="text-foreground">Sending your message...</p>
          )}
          {formStatus === 'success' && (
            <p className="text-green-600">{formMessage}</p>
          )}
          {formStatus === 'error' && (
            <p className="text-red-600">{formMessage}</p>
          )}
        </div>
      )}

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="WhitePop Pro"
          columns={[
            {
              title: "Product",              items: [
                { label: "Whitening Strips", href: "/#pricing" },
                { label: "How It Works", href: "/#how-it-works" },
                { label: "Benefits", href: "/#benefits" },
                { label: "Results", href: "/#before-after" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "#" },
                { label: "Contact", href: "/contact" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" }
              ]
            },
            {
              title: "Support",              items: [
                { label: "FAQ", href: "/#faq" },
                { label: "Shipping Info", href: "#" },
                { label: "Returns", href: "#" },
                { label: "Track Order", href: "#" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Disclaimer", href: "#" },
                { label: "Cookie Policy", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2025 WhitePop Pro. All rights reserved. | Dentist Approved | Made with 💚 for your smile."
          ariaLabel="WhitePop Pro footer"
        />
      </div>
    </ThemeProvider>
  );
}