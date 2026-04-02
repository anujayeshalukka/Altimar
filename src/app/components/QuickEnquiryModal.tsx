import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function QuickEnquiryModal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!open) {
      // Reset state when modal closes
      const timer = setTimeout(() => {
        setIsSuccess(false);
        setError(null);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [open]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    formData.append("_subject", "New Quick Enquiry - Altimar Website");
    formData.append("_template", "table");
    formData.append("_captcha", "false");

    try {
      const response = await fetch("https://formsubmit.co/ajax/sales@altimarenergy.com", {
        method: "POST",
        headers: { 
          'Accept': 'application/json'
        },
        body: formData,
      });

      if (response.ok) {
        setIsSuccess(true);
        // Auto close after 3 seconds
        setTimeout(() => {
          setOpen(false);
        }, 3000);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (error) {
      setError("Failed to send message. Please check your connection.");
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
        <div className="py-4">
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <CheckCircle2 className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-lg font-semibold">Message Sent Successfully</h3>
              <p className="text-sm text-gray-500 mt-2">Thank you! We'll get back to you soon.</p>
              <Button onClick={() => setOpen(false)} className="mt-6 bg-[#264740] w-full">Close</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4">
              {error && <p className="text-xs text-red-500">{error}</p>}
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-medium leading-none">Name</label>
                <Input id="name" name="name" required placeholder="Your Name" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium leading-none">Email</label>
                <Input id="email" name="email" type="email" required placeholder="Your email id" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="phone" className="text-sm font-medium leading-none">Phone</label>
                <Input id="phone" name="phone" type="tel" placeholder="Your Phone Number" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-medium leading-none">Message</label>
                <Textarea id="message" name="message" required placeholder="How can we help you?" rows={4} />
              </div>
              <div className="flex justify-end pt-4">
                <Button type="submit" disabled={isSubmitting} className="bg-[#264740] hover:bg-[#1f3a34]">
                  {isSubmitting ? "Sending..." : "Submit Enquiry"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
