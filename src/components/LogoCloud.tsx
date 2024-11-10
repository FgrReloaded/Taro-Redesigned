import IconCloud from "@/components/ui/icon-cloud";
import { Open_Sans } from "next/font/google"


const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ["400", "600","800"]
})

const slugs = [
  "meta",
  "google",
  "microsoft",
  "tiktok",
  "snapchat",
  "pinterest",
  "linkedin",
  "amazon",
  "reddit",
  "uber",
  "twitter",
  "netflix",
  "apple",
  "robinhood",
];

export function LogoCloud() {
  return (
    <div className="relative flex size-full flex-col gap-8 max-w-lg items-center justify-center overflow-hidden rounded-lg px-20 pb-20 pt-8 mt-16">
      <IconCloud iconSlugs={slugs} />
      <p style={openSans.style} className="text-xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-br from-violet-500 to-black">
        Learn with 92,000+ software engineers from 300+ companies
      </p>
    </div>
  );
}
