import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItemProps {
  title: string;
  value: string;
  children: React.ReactNode;
}

const FAQItem = ({ title, value, children }: FAQItemProps) => {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="text-xl font-semibold">{title}</AccordionTrigger>
      <AccordionContent className="space-y-4">{children}</AccordionContent>
    </AccordionItem>
  );
};

export default FAQItem;