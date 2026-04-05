export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-muted/50 py-16 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <a href="/" className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 mb-6">
              ← Back to Home
            </a>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
            <p className="text-muted-foreground">Last updated: 1 January 2026</p>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">1. What Are Cookies?</h2>
              <p className="text-muted-foreground mb-4">
                Cookies are small text files stored on your device when you visit our website. They help us provide a
                better experience by remembering your preferences, keeping you signed in, and understanding how you
                use our Service.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">2. How We Use Cookies</h2>
              <p className="text-muted-foreground mb-4">
                Atlasync AI uses cookies and similar technologies for the following purposes:
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">2.1 Essential Cookies (Always Active)</h3>
              <p className="text-muted-foreground mb-4">
                These cookies are necessary for the website to function and cannot be disabled:
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border border-border">
                  <thead className="bg-muted">
                    <tr>
                      <th className="border border-border p-3 text-left">Cookie Name</th>
                      <th className="border border-border p-3 text-left">Purpose</th>
                      <th className="border border-border p-3 text-left">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr>
                      <td className="border border-border p-3">session_id</td>
                      <td className="border border-border p-3">Maintains your login session</td>
                      <td className="border border-border p-3">Session</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">csrf_token</td>
                      <td className="border border-border p-3">Security protection against attacks</td>
                      <td className="border border-border p-3">Session</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">cookie_consent</td>
                      <td className="border border-border p-3">Remembers your cookie preferences</td>
                      <td className="border border-border p-3">1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">2.2 Analytics Cookies (Optional)</h3>
              <p className="text-muted-foreground mb-4">
                These help us understand how visitors use our website so we can improve it:
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border border-border">
                  <thead className="bg-muted">
                    <tr>
                      <th className="border border-border p-3 text-left">Cookie Name</th>
                      <th className="border border-border p-3 text-left">Purpose</th>
                      <th className="border border-border p-3 text-left">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr>
                      <td className="border border-border p-3">_ga</td>
                      <td className="border border-border p-3">Google Analytics - distinguishes users</td>
                      <td className="border border-border p-3">2 years</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">_gid</td>
                      <td className="border border-border p-3">Google Analytics - distinguishes users</td>
                      <td className="border border-border p-3">24 hours</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">_gat</td>
                      <td className="border border-border p-3">Google Analytics - throttles requests</td>
                      <td className="border border-border p-3">1 minute</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">2.3 Functional Cookies (Optional)</h3>
              <p className="text-muted-foreground mb-4">
                These enable enhanced functionality and personalization:
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border border-border">
                  <thead className="bg-muted">
                    <tr>
                      <th className="border border-border p-3 text-left">Cookie Name</th>
                      <th className="border border-border p-3 text-left">Purpose</th>
                      <th className="border border-border p-3 text-left">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr>
                      <td className="border border-border p-3">theme_preference</td>
                      <td className="border border-border p-3">Remembers dark/light mode choice</td>
                      <td className="border border-border p-3">1 year</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">language_pref</td>
                      <td className="border border-border p-3">Remembers language selection</td>
                      <td className="border border-border p-3">1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">2.4 Marketing Cookies (Optional)</h3>
              <p className="text-muted-foreground mb-4">
                These track your visits across websites to show relevant advertisements:
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border border-border">
                  <thead className="bg-muted">
                    <tr>
                      <th className="border border-border p-3 text-left">Provider</th>
                      <th className="border border-border p-3 text-left">Purpose</th>
                      <th className="border border-border p-3 text-left">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr>
                      <td className="border border-border p-3">Google Ads</td>
                      <td className="border border-border p-3">Remarketing and conversion tracking</td>
                      <td className="border border-border p-3">90 days</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">LinkedIn Insight</td>
                      <td className="border border-border p-3">B2B marketing analytics</td>
                      <td className="border border-border p-3">180 days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">3. Third-Party Cookies</h2>
              <p className="text-muted-foreground mb-4">
                We use the following third-party services that may set cookies:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>
                  <strong>Google Analytics:</strong> Website traffic analysis{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    className="text-teal-600 hover:underline"
                    target="_blank"
                    rel="noopener"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <strong>Microsoft Azure:</strong> Cloud hosting and AI services{" "}
                  <a
                    href="https://privacy.microsoft.com/"
                    className="text-teal-600 hover:underline"
                    target="_blank"
                    rel="noopener"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <strong>Stripe:</strong> Payment processing{" "}
                  <a
                    href="https://stripe.com/privacy"
                    className="text-teal-600 hover:underline"
                    target="_blank"
                    rel="noopener"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">4. Managing Your Cookie Preferences</h2>

              <h3 className="text-xl font-semibold mb-3 mt-6">4.1 Cookie Consent Banner</h3>
              <p className="text-muted-foreground mb-4">
                When you first visit our website, you'll see a cookie consent banner. You can:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Accept all cookies</li>
                <li>Reject optional cookies (only essential cookies will be used)</li>
                <li>Customize which cookie categories you want to allow</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">4.2 Browser Settings</h3>
              <p className="text-muted-foreground mb-4">
                Most browsers allow you to control cookies through settings:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>
                  <strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data
                </li>
                <li>
                  <strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data
                </li>
                <li>
                  <strong>Safari:</strong> Preferences → Privacy → Cookies and website data
                </li>
                <li>
                  <strong>Edge:</strong> Settings → Cookies and site permissions
                </li>
              </ul>
              <p className="text-muted-foreground mb-4">
                <strong>Note:</strong> Blocking all cookies may prevent some website features from working properly.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">4.3 Opt-Out Tools</h3>
              <p className="text-muted-foreground mb-4">You can also opt out of specific tracking:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>
                  <strong>Google Analytics:</strong>{" "}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    className="text-teal-600 hover:underline"
                    target="_blank"
                    rel="noopener"
                  >
                    Browser Add-on
                  </a>
                </li>
                <li>
                  <strong>Network Advertising Initiative:</strong>{" "}
                  <a
                    href="https://optout.networkadvertising.org/"
                    className="text-teal-600 hover:underline"
                    target="_blank"
                    rel="noopener"
                  >
                    Opt-Out Tool
                  </a>
                </li>
                <li>
                  <strong>Your Online Choices (EU):</strong>{" "}
                  <a
                    href="https://www.youronlinechoices.com/"
                    className="text-teal-600 hover:underline"
                    target="_blank"
                    rel="noopener"
                  >
                    Opt-Out Tool
                  </a>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">5. Do Not Track (DNT)</h2>
              <p className="text-muted-foreground mb-4">
                We currently do not respond to Do Not Track signals because there is no industry standard for how to
                respond to them. We respect your privacy choices made through our cookie consent banner and browser
                settings.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">6. Local Storage and Similar Technologies</h2>
              <p className="text-muted-foreground mb-4">
                In addition to cookies, we may use other technologies like:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>
                  <strong>Local Storage:</strong> Stores data locally in your browser for better performance
                </li>
                <li>
                  <strong>Session Storage:</strong> Temporarily stores data for a single browsing session
                </li>
                <li>
                  <strong>IndexedDB:</strong> Stores structured data for offline functionality
                </li>
              </ul>
              <p className="text-muted-foreground mb-4">
                You can clear these through your browser's "Clear browsing data" or similar option.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">7. Updates to This Policy</h2>
              <p className="text-muted-foreground mb-4">
                We may update this Cookie Policy to reflect changes in our practices or legal requirements. We will
                notify you of significant changes via email or website notice.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">8. Your Rights</h2>
              <p className="text-muted-foreground mb-4">Under UK GDPR, you have rights regarding cookies:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Right to know what cookies we use</li>
                <li>Right to withdraw consent at any time</li>
                <li>Right to object to processing for marketing purposes</li>
                <li>Right to complain to the Information Commissioner's Office (ICO)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">9. Contact Us About Cookies</h2>
              <p className="text-muted-foreground mb-4">
                If you have questions about our use of cookies:
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

            <section className="mb-12 bg-teal-50 dark:bg-teal-950/20 border-2 border-teal-200 dark:border-teal-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-teal-900 dark:text-teal-100">Quick Summary</h3>
              <ul className="list-disc pl-6 text-teal-900/90 dark:text-teal-100/90 space-y-2">
                <li>Essential cookies are required for the website to function</li>
                <li>Analytics and marketing cookies are optional - you can opt out</li>
                <li>You can change your preferences anytime via browser settings</li>
                <li>We don't sell your cookie data to third parties</li>
                <li>All cookies comply with UK GDPR requirements</li>
              </ul>
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
