import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold mb-4">TREDEX</h3>
          <p>Step into style.</p>
        </div>
        <div>
          <h3 className="font-bold mb-4">Shop</h3>
          <ul>
            <li>New Arrivals</li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Support</h3>
          <ul>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Shipping & Returns</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
