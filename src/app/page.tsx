import Hero from "@/components/Home/Hero";
import OurServices from "@/components/Home/OurServices";
import FeaturedFlavors from "@/components/Home/FeaturedFlavors";
import ReviewSection from "@/components/Home/ReviewSection";
export default function Home() {
  return (
    <div className="">
      <Hero />
      {/* Our services */}
      <OurServices />
      {/* Featured Section  */}
      <FeaturedFlavors />

      {/* Review Section */}
      <ReviewSection />
    </div>
  );
}
