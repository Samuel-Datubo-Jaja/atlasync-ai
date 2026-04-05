export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-muted/50 py-16 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <a href="/" className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 mb-6">
              ← Back to Home
            </a>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: 1 January 2026</p>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground mb-4">
                These Terms of Service ("Terms") govern your access to and use of StructureGPT and related services
                (collectively, the "Service") provided by Atlasync AI Ltd ("Company", "we", "us", or "our").
              </p>
              <p className="text-muted-foreground mb-4">
                By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any
                part of these Terms, you may not access the Service.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">2. Service Description</h2>
              <p className="text-muted-foreground mb-4">
                StructureGPT is an AI-powered assistant that provides information about UK Building Regulations and
                Approved Documents. The Service includes:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>AI-powered query responses based on UK Building Regulations</li>
                <li>Citation tracking to relevant Approved Documents</li>
                <li>Document upload and analysis capabilities</li>
                <li>Project management features</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">3. User Eligibility</h2>
              <p className="text-muted-foreground mb-4">You must:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Be at least 18 years old</li>
                <li>Be legally capable of entering into binding contracts</li>
                <li>Not be prohibited from using the Service under UK law</li>
                <li>Provide accurate, current, and complete registration information</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">4. User Accounts</h2>

              <h3 className="text-xl font-semibold mb-3 mt-6">4.1 Account Creation</h3>
              <p className="text-muted-foreground mb-4">
                You are responsible for maintaining the confidentiality of your account credentials and for all
                activities that occur under your account.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">4.2 Account Security</h3>
              <p className="text-muted-foreground mb-4">You must:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Use a strong, unique password</li>
                <li>Notify us immediately of any unauthorized access</li>
                <li>Not share your account with others</li>
                <li>Not use another user's account without permission</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">4.3 Account Termination</h3>
              <p className="text-muted-foreground mb-4">
                We reserve the right to suspend or terminate your account if you violate these Terms or engage in
                fraudulent, abusive, or illegal activity.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">5. Acceptable Use</h2>
              <p className="text-muted-foreground mb-4">You agree NOT to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Use the Service for any unlawful purpose or in violation of any regulations</li>
                <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
                <li>Interfere with or disrupt the Service or servers</li>
                <li>
                  Upload malicious code, viruses, or any harmful content
                </li>
                <li>Scrape, copy, or reverse engineer the Service</li>
                <li>Use the Service to provide services to third parties without authorization</li>
                <li>Circumvent any usage limits or access controls</li>
                <li>Misrepresent your identity or affiliation</li>
              </ul>
            </section>

            <section className="mb-12 bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-900 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-amber-900 dark:text-amber-100">
                6. AI Disclaimer and Limitations
              </h2>
              <p className="text-amber-900/90 dark:text-amber-100/90 mb-4">
                <strong>IMPORTANT:</strong> StructureGPT is an AI-powered informational tool and is subject to the
                following limitations:
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-amber-900 dark:text-amber-100">
                6.1 Not Professional Advice
              </h3>
              <ul className="list-disc pl-6 text-amber-900/90 dark:text-amber-100/90 space-y-2 mb-4">
                <li>The Service does NOT provide professional architectural, engineering, or legal advice</li>
                <li>AI responses are informational only and may contain errors or outdated information</li>
                <li>
                  You MUST verify all information with official sources and qualified professionals
                </li>
                <li>
                  Reliance on AI-generated information is at your own risk
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-amber-900 dark:text-amber-100">
                6.2 Professional Consultation Required
              </h3>
              <p className="text-amber-900/90 dark:text-amber-100/90 mb-4">
                Always consult qualified professionals for:
              </p>
              <ul className="list-disc pl-6 text-amber-900/90 dark:text-amber-100/90 space-y-2 mb-4">
                <li>Project-specific design decisions</li>
                <li>Building control applications and approvals</li>
                <li>Structural calculations and assessments</li>
                <li>Legal compliance verification</li>
                <li>Safety-critical decisions</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-amber-900 dark:text-amber-100">6.3 Accuracy</h3>
              <p className="text-amber-900/90 dark:text-amber-100/90 mb-4">
                While we strive for accuracy, we do not guarantee that:
              </p>
              <ul className="list-disc pl-6 text-amber-900/90 dark:text-amber-100/90 space-y-2 mb-4">
                <li>AI responses are complete, current, or error-free</li>
                <li>Information reflects the latest regulatory changes</li>
                <li>Citations are exhaustive or perfectly accurate</li>
                <li>The Service will meet your specific project requirements</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">7. Subscription and Payment</h2>

              <h3 className="text-xl font-semibold mb-3 mt-6">7.1 Pricing</h3>
              <p className="text-muted-foreground mb-4">
                Current pricing is displayed on our website and may change with 30 days' notice to existing
                subscribers.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">7.2 Billing</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Subscriptions are billed monthly in advance</li>
                <li>Payments are processed via secure third-party payment processors</li>
                <li>All fees are non-refundable unless required by law</li>
                <li>You authorize us to charge your payment method for recurring subscriptions</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">7.3 Free Trial</h3>
              <p className="text-muted-foreground mb-4">
                Free trials (where offered) require valid payment information. You will be charged when the trial
                ends unless you cancel beforehand.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">7.4 Cancellation</h3>
              <p className="text-muted-foreground mb-4">
                You may cancel your subscription at any time. Cancellation takes effect at the end of the current
                billing period. No refunds for partial periods.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">8. Intellectual Property</h2>

              <h3 className="text-xl font-semibold mb-3 mt-6">8.1 Our IP</h3>
              <p className="text-muted-foreground mb-4">
                All Service content, features, and functionality (including AI models, software, design, text,
                graphics, logos) are owned by Atlasync AI Ltd and protected by UK and international copyright,
                trademark, and other laws.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">8.2 Your Content</h3>
              <p className="text-muted-foreground mb-4">
                You retain ownership of documents and data you upload. By uploading, you grant us a license to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Store, process, and analyze your content to provide the Service</li>
                <li>Use anonymized, aggregated data for service improvement</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                We do NOT use your specific project data to train AI models without explicit consent.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">8.3 Third-Party Content</h3>
              <p className="text-muted-foreground mb-4">
                UK Building Regulations and Approved Documents are Crown Copyright and governed by the Open
                Government Licence.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">9. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</strong>
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>
                  THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND
                </li>
                <li>
                  WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY AND FITNESS FOR A
                  PARTICULAR PURPOSE
                </li>
                <li>
                  WE ARE NOT LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES
                </li>
                <li>
                  OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID IN THE 12 MONTHS PRECEDING THE CLAIM
                </li>
                <li>
                  WE ARE NOT LIABLE FOR DAMAGES ARISING FROM: AI errors, service interruptions, data loss, third-party
                  actions, or reliance on Service information
                </li>
              </ul>
              <p className="text-muted-foreground mb-4">
                <strong>Nothing in these Terms excludes liability for death or personal injury caused by negligence,
                fraud, or fraudulent misrepresentation.</strong>
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">10. Indemnification</h2>
              <p className="text-muted-foreground mb-4">
                You agree to indemnify and hold harmless Atlasync AI Ltd, its officers, employees, and agents from
                any claims, damages, losses, or expenses (including legal fees) arising from:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Your use of the Service</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any rights of another party</li>
                <li>Content you upload or submit</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">11. Data Protection</h2>
              <p className="text-muted-foreground mb-4">
                Our collection and use of personal data is governed by our Privacy Policy. By using the Service, you
                consent to our data practices as described in the Privacy Policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">12. Service Availability</h2>
              <p className="text-muted-foreground mb-4">
                We strive for 99% uptime but do not guarantee uninterrupted access. We may:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Perform scheduled maintenance (with advance notice where possible)</li>
                <li>Suspend the Service for urgent updates or security issues</li>
                <li>Modify or discontinue features with reasonable notice</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">13. Changes to Terms</h2>
              <p className="text-muted-foreground mb-4">
                We may modify these Terms at any time. Material changes will be notified via email or prominent
                website notice at least 30 days before taking effect. Continued use after changes constitutes
                acceptance.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">14. Governing Law and Jurisdiction</h2>
              <p className="text-muted-foreground mb-4">
                These Terms are governed by the laws of England and Wales. Any disputes shall be subject to the
                exclusive jurisdiction of the courts of England and Wales.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">15. Dispute Resolution</h2>
              <p className="text-muted-foreground mb-4">
                Before initiating legal proceedings, parties agree to attempt good-faith negotiation for 30 days. If
                unresolved, disputes may be submitted to mediation or arbitration by mutual agreement.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">16. Severability</h2>
              <p className="text-muted-foreground mb-4">
                If any provision of these Terms is found unenforceable, the remaining provisions remain in full force
                and effect.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">17. Entire Agreement</h2>
              <p className="text-muted-foreground mb-4">
                These Terms, together with our Privacy Policy and Cookie Policy, constitute the entire agreement
                between you and Atlasync AI Ltd regarding the Service.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">18. Contact Information</h2>
              <p className="text-muted-foreground mb-4">For questions about these Terms:</p>
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
                  Legal inquiries:{" "}
                  <a href="mailto:legal@atlasync.co.uk" className="text-teal-600 hover:underline">
                    legal@atlasync.co.uk
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
