import Bread from "@/components/common/breadcrumbs";
import Popup from "@/components/common/popup";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const RefundPolicy = () => {
  return (
    <div>
      <Header />
      <Bread mainhead="Home" title="Terms & Conditions" />
      <Popup />
      <div className="container mt-5">
        <p>
          When you book a flight, plans can change, and you may find yourself
          needing to cancel. Refund timelines and policies vary depending on the
          airline, ticket type, and booking terms. Here's a comprehensive guide
          to understanding how flight refunds work and what you can expect when
          requesting one.{" "}
        </p>

        <h4>Refund Timelines and Policies for Flights</h4>
        <p>
          Refund timelines and policies vary depending on the airline, ticket
          type, and booking terms. Here’s what you need to know about how
          refunds work:
        </p>
        <ul>
          <li>
            <strong>Refundable Tickets:</strong> These tickets offer the most
            flexibility. If you cancel a refundable ticket, you’ll generally
            receive a direct refund to your original payment method. Always
            check the terms and conditions in your itinerary for specific rules.
          </li>
          <li>
            <strong>Non-Refundable Tickets:</strong> These tickets often come
            with restrictions. While you may not be eligible for a cash refund,
            airlines often offer credits, rewards, or coupons for future travel.
          </li>
          <li>
            <strong>Partial Payments or Deposits:</strong> If you’ve made a
            partial payment or deposit, you’ll typically be refunded for that
            amount, minus any non-refundable fees.
          </li>
        </ul>
        <p>
          When you cancel your booking, you’ll receive a summary detailing the
          refund process, including timelines and the amount you’ll be refunded.
          Refunds may be issued in one of the following forms:
        </p>
        <ul>
          <li>Direct refund to your original payment method</li>
          <li>Airline credit or vouchers</li>
          <li>Combination of credits and refunds</li>
        </ul>

        <h4>How to Request a Flight Refund</h4>
        <p>To request a refund for your flight, follow these steps:</p>
        <ol>
          <li>
            Visit the "Manage Booking" section on our website or app. You may
            need to sign in to access your booking details.
          </li>
          <li>
            Select the flight you wish to cancel and choose "Request Refund."
            The system will guide you through the process.
          </li>
          <li>
            If you're unable to cancel online or have additional questions, call
            us at +1(805) 507-7447 for assistance.
          </li>
        </ol>

        <h4>Related Topics</h4>
        <ul>
          <li>Flight Refunds</li>
          <li>Stay Refunds</li>
          <li>Vacation Package Refunds</li>
          <li>Car Rental Refunds</li>
          <li>Cruise Refunds</li>
          <li>Activity Refunds</li>
        </ul>

        <h4>Need Extra Help?</h4>
        <p>
          Still have questions about refunds? Don’t worry! Call us anytime at
          +1(805) 507-7447. We’re here to assist with cancellations, changes, or
          any other travel-related needs.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
