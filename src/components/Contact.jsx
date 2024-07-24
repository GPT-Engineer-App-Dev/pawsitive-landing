import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-yellow-800 mb-8">Get in Touch</h2>
        <form className="max-w-md mx-auto">
          <div className="space-y-4">
            <Input placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Textarea placeholder="Your Message" />
            <Button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">Send Message</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;