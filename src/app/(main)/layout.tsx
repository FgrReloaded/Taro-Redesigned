import CursorLightEffect from "@/components/Cursor";
import Footer from "@/components/Footer";
import Navbar from "@/components/Nav/Navbar";


export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className="relative">
      {/* <CursorLightEffect /> */}
      <Navbar />
      <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]">
        </div>
      </div>
      {children}
      <div className="bg-gradient-to-r from-transparent via-violet-300 dark:via-neutral-700 to-transparent mt-8 h-[1px] w-full" />
      <Footer />
    </div>
  );
}