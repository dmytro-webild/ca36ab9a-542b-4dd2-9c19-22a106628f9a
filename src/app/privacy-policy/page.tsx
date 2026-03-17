"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import LegalSection from '@/components/legal/LegalSection';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';

export default function PrivacyPolicyPage() {
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
            { name: "How It Works", id: "how-it-works" },
            { name: "Before & After", id: "before-after" },
            { name: "Benefits", id: "benefits" },
            { name: "Reviews", id: "testimonials" },
            { name: "FAQ", id: "faq" }
          ]}
          button={{ text: "Shop Now", href: "/" }}
        />
      </div>

      <div id="legal" data-section="legal">
        <LegalSection
          layout="page"
          title="Privacy Policy"
          subtitle="Last Updated: January 2025"
          sections={[
            {
              heading: "1. Introduction",              content: [
                {
                  type: "paragraph",                  text: "WhitePop Pro (\"Company\" or \"We\") respects the privacy of our users (\"User\" or \"You\"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our products and services."
                },
                {
                  type: "paragraph",                  text: "Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our Services. By accessing and using WhitePop Pro, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy."
                }
              ]
            },
            {
              heading: "2. Information We Collect",              content: [
                {
                  type: "paragraph",                  text: "We may collect information about you in a variety of ways. The information we may collect on the Site includes:"
                },
                {
                  type: "list",                  items: [
                    "Personal Data: Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when you register with the Site and when you choose to participate in various activities related to the Site.",                    "Financial Data: Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Site.",                    "Data From Social Networks: User information from social networks, including your name, your social network username, location, gender, birth date, email address, profile picture, and public data for contacts, if you connect your account to such social networks.",                    "Mobile Device Data: Mobile device information, such as device type, your mobile device unique ID, mobile operating system, and mobile internet browser type.",                    "Third-Party Data: Information from third parties, such as personal information or network friends if you connect your account to the third party and grant the Site permission to access this information."
                  ]
                }
              ]
            },
            {
              heading: "3. Use of Your Information",              content: [
                {
                  type: "paragraph",                  text: "Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:"
                },
                {
                  type: "numbered-list",                  items: [
                    "Process your transactions and send related information",                    "Generate a personal profile about you so that future visits to the Site will be personalized as possible",                    "Increase the efficiency and operation of the Site",                    "Monitor and analyze usage and trends to improve your experience with the Site",                    "Notify you of updates to the Site",                    "Offer new products, services, and/or recommendations to you"
                  ]
                }
              ]
            },
            {
              heading: "4. Disclosure of Your Information",              content: [
                {
                  type: "paragraph",                  text: "We may share information we have collected about you in certain situations:"
                },
                {
                  type: "list",                  items: [
                    "By Law or to Protect Rights: If we believe the release of information about you is necessary to comply with the law, enforce our Site policies, or protect ours or others' rights, property, or safety.",                    "Third-Party Service Providers: We may share your information with third parties that perform services for us, including payment processors, data analysis providers, email delivery services, hosting providers, customer service, and marketing assistance.",                    "Business Transfers: If we are involved in a merger, acquisition, or asset sale, your information may be transferred as part of that transaction."
                  ]
                }
              ]
            },
            {
              heading: "5. Security of Your Information",              content: [
                {
                  type: "paragraph",                  text: "We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable."
                }
              ]
            },
            {
              heading: "6. Contact Us",              content: [
                {
                  type: "paragraph",                  text: "If you have questions or comments about this Privacy Policy, please contact us at:"
                },
                {
                  type: "list",                  items: [
                    "Email: privacy@whitepoppro.com",                    "Mailing Address: WhitePop Pro, 123 Smile Street, Bright City, BC 12345, Canada",                    "Phone: 1-800-WHITE-POP"
                  ]
                }
              ]
            }
          ]}
          titleClassName="text-foreground"
          headingClassName="text-foreground"
          contentClassName="text-foreground"
        />
      </div>

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
                { label: "Contact", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" }
              ]
            },
            {
              title: "Support",              items: [
                { label: "FAQ", href: "/#faq" },
                { label: "Shipping Info", href: "/shipping-policy" },
                { label: "Returns", href: "/refund-policy" },
                { label: "Track Order", href: "#" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms of Service", href: "/terms-of-service" },
                { label: "Refund Policy", href: "/refund-policy" },
                { label: "Cookie Policy", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2025 WhitePop Pro. All rights reserved. | Dentist Approved | Made with 💚 for your smile."
          ariaLabel="WhitePop Pro footer"
          logoTextClassName="text-foreground"
          columnTitleClassName="text-foreground"
          columnItemClassName="text-foreground"
          copyrightTextClassName="text-foreground"
        />
      </div>
    </ThemeProvider>
  );
}