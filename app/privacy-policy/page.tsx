import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for TryQu Tech. Learn how we collect, use, and protect your personal data.",
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
  },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <section className="bg-[#0a0a0a] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-[#0f0f0f] p-6 sm:p-10 shadow-xl">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(163,230,53,0.10),transparent_55%)]" />
              <div className="relative space-y-12">
                <header className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tight text-lime-300">Privacy Policy</h1>
                  <p className="text-neutral-400 text-lg">
                    Last updated: January 2025
                  </p>
                  <p className="text-neutral-400">
                    TryQu Tech ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and services.
                  </p>
                </header>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">1. Information We Collect</h2>
                  <p className="text-neutral-300">We may collect information about you in a variety of ways. The information we may collect on our Site includes:</p>
                  
                  <div className="space-y-4 ml-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium text-lime-300">Personal Data</h3>
                      <ul className="list-disc list-inside space-y-1 text-neutral-400">
                        <li>Name and surname</li>
                        <li>Email address</li>
                        <li>Phone number</li>
                        <li>Mailing address</li>
                        <li>Company name and information</li>
                        <li>Job title and role</li>
                        <li>Payment and billing information</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-medium text-lime-300">Automatically Collected Data</h3>
                      <ul className="list-disc list-inside space-y-1 text-neutral-400">
                        <li>Browser and device information</li>
                        <li>IP address and geolocation data</li>
                        <li>Pages visited and time spent</li>
                        <li>Referral source</li>
                        <li>Cookies and similar tracking technologies</li>
                        <li>Usage patterns and analytics data</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-medium text-lime-300">Information from Third Parties</h3>
                      <ul className="list-disc list-inside space-y-1 text-neutral-400">
                        <li>Social media platforms (if you connect your account)</li>
                        <li>Payment processors</li>
                        <li>Analytics providers</li>
                        <li>Marketing partners</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">2. How We Use Your Information</h2>
                  <p className="text-neutral-300">We use the information we collect in the following ways:</p>
                  <ul className="list-disc list-inside space-y-2 text-neutral-400">
                    <li>To deliver and improve our services and customer experience</li>
                    <li>To process transactions and send related information</li>
                    <li>To send promotional communications (with your consent)</li>
                    <li>To respond to inquiries and customer support requests</li>
                    <li>To monitor and analyze usage trends and preferences</li>
                    <li>To prevent fraudulent transactions and enhance security</li>
                    <li>To comply with legal obligations and regulations</li>
                    <li>To personalize your experience on our website</li>
                    <li>To conduct research and analytics</li>
                    <li>To generate aggregated, anonymized data for business insights</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">3. How We Protect Your Information</h2>
                  <p className="text-neutral-300">
                    We implement comprehensive security measures to protect your personal data:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-neutral-400">
                    <li>SSL/TLS encryption for data in transit</li>
                    <li>Secure authentication mechanisms</li>
                    <li>Regular security audits and updates</li>
                    <li>Restricted access to sensitive data (need-to-know basis)</li>
                    <li>Secure data storage with encryption at rest</li>
                    <li>Employee training on data protection and privacy</li>
                    <li>Incident response procedures for data breaches</li>
                  </ul>
                  <p className="text-neutral-300 pt-4">
                    <strong>Note:</strong> While we strive to protect your information using reasonable security measures, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">4. Sharing Your Information</h2>
                  <p className="text-neutral-300">
                    We do not sell, trade, or rent your personal data to third parties. However, we may share your information in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-neutral-400">
                    <li><strong>Service Providers:</strong> Trusted third parties who assist us in operating our website and conducting business</li>
                    <li><strong>Legal Requirements:</strong> When required by law, court order, or government authority</li>
                    <li><strong>Business Transfers:</strong> In the event of merger, acquisition, or bankruptcy</li>
                    <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your data</li>
                    <li><strong>Business Partners:</strong> For joint ventures or special projects (with notification)</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">5. Cookies and Tracking Technologies</h2>
                  <p className="text-neutral-300">
                    We use cookies and similar tracking technologies to enhance your experience. This includes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-neutral-400">
                    <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand user behavior and site performance</li>
                    <li><strong>Marketing Cookies:</strong> Used to deliver targeted advertisements</li>
                    <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                  </ul>
                  <p className="text-neutral-300 pt-4">
                    You can control cookie settings through your browser. However, disabling cookies may affect website functionality.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">6. Your Rights and Choices</h2>
                  <p className="text-neutral-300">
                    Depending on your location, you may have the following rights:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-neutral-400">
                    <li><strong>Right to Access:</strong> Request a copy of your personal data</li>
                    <li><strong>Right to Correction:</strong> Update or correct inaccurate information</li>
                    <li><strong>Right to Deletion:</strong> Request deletion of your data (subject to legal requirements)</li>
                    <li><strong>Right to Restrict Processing:</strong> Limit how we use your data</li>
                    <li><strong>Right to Data Portability:</strong> Receive your data in a portable format</li>
                    <li><strong>Right to Withdraw Consent:</strong> Revoke permission for data processing</li>
                    <li><strong>Right to Opt-Out:</strong> Decline marketing communications</li>
                  </ul>
                  <p className="text-neutral-300 pt-4">
                    To exercise any of these rights, please contact us at{" "}
                    <a href="mailto:tryqutech@gmail.com" className="text-lime-300 underline">
                      tryqutech@gmail.com
                    </a>
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">7. Data Retention</h2>
                  <p className="text-neutral-300">
                    We retain your personal data only as long as necessary to provide our services and comply with legal obligations. Retention periods vary depending on:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-neutral-400">
                    <li>The purpose for which we collect the data</li>
                    <li>Legal and regulatory requirements</li>
                    <li>Our business necessity</li>
                    <li>Your account status and activity</li>
                  </ul>
                  <p className="text-neutral-300 pt-4">
                    When data is no longer needed, we securely delete or anonymize it.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">8. International Data Transfers</h2>
                  <p className="text-neutral-300">
                    Your information may be transferred to, stored in, and processed in countries other than your country of residence. These countries may have data protection laws that differ from your home country. By using our services, you consent to the transfer of your information as described in this Privacy Policy.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">9. Third-Party Links</h2>
                  <p className="text-neutral-300">
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">10. Children's Privacy</h2>
                  <p className="text-neutral-300">
                    Our services are not directed to individuals under 18 years of age. We do not intentionally collect personal data from children. If we become aware that a child has provided us with personal information, we will promptly delete such information.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">11. Do Not Track Signals</h2>
                  <p className="text-neutral-300">
                    Some browsers include a "Do Not Track" feature. Our website does not currently respond to Do Not Track signals. If you prefer not to be tracked, you can disable cookies in your browser settings.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">12. California Privacy Rights (CCPA)</h2>
                  <p className="text-neutral-300">
                    If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA):
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-neutral-400">
                    <li>Right to know what personal data is collected, used, and shared</li>
                    <li>Right to delete personal data collected from you</li>
                    <li>Right to opt-out of the sale or sharing of your personal data</li>
                    <li>Right to non-discrimination for exercising your CCPA rights</li>
                  </ul>
                  <p className="text-neutral-300 pt-4">
                    To submit a CCPA request, contact us at{" "}
                    <a href="mailto:tryqutech@gmail.com" className="text-lime-300 underline">
                      tryqutech@gmail.com
                    </a>
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">13. European Privacy Rights (GDPR)</h2>
                  <p className="text-neutral-300">
                    If you are located in the European Union or European Economic Area, your personal data is protected under the General Data Protection Regulation (GDPR). You have the rights outlined in Section 6 of this policy. Our legal basis for processing your data includes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-neutral-400">
                    <li>Performance of a contract with you</li>
                    <li>Your explicit consent</li>
                    <li>Our legitimate business interests</li>
                    <li>Compliance with legal obligations</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">14. Updates to This Privacy Policy</h2>
                  <p className="text-neutral-300">
                    We may update this Privacy Policy from time to time. When we make significant changes, we will notify you by updating the "Last Updated" date and highlighting the changes. Your continued use of our services after changes constitutes your acceptance of the updated Privacy Policy.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">15. Contact Us</h2>
                  <p className="text-neutral-300">If you have questions about this Privacy Policy or our privacy practices, please contact us:</p>
                  <div className="bg-neutral-800/50 rounded-lg p-6 space-y-3 mt-4">
                    <div>
                      <p className="text-lime-300 font-semibold">Email</p>
                      <a href="mailto:tryqutech@gmail.com" className="text-neutral-300 hover:text-lime-300 transition-colors">
                        tryqutech@gmail.com
                      </a>
                    </div>
                    <div>
                      <p className="text-lime-300 font-semibold">WhatsApp</p>
                      <p className="text-neutral-300">Available via WhatsApp at our contact number</p>
                    </div>
                    <div>
                      <p className="text-lime-300 font-semibold">Address</p>
                      <p className="text-neutral-300">Dubai, UAE</p>
                    </div>
                  </div>
                </section>

                <section className="space-y-3 pt-8 border-t border-neutral-700">
                  <p className="text-neutral-400 text-sm">
                    We appreciate your trust in us and are committed to protecting your privacy. If you believe your privacy rights have been violated, you may also have the right to lodge a complaint with your local data protection authority.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AppverseFooter />
    </>
  )
}
