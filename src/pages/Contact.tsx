
import { useState } from "react";
import Navigation from "../components/Navigation";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Get all required EmailJS credentials from Supabase secrets
      const [
        { data: { EMAILJS_PUBLIC_KEY } },
        { data: { EMAILJS_SERVICE_ID } },
        { data: { EMAILJS_TEMPLATE_ID } },
        { data: { EMAILJS_API_KEY } }
      ] = await Promise.all([
        supabase.functions.invoke('get-secret', { body: { name: 'EMAILJS_PUBLIC_KEY' } }),
        supabase.functions.invoke('get-secret', { body: { name: 'EMAILJS_SERVICE_ID' } }),
        supabase.functions.invoke('get-secret', { body: { name: 'EMAILJS_TEMPLATE_ID' } }),
        supabase.functions.invoke('get-secret', { body: { name: 'EMAILJS_API_KEY' } })
      ]);

      if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_API_KEY) {
        throw new Error('Missing EmailJS configuration');
      }

      // Initialize EmailJS with the public key
      emailjs.init(EMAILJS_PUBLIC_KEY);

      // Send the email using the form data
      const form = e.currentTarget;
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form,
        EMAILJS_API_KEY
      );

      toast.success("Message sent successfully!");
      form.reset();
    } catch (error: any) {
      console.error('Error sending email:', error);
      toast.error(error.message || "Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#DBE6F6] via-[#E8F4E2] to-[#F2FAFC]">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 text-primary">Contact Us</h1>
            <p className="text-xl text-gray-600">
              Have questions or want to get involved? We'd love to hear from you!
            </p>
          </div>
          
          <form 
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-md p-8 space-y-6"
          >
            <div>
              <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <Input
                id="user_name"
                name="user_name"
                required
                className="w-full"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input
                id="user_email"
                name="user_email"
                type="email"
                required
                className="w-full"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                required
                className="w-full min-h-[150px]"
                placeholder="How can we help you?"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full"
              disabled={isSubmitting}
            >
              <Mail className="mr-2 h-5 w-5" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
          
          <p className="mt-6 text-center text-gray-500">
            Or email us directly at: greenplateinitiative@gmail.com
          </p>
        </div>
      </main>
    </div>
  );
};

export default Contact;
