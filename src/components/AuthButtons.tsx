import { SignInDialog } from "./SignInDialog";
import { SignUpDialog } from "./SignUpDialog";
import { Button } from "./ui/button";

export function AuthButtons() {
  return (
    <div className="flex items-center gap-2">
      <SignInDialog />
      <SignUpDialog />
    </div>
  );
}