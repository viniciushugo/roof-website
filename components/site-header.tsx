import Image from "next/image";
import Link from "next/link";

const TESTFLIGHT_URL = "https://testflight.apple.com/join/uDTMdyvE";

export function SiteHeader({ dark = true }: { dark?: boolean }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/">
          <Image
            src={dark ? "/images/logo.svg" : "/images/logo-dark.svg"}
            alt="Roof"
            width={68}
            height={35}
            className="h-[28px] w-auto"
          />
        </Link>
        <a
          href={TESTFLIGHT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity hover:opacity-80"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/app-store-badge.svg"
            alt="Download on the App Store"
            className="h-[34px] w-auto"
          />
        </a>
      </div>
    </nav>
  );
}
