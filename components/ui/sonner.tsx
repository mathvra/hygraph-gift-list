"use client";

import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            "flex gap-4 p-4 jus items-center bg-background text-foreground border-border shadow-lg rounded-xl w-full",
          description: "text-muted-foreground",
          actionButton: "bg-primary text-primary-foreground",
          cancelButton: "bg-muted text-muted-foreground",
          success: "bg-success-1 text-success",
          error: "bg-error-1 text-error",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
