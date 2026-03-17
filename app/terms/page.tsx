import { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Terms of Service · Roof",
};

export default function TermsPage() {
  return (
    <main>
      <SiteHeader dark={false} />

      <article className="bg-[#F4F2EE] pt-32 pb-24 px-6">
        <div className="mx-auto max-w-[680px]">
          <h1
            className="font-[family-name:var(--font-playfair)] font-normal text-[#111] mb-4"
            style={{ fontSize: "clamp(32px, 5vw, 48px)" }}
          >
            Terms of Service
          </h1>
          <p className="text-[13px] text-[#999] mb-12">Last updated: March 2025</p>

          <div className="space-y-10 text-[16px] leading-[1.8] text-[#555]">
            <p>
              Please read these before using Roof. They&rsquo;re written to be clear,
              not to trick you.
            </p>

            <section>
              <h2 className="text-[18px] font-medium text-[#111] mb-3">What Roof is</h2>
              <p>
                Roof is a listing aggregation service. We monitor public housing portals
                (Kamernet, Pararius, Funda and others) and alert you when listings match
                your preferences.
              </p>
              <p className="mt-3">
                We are not a rental agency. We do not list properties ourselves. We do not
                handle applications, contracts, or payments between tenants and landlords.
              </p>
            </section>

            <section>
              <h2 className="text-[18px] font-medium text-[#111] mb-3">Your account</h2>
              <p>You must be 18 or older to use Roof.</p>
              <p className="mt-3">
                You are responsible for keeping your login credentials secure. If you
                suspect unauthorised access, contact us immediately at{" "}
                <a href="mailto:hello@getroof.app" className="text-[#111] underline underline-offset-4">
                  hello@getroof.app
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-[18px] font-medium text-[#111] mb-3">What we provide</h2>
              <p>
                Roof provides real-time alerts based on publicly available listing data. We
                make reasonable efforts to ensure accuracy, but we cannot guarantee:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>That all listings are still available when you receive an alert</li>
                <li>
                  That listing details (price, size, availability) are accurate at time of
                  delivery
                </li>
                <li>Uninterrupted access to the service</li>
              </ul>
              <p className="mt-4">
                Listings disappear fast. That&rsquo;s the whole problem we&rsquo;re
                solving. We are not liable if a listing is gone by the time you apply.
              </p>
            </section>

            <section>
              <h2 className="text-[18px] font-medium text-[#111] mb-3">What you agree to</h2>
              <p>By using Roof, you agree not to:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Use the service for any illegal purpose</li>
                <li>Attempt to scrape, reverse engineer, or copy our service</li>
                <li>Share your account with others</li>
                <li>Use Roof to harass or spam landlords</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[18px] font-medium text-[#111] mb-3">Scams and fraud</h2>
              <p>
                The Dutch housing market has a real scam problem. Roof shows you listings
                from public portals, but we cannot verify every landlord. Always:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>View the property before paying any deposit</li>
                <li>Never send money via wire transfer to someone you haven&rsquo;t met</li>
                <li>If something seems too good to be true, it probably is</li>
              </ul>
              <p className="mt-4">
                We are not responsible for scams or fraud that occur on third-party
                platforms we link to.
              </p>
            </section>

            <section>
              <h2 className="text-[18px] font-medium text-[#111] mb-3">Intellectual property</h2>
              <p>
                The Roof name, logo, and product are owned by us. Listing content is owned
                by the respective portals and landlords.
              </p>
            </section>

            <section>
              <h2 className="text-[18px] font-medium text-[#111] mb-3">Termination</h2>
              <p>
                We may suspend or terminate your account if you violate these terms. You
                can delete your account at any time from the app settings.
              </p>
            </section>

            <section>
              <h2 className="text-[18px] font-medium text-[#111] mb-3">Limitation of liability</h2>
              <p>
                To the maximum extent permitted by Dutch law, Roof is not liable for
                indirect or consequential damages arising from your use of the service.
              </p>
            </section>

            <section>
              <h2 className="text-[18px] font-medium text-[#111] mb-3">Governing law</h2>
              <p>
                These terms are governed by Dutch law. Any disputes will be handled in the
                courts of the Netherlands.
              </p>
            </section>

            <section>
              <h2 className="text-[18px] font-medium text-[#111] mb-3">Changes to these terms</h2>
              <p>
                We&rsquo;ll notify you by email at least 14 days before making material
                changes to these terms.
              </p>
            </section>

            <p>
              Questions? Email{" "}
              <a href="mailto:hello@getroof.app" className="text-[#111] underline underline-offset-4">
                hello@getroof.app
              </a>
            </p>
          </div>
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}
