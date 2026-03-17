"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import MediaAbout from '@/components/sections/about/MediaAbout';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { CheckCircle, Clock, Shield, Smile, Sparkles, TrendingUp, Zap, Droplet, Leaf, Award, Zap as ZapIcon, Heart, Lock } from 'lucide-react';

export default function LandingPage() {
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
          button={{ text: "Shop Now", href: "#pricing" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="WhitePop Pro"
          description="Professional-grade teeth whitening in 30 minutes. Enamel-safe, peroxide-free formula with nano hydroxyapatite technology."
          buttons={[
            { text: "Get My Brighter Smile", href: "#pricing" },
            { text: "See Results", href: "#before-after" }
          ]}
          slides={[
            {
              imageSrc: "http://img.b2bpic.net/free-photo/happy-beautiful-girl-is-happy-smiling-laughing-look-stright-expressive-facial-expressions-cosmet_1258-136364.jpg?w=1200&h=800&q=80",              imageAlt: "Woman smiling brightly with WhitePop Pro results"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/mixed-race-black-blonde-model-with-curly-hair-closeup-mouth-painted-with-bright-blue-lipstick-smiling-watching-camera_633478-803.jpg?w=1200&h=800&q=80",              imageAlt: "Radiant smile showcasing WhitePop Pro whitening strips"
            }
          ]}
          autoplayDelay={4000}
          showDimOverlay={false}
          ariaLabel="WhitePop Pro Hero Carousel - Teeth Whitening Product and Results"
          containerClassName="w-full mx-auto"
          mediaWrapperClassName="w-full h-auto max-w-4xl mx-auto"
          imageClassName="w-full h-auto object-cover"
          logoClassName="text-foreground"
          descriptionClassName="text-foreground"
          buttonTextClassName="text-foreground"
        />
      </div>

      <div id="before-after" data-section="before-after">
        <MetricCardThree
          title="Visible Results in Just 7 Days"
          description="Our customers see dramatic whitening results with consistent use. Here's what real WhitePop Pro users experienced:"
          metrics={[
            {
              id: "result-1",              icon: Sparkles,
              title: "Shade Improvement",              value: "+8 Shades"
            },
            {
              id: "result-2",              icon: TrendingUp,
              title: "Timeline",              value: "7 Days"
            },
            {
              id: "result-3",              icon: CheckCircle,
              title: "Enamel Safe",              value: "100%"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          ariaLabel="WhitePop Pro results metrics section"
          containerClassName="w-full mx-auto px-4 sm:px-6 lg:px-8"
          cardClassName="w-full h-auto"
          gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          metricTitleClassName="text-foreground"
          valueClassName="text-foreground"
          textBoxTitleClassName="text-foreground"
          textBoxDescriptionClassName="text-foreground"
        />
      </div>

      <div id="how-it-works" data-section="how-it-works">
        <FeatureCardTen
          title="How WhitePop Pro Works"
          description="Three simple steps to transform your smile. Takes just 30 minutes daily."
          features={[
            {
              id: "step-1",              title: "Apply",              description: "Gently apply the whitening strip to your upper and lower teeth. The comfortable fit stays secure throughout treatment.",              media: {
                imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-man-removing-eye-patches-from-his-face_23-2149259933.jpg?w=600&h=600&q=80",                imageAlt: "Step 1 - Applying WhitePop Pro whitening strips"
              },
              items: [
                { icon: Zap, text: "30-second application" }
              ],
              reverse: false
            },
            {
              id: "step-2",              title: "Wait 30 Minutes",              description: "Let the nano hydroxyapatite formula work its magic. Advanced formula safely penetrates stains without sensitivity.",              media: {
                imageSrc: "http://img.b2bpic.net/free-photo/front-view-woman-with-pink-mask_23-2148627165.jpg?w=600&h=600&q=80",                imageAlt: "Step 2 - Waiting 30 minutes for treatment"
              },
              items: [
                { icon: Clock, text: "Just 30 minutes daily" }
              ],
              reverse: true
            },
            {
              id: "step-3",              title: "Reveal Your Brighter Smile",              description: "Remove the strip and enjoy immediate results. With consistent use, see dramatic whitening within 7 days.",              media: {
                imageSrc: "http://img.b2bpic.net/free-photo/woman-studio-taking-self-photo_23-2148846675.jpg?w=600&h=600&q=80",                imageAlt: "Step 3 - Bright white smile results"
              },
              items: [
                { icon: Smile, text: "Results in 7 days" }
              ],
              reverse: false
            }
          ]}
          textboxLayout="split"
          animationType="slide-up"
          useInvertedBackground={false}
          ariaLabel="How WhitePop Pro works - three easy steps"
          containerClassName="w-full mx-auto px-4 sm:px-6 lg:px-8"
          mediaWrapperClassName="w-full h-auto max-w-lg mx-auto"
          mediaCardClassName="w-full h-auto"
          textBoxTitleClassName="text-foreground"
          textBoxDescriptionClassName="text-foreground"
          featureTitleClassName="text-foreground"
          featureDescriptionClassName="text-foreground"
          listItemClassName="text-foreground"
        />
      </div>

      <div id="benefits" data-section="benefits">
        <MediaAbout
          title="Why Choose WhitePop Pro?"
          description="Backed by dentists and trusted by over 50,000 satisfied customers. Our peroxide-free formula with nano hydroxyapatite strengthens your enamel while whitening. See results without the sensitivity."
          tag="Key Benefits"
          tagIcon={Shield}
          buttons={[
            { text: "Shop Now", href: "#pricing" }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/young-beautiful-couple-casual-clothes-man-woman-happy-positive-smiling-cheerfully-standing-white-wall_141793-101769.jpg?w=800&h=600&q=80"
          imageAlt="WhitePop Pro benefits - happy couple with bright smiles"
          useInvertedBackground={false}
          ariaLabel="WhitePop Pro benefits section"
          mediaWrapperClassName="w-full h-auto max-w-lg mx-auto"
          mediaClassName="w-full h-auto object-cover"
          titleClassName="text-foreground"
          descriptionClassName="text-foreground"
          tagClassName="text-foreground"
          buttonTextClassName="text-foreground"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFive
          title="Trusted by Thousands of Smiling Customers"
          description="Join over 50,000 people who've transformed their smiles with WhitePop Pro. Real results from real customers."
          testimonials={[
            {
              id: "1",              name: "Sarah Johnson",              date: "2 weeks ago",              title: "Game Changer!",              quote: "My teeth looked noticeably whiter in just a few days. I can't believe how well these work without sensitivity. Highly recommend!",              tag: "Verified Purchase",              avatarSrc: "http://img.b2bpic.net/free-photo/beautiful-business-woman-portrait_23-2149280737.jpg?w=200&h=200&q=80",              avatarAlt: "Sarah Johnson"
            },
            {
              id: "2",              name: "Michael Chen",              date: "1 month ago",              title: "Professional Results at Home",              quote: "As a professional, my smile matters. WhitePop Pro gave me the same results as expensive dental treatments but for a fraction of the cost.",              tag: "Verified Purchase",              avatarSrc: "http://img.b2bpic.net/free-photo/closeup-confident-businessman-turn-face-camera-smiling-selfassured-standing-white-backgro_1258-113227.jpg?w=200&h=200&q=80",              avatarAlt: "Michael Chen"
            },
            {
              id: "3",              name: "Emily Rodriguez",              date: "3 weeks ago",              title: "No More Coffee Stains!",              quote: "I'm a coffee addict and my teeth were suffering. WhitePop Pro saved me! My smile is brighter than ever.",              tag: "Verified Purchase",              avatarSrc: "http://img.b2bpic.net/free-photo/beautiful-asian-woman_1098-21999.jpg?w=200&h=200&q=80",              avatarAlt: "Emily Rodriguez"
            },
            {
              id: "4",              name: "David Kim",              date: "1 week ago",              title: "Easy and Effective",              quote: "Super easy to use, and the results are amazing. 30 minutes a day and I have a Hollywood smile. Love it!",              tag: "Verified Purchase",              avatarSrc: "http://img.b2bpic.net/free-photo/side-view-smiley-man-holding-smartphone_23-2149915890.jpg?w=200&h=200&q=80",              avatarAlt: "David Kim"
            },
            {
              id: "5",              name: "Jessica Martinez",              date: "10 days ago",              title: "Worth Every Penny",              quote: "I've tried other whitening products before, but WhitePop Pro is by far the best. The results are incredible and they last!",              tag: "Verified Purchase",              avatarSrc: "http://img.b2bpic.net/free-photo/confident-determined-young-girl-student-cross-arms-chest-power-pose-smiling-looking-self-assured-standing-white-background-near-your-logo-place-banner_176420-44471.jpg?w=200&h=200&q=80",              avatarAlt: "Jessica Martinez"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground={true}
          ariaLabel="Customer testimonials section"
          containerClassName="w-full mx-auto px-4 sm:px-6 lg:px-8"
          cardClassName="w-full h-auto"
          cardAvatarClassName="w-10 h-10 sm:w-12 sm:h-12"
          carouselClassName="w-full"
          textBoxTitleClassName="text-foreground"
          textBoxDescriptionClassName="text-foreground"
          cardTitleClassName="text-foreground"
          cardQuoteClassName="text-foreground"
          cardAuthorClassName="text-foreground"
          cardNameClassName="text-foreground"
          cardDateClassName="text-foreground"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardNine
          title="Choose Your WhitePop Plan"
          description="Flexible pricing for every smile. All plans include our 30-day money-back guarantee."
          plans={[
            {
              id: "single",              title: "Single Pack",              price: "$29.99",              period: "one-time",              features: [
                "14 whitening strips (7-day supply)",                "Nano hydroxyapatite formula",                "Enamel-safe technology",                "30-day money-back guarantee",                "Free shipping on orders over $35"
              ],
              button: { text: "Buy Now", href: "#" }
            },
            {
              id: "bundle-2",              title: "2 Pack Bundle",              price: "$49.99",              period: "Best Seller",              features: [
                "28 whitening strips (14-day supply)",                "Nano hydroxyapatite formula",                "Enamel-safe technology",                "30-day money-back guarantee",                "Free shipping included",                "Save $9.99"
              ],
              button: { text: "Buy Now", href: "#" },
              imageSrc: "http://img.b2bpic.net/free-photo/top-view-medical-mask-pills-thermometer-pink-green-background_1182-1080.jpg?w=400&h=400&q=80&_wi=1",              imageAlt: "WhitePop Pro 2 Pack Bundle"
            },
            {
              id: "bundle-3",              title: "3 Pack Bundle",              price: "$69.99",              period: "Best Value",              features: [
                "42 whitening strips (21-day supply)",                "Nano hydroxyapatite formula",                "Enamel-safe technology",                "30-day money-back guarantee",                "Free shipping included",                "Save $19.98 (33% off)",                "Results guaranteed or your money back"
              ],
              button: { text: "Buy Now", href: "#" },
              imageSrc: "http://img.b2bpic.net/free-photo/top-view-medical-mask-pills-thermometer-pink-green-background_1182-1080.jpg?w=400&h=400&q=80&_wi=2",              imageAlt: "WhitePop Pro 3 Pack Bundle - Best Value"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          ariaLabel="WhitePop Pro pricing plans section"
          containerClassName="w-full mx-auto px-4 sm:px-6 lg:px-8"
          cardClassName="w-full h-auto"
          planImageWrapperClassName="w-full h-auto max-w-xs mx-auto"
          planImageClassName="w-full h-auto object-cover"
          textBoxTitleClassName="text-foreground"
          textBoxDescriptionClassName="text-foreground"
          planTitleClassName="text-foreground"
          planPriceClassName="text-foreground"
          planButtonTextClassName="text-foreground"
          featureTextClassName="text-foreground"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Everything you need to know about WhitePop Pro whitening strips."
          faqs={[
            {
              id: "1",              title: "Will WhitePop Pro cause tooth sensitivity?",              content: "No! Our peroxide-free formula with nano hydroxyapatite is specifically designed to be gentle on sensitive teeth. Unlike harsh whitening treatments, WhitePop Pro actually strengthens enamel while whitening. Most customers experience zero sensitivity."
            },
            {
              id: "2",              title: "How long do results last?",              content: "Results typically last 6-12 months depending on your lifestyle and habits. If you drink coffee, tea, or red wine regularly, you may see results fade faster. We recommend using WhitePop Pro strips 2-3 times per year for maintenance."
            },
            {
              id: "3",              title: "How often should I use the strips?",              content: "For best results, use WhitePop Pro strips daily for 30 minutes for 7-14 days. Once you reach your desired whiteness level, switch to maintenance mode: use strips 1-2 times per week to maintain your bright smile."
            },
            {
              id: "4",              title: "Are WhitePop Pro strips safe for enamel?",              content: "Absolutely! Our nano hydroxyapatite formula is clinically proven to be enamel-safe. In fact, our formula helps restore enamel while whitening. All ingredients are dentist-approved and safe for daily use."
            },
            {
              id: "5",              title: "Can I use WhitePop Pro with braces or veneers?",              content: "We recommend waiting until braces are removed before using WhitePop Pro strips, as the strips won't whiten the teeth under the brackets. If you have veneers, please consult your dentist first, as the formula may not work on ceramic surfaces."
            },
            {
              id: "6",              title: "What's your money-back guarantee?",              content: "We're so confident you'll love WhitePop Pro that we offer a 30-day money-back guarantee. If you're not satisfied for any reason, simply contact customer service within 30 days of purchase for a full refund—no questions asked!"
            }
          ]}
          imageSrc="http://img.b2bpic.net/free-vector/coupon-sale-label-set_23-2147941071.jpg?w=400&h=400&q=80"
          imageAlt="30-day money-back guarantee seal"
          mediaAnimation="slide-up"
          textboxLayout="default"
          faqsAnimation="blur-reveal"
          useInvertedBackground={true}
          ariaLabel="Frequently asked questions about WhitePop Pro"
          mediaWrapperClassName="w-full h-auto max-w-sm mx-auto"
          mediaClassName="w-full h-auto object-cover"
          containerClassName="w-full mx-auto px-4 sm:px-6 lg:px-8"
          textBoxTitleClassName="text-foreground"
          textBoxDescriptionClassName="text-foreground"
          accordionTitleClassName="text-foreground"
          accordionContentClassName="text-foreground"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="WhitePop Pro"
          columns={[
            {
              title: "Product",              items: [
                { label: "Whitening Strips", href: "#pricing" },
                { label: "How It Works", href: "#how-it-works" },
                { label: "Benefits", href: "#benefits" },
                { label: "Results", href: "#before-after" }
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
                { label: "FAQ", href: "#faq" },
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
          containerClassName="w-full mx-auto px-4 sm:px-6 lg:px-8"
          logoTextClassName="text-foreground"
          columnTitleClassName="text-foreground"
          columnItemClassName="text-foreground"
          copyrightTextClassName="text-foreground"
        />
      </div>
    </ThemeProvider>
  );
}