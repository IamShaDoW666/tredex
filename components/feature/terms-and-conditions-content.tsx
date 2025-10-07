import React from 'react';

const TermsAndConditionsContent = () => {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h2 className="text-2xl font-bold mb-4">📜 Terms And Conditions</h2>
      <p className="text-muted-foreground mb-6">Before you make a purchase, please take a moment to review our terms and conditions.</p>
      
      <h3 className="text-xl font-semibold mb-2">📹 Parcel Opening Video</h3>
      <p className="mb-4">Please do not forget to make a <strong>parcel opening video</strong>. Take a full video from start to end without cut and pause. So if there is any damage or missing product, we can replace it. Without a parcel opening video, we will not be able to exchange the product. And without it, we cannot raise a complaint against the courier company.</p>
      
      <h3 className="text-xl font-semibold mb-2">🔄 Return/Exchange Policy</h3>
      <p className="mb-4">In case of return/exchange, the customer needs to courier the parcel back within <strong>2 days</strong> after receiving the parcel. Once we receive the parcel, the customer will get the any replacement. In case of exchange, the shipping charge is on the customer. The product will be checked before exchange. In case of any damage or item missing, we will send the parcel back to the customer.</p>
      
      <h3 className="text-xl font-semibold mb-2">💸 Shipping Charges</h3>
      <p>In case of exchange/return, all shipping charges will be paid by the customer. We are only responsible for the shipping charge if the parcel received by the customer is damaged. <strong>Shipping charges are non-refundable</strong> in any case.</p>
    </div>
  );
};

export default TermsAndConditionsContent;
