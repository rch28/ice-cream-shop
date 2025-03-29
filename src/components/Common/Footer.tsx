import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t py-6 md:py-0 bg-primary text-primary-foreground px-4">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © 2025 Ice Cream Shops. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <a href="/terms" className="hover:underline underline-offset-4">
            Terms
          </a>
          <a href="/privacy" className="hover:underline underline-offset-4">
            Privacy
          </a>
          <Link
            href="/contact-us"
            className="hover:underline underline-offset-4"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
