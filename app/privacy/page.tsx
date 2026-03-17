import { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Privacy Policy · Roof",
};

export default function PrivacyPage() {
  return (
    <main>
      <SiteHeader dark={false} />

      <article className="bg-[#F4F2EE] pt-32 pb-24 px-6">
        <div className="mx-auto max-w-[680px]">
          <h1
            className="font-[family-name:var(--font-playfair)] font-normal text-[#111] mb-4"
            style={{ fontSize: "clamp(32px, 5vw, 48px)" }}
          >
            Privacy Policy
          </h1>
          <p className="text-[13px] text-[#999] mb-12">Last updated: March 2025</p>

          <div className="space-y-10 text-[16px] leading-[1.8] text-[#555]">
            <p>
              At Roof, we believe your data is yours. Here&rsquo;s exactly what we
              collect, why, and what we do with it.
            </p>

            <section>
              <h2 className="text-[18px] font-medium text-[#111] mb-3">Who we are</h2>
              <p>
                Roof (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is a
                housing listing aggregator operating in the Netherlands.
              </p>
              <p className="mt-3">
                Email:{" "}
                <a href="mailto:privacy@getroof.app" className="text-[#111] underline underline-offset-4">
                  privacy@getroof.app
                </a>
                <br />
                Website: getroof.app
              </p>
            </section>

            <section>
              <h2 className="text-[18px] font-medium text-[#111] mb-3">What we collect</h2>

              <p className="font-medium text-[#111]">Account information</p>
              <p className="mt-1">
                When you sign up, we collect your name, email address, and authentication
                data (if you use Google or Apple login).
              </p>

              <p className="font-medium text-[#111] mt-6">Search preferences</p>
              <p className="mt-1">
                City, budget range, housing type, and move-in date that you set in the app.
              </p>

              <p className="font-medium text-[#111] mt-6">Usage data</p>
              <p className="mt-1">
                How you interact with the app: which listings you open, notifications you
                click, and features you use. This helps us improve the product.
              </p>

              <p className="font-medium text-[#111] mt-6">Device data</p>
              <p className="mt-1">
                Device type, operating system, and app version. Never your location.
              </p>
            </section>

            <section>
              <h2 className="text-[18px] font-medium text-[#111] mb-3">What we do NOT collect</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Your location or GPS data</li>
                <li>Payment or financial information</li>
                <li>Any data from the housing portals you visit after clicking a listing</li>
                <li>Biometric data of any kind</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[18px] font-medium text-[#111] mb-3">Why we collect it</h2>
              <p>We use your data to:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Send you relevant listing alerts</li>
                <li>Match listings to your preferences</li>
                <li>Improve the accuracy of our search</li>
                <li>Send transactional emails (welcome, alerts, account notifications)</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p className="mt-4">We do not sell your data. Ever.</p>
              <p>We do not use your data for advertising.</p>
            </section>

            <section>
              <h2 className="text-[18px] font-medium text-[#111] mb-3">Who we share it with</h2>
              <p>We use a small number of trusted services to operate Roof:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li><span className="font-medium text-[#111]">Supabase</span> &mdash; database and authentication</li>
                <li><span className="font-medium text-[#111]">Resend</span> &mdash; email delivery</li>
                <li><span className="font-medium text-[#111]">Vercel</span> &mdash; hosting</li>
              </ul>
              <p className="mt-4">
                All providers are GDPR compliant. We do not share your data with housing
                portals, landlords, or third-party advertisers.
              </p>
            </section>

            <section>
              <h2 className="text-[18px] font-medium text-[#111] mb-3">How long we keep it</h2>
              <p>
                We keep your data for as long as your account is active. If you delete your
                account, we delete your personal data within 30 days.
              </p>
              <p className="mt-3">
                Usage logs are retained for 90 days for debugging purposes, then deleted.
              </p>
            </section>

            <section>
              <h2 className="text-[18px] font-medium text-[#111] mb-3">Your rights (GDPR)</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Access the data we hold about you</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Export your data in a portable format</li>
                <li>Withdraw consent at any time</li>
                <li>
                  Lodge a complaint with the Dutch Data Protection Authority (AP) at
                  autoriteitpersoonsgegevens.nl
                </li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, email us at{" "}
                <a href="mailto:privacy@getroof.app" className="text-[#111] underline underline-offset-4">
                  privacy@getroof.app
                </a>{" "}
                and we&rsquo;ll respond within 30 days.
              </p>
            </section>

            <section>
              <h2 className="text-[18px] font-medium text-[#111] mb-3">Cookies</h2>
              <p>
                We use only essential cookies required to keep you logged in. We do not use
                tracking or advertising cookies.
              </p>
            </section>

            <section>
              <h2 className="text-[18px] font-medium text-[#111] mb-3">Changes to this policy</h2>
              <p>
                If we make significant changes, we&rsquo;ll notify you by email before they
                take effect.
              </p>
            </section>

            <p>
              Questions? Email{" "}
              <a href="mailto:privacy@getroof.app" className="text-[#111] underline underline-offset-4">
                privacy@getroof.app
              </a>
            </p>
          </div>
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}
