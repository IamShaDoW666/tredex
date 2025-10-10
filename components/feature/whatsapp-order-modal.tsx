"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { WhatsappOrderForm } from "./whatsapp-order-form";
import { z } from "zod";
import { orderSchema } from "@/zod/order-schema";

interface WhatsappOrderModalProps {
  children: React.ReactNode;
  productId: string;
  onOrderSubmit: (data: z.infer<typeof orderSchema>) => Promise<void>;
}

export function WhatsappOrderModal({
  children,
  productId,
  onOrderSubmit,
}: WhatsappOrderModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (data: z.infer<typeof orderSchema>) => {
    await onOrderSubmit(data);
    setIsOpen(false); // Close modal after submission
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Order on WhatsApp</DialogTitle>
          <DialogDescription>
            Fill in your details to place an order via WhatsApp.
          </DialogDescription>
        </DialogHeader>
        <WhatsappOrderForm productId={productId} onSubmit={handleSubmit} />
      </DialogContent>
    </Dialog>
  );
}
