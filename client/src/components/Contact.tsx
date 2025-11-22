import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We'll be in touch soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    { icon: MapPin, text: "123 Learning Lane, Sunshine City, SC 12345" },
    { icon: Phone, text: "(555) 123-4567" },
    { icon: Mail, text: "hello@littlelearnings.edu" },
    { icon: Clock, text: "Mon-Fri: 7:00 AM - 6:00 PM" },
  ];

  return (
    <section id="contact" className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground font-serif max-w-2xl mx-auto">
            Schedule a tour or ask us anything. We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  data-testid="input-name"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  data-testid="input-email"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  data-testid="input-phone"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Tell us about your child and any questions you have..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  required
                  data-testid="input-message"
                />
              </div>
              <Button type="submit" className="w-full rounded-full" size="lg" data-testid="button-submit">
                Send Message ✨
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start gap-3" data-testid={`contact-info-${index}`}>
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <p className="text-muted-foreground font-serif pt-2">{info.text}</p>
                    </div>
                  );
                })}
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Schedule a Tour!</h3>
              <p className="text-muted-foreground font-serif mb-4">
                See our facilities, meet our teachers, and discover why families love Little Learnings.
              </p>
              <Button className="rounded-full" size="lg" data-testid="button-schedule-tour">
                Book Your Visit
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
