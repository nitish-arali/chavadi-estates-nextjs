import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Youtube,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-estate-900 text-white">
      <div className="container-custom">
        <div className="pt-16 pb-8 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-serif mb-6">
              <span className="text-gold">Chavadi</span> Estates
            </h3>
            <p className="text-estate-200 mb-6">
              Building exceptional spaces where luxury meets lifestyle. With a
              commitment to quality and innovation, we create properties that
              inspire.
            </p>
            <div className="flex space-x-4">
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=61574779322267"
                className="text-white hover:text-gold transition-colors p-2"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                target="_blank"
                href="https://x.com/chavadi_estates"
                className="text-white hover:text-gold transition-colors p-2"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/chavadi_estates"
                className="text-white hover:text-gold transition-colors p-2"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/chavadi-estates-49b20b359"
                className="text-white hover:text-gold transition-colors p-2"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCsQGFTKcWvGfGYfsekBpCPw"
                className="text-white hover:text-gold transition-colors p-2"
                aria-label="Youtube"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-6 relative pb-3 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-10 after:bg-gold">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="inline-flex items-center text-estate-200 hover:text-gold transition-colors"
                >
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="inline-flex items-center text-estate-200 hover:text-gold transition-colors"
                >
                  <ArrowRight className="h-3 w-3 mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="inline-flex items-center text-estate-200 hover:text-gold transition-colors"
                >
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-estate-200 hover:text-gold transition-colors"
                >
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Contact
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/privacy-policy"
                  className="inline-flex items-center text-estate-200 hover:text-gold transition-colors"
                >
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="inline-flex items-center text-estate-200 hover:text-gold transition-colors"
                >
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Terms of Service
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-medium mb-6 relative pb-3 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-10 after:bg-gold">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gold mr-3 mt-[2px]" />
                <span className="text-estate-200">
                  <i> Corporate Office: </i>
                  <br />
                  #63/1, Hoodi Main Road, <br />
                  Surya Layout, Ayyappa Nagar, <br />
                  Beside Adyar Ananda Bhavan - A2B,
                  <br />K R Pura, Bengaluru, Karnataka-560036
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gold mr-3" />
                <a
                  href="tel:+919986689669"
                  className="text-estate-200 hover:text-gold transition-colors"
                >
                  +91 <span style={{ wordSpacing: "-2px" }}>99866 89669</span>
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gold mr-3" />
                <a
                  href="mailto:chavadiestates1@gmail.com"
                  className="text-estate-200 hover:text-gold transition-colors"
                >
                  chavadiestates1@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6 border-t border-estate-800 text-center">
          <p className="text-estate-400 text-sm">
            © {currentYear} Chavadi Estates. All rights reserved.
          </p>
          <p className="text-white text-sm">
            Designed and Developed by{" "}
            <Link
              className="text-gold"
              target="_blank"
              href="https://nitisharali.com"
            >
              Nitish Arali
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
