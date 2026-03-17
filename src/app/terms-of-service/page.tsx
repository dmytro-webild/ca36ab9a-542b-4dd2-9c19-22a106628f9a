"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import LegalSection from '@/components/legal/LegalSection';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';

export default function TermsOfServicePage() {
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
          title="Terms of Service"
          subtitle="Last Updated: January 2025"
          sections={[
            {
              heading: "1. Agreement to Terms",              content: [
                {
                  type: "paragraph",                  text: "By accessing and using the WhitePop Pro website and purchasing our products, you accept and agree to be bound by and comply with these Terms of Service. If you do not agree to abide by the above, please do not use this service."
                }
              ]
            },
            {
              heading: "2. Use License",              content: [
                {
                  type: "paragraph",                  text: "Permission is granted to temporarily download one copy of the materials (information or software) on WhitePop Pro's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:"
                },
                {
                  type: "list",                  items: [
                    "Modifying or copying the materials",                    "Using the materials for any commercial purpose or for any public display",                    "Attempting to reverse compile, disassemble, or reverse engineer any software contained on the website",                    "Transferring the materials to another person or \"mirroring\" the materials on any other server",                    "Removing any copyright or other proprietary notations from the materials",                    "Transferring the materials to another person or \"mirroring\" the materials on any other server"
                  ]
                }
              ]
            },
            {
              heading: "3. Disclaimer",              content: [
                {
                  type: "paragraph",                  text: "The materials on WhitePop Pro's website are provided on an 'as is' basis. WhitePop Pro makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights."
                }
              ]
            },
            {
              heading: "4. Limitations",              content: [
                {
                  type: "paragraph",                  text: "In no event shall WhitePop Pro or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on WhitePop Pro's website, even if WhitePop Pro or an authorized representative has been notified orally or in writing of the possibility of such damage."
                }
              ]
            },
            {
              heading: "5. Accuracy of Materials",              content: [
                {
                  type: "paragraph",                  text: "The materials appearing on WhitePop Pro's website could include technical, typographical, or photographic errors. WhitePop Pro does not warrant that any of the materials on its website are accurate, complete, or current. WhitePop Pro may make changes to the materials contained on its website at any time without notice."
                }
              ]
            },
            {
              heading: "6. Materials and Content",              content: [
                {
                  type: "paragraph",                  text: "WhitePop Pro does not claim ownership of the materials you provide to WhitePop Pro (including feedback and suggestions) or post, upload, input, or submit to any WhitePop Pro website or its associated services (hereinafter \"Submissions\"). However, by posting, uploading, inputting, providing, or submitting your Submissions you are granting WhitePop Pro, its affiliates and necessary sublicensees permission to use your Submissions in connection with the operation of their business including, without limitation, the rights to copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, and sell such Submissions."
                }
              ]
            },
            {
              heading: "7. Links",              content: [
                {
                  type: "paragraph",                  text: "WhitePop Pro has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by WhitePop Pro of the site. Use of any such linked website is at the user's own risk."
                }
              ]
            },
            {
              heading: "8. Modifications",              content: [
                {
                  type: "paragraph",                  text: "WhitePop Pro may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service."
                }
              ]
            },
            {
              heading: "9. Governing Law",              content: [
                {
                  type: "paragraph",                  text: "These terms and conditions are governed by and construed in accordance with the laws of British Columbia, Canada, and you irrevocably submit to the exclusive jurisdiction of the courts in that location."
                }
              ]
            },
            {
              heading: "10. Product Warranty and Use",              content: [
                {
                  type: "paragraph",                  text: "WhitePop Pro whitening strips are cosmetic products designed for teeth whitening. By purchasing and using our products, you acknowledge that:"
                },
                {
                  type: "list",                  items: [
                    "You have read and understood all product instructions and warnings",                    "You are not allergic to any ingredients in our products",                    "You will not use the product if you have cavities or sensitive teeth without consulting a dentist",                    "You understand that results may vary by individual",                    "You are at least 18 years of age or have parental consent",                    "You will not use this product for any purpose other than as directed"
                  ]
                }
              ]
            },
            {
              heading: "11. Limitation of Liability",              content: [
                {
                  type: "paragraph",                  text: "To the fullest extent permitted by applicable law, in no event shall WhitePop Pro be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, in connection with your purchase or use of our products."
                }
              ]
            },
            {
              heading: "12. Contact Information",              content: [
                {
                  type: "paragraph",                  text: "If you have any questions about these Terms of Service, please contact us at:"
                },
                {
                  type: "list",                  items: [
                    "Email: support@whitepoppro.com",                    "Phone: 1-800-WHITE-POP",                    "Mailing Address: WhitePop Pro, 123 Smile Street, Bright City, BC 12345, Canada"
                  ]
                }
              ]
            }
          ]}
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
        />
      </div>
    </ThemeProvider>
  );
}