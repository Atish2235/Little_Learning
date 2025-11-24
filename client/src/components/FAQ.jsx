import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import { Baby, School, Clock, MessageSquare, ShieldCheck } from "lucide-react";

export default function FAQ() {
  return (
    <section
      id="faq"
      className="
        relative py-24 
        bg-gradient-to-b from-yellow-50 via-pink-50 to-blue-50
        overflow-hidden
      "
    >
      {/* Wavy Top Border */}
      <svg
        className="absolute top-0 left-0 w-full h-24 text-white"
        viewBox="0 0 1440 320"
        fill="currentColor"
      >
        <path d="M0,128L80,133.3C160,139,320,149,480,160C640,171,800,181,960,176C1120,171,1280,149,1360,138.7L1440,128L1440,0H0Z"></path>
      </svg>

      {/* Floating Blobs */}
      <div className="absolute top-12 right-20 w-44 h-44 bg-pink-300/40 blur-3xl rounded-full animate-float"></div>
      <div className="absolute bottom-12 left-20 w-40 h-40 bg-blue-300/40 blur-3xl rounded-full animate-float-delayed"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
          Frequently Asked Questions ❓
        </h2>

        <p className="text-gray-700 text-xl font-serif mb-14">
          Answers to help you understand how Little Learnings helps your child grow 🌈
        </p>

        {/* Accordion */}
        <div className="space-y-4">
          <Accordion type="single" collapsible className="space-y-4">

            {/* Q1 */}
            <AccordionItem
              value="q1"
              className="bg-white shadow-xl rounded-3xl p-5 border border-purple-100"
            >
              <AccordionTrigger className="text-xl flex items-center gap-3 font-semibold text-purple-700">
                <Baby className="w-6 h-6 text-pink-500" />
                What age groups do you accept? 👶
              </AccordionTrigger>

              <AccordionContent className="text-gray-600 text-left font-serif pl-10 pr-4 pt-2">
                We welcome children aged <strong>2 to 6 years</strong> with specially designed programs for toddlers, Pre-K, and kindergarten prep.
              </AccordionContent>
            </AccordionItem>

            {/* Q2 */}
            <AccordionItem
              value="q2"
              className="bg-white shadow-xl rounded-3xl p-5 border border-purple-100"
            >
              <AccordionTrigger className="text-xl flex items-center gap-3 font-semibold text-purple-700">
                <School className="w-6 h-6 text-blue-500" />
                Do you offer trial classes? 🎓
              </AccordionTrigger>

              <AccordionContent className="text-gray-600 text-left font-serif pl-10 pr-4 pt-2">
                Yes! Parents can book a <strong>free demo class</strong> and let their child experience our joyful learning environment.
              </AccordionContent>
            </AccordionItem>

            {/* Q3 */}
            <AccordionItem
              value="q3"
              className="bg-white shadow-xl rounded-3xl p-5 border border-purple-100"
            >
              <AccordionTrigger className="text-xl flex items-center gap-3 font-semibold text-purple-700">
                <Clock className="w-6 h-6 text-yellow-500" />
                What are your school timings? ⏰
              </AccordionTrigger>

              <AccordionContent className="text-gray-600 text-left font-serif pl-10 pr-4 pt-2">
                Regular school hours are <strong>9:00 AM – 12:30 PM</strong>.  
                Extended daycare is available upon request.
              </AccordionContent>
            </AccordionItem>

            {/* Q4 */}
            <AccordionItem
              value="q4"
              className="bg-white shadow-xl rounded-3xl p-5 border border-purple-100"
            >
              <AccordionTrigger className="text-xl flex items-center gap-3 font-semibold text-purple-700">
                <MessageSquare className="w-6 h-6 text-green-500" />
                How do parents stay updated? 📱
              </AccordionTrigger>

              <AccordionContent className="text-gray-600 text-left font-serif pl-10 pr-4 pt-2">
                Daily photos, reports, and progress updates are shared through our <strong>parent communication app</strong>.
              </AccordionContent>
            </AccordionItem>

            {/* Q5 */}
            <AccordionItem
              value="q5"
              className="bg-white shadow-xl rounded-3xl p-5 border border-purple-100"
            >
              <AccordionTrigger className="text-xl flex items-center gap-3 font-semibold text-purple-700">
                <ShieldCheck className="w-6 h-6 text-purple-500" />
                How safe is the school environment? 🛡️
              </AccordionTrigger>

              <AccordionContent className="text-gray-600 text-left font-serif pl-10 pr-4 pt-2">
                Safety is our top priority!  
                We follow strict child-safe policies, CCTV monitoring, and secure entry protocols.
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </div>
      </div>
    </section>
  );
}
