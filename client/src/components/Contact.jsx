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

  const onSubmit = (data) => {
    console.log("Form data:", data);

    toast({
      title: "Message Sent! 🎉",
      description: "Thank you for contacting us. We'll get back to you soon!",
    });

    reset();
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-b from-blue-50 via-pink-50 to-yellow-50 overflow-hidden"
    >
      {/* Floating blobs */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-pink-300/40 blur-3xl rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-yellow-300/40 blur-3xl rounded-full animate-float-delayed"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-4 text-gray-800">
            Get In{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-lg text-gray-600 font-serif max-w-2xl mx-auto">
            Have questions? We'd love to hear from you! Send us a message and we’ll reply quickly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Form */}
          <Card className="rounded-3xl shadow-xl bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 space-y-6">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <Input
                    {...register("name")}
                    placeholder="Your Name"
                    className="w-full rounded-xl"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <Input
                    {...register("email")}
                    type="email"
                    placeholder="Your Email"
                    className="w-full rounded-xl"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <Input
                    {...register("phone")}
                    placeholder="Phone Number"
                    className="w-full rounded-xl"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                </div>

                <div>
                  <Textarea
                    {...register("message")}
                    placeholder="Your Message"
                    rows={4}
                    className="w-full rounded-xl"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-full py-4 text-lg font-semibold bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-[1.03] transition-all"
                >
                  Send Message ✨
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6 w-full">
            <Card className="rounded-3xl shadow-lg bg-white/80 backdrop-blur-sm hover:scale-[1.02] transition p-5">
              <div className="flex items-center gap-4">
                <div className="bg-purple-200 p-4 rounded-full">
                  <Phone className="h-6 w-6 text-purple-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Phone</h3>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
            </Card>

            <Card className="rounded-3xl shadow-lg bg-white/80 backdrop-blur-sm hover:scale-[1.02] transition p-5">
              <div className="flex items-center gap-4">
                <div className="bg-blue-200 p-4 rounded-full">
                  <Mail className="h-6 w-6 text-blue-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Email</h3>
                  <p className="text-gray-600">info@littlelearnings.com</p>
                </div>
              </div>
            </Card>

            <Card className="rounded-3xl shadow-lg bg-white/80 backdrop-blur-sm hover:scale-[1.02] transition p-5">
              <div className="flex items-center gap-4">
                <div className="bg-green-200 p-4 rounded-full">
                  <MapPin className="h-6 w-6 text-green-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Address</h3>
                  <p className="text-gray-600 leading-relaxed">
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
