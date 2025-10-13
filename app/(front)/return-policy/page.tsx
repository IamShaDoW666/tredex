import React from 'react';

const ReturnPolicyPage = () => {
  return (
    <div className="container mx-auto mt-24 px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Return Policy</h1>

      <h2 className="text-2xl font-bold mt-6 mb-2">✅ Eligibility for Return/Exchange</h2>
      <ul className="list-disc list-inside">
        <li>Returns or exchanges are only accepted if the product is damaged, defective, or incorrect.</li>
        <li>You must contact us within 2 days of receiving your order.</li>
        <li>Products must be unused, unworn, and in original packaging.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-6 mb-2">📦 Mandatory Parcel Opening Video</h2>
      <p>To process any return or exchange:</p>
      <ul className="list-disc list-inside">
        <li>A clear, full parcel opening video is required — from start to finish, with no cuts or pauses.</li>
        <li>This helps us verify claims of damage or missing items and raise issues with the courier if needed.</li>
        <li>Claims without a parcel opening video will not be accepted.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-6 mb-2">🔁 Return/Exchange Process</h2>
      <ol className="list-decimal list-inside">
        <li>Contact us within 2 days of delivery via Whatsapp: <a href="https://wa.me/919645580972" className="text-blue-500 hover:underline">+91 9645580972</a>.</li>
        <li>Share your order number and the parcel opening video.</li>
        <li>Once approved, send the product back within 2 working days.</li>
        <li>After we receive and inspect the return:
          <ul className="list-disc list-inside ml-6">
            <li>A replacement will be issued (shipping charges apply).</li>
            <li>If the product is damaged or any item is missing, it will be returned without exchange.</li>
          </ul>
        </li>
      </ol>

      <h2 className="text-2xl font-bold mt-6 mb-2">🚚 Shipping Charges</h2>
      <ul className="list-disc list-inside">
        <li>All return/exchange shipping costs are the customer’s responsibility.</li>
        <li>We will only cover shipping charges if the item received is damaged due to our error (with proper video proof).</li>
        <li>Shipping fees are non-refundable under any circumstances.</li>
      </ul>

      <p className="mt-6">For questions or support, contact us.</p>
    </div>
  );
};

export default ReturnPolicyPage;
