import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t py-12 bg-primary text-primary-foreground px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold">Ice Cream Company</h3>
            <p className="text-sm text-primary-foreground/80">
              Serving delicious ice cream since 2015. Made with love and the
              finest ingredients.
            </p>
            <p className="text-sm text-primary-foreground/80">
              © 2025 Ice Cream Company. All rights reserved.
            </p>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4" />
              <span>123 Ice Cream Lane, Dessert City, DC 12345</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4" />
              <span>info@icecreamcompany.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-sm hover:underline underline-offset-4"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm hover:underline underline-offset-4"
              >
                About Us
              </Link>
              <Link
                href="/flavors"
                className="text-sm hover:underline underline-offset-4"
              >
                Flavors
              </Link>
              {/* <Link
                href="/terms"
                className="text-sm hover:underline underline-offset-4"
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                className="text-sm hover:underline underline-offset-4"
              >
                Privacy
              </Link> */}
              {/* <Link
                href="/contact-us"
                className="text-sm hover:underline underline-offset-4"
              >
                Contact
              </Link> */}
            </div>
          </div>

          {/* Google Maps */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold">Find Us</h3>
            <div className="h-64 w-full rounded-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369674846028!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s123%20Street%2C%20New%20York%2C%20NY%2010001%2C%20USA!5e0!3m2!1sen!2sus!4v1616603994539!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                title="Ice Cream Company Location"
                aria-label="Map showing the location of Ice Cream Company"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
