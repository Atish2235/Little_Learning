import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const Schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone must be at least 10 digits"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(Schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }

      toast({
        title: "Message Sent! 🎉",
        description: "Thank you for contacting us. We'll get back to you soon!",
      });

      reset();
    } catch (error) {
      console.error(error);
      toast({
        title: "Something went wrong",
        description: "Unable to send message. Please try again later.",
        // variant: 'destructive' // optional: use if your toast supports variants
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-16 md:py-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-800">
            Get In{" "}
            <span className="text-purple-600">Touch</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 font-serif max-w-2xl mx-auto">
            Have questions? We'd love to hear from you! Send us a message and we’ll reply quickly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start max-w-6xl mx-auto">
          {/* Form */}
          <Card className="rounded-2xl md:rounded-3xl shadow-xl bg-white">
            <CardContent className="p-6 md:p-8 space-y-6">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
                <div>
                  <Input
                    {...register("name")}
                    placeholder="Your Name"
                    className="w-full rounded-lg md:rounded-xl"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <Input
                    {...register("email")}
                    type="email"
                    placeholder="Your Email"
                    className="w-full rounded-lg md:rounded-xl"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <Input
                    {...register("phone")}
                    placeholder="Phone Number"
                    className="w-full rounded-lg md:rounded-xl"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                </div>

                <div>
                  <Textarea
                    {...register("message")}
                    placeholder="Your Message"
                    rows={4}
                    className="w-full rounded-lg md:rounded-xl"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full py-3 md:py-4 text-base md:text-lg font-semibold bg-purple-600 text-white hover:opacity-95 transition-all"
                  aria-busy={loading}
                >
                  {loading ? "Sending..." : "Send Message ✨"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-4 w-full">
            <Card className="rounded-2xl md:rounded-3xl shadow-lg bg-white hover:scale-[1.02] transition p-4 md:p-5">
              <div className="flex items-center gap-4">
                <div className="p-3 md:p-4 rounded-full bg-white">
                  <Phone className="h-5 w-5 md:h-6 md:w-6 text-purple-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-base md:text-lg text-gray-800">Phone</h3>
                  <p className="text-gray-600 text-sm md:text-base">(555) 123-4567</p>
                </div>
              </div>
            </Card>

            <Card className="rounded-2xl md:rounded-3xl shadow-lg bg-white hover:scale-[1.02] transition p-4 md:p-5">
              <div className="flex items-center gap-4">
                <div className="p-3 md:p-4 rounded-full bg-white">
                  <Mail className="h-5 w-5 md:h-6 md:w-6 text-blue-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-base md:text-lg text-gray-800">Email</h3>
                  <p className="text-gray-600 text-sm md:text-base">info@littlelearnings.com</p>
                </div>
              </div>
            </Card>

            <Card className="rounded-2xl md:rounded-3xl shadow-lg bg-white hover:scale-[1.02] transition p-4 md:p-5">
              <div className="flex items-center gap-4">
                <div className="p-3 md:p-4 rounded-full bg-white">
                  <MapPin className="h-5 w-5 md:h-6 md:w-6 text-green-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-base md:text-lg text-gray-800">Address</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    123 Learning Lane <br />
                    Education City, EC 12345
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
