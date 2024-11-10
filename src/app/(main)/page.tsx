import Counter from "@/components/Counter";
import CourseContainer from "@/components/CourseContainer";
import Faq from "@/components/Faq";
import FloatingBubble from "@/components/FloatingBubble";
import Founder from "@/components/Founder";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Counter />
      <CourseContainer  />
      <Founder />
      <FloatingBubble />
      <Faq />
    </>
  );
}
