import Bread from "@/components/common/breadcrumbs";
import Popup from "@/components/common/popup";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const ChangesAndCancellations = () => {
  return (
    <div>
      <Header />
      <Bread mainhead="Home" title="Terms & Conditions" />
      <Popup />
      <div class="container mt-5">
        <p>
          We understand that plans can change, and we’re here to make adjusting
          or canceling your hotel or vacation rental booking as seamless as
          possible. If you need assistance at any step, feel free to contact us
          at +1(805) 507-7447—we’re just a call away! Here's everything you need
          to know about managing your bookings.
        </p>

        <h4>Canceling Your Hotel Booking</h4>
        <p>
          Plans shifted? No worries! Most hotel bookings can be canceled online,
          but your refund eligibility depends on the type of booking and how
          close you are to check-in. If you’re unsure, our team is ready to
          assist at +1(805) 507-7447.
        </p>
        <ul>
          <li>
            Refundable Booking: If your booking is refundable, you’re in luck!
            You’ll get your money back, provided you're not too close to
            check-in. Always check the cancellation policy in your itinerary for
            the specifics, or call us at +1(805) 507-7447 for guidance.
          </li>
          <li>
            Refundable Booking: If your booking is refundable, you’re in luck!
            You’ll get your money back, provided you're not too close to
            check-in. Always check the cancellation policy in your itinerary for
            the specifics, or call us at +1(805) 507-7447 for guidance.{" "}
          </li>
        </ul>

        <h4>Canceling Your Vacation Rental</h4>
        <p>
          Canceling a vacation rental is a bit different. You’ll need to contact
          the property manager directly. Their details can be found in your
          itinerary. If you need help reaching out or have questions, just call
          us at +1(805) 507-7447.
        </p>
        <h4>Making Changes to Your Booking</h4>
        <p>
          Sometimes, making changes is a better option than canceling. Adjust
          your check-in dates, stay length, or other details without losing your
          reservation. For assistance, give us a call at +1(805) 507-7447, and
          we’ll guide you through it
        </p>

        <h4>No-Shows and Refunds</h4>
        <p>A few things to keep in mind:</p>
        <ul>
          <li>
            If you don’t show up or arrive outside check-in hours, the hotel or
            rental may charge a fee..
          </li>
        </ul>

        <h4>Need Extra Help?</h4>
        <p>
          Still have questions? Don’t worry! Call us anytime at +1(805)
          507-7447. We’re here to assist with cancellations, changes, or any
          other travel-related needs.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default ChangesAndCancellations;
