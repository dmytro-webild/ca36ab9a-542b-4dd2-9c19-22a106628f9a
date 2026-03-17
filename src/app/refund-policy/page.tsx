"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import LegalSection from '@/components/legal/LegalSection';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';

export default function RefundPolicyPage() {
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
          title="Refund Policy"
          subtitle="Last Updated: January 2025"
          sections={[
            {
              heading: "1. 30-Day Money-Back Guarantee",              content: [
                {
                  type: "paragraph",                  text: "At WhitePop Pro, we stand behind the quality of our products. We offer a 30-day money-back guarantee on all purchases. If you are not completely satisfied with your WhitePop Pro whitening strips for any reason, we will refund your purchase price in full."
                },
                {
                  type: "paragraph",                  text: "This guarantee is our way of ensuring that you can purchase with complete confidence. We believe in our product and want you to experience the same amazing results that thousands of our satisfied customers have enjoyed."
                }
              ]
            },
            {
              heading: "2. Eligibility for Refunds",              content: [
                {
                  type: "paragraph",                  text: "To be eligible for a refund, the following conditions must be met:"
                },
                {
                  type: "numbered-list",                  items: [
                    "The request for a refund must be made within 30 days of the original purchase date",                    "The product must be returned in its original packaging or in a resalable condition",                    "You must provide proof of purchase (order number or receipt)",                    "The product should not have been used excessively or damaged due to misuse",                    "You must complete our refund request form available on our website or contact customer service"
                  ]
                }
              ]
            },
            {
              heading: "3. Refund Process",              content: [
                {
                  type: "paragraph",                  text: "To initiate a refund, please follow these steps:"
                },
                {
                  type: "numbered-list",                  items: [
                    "Contact our customer service team at refunds@whitepoppro.com or call 1-800-WHITE-POP",                    "Provide your order number and reason for return",                    "We will provide you with a prepaid return shipping label",                    "Ship the product back to us in its original packaging",                    "Once we receive and inspect your return, we will process your refund within 5-7 business days",                    "The refund will be credited to your original payment method"
                  ]
                }
              ]
            },
            {
              heading: "4. Shipping Costs",              content: [
                {
                  type: "paragraph",                  text: "We provide a prepaid return shipping label for all refund requests, so you do not incur any shipping costs to return your product. However, if you choose to use a different shipping method or carrier, you will be responsible for those costs."
                }
              ]
            },
            {
              heading: "5. Non-Refundable Items",              content: [
                {
                  type: "paragraph",                  text: "The following items are not eligible for refunds:"
                },
                {
                  type: "list",                  items: [
                    "Products purchased during promotional sales or clearance events (at the discretion of management)",                    "Products that have been used excessively or are damaged due to misuse",                    "Promotional or gift items included with an order",                    "Orders placed more than 30 days ago"
                  ]
                }
              ]
            },
            {
              heading: "6. Defective Products",              content: [
                {
                  type: "paragraph",                  text: "If you receive a defective or damaged product, please contact us immediately. We will replace the product at no cost to you or issue a full refund, including return shipping. Please provide photos of the defective product when contacting us."
                }
              ]
            },
            {
              heading: "7. Refund Disputes",              content: [
                {
                  type: "paragraph",                  text: "If there is a dispute regarding a refund request, we will work with you to resolve the issue fairly. Our customer service team is committed to finding a resolution that satisfies all parties involved. In cases where we cannot reach an agreement, we may refuse the refund and explain our reasoning."
                }
              ]
            },
            {
              heading: "8. Partial Refunds",              content: [
                {
                  type: "paragraph",                  text: "In some cases, we may offer a partial refund if the product has been used or if there is wear and tear on the packaging. The amount of the partial refund will be determined based on the condition of the returned product and will be communicated to you before processing."
                }
              ]
            },
            {
              heading: "9. Contact Us",              content: [
                {
                  type: "paragraph",                  text: "If you have any questions about our refund policy or need to initiate a refund, please contact us:"
                },
                {
                  type: "list",                  items: [
                    "Email: refunds@whitepoppro.com",                    "Phone: 1-800-WHITE-POP",                    "Mailing Address: WhitePop Pro Returns, 456 Return Way, Bright City, BC 12345, Canada",                    "Customer Service Hours: Monday - Friday, 9 AM - 5 PM EST"
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