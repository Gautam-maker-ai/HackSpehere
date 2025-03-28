import {
  Github,
  Instagram,
  Mail,
  ArrowUp,
  Copyright,
  Linkedin,
} from "lucide-react";
import { Button } from "./ui/button";
import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-16 bg-gradient-to-br from-black/10 via-red-300/20 to-black/10  backdrop-blur-lg border-t border-primary/20">
      <div className="absolute right-4 -top-4">
        <Button
          onClick={scrollToTop}
          variant="outline"
          size="icon"
          className="rounded-full bg-red/80 text-white shadow-lg hover:bg-red"
        >
          <ArrowUp className="h-4 w-4" />
        </Button>
      </div>

      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#f3eded] to-[#534545]">
              Xception
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Join us in shaping the future of technology through innovation and
              collaboration.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#f3eded] to-[#534545]">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {["Themes", "Timeline", "Sponsors"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-red-500 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#f3eded] to-[#534545]">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-5 w-5 text-transparent bg-clip-text bg-gradient-to-br from-[#f3eded] to-[#534545]" />
                <span>Xception.contact@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#f3eded] to-[#534545]">
              Follow Us
            </h3>
            <div className="flex space-x-5">
              {[
                { icon: Github, href: "https://github.com/Xception-hack" },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/dsw.cgc/",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/techamigos-cgc-landran-214626284",
                },
              ].map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-red-500 transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/*location*/}
          {/* <div className="space-y-4">
            <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#f3eded] to-[#534545]">
              Location
            </h3>
            <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.96880491781!2d76.6618807383817!3d30.68721506099027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef154b91a85b%3A0x4d8b9df97e986631!2sChandigarh%20Group%20of%20Colleges%20(CGC)%20-%20Landran!5e0!3m2!1sen!2sin!4v1743013187915!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
           </div>
        
          </div> */}
        {/* Divider */}
        <div className="mt-10 border-t border-primary/20 pt-6">
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Copyright className="h-4 w-4 text-red-500" />
              <p>2025 Xception. All rights reserved.</p>
            </div>
            <div>
              <Button
                variant="link"
                className="text-sm text-muted-foreground hover:text-red-400 transition-colors"
              >
                Privacy Policy
              </Button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
