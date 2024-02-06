"use client";
import { ArrowUp } from "@phosphor-icons/react";
import { Button } from "../ui/button";

export default function BackToTop() {
  function handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <Button
      size={"icon"}
      variant={"secondaryInverted"}
      onClick={handleScrollToTop}
    >
      <ArrowUp weight="bold" />
    </Button>
  );
}
