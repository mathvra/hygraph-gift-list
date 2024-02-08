"use client";
import * as React from "react";
//@ts-ignore
import { Drawer as DrawerPrimitive } from "vaul";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const Drawer = ({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
);
Drawer.displayName = "Drawer";

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerClose = DrawerPrimitive.Close;

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/80", className)}
    {...props}
  />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const drawerBartVariants = cva("mx-auto h-2 w-[100px] rounded-full", {
  variants: {
    variant: {
      default: "bg-primary-0",
      secondary: "bg-secondary-0",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
export interface DrawerBarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof drawerBartVariants> {}

const DrawerBar = ({ className, variant, ...props }: DrawerBarProps) => (
  <div className={cn(drawerBartVariants({ variant, className }))} {...props} />
);
DrawerBar.displayName = "DrawerBar";

const drawerContentVariants = cva(
  "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col gap-4 p-4 rounded-t-[10px] border ",
  {
    variants: {
      variant: {
        default: "bg-primary-2",
        secondary: "bg-secondary-2",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
export interface DrawerContentProps
  extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>,
    VariantProps<typeof drawerContentVariants> {}

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  DrawerContentProps
>(({ variant, className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(drawerContentVariants({ variant, className }))}
      {...props}
    >
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
));
DrawerContent.displayName = "DrawerContent";

const DrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("grid gap-1.5 text-start", className)} {...props} />
);
DrawerHeader.displayName = "DrawerHeader";

const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-auto flex flex-col gap-4", className)} {...props} />
);
DrawerFooter.displayName = "DrawerFooter";

const drawerTitleVariants = cva(
  "text-lg font-semibold leading-none tracking-tight",
  {
    variants: {
      variant: {
        default: "text-primary-0",
        secondary: "text-secondary-0",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
export interface DrawerTitleProps
  extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>,
    VariantProps<typeof drawerTitleVariants> {}

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  DrawerTitleProps
>(({ variant, className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn(drawerTitleVariants({ variant, className }))}
    {...props}
  />
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const drawerDescriptionVariants = cva("text-sm text-muted-foreground", {
  variants: {
    variant: {
      default: "text-primary-0",
      secondary: "text-secondary-0",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
export interface DrawerDescriptionProps
  extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>,
    VariantProps<typeof drawerDescriptionVariants> {}

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  DrawerDescriptionProps
>(({ variant, className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn(drawerDescriptionVariants({ variant, className }))}
    {...props}
  />
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerBar,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};
