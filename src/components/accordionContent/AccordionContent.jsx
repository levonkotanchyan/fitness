import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import "./accordionContent.scss";
const items = [
  {
    header: "What is FitMaker and how can it help me reach my fitness goals?",
    content:
      "FitMaker is an online fitness platform that offers personalized workout plans, expert coaching, and comprehensive nutritional guidance. Whether you're looking to lose weight, build muscle, or simply stay fit, our tailored programs and community support will help you achieve your fitness goals.",
  },
  {
    header: "How do I get started with a workout plan on FitMaker?",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
  },
  {
    header: "What is included in the Custom Plan?",
    content: "Suspendisse massa risus, pretium id interdum in...",
  },
  {
    header: "Can I change my plan after signing up?",
    content: "Suspendisse massa risus, pretium id interdum in...",
  },
  {
    header: "What kind of support can I expect from my trainer?",
    content: "Suspendisse massa risus, pretium id interdum in...",
  },
];

export default function AccordionContent() {
  return (
    <Accordion>
      {items.map(({ header, content }, i) => (
        <AccordionItem header={header} key={i}>
          {content}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
