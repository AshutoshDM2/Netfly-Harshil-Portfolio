"use client";

import BreadCrumb from "@/common/BreadCrumb";
import Footer from "@/common/Footer/Footer";
import Section from "@/common/Section/Section";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="min-h-screen">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 pt-4 md:pt-8">
          <BreadCrumb
            items={[
              { href: "/", label: "Home" },
              { label: "Privacy Policy" },
            ]}
          />
        </div>

        <Section>
          <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center">
              Privacy Policy
            </h1>

            <div className="space-y-8 text-gray-700">
              {/* Introduction */}
              <div>
                <p className="text-base md:text-lg leading-relaxed">
                  This privacy policy explains how we collect, use, and protect
                  your personal information when you visit this portfolio
                  website.
                </p>
              </div>

              {/* Information We Collect */}
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">
                  Information We Collect
                </h2>
                <p className="text-base md:text-lg leading-relaxed">
                  This website is primarily a portfolio showcase. We do not
                  actively collect personal information unless you choose to
                  contact us through provided contact forms or email addresses.
                  In such cases, we may collect:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                  <li className="text-base md:text-lg">
                    Name and email address (if you contact us)
                  </li>
                  <li className="text-base md:text-lg">
                    Any information you voluntarily provide in messages
                  </li>
                  <li className="text-base md:text-lg">
                    Basic analytics data (page views, browser type, device
                    information)
                  </li>
                </ul>
              </div>

              {/* How We Use Your Information */}
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">
                  How We Use Your Information
                </h2>
                <p className="text-base md:text-lg leading-relaxed">
                  Any information collected is used solely for:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                  <li className="text-base md:text-lg">
                    Responding to your inquiries and messages
                  </li>
                  <li className="text-base md:text-lg">
                    Improving the website experience
                  </li>
                  <li className="text-base md:text-lg">
                    Understanding website traffic and usage patterns
                  </li>
                </ul>
              </div>

              {/* Cookies */}
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">
                  Cookies
                </h2>
                <p className="text-base md:text-lg leading-relaxed">
                  This website may use cookies to enhance user experience and
                  analyze website traffic. Cookies are small text files stored
                  on your device. You can choose to disable cookies through
                  your browser settings, though this may affect website
                  functionality.
                </p>
              </div>

              {/* Third-Party Services */}
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">
                  Third-Party Services
                </h2>
                <p className="text-base md:text-lg leading-relaxed">
                  This website may use third-party services for analytics or
                  hosting. These services may have their own privacy policies
                  and may collect data independently. We recommend reviewing
                  their privacy policies.
                </p>
              </div>

              {/* Data Security */}
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">
                  Data Security
                </h2>
                <p className="text-base md:text-lg leading-relaxed">
                  We take reasonable measures to protect your information.
                  However, no method of transmission over the internet is 100%
                  secure, and we cannot guarantee absolute security.
                </p>
              </div>

              {/* Your Rights */}
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">
                  Your Rights
                </h2>
                <p className="text-base md:text-lg leading-relaxed">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                  <li className="text-base md:text-lg">
                    Request access to your personal data
                  </li>
                  <li className="text-base md:text-lg">
                    Request correction or deletion of your data
                  </li>
                  <li className="text-base md:text-lg">
                    Opt-out of any communications
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">
                  Contact Us
                </h2>
                <p className="text-base md:text-lg leading-relaxed">
                  If you have any questions or concerns about this privacy
                  policy, please contact us through the contact page or email
                  provided on this website.
                </p>
              </div>

              {/* Last Updated */}
              <div className="pt-4 border-t border-gray-300">
                <p className="text-sm md:text-base text-gray-500">
                  Last Updated: {new Date().toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>
        </Section>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;