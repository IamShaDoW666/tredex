'use client';

import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import TermsAndConditionsContent from './terms-and-conditions-content';

interface TermsAndConditionsModalProps {
  children: React.ReactNode;
}

const TermsAndConditionsModal: React.FC<TermsAndConditionsModalProps> = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Terms and Conditions</DialogTitle>
        </DialogHeader>
        <div className="max-h-[400px] overflow-y-auto">
          <TermsAndConditionsContent />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TermsAndConditionsModal;
