import Bread from "@/components/common/breadcrumbs";
import Popup from "@/components/common/popup";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const termsconditions = () => {
  return (
    <div>
      <Header />
      <Bread mainhead="Home" title="Terms & Conditions" />
      <Popup />
      <div class="container mt-5">
        <p>
          Welcome to XepediaFlyFareHub ("we," "us," or "our"). By accessing or
          using our website, mobile application, or any other service
          (collectively referred to as the "Platform") to book flight tickets,
          you agree to comply with and be bound by the following Terms and
          Conditions. Please read these terms carefully before using our
          services. If you do not agree to these terms, you should not use the
          Platform.
        </p>

        <h4>1. Eligibility</h4>
        <ul>
          <li>1.1. You must be at least 18 years old to use our services.</li>
          <li>
            1.2. By using the Platform, you represent and warrant that you meet
            the eligibility requirements and that you have the legal capacity to
            enter into binding agreements.
          </li>
        </ul>

        <h4>2. Scope of Services</h4>
        <ul>
          <li>
            2.1. XepediaFlyFareHub provides an online platform for searching,
            comparing, and booking flight tickets.
          </li>
          <li>
            2.2. We act solely as an intermediary between you and the airline.
            The airline’s terms and conditions will apply to your booking.
          </li>
        </ul>

        <h4>3. Booking and Payment</h4>
        <ul>
          <li>
            3.1. <strong>Accuracy of Information:</strong> You are responsible
            for ensuring that all details provided during the booking process
            are accurate.
          </li>
          <li>
            3.2. <strong>Payment:</strong> All payments must be made at the time
            of booking using the accepted payment methods listed on the
            Platform.
          </li>
          <li>
            3.3. <strong>Confirmation:</strong> A booking is confirmed only when
            you receive a confirmation email or message from us with a unique
            booking reference number.
          </li>
          <li>
            3.4. <strong>Currency:</strong> All prices are displayed in the
            applicable currency and include taxes, unless stated otherwise.
          </li>
        </ul>

        <h4>4. Cancellations, Changes, and Refunds</h4>
        <ul>
          <li>
            4.1. <strong>Cancellations:</strong> Cancellation policies vary
            depending on the airline and the fare class. Please review the
            airline’s cancellation terms before booking.
          </li>
          <li>
            4.2. <strong>Changes:</strong> Any changes to your booking must be
            requested through the Platform, subject to airline policies and
            additional fees.
          </li>
          <li>
            4.3. <strong>Refunds:</strong> Refund eligibility and processing
            times are determined by the airline. XepediaFlyFareHub is not
            responsible for delays in refund processing.
          </li>
        </ul>

        <h4>5. User Responsibilities</h4>
        <ul>
          <li>
            5.1. <strong>Travel Documents:</strong> You are responsible for
            obtaining and maintaining valid travel documents, including
            passports, visas, and any required health certifications.
          </li>
          <li>
            5.2. <strong>Compliance:</strong> You must comply with all
            applicable laws, airline policies, and regulations of the
            destination country.
          </li>
          <li>
            5.3. <strong>Prohibited Activities:</strong> You agree not to engage
            in activities that compromise the security, integrity, or
            performance of the Platform.
          </li>
        </ul>

        <h4>6. Liability</h4>
        <ul>
          <li>
            6.1. XepediaFlyFareHub is not liable for any loss, damage, delay, or
            inconvenience arising from:
          </li>
          <ul>
            <li>
              Flight cancellations or schedule changes made by the airline.
            </li>
            <li>
              Acts of nature, government restrictions, or other unforeseen
              circumstances.
            </li>
          </ul>
          <li>
            6.2. Our maximum liability is limited to the amount paid for the
            booking.
          </li>
        </ul>

        <h4>7. Intellectual Property</h4>
        <ul>
          <li>
            7.1. All content on the Platform, including text, graphics, logos,
            and software, is owned by XepediaFlyFareHub or its licensors.
          </li>
          <li>
            7.2. You may not copy, reproduce, distribute, or create derivative
            works from any content without prior written consent.
          </li>
        </ul>

        <h4>8. Privacy Policy</h4>
        <ul>
          <li>
            8.1. By using our services, you agree to the collection and use of
            your personal information as described in our Privacy Policy.
          </li>
        </ul>

        <h4>9. Third-Party Links</h4>
        <ul>
          <li>
            9.1. The Platform may contain links to third-party websites.
            XepediaFlyFareHub is not responsible for the content or practices of
            these websites.
          </li>
        </ul>

        <h4>10. Modifications to Terms</h4>
        <ul>
          <li>
            10.1. We reserve the right to update or modify these Terms and
            Conditions at any time. Changes will be effective upon posting to
            the Platform.
          </li>
        </ul>

        <h4>11. Governing Law and Dispute Resolution</h4>
        <ul>
          <li>
            11.1. These Terms and Conditions are governed by the laws of [Your
            Jurisdiction].
          </li>
          <li>
            11.2. Any disputes will be resolved through arbitration or in the
            courts of [Your Jurisdiction], as agreed upon by both parties.
          </li>
        </ul>

        <h4>12. Contact Us</h4>
        <ul>
          <li>
            For questions or concerns about these Terms and Conditions, please
            contact us at:
          </li>
          <li>Email: support@xepediaflyfareshub.com</li>
          <li>Phone: +[Your Contact Number]</li>
          <li>Address: [Your Business Address]</li>
        </ul>

        <p>
          By continuing to use XepediaFlyFareHub, you acknowledge that you have
          read, understood, and agree to these Terms and Conditions.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default termsconditions;
