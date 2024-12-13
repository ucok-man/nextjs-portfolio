"use client";

import LinkedinIcon from "@/assets/navbar/linkedin.svg";
import EmailIcon from "@/assets/navbar/minutemailer.svg";
import WAIcon from "@/assets/navbar/whatsapp.svg";

import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section className="pb-4 lg:mb-36">
      <h2 className="my-20 text-center text-4xl text-stone-300">
        Get in Touch
      </h2>
      <div className="max-w-screen-xl mx-auto flex flex-col items-center">
        <p className="text-center text-stone-400 mb-8 max-w-2xl">
          I'm always open to new opportunities and collaborations. Feel free to
          reach out through any of the following channels:
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            variant="outline"
            className="bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-stone-200"
            onClick={() =>
              window.open("https://wa.me/yourphonenumber", "_blank")
            }
          >
            <WAIcon className="text-green-700" />
            WhatsApp
          </Button>
          <Button
            variant="outline"
            className="bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-stone-200"
            onClick={() =>
              window.open("https://linkedin.com/in/yourprofile", "_blank")
            }
          >
            <LinkedinIcon className="text-sky-400" />
            LinkedIn
          </Button>
          <Button
            variant="outline"
            className="bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-stone-200"
            onClick={() =>
              (window.location.href = "mailto:your.email@example.com")
            }
          >
            <EmailIcon className="text-stone-300" />
            Email
          </Button>
        </div>
      </div>
    </section>
  );
}
