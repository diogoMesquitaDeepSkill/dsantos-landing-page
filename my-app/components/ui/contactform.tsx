"use client";

import { sendEmail } from "@/app/actions/sendEmail";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useFormState, useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className="w-full bg-primary text-white"
      disabled={pending}
    >
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}

export const ContactForm = () => {
  const [state, formAction] = useFormState(sendEmail, null);

  return (
    <Card className="w-full shadow-[0px_7px_21px_rgba(0,0,0,0.25)] border-none">
      <CardHeader>
        <CardTitle className="text-black">Contact Us</CardTitle>
        <CardDescription className="text-gray-600">
          Fill out the form below to get in touch with us.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-black">
              Name
            </Label>
            <Input
              type="text"
              id="name"
              name="name"
              required
              className="w-full border border-gray-200 text-black focus:border-primary"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-black">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              required
              className="w-full border border-gray-200 text-black focus:border-primary"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-black">
              Phone Number (optional)
            </Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              className="w-full border border-gray-200 text-black focus:border-primary"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-black">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              className="w-full min-h-[100px] border border-gray-200 text-black focus:border-primary"
            />
          </div>
          <SubmitButton />
        </form>
      </CardContent>
      <CardFooter>
        {state && (
          <p
            className={`w-full text-center ${
              state.error ? "text-red-500" : "text-green-500"
            }`}
          >
            {state.message}
          </p>
        )}
      </CardFooter>
    </Card>
  );
};
