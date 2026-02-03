import { SiteHeader } from "@/components/site-header";
import { AppverseFooter } from "@/components/appverse-footer";

export default function RevisionPolicyPage() {
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
                  <h1 className="text-4xl font-bold tracking-tight text-lime-300">IT Project Revision Policy</h1>
                  <p className="text-neutral-400 text-lg">
                    Our comprehensive revision policy for IT services ensures transparency, maintains code quality, and protects both client and developer interests throughout the software development lifecycle.
                  </p>
                </header>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">1. Included Revisions by Service Type</h2>
                  <p className="text-neutral-300">
                    Revision allowances vary based on the complexity and scope of IT services:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-neutral-400">
                    <li><strong>Web Development:</strong> 3 revision rounds included per feature/module</li>
                    <li><strong>Custom Software Development:</strong> 4 revision rounds per development phase</li>
                    <li><strong>IT Consulting & Architecture:</strong> 2 revision rounds per deliverable</li>
                    <li><strong>System Integration:</strong> 3 revision rounds per component</li>
                    <li><strong>Premium Packages:</strong> Unlimited revisions within agreed project scope</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">2. Types of Revision Requests</h2>
                  <p className="text-neutral-300">
                    We categorize IT revisions to ensure fair compensation and project management:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-neutral-400">
                    <li><strong>Bug Fixes:</strong> No additional charge for defects in delivered code</li>
                    <li><strong>Performance Optimizations:</strong> Included within initial estimate</li>
                    <li><strong>Code Refactoring:</strong> Minor refactoring included; major restructuring billed separately</li>
                    <li><strong>Feature Modifications:</strong> Within agreed scope; counted toward revision limits</li>
                    <li><strong>New Feature Requests:</strong> Require separate quote and project agreement</li>
                    <li><strong>Third-Party Integration Updates:</strong> May incur additional charges if API changes require significant rework</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">3. Additional Revision Rates</h2>
                  <p className="text-neutral-300">
                    Beyond included revisions, additional work is billed at these rates:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-neutral-400">
                    <li><strong>Web Development:</strong> $50/hour</li>
                    <li><strong>Custom Software Development:</strong> $75/hour</li>
                    <li><strong>IT Consulting & Architecture:</strong> $85/hour</li>
                    <li><strong>System Integration:</strong> $70/hour</li>
                    <li><strong>Emergency/After-Hours Support:</strong> 1.5x standard rate</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">4. Revision Request Guidelines</h2>
                  <p className="text-neutral-300">
                    To maintain project efficiency and quality:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-neutral-400">
                    <li>Revision requests must be submitted in writing with clear specifications</li>
                    <li>Multiple revisions should be consolidated into a single request when possible</li>
                    <li>Changes to API contracts, database schemas, or architecture require consultation before implementation</li>
                    <li>Out-of-scope feature requests must be documented as new projects</li>
                    <li>Testing and QA feedback is included; performance validation may incur additional hours</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">5. Revision Timeline & Delivery</h2>
                  <p className="text-neutral-300">
                    Turnaround time depends on the nature and complexity of requested changes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-neutral-400">
                    <li><strong>Minor Revisions:</strong> 2-3 business days</li>
                    <li><strong>Standard Revisions:</strong> 3-5 business days</li>
                    <li><strong>Complex Revisions:</strong> 5-10 business days (subject to current workload)</li>
                    <li>All revised code includes testing, code review, and documentation updates</li>
                    <li>Deployment to production follows agreed deployment procedures</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">6. Quality Assurance & Testing</h2>
                  <p className="text-neutral-300">
                    All revisions include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-neutral-400">
                    <li>Code testing and verification before deployment</li>
                    <li>Cross-browser and cross-platform compatibility checks</li>
                    <li>Security review for sensitive changes</li>
                    <li>Documentation updates where applicable</li>
                    <li>No additional charge for QA during revision cycles</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">7. Contact & Support</h2>
                  <p className="text-neutral-300">
                    Have questions about our revision policy or need clarification?
                  </p>
                  <p className="text-neutral-300">
                    Email: <a href="mailto:tryqutech@gmail.com" className="text-lime-300 underline">tryqutech@gmail.com</a>
                  </p>
                  <p className="text-neutral-400 text-sm mt-2">
                    We're committed to delivering quality IT solutions with transparent communication throughout the development process.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AppverseFooter />
    </>
  );
}
