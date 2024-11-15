import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";
import { Open_Sans } from "next/font/google"
const openSans = Open_Sans({
  subsets: ['latin'],
  display: "swap",
  weight: ["400", "600", "800"]
})

const reviews = [
  {
    name: "Rashmi",
    username: "Senior Software Engineer",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://www.jointaro.com/faces/rashmik.webp",
  },
  {
    name: "Hari",
    username: "Senior Software Engineer",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://www.jointaro.com/faces/harin.webp",
  },
  {
    name: "Rashmi",
    username: "Senior Software Engineer",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://www.jointaro.com/faces/rashmik.webp",
  },
  {
    name: "Hari",
    username: "Senior Software Engineer",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://www.jointaro.com/faces/harin.webp",
  },
  {
    name: "Rashmi",
    username: "Senior Software Engineer",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://www.jointaro.com/faces/rashmik.webp",
  },
  {
    name: "Hari",
    username: "Senior Software Engineer",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://www.jointaro.com/faces/harin.webp",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gradient-to-br from-fuchsia-950/10 to-violet-200 hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image className="rounded-full" width={32} height={32} alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Testimonial() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden  bg-transparent mt-16">
      <h1 className="text-5xl py-16 font-bold uppercase text-transparent bg-clip-text bg-gradient-to-bl from-violet-950 via-violet-400 to-violet-950" style={openSans.style}
      >
        From The Community
      </h1>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
