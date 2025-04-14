import { ReactNode } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion";
import { Minus, Plus } from "lucide-react";

type FaqItem = {
  title: string;
  description: ReactNode;
};

const faqs: FaqItem[] = [
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    description: (
      <span>
        Lorem ipsum dolor sit amet consectetur. Ornare euismod risus aliquam
        volutpat dictum consectetur accumsan praesent neque. Dolor habitasse mi
        eget etiam purus nisl nullam. Tincidunt id neque morbi risus ac dictumst
        rhoncus.
        <br />
        <br />
        Ornare euismod risus aliquam volutpat dictum consectetur accumsan
        praesent neque. Dolor habitasse mi eget etiam purus nisl nullam.
        Tincidunt id neque morbi risus ac dictumst rhoncus.
      </span>
    ),
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    description: (
      <span>
        Lorem ipsum dolor sit amet consectetur. Ornare euismod risus aliquam
        volutpat dictum consectetur accumsan praesent neque. Dolor habitasse mi
        eget etiam purus nisl nullam. Tincidunt id neque morbi risus ac dictumst
        rhoncus.
        <br />
        <br />
        Ornare euismod risus aliquam volutpat dictum consectetur accumsan
        praesent neque. Dolor habitasse mi eget etiam purus nisl nullam.
        Tincidunt id neque morbi risus ac dictumst rhoncus.
      </span>
    ),
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    description: (
      <span>
        Lorem ipsum dolor sit amet consectetur. Ornare euismod risus aliquam
        volutpat dictum consectetur accumsan praesent neque. Dolor habitasse mi
        eget etiam purus nisl nullam. Tincidunt id neque morbi risus ac dictumst
        rhoncus.
        <br />
        <br />
        Ornare euismod risus aliquam volutpat dictum consectetur accumsan
        praesent neque. Dolor habitasse mi eget etiam purus nisl nullam.
        Tincidunt id neque morbi risus ac dictumst rhoncus.
      </span>
    ),
  },
];

export function GeneralFaq() {
  return (
    <section className="bg-white py-10 px-4 md:py-20 md:px-0">
      <div className="container mx-auto">
        <h1 className="text-foreground text-2xl font-semibold">
          Pertanyaan Umum
        </h1>
        <Accordion type="single" collapsible className="mt-4 md:mt-10">
          {faqs.map((faqItem, faqIdx) => (
            <AccordionItem
              key={`${faqItem.title}-${faqIdx}`}
              value={`${faqItem.title}-${faqIdx}`}
              className="border-b-2 border-dashed"
            >
              <AccordionTrigger
                iconOpen={<Minus size={24} />}
                iconClosed={<Plus size={24} />}
                className="p-4 md:py-8 md:px-6"
              >
                <h2 className="text-lg text-foreground font-semibold">
                  {faqItem.title}
                </h2>
              </AccordionTrigger>
              <AccordionContent className="p-4 pt-0 md:pb-8 md:px-6">
                <p className="text-base text-muted-foreground">
                  {faqItem.description}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
