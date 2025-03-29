import { ChevronRight } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <header className="relative h-96 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80"
          alt="Ice cream background"
          height={400}
          width={400}
          priority
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-6xl font-bold mb-6">
          Delicious Ice Cream Made Fresh Daily
        </h1>
        <p className="text-xl mb-8">Treat yourself to a scoop of happiness!</p>

        <Link href="/order">
          <Button
            variant="secondary"
            className="bg-secondary hover:bg-secondary-foreground text-white !px-8 !py-3 rounded-full !font-semibold transition-colors flex items-center gap-2 h-12 cursor-pointer mx-auto"
          >
            Order Now <ChevronRight size={20} />
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Hero;
