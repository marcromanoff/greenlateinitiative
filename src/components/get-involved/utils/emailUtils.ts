
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

interface EmailJSSecrets {
  EMAILJS_PUBLIC_KEY: string;
  EMAILJS_SERVICE_ID: string;
  EMAILJS_TEMPLATE_ID: string;
  EMAILJS_API_KEY: string;
}

export const sendConfirmationEmail = async (values: NominationFormValues) => {
  try {
    const secretsToFetch = [
      'EMAILJS_PUBLIC_KEY',
      'EMAILJS_SERVICE_ID',
      'EMAILJS_TEMPLATE_ID',
      'EMAILJS_API_KEY'
    ];

    const secretPromises = secretsToFetch.map(secretName => 
      supabase.functions.invoke('get-secret', { body: { name: secretName } })
    );

    const secretsResponses = await Promise.all(secretPromises);
    
    const secrets = secretsResponses.reduce((acc, { data }, index) => {
      const secretValue = data?.[secretsToFetch[index]];
      if (!secretValue) {
        throw new Error(`Missing ${secretsToFetch[index]} configuration`);
      }
      return { ...acc, [secretsToFetch[index]]: secretValue };
    }, {} as EmailJSSecrets);

    console.log('EmailJS configuration loaded successfully');

    // Initialize EmailJS with the public key
    emailjs.init(secrets.EMAILJS_PUBLIC_KEY);

    // Prepare template parameters
    const templateParams = {
      Name: values.name,
      "Your School": values.school,
      to_email: values.email
    };

    // Send the confirmation email
    const response = await emailjs.send(
      secrets.EMAILJS_SERVICE_ID,
      secrets.EMAILJS_TEMPLATE_ID,
      templateParams,
      secrets.EMAILJS_API_KEY
    );

    console.log('Email sent successfully:', response);
    return response;

  } catch (error: any) {
    console.error('Error sending confirmation email:', error);
    throw new Error(`Failed to send confirmation email: ${error.message}`);
  }
};
