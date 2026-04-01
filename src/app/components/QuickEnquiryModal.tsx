import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function QuickEnquiryModal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    // Add FormSubmit configuration
    formData.append("_subject", "New Quick Enquiry - Altimar Website");
    formData.append("_template", "table");

    try {
      const response = await fetch("https://mailthis.to/sales@altimarenergy.com", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setOpen(false);
        alert("Thank you for your enquiry. We will get back to you soon!");
      } else {
        alert("There was an issue sending your enquiry. Please try again or email us directly at sales@altimarenergy.com");
      }
    } catch (error) {
      alert("There was an issue sending your enquiry. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Quick Enquiry</DialogTitle>
          <DialogDescription>
            Fill out the form below and our team will get back to you shortly.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium leading-none">
              Name
            </label>
            <Input id="name" name="name" required placeholder="Your Name" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium leading-none">
              Email
            </label>
            <Input id="email" name="email" type="email" required placeholder="Your email id" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="phone" className="text-sm font-medium leading-none">
              Phone
            </label>
            <Input id="phone" name="phone" type="tel" placeholder="Your Phone Number" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm font-medium leading-none">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              required
              placeholder="How can we help you?"
              className="resize-none"
              rows={4}
            />
          </div>
          <div className="flex justify-end pt-4">
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-[#264740] hover:bg-[#1f3a34] min-w-[140px]"
            >
              {isSubmitting ? "Sending..." : "Submit Enquiry"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
