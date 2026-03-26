import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function QuickEnquiryModal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setOpen(false);
      alert("Thank you for your enquiry. We will get back to you soon!");
    }, 500);
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
            <Input id="name" required placeholder="John Doe" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium leading-none">
              Email
            </label>
            <Input id="email" type="email" required placeholder="john@example.com" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="phone" className="text-sm font-medium leading-none">
              Phone
            </label>
            <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm font-medium leading-none">
              Message
            </label>
            <Textarea
              id="message"
              required
              placeholder="How can we help you?"
              className="resize-none"
              rows={4}
            />
          </div>
          <div className="flex justify-end pt-4">
            <Button type="submit" className="bg-[#264740] hover:bg-[#1f3a34]">
              Submit Enquiry
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
