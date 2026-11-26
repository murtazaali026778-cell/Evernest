import React from 'react'
import Textpages from '../components/Textpages'

const termsAndConditions = [
  {
    id: 1,
    title: "About These Terms",
    content:
      "These terms apply when you purchase products from our store. By placing an order, you agree to these terms and conditions. If anything is unclear, please contact us through our Contact page before placing your order."
  },
  {
    id: 2,
    title: "Orders",
    content:
      "Once you place an order, you will receive an order confirmation. Your order is accepted when we confirm it for processing and delivery. We reserve the right to cancel an order if a product is out of stock, a pricing error occurs, or we are unable to verify your order. If payment has already been received, you will receive a full refund."
  },
  {
    id: 3,
    title: "Prices and Payment",
    content:
      "All product prices are listed in Pakistani Rupees (PKR). The final amount, including applicable delivery charges, will be displayed at checkout before you confirm your order."
  },
  {
    id: 4,
    title: "Payment Methods",
    content:
      "Customers can pay through bank transfer using the payment details provided after placing an order. Orders will be processed and dispatched once the payment has been successfully received and verified."
  },
  {
    id: 5,
    title: "Products and Descriptions",
    content:
      "We make every effort to display accurate product descriptions and photographs of our water tumblers, stainless steel bottles, and related accessories. Actual product colours may vary slightly depending on your screen settings and lighting conditions. Product dimensions and capacities are approximate."
  },
  {
    id: 6,
    title: "Product Quality and Usage",
    content:
      "Our products are designed for everyday hydration and convenience. Please follow the care and usage instructions provided with each product. Insulation performance, temperature retention, and other product features may vary depending on the model and usage conditions."
  },
  {
    id: 7,
    title: "Delivery and Returns",
    content:
      "All deliveries are subject to our Shipping & Delivery Policy. Returns, exchanges, and eligible refunds are handled according to our Returns & Exchanges Policy. These policies form an integral part of these Terms and Conditions."
  },
  {
    id: 8,
    title: "Your Account",
    content:
      "You are responsible for keeping your account login credentials and password secure. Any orders placed through your account are considered your responsibility. Please notify us immediately if you suspect unauthorized access to your account."
  },
  {
    id: 9,
    title: "Order Cancellation",
    content:
      "Customers may request an order cancellation before the order has been dispatched. Once an order has been shipped, cancellation requests will be handled according to our Returns & Exchanges Policy."
  },
  {
    id: 10,
    title: "Changes to These Terms",
    content:
      "We reserve the right to update or modify these Terms and Conditions at any time. Any changes will be published on this page. The version available at the time of your order will apply to that purchase."
  },
  {
    id: 11,
    title: "Contact Us",
    content:
      "If you have any questions regarding these Terms and Conditions, your orders, or our products, please contact our customer support team through the Contact page on our website."
  }
];

const Terms = () => {
  return (
    
    <Textpages sections={termsAndConditions} title="Terms and conditions" />
  )
}

export default Terms;