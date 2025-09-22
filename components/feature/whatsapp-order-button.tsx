"use client";

import { Button } from "@/components/ui/button";

interface WhatsappOrderButtonProps {
  onClick: () => void;
}

export function WhatsappOrderButton({ onClick }: WhatsappOrderButtonProps) {
  return (
    <Button onClick={onClick}>
      Order on WhatsApp
    </Button>
  );
}
