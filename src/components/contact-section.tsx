
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AtSignIcon, MapPinIcon, SendIcon } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export function ContactSection({ formspreeEndpoint }: { formspreeEndpoint: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill out all fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out, I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-container py-20">
      <div className="text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's talk about your project</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
          <h3 className="text-2xl font-display font-semibold mb-6">Contact Information</h3>
          
          <div className="space-y-6">
            {/* Hide email */}
            {/* <div className="flex items-start">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <AtSignIcon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="text-sm font-medium mb-1">Email</h4>
                <p className="text-muted-foreground">contact@yashrastogi.com</p>
              </div>
            </div> */}
            
            <div className="flex items-start">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <MapPinIcon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="text-sm font-medium mb-1">Location</h4>
                <p className="text-muted-foreground">Delhi, India</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
          <form onSubmit={handleSubmit} className="glass p-6 md:p-8">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 rounded-md border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              ></textarea>
            </div>
            
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Sending..." : (
                <>
                  Send Message <SendIcon className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
