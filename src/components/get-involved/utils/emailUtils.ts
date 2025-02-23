
import { supabase } from "@/integrations/supabase/client";
import emailjs from "@emailjs/browser";

interface NominationFormValues {
  email: string;
  name: string;
  school: string;
  schoolType: string;
  schoolTypeOther?: string;
  townState: string;
}

export const sendConfirmationEmail = async (values: NominationFormValues) => {
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

    // Prepare template parameters to match the email template variables
    const templateParams = {
      Name: values.name,
      "Your School": values.school,
      to_email: values.email
    };

    // Send the confirmation email
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_API_KEY
    );

  } catch (error: any) {
    console.error('Error sending confirmation email:', error);
    throw error;
  }
};
