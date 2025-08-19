import { useState } from "react";
import { Button } from "./ui/button";
import { sendEmail } from "@/app/actions/sendEmail";
import { Check, X } from 'lucide-react';
import Form from 'next/form'


export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<React.ReactNode>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await sendEmail({ name, email, message });

     if (result.success) {
      setStatus(
        <div className="flex items-center justify-center gap-2 text-chart-4">
          <Check className="w-4 h-4" />
          <span>Message sent successfully!</span>
        </div>
      );
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setStatus(
        <div className="flex items-center justify-center gap-2 text-primary">
          <X className="w-4 h-4" />
          <span>Failed to send. Try again later.</span>
        </div>
      );
    }
  };

  return (
    <div
      id="sendemail"
      className="w-full min-h-screen flex items-center justify-center px-4 py-8 sm:py-12 lg:py-16"
    >
      <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
        <Form onSubmit={handleSubmit} className="p-4 sm:p-6 md:p-8 lg:p-10" action={""}>
          {/* Responsive heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 sm:mb-4 text-gray-900">
            Contact Me
          </h1>

          {/* Responsive description */}
          <p className="text-sm sm:text-base md:text-lg text-center mb-6 sm:mb-8 text-gray-600 leading-relaxed">
            If you would like to get in touch, feel free to reach out via email
            or connect with me on social media.
          </p>

          {/* Responsive form fields */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 sm:p-4 border rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 sm:p-4 border  rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
              required
            />

            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 sm:p-4 border rounded-md text-sm sm:text-base h-24 sm:h-28 md:h-32 lg:h-36 resize-none focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
              required
            />

            {/* Responsive button */}
            <Button
              type="submit"
              className="w-full p-3 sm:p-4 text-sm sm:text-base md:text-lg bg-accent  hover:bg-secondary hover:text-black focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2  transition-all duration-200"
            >
              Send Message
            </Button>
          </div>

          {status && (
            <div className="mt-4 text-center text-sm sm:text-base text-primary-foreground border bg-black">
              {status}
            </div>
          )}
        </Form>
      </div>
    </div>
  );
}
