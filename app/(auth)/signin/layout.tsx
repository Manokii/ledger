import type { PropsWithChildren } from "react";

export default function SignInLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex w-full h-screen items-center justify-center">
      {children}
    </div>
  );
}
