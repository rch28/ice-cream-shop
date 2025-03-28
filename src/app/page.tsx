import Hero from "@/components/Home/Hero";
import OurServices from "@/components/Home/OurServices";
import FeaturedFlavors from "@/components/Home/FeaturedFlavors";
export default function Home() {
  return (
    <div className="">
      <Hero />
      {/* Our services */}
      <OurServices />
      {/* Featured Section  */}
      <FeaturedFlavors />
    </div>
  );
}
