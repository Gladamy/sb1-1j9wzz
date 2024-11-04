import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Chrome, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function SignInDialog() {
  const [isEmailView, setIsEmailView] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="font-medium">
          Sign in
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Welcome back</DialogTitle>
          <DialogDescription>
            Sign in to your account to continue
          </DialogDescription>
        </DialogHeader>
        {isEmailView ? (
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="hello@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
            <Button className="w-full" size="lg">
              Sign in with Email
            </Button>
            <div className="text-center">
              <Button
                variant="link"
                className="text-sm text-muted-foreground"
                onClick={() => setIsEmailView(false)}
              >
                Back to all options
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4 py-4">
            <Button
              variant="outline"
              className="w-full"
              size="lg"
              onClick={() => setIsEmailView(true)}
            >
              <Mail className="mr-2 h-5 w-5" />
              Sign in with Email
            </Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <Button variant="outline" className="w-full" size="lg">
              <Chrome className="mr-2 h-5 w-5" />
              Sign in with Google
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}