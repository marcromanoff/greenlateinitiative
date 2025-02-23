
import { supabase } from "@/integrations/supabase/client";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

// EmailJS public key can be stored directly since it's meant to be public
const EMAILJS_PUBLIC_KEY = "CN3eL5x89CJDoRASU";

interface NominationFormValues {
  email: string;
  name: string;
  school: string;
  schoolType: string;
  schoolTypeOther?: string;
  townState: string;
}

interface EmailJSSecrets {
  EMAILJS_SERVICE_ID: string;
  EMAILJS_TEMPLATE_ID: string;
  EMAILJS_API_KEY: string;
}

export const sendConfirmationEmail = async (values: NominationFormValues) => {
  try {
    const secretsToFetch = [
      'EMAILJS_SERVICE_ID',
      'EMAILJS_TEMPLATE_ID',
      'EMAILJS_API_KEY'
    ];

    console.log('Fetching EmailJS secrets...');
    
    const secretResponses = await Promise.all(
      secretsToFetch.map(async (secretName) => {
        const { data, error } = await supabase.functions.invoke('get-secret', {
          body: { name: secretName }
        });
        
        if (error) {
          console.error(`Error fetching ${secretName}:`, error);
          throw new Error(`Failed to fetch ${secretName}: ${error.message}`);
        }
        
        if (!data || !data[secretName]) {
          throw new Error(`${secretName} not found in response`);
        }
        
        return { [secretName]: data[secretName] };
      })
    );

    const secrets = secretResponses.reduce((acc, curr) => ({ ...acc, ...curr }), {} as EmailJSSecrets);
    console.log('EmailJS configuration loaded successfully');

    // Initialize EmailJS with the public key
    emailjs.init(EMAILJS_PUBLIC_KEY);

    // Prepare template parameters
    const templateParams = {
      Name: values.name,
      "Your School": values.school,
      to_email: values.email
    };

    // Send the confirmation email
    console.log('Sending email with EmailJS...');
    const response = await emailjs.send(
      secrets.EMAILJS_SERVICE_ID,
      secrets.EMAILJS_TEMPLATE_ID,
      templateParams,
      secrets.EMAILJS_API_KEY
    );

    console.log('Email sent successfully:', response);
    toast.success('Confirmation email sent successfully!');
    return response;

  } catch (error: any) {
    console.error('Error sending confirmation email:', error);
    toast.error(`Failed to send confirmation email: ${error.message}`);
    throw new Error(`Failed to send confirmation email: ${error.message}`);
  }
};
