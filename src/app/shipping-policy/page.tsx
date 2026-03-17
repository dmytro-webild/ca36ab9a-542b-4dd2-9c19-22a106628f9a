"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import LegalSection from '@/components/legal/LegalSection';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';

export default function ShippingPolicyPage() {
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
          title="Shipping Policy"
          subtitle="Last Updated: January 2025"
          sections={[
            {
              heading: "1. Processing Time",              content: [
                {
                  type: "paragraph",                  text: "All orders are processed and shipped within 1-2 business days from the date of purchase. Orders placed on weekends or holidays will be processed on the next business day. You will receive a shipping confirmation email with tracking information once your order has been dispatched."
                }
              ]
            },
            {
              heading: "2. Shipping Methods and Delivery Times",              content: [
                {
                  type: "paragraph",                  text: "WhitePop Pro offers the following shipping options:"
                },
                {
                  type: "numbered-list",                  items: [
                    "Standard Shipping (Free on orders over $35): 5-7 business days. $5.95 for orders under $35.",                    "Express Shipping: 2-3 business days. $12.95",                    "Overnight Shipping: 1 business day. $24.95",                    "International Shipping: 7-15 business days. Varies by location."
                  ]
                },
                {
                  type: "paragraph",                  text: "Please note that these are estimated delivery times and may vary depending on carrier delays, weather conditions, and other unforeseen circumstances. WhitePop Pro is not responsible for delays caused by shipping carriers or weather events."
                }
              ]
            },
            {
              heading: "3. Shipping Regions",              content: [
                {
                  type: "paragraph",                  text: "We currently ship to the following regions:"
                },
                {
                  type: "list",                  items: [
                    "Canada (all provinces and territories)",                    "United States (all 50 states and territories)",                    "Select international locations (additional fees may apply)"
                  ]
                },
                {
                  type: "paragraph",                  text: "If your location is not listed, please contact our customer service team to inquire about special shipping arrangements."
                }
              ]
            },
            {
              heading: "4. Shipping Address",              content: [
                {
                  type: "paragraph",                  text: "Please ensure that you provide an accurate and complete shipping address at checkout. WhitePop Pro is not responsible for packages delivered to incorrect addresses provided by the customer. If you need to change your shipping address, contact us immediately before your order is dispatched."
                }
              ]
            },
            {
              heading: "5. Free Shipping",              content: [
                {
                  type: "paragraph",                  text: "Free standard shipping is available on all orders over $35.00. This offer applies to addresses within Canada and the United States only. Free shipping is automatically applied at checkout when your order total exceeds the minimum."
                }
              ]
            },
            {
              heading: "6. Tracking Your Order",              content: [
                {
                  type: "paragraph",                  text: "Once your order has been shipped, you will receive an email containing a tracking number. You can use this tracking number to monitor your package in real-time through our carrier's website. For questions about your shipment, please contact our customer service team with your tracking number."
                }
              ]
            },
            {
              heading: "7. Lost or Damaged Packages",              content: [
                {
                  type: "paragraph",                  text: "In the rare event that your package is lost or arrives damaged, please contact us immediately with photos and your tracking number. We will file a claim with the carrier and either replace your order or issue a refund at no cost to you. Most lost or damaged package issues are resolved within 5-10 business days."
                }
              ]
            },
            {
              heading: "8. Customs and International Orders",              content: [
                {
                  type: "paragraph",                  text: "For international orders, customers are responsible for any customs fees, duties, or taxes that may apply upon delivery. These fees are typically collected by customs authorities and are beyond WhitePop Pro's control. We recommend checking with your local customs office before placing an international order."
                }
              ]
            },
            {
              heading: "9. Signature Confirmation",              content: [
                {
                  type: "paragraph",                  text: "Signature confirmation is not required for standard WhitePop Pro shipments. However, if you prefer signature confirmation, you can request this option during checkout or by contacting customer service for an additional fee."
                }
              ]
            },
            {
              heading: "10. Order Updates",              content: [
                {
                  type: "paragraph",                  text: "You will receive email updates at the following stages:"
                },
                {
                  type: "list",                  items: [
                    "Order confirmation with purchase details",                    "Processing notification when your order is being prepared",                    "Shipping confirmation with tracking number",                    "Delivery confirmation once your package arrives"
                  ]
                }
              ]
            },
            {
              heading: "11. Contact Us",              content: [
                {
                  type: "paragraph",                  text: "If you have questions about shipping or need to make changes to your order, please contact us:"
                },
                {
                  type: "list",                  items: [
                    "Email: shipping@whitepoppro.com",                    "Phone: 1-800-WHITE-POP",                    "Customer Service Hours: Monday - Friday, 9 AM - 5 PM EST"
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