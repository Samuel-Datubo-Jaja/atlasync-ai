export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-muted/50 py-16 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <a href="/" className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 mb-6">
              ← Back to Home
            </a>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: 1 January 2026</p>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground mb-4">
                Atlasync AI Ltd ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information when you use our website
                (www.atlasync.co.uk) and our StructureGPT service.
              </p>
              <p className="text-muted-foreground">
                By using our services, you agree to the collection and use of information in accordance with this
                policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>

              <h3 className="text-xl font-semibold mb-3 mt-6">2.1 Personal Information</h3>
              <p className="text-muted-foreground mb-4">We collect the following personal information:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Name and email address (when you sign up for the waitlist or create an account)</li>
                <li>Company name and role/profession (optional)</li>
                <li>Payment information (processed securely through third-party payment processors)</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">2.2 Usage Data</h3>
              <p className="text-muted-foreground mb-4">We automatically collect:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Browser type and version</li>
                <li>Device information (type, operating system)</li>
                <li>IP address and location data</li>
                <li>Pages visited and time spent on our website</li>
                <li>Queries submitted to StructureGPT (for service improvement)</li>
                <li>Documents uploaded (stored securely and processed for compliance checks)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">2.3 Cookies and Tracking Technologies</h3>
              <p className="text-muted-foreground mb-4">
                We use cookies and similar tracking technologies to track activity on our service and hold certain
                information. See our Cookie Policy for more details.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">We use collected information for:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Providing and maintaining StructureGPT service</li>
                <li>Processing your waitlist registration and service requests</li>
                <li>Sending service updates, technical notices, and security alerts</li>
                <li>Responding to your comments, questions, and customer service requests</li>
                <li>Analyzing usage patterns to improve our service</li>
                <li>Detecting, preventing, and addressing technical issues or fraudulent activity</li>
                <li>
                  Sending marketing communications (with your consent, which you can withdraw at any time)
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">4. Data Sharing and Disclosure</h2>
              <p className="text-muted-foreground mb-4">We do not sell your personal data. We may share information with:</p>

              <h3 className="text-xl font-semibold mb-3 mt-6">4.1 Service Providers</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Microsoft Azure (AI processing and cloud hosting)</li>
                <li>OpenAI/GPT-4 (AI model provider)</li>
                <li>Payment processors (Stripe or similar)</li>
                <li>Email service providers (for transactional and marketing emails)</li>
                <li>Analytics providers (Google Analytics or similar)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">4.2 Legal Requirements</h3>
              <p className="text-muted-foreground mb-4">We may disclose your information if required to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Comply with legal obligations or court orders</li>
                <li>Protect and defend our rights or property</li>
                <li>Prevent or investigate possible wrongdoing</li>
                <li>Protect personal safety of users or the public</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">5. Data Retention</h2>
              <p className="text-muted-foreground mb-4">
                We retain your personal data only for as long as necessary for the purposes set out in this Privacy
                Policy:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Account data: For the duration of your account plus 6 years (UK legal requirements)</li>
                <li>Query history: Up to 2 years for service improvement</li>
                <li>Uploaded documents: 30 days after processing (unless you save them in your account)</li>
                <li>Marketing data: Until you unsubscribe or request deletion</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">6. Your Data Protection Rights (GDPR)</h2>
              <p className="text-muted-foreground mb-4">Under UK GDPR, you have the right to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>
                  <strong>Access:</strong> Request copies of your personal data
                </li>
                <li>
                  <strong>Rectification:</strong> Request correction of inaccurate data
                </li>
                <li>
                  <strong>Erasure:</strong> Request deletion of your personal data
                </li>
                <li>
                  <strong>Restrict processing:</strong> Request limitation of processing your data
                </li>
                <li>
                  <strong>Data portability:</strong> Request transfer of your data to another organization
                </li>
                <li>
                  <strong>Object:</strong> Object to processing of your personal data
                </li>
                <li>
                  <strong>Withdraw consent:</strong> Withdraw consent for data processing (where applicable)
                </li>
              </ul>
              <p className="text-muted-foreground mb-4">
                To exercise these rights, please contact us at:{" "}
                <a href="mailto:privacy@atlasync.co.uk" className="text-teal-600 hover:underline">
                  privacy@atlasync.co.uk
                </a>
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">7. Data Security</h2>
              <p className="text-muted-foreground mb-4">
                We implement appropriate technical and organizational measures to protect your personal data:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Encryption of data in transit (TLS/SSL) and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication requirements</li>
                <li>Secure cloud infrastructure (Microsoft Azure UK regions)</li>
                <li>Employee training on data protection</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">8. International Data Transfers</h2>
              <p className="text-muted-foreground mb-4">
                Your data is primarily stored in the UK and EU. When we transfer data outside the UK/EU, we ensure
                appropriate safeguards are in place (e.g., Standard Contractual Clauses).
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">9. Children's Privacy</h2>
              <p className="text-muted-foreground mb-4">
                Our service is not directed to individuals under 18. We do not knowingly collect personal data from
                children. If you become aware that a child has provided us with personal data, please contact us.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">10. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground mb-4">
                We may update this Privacy Policy from time to time. We will notify you of significant changes by
                email or prominent notice on our website. Continued use of the service after changes constitutes
                acceptance.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">11. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                For questions about this Privacy Policy or our data practices:
              </p>
              <div className="bg-muted/30 p-6 rounded-lg">
                <p className="font-semibold mb-2">Atlasync AI Ltd</p>
                <p className="text-muted-foreground">Company No: 16935402</p>
                <p className="text-muted-foreground">Registered Office:</p>
                <p className="text-muted-foreground">3rd Floor, 86-90 Paul Street</p>
                <p className="text-muted-foreground">London, EC2A 4NE, United Kingdom</p>
                <p className="text-muted-foreground mt-4">
                  Email:{" "}
                  <a href="mailto:info@atlasync.co.uk" className="text-teal-600 hover:underline">
                    info@atlasync.co.uk
                  </a>
                </p>
                <p className="text-muted-foreground">
                  Privacy inquiries:{" "}
                  <a href="mailto:privacy@atlasync.co.uk" className="text-teal-600 hover:underline">
                    privacy@atlasync.co.uk
                  </a>
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">12. Supervisory Authority</h2>
              <p className="text-muted-foreground mb-4">
                You have the right to lodge a complaint with the UK Information Commissioner's Office (ICO):
              </p>
              <div className="bg-muted/30 p-6 rounded-lg">
                <p className="font-semibold mb-2">Information Commissioner's Office</p>
                <p className="text-muted-foreground">Wycliffe House, Water Lane</p>
                <p className="text-muted-foreground">Wilmslow, Cheshire SK9 5AF</p>
                <p className="text-muted-foreground mt-2">Tel: 0303 123 1113</p>
                <p className="text-muted-foreground">
                  Website:{" "}
                  <a href="https://ico.org.uk" className="text-teal-600 hover:underline" target="_blank" rel="noopener">
                    ico.org.uk
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-muted/50 py-8 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Atlasync AI Ltd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
