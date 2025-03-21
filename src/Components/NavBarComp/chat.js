import React, { useMemo } from "react";
import ChatBot from "react-simple-chatbot";

function SupportChat() {
  const steps = useMemo(
    () => [
      { id: "1", message: "Hi! How can I assist you today?", trigger: "2" },
      {
        id: "2",
        options: [
          { value: "faq", label: "FAQs", trigger: "3" },
          { value: "order", label: "Order Status", trigger: "4" },
          { value: "support", label: "Customer Support", trigger: "9" },
        ],
      },
      {
        id: "3",
        message: "Here are some FAQs. Choose a category to continue:",
        trigger: "3-options",
      },
      {
        id: "3-options",
        options: [
          { value: "special", label: "Special Items", trigger: "5" },
          { value: "discountOffers", label: "Discount Offers", trigger: "6" },
          {
            value: "mostExpensive",
            label: "Most Expensive Items",
            trigger: "7",
          },
          { value: "cheapest", label: "Cheapest Items", trigger: "8" },
          { value: "back", label: "Back to Main Menu", trigger: "2" },
        ],
      },
      {
        id: "4",
        message: "Please provide your order ID, and I'll fetch the status.",
        trigger: "order-id",
      },
      {
        id: "order-id",
        user: true,
        trigger: "order-status",
      },
      {
        id: "order-status",
        message: "Thank you! Your order #12345 is currently being processed.",
        trigger: "10",
      },
      {
        id: "5",
        message:
          "Our special items include:\n- Gold Watch: $500\n- Luxury Handbag: $1200",
        trigger: "3-options",
      },
      {
        id: "6",
        message:
          "Current discount offers:\n- 20% off on Electronics\n- Buy 1 Get 1 Free on T-Shirts",
        trigger: "3-options",
      },
      {
        id: "7",
        message:
          "The most expensive items:\n- Designer Sofa: $2500\n- Diamond Necklace: $5000",
        trigger: "3-options",
      },
      {
        id: "8",
        message: "The cheapest items:\n- Keychains: $2\n- Notebooks: $5",
        trigger: "3-options",
      },
      {
        id: "9",
        message:
          "Customer Support:\nChoose an option:\n- Account Issues\n- Payment Issues\n- Product Return",
        trigger: "support-options",
      },
      {
        id: "support-options",
        options: [
          {
            value: "account",
            label: "Account Issues",
            trigger: "account-help",
          },
          {
            value: "payment",
            label: "Payment Issues",
            trigger: "payment-help",
          },
          { value: "return", label: "Product Return", trigger: "return-help" },
          { value: "back", label: "Back to Main Menu", trigger: "2" },
        ],
      },
      {
        id: "account-help",
        message:
          "For account issues, you can reset your password, update profile details, or contact support at support@example.com.",
        trigger: "10",
      },
      {
        id: "payment-help",
        message:
          "For payment issues, please check if your card has sufficient balance or contact our payment helpline at 123-456-789.",
        trigger: "10",
      },
      {
        id: "return-help",
        message:
          "To return a product, visit your orders page, select the item, and click 'Return Item'. You can also call us at 123-456-789 for assistance.",
        trigger: "10",
      },
      {
        id: "10",
        message: "Is there anything else I can help you with?",
        trigger: "2",
      },
    ],
    []
  );

  return <ChatBot steps={steps} />;
}

export default SupportChat;
