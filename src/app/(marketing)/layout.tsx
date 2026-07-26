import type { Metadata } from "next";
import { SiteFooter } from "@/components/marketing/site-footer";
import { SiteHeader } from "@/components/marketing/site-header";
import { SmoothScroll } from "@/components/shared/smooth-scroll";

export const metadata: Metadata = {
  title: { default: "TBD — To Be Declared", template: "%s — TBD" },
  description: "TBD is a creative technology company for brands ready to be declared.",
  openGraph: { type: "website", locale: "en_IN", siteName: "TBD" },
  robots: { index: true, follow: true },
};
export default function MarketingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <SmoothScroll>
      <SiteHeader />
      {children}
      <SiteFooter />
    </SmoothScroll>
  );
}
