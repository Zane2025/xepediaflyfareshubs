import Bread from "@/components/common/breadcrumbs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const cookies = () => {
  return (
    <div>
      <Header />
      <Bread
        title="Cookies"
        html={
          <>
            <li className="d-inline-block align-middle">
              <a href="/">
                <FontAwesomeIcon icon="fa-solid fa-house" className="mr-2" />
                Home
              </a>
            </li>

            <li
              className="d-inline-block align-middle active text-white"
              aria-current="page"
            >
              Cookies
            </li>
          </>
        }
      />
      <div class="container mt-5">
        <h1>Cookie Statement</h1>
        <p>
          <strong>Last Updated: 12/16/2024</strong>
        </p>
        <h2>Types of Cookies and Related Technologies</h2>
        <h3>Cookies</h3>
        <p>
          Cookies are small text files sent to your computer or mobile device
          when you visit most websites. These files can either be provided
          directly by us (first-party cookies) or by our partners and suppliers
          (third-party cookies). They can be session-based, meaning they connect
          your activity within a single browsing session and expire when the
          session is closed, or persistent, which are stored on your device
          until they expire or are deleted manually. Persistent cookies help
          recognize you as a returning user.
        </p>
        <h3>Other Similar Technologies</h3>
        <ul>
          <li>
            <strong>Web Beacons and Gifs:</strong> Tiny, invisible graphics
            embedded in websites or emails. They help track if specific pages
            were visited or emails were opened, so you can evaluate the success
            of your campaign.
          </li>
          <li>
            <strong>Proximity Beacons:</strong> Devices that communicate with
            your mobile apps to notify you of relevant offers or experiences
            whenever you are nearby, provided you have consented to this through
            the app.
          </li>
          <li>
            <strong>Pixels:</strong> Embedded objects in web pages used to
            manage cookies, facilitate logins, monitor activity, and display
            ads.
          </li>
          <li>
            <strong>Tags:</strong> HTML snippets that request ad server content,
            enabling relevant advertising.
          </li>
          <li>
            <strong>Scripts:</strong> JavaScript codes that run when a webpage
            loads, determining ad visibility.
          </li>
          <li>
            <strong>Local Storage Objects:</strong> Technologies such as HTML5
            used for storing preferences or other information on your device.
            Third-party providers may also use these to collect and store
            information.
          </li>
          <li>
            <strong>SDKs (Software Development Kits):</strong> Tools embedded in
            mobile applications to collect device information, track app
            activity, and analyze activity for insights.
          </li>
        </ul>
        <h2>How XepediaFlyFareHub Uses Cookies</h2>
        <p>Cookies at XepediaFlyFareHub help with the following:</p>
        <ul>
          <li>Improving your experience on our sites.</li>
          <li>Helping websites and apps work properly on your device.</li>
          <li>Storing preferences such as language, location, or currency.</li>
          <li>
            Providing advertisements relevant to you and evaluating the
            effectiveness of those advertisements.
          </li>
          <li>Enabling you to return to a page that you viewed earlier.</li>
          <li>Helping diagnose technical issues with our websites.</li>
          <li>
            Improving security and detecting possible fraudulent or malicious
            activities.
          </li>
          <li>
            Gathering information about traffic on the site and what visitors
            do.
          </li>
        </ul>
        <h2>Types of Information Obtained Through Cookies</h2>
        <p>Information that is collected includes:</p>
        <ul>
          <li>IP address</li>
          <li>Device ID</li>
          <li>Pages visited</li>
          <li>Browser and operating system details</li>
          <li>Internet Service Provider (ISP)</li>
          <li>Advertisements that have been interacted with</li>
          <li>Referencing and linked URLs</li>
          <li>Features accessed and activities undertaken on our services</li>
        </ul>
        <p>
          Refer to the "Categories of Personal Data We Collect and Use" section
          of our Privacy Statement for further information.
        </p>
        <h2>Categories and Purposes of Cookies</h2>
        <h3>Essential Cookies</h3>
        <p>
          These are necessary for the basic functionality of our websites and
          apps, such as secure login and booking management. Disabling these
          cookies is not an option.
        </p>
        <h3>Other Cookie Types</h3>
        <ul>
          <li>
            <strong>Functional Cookies:</strong> Store your preferences, such as
            language or search history, to enhance your user experience.
          </li>
          <li>
            <strong>Performance Cookies:</strong> Gather aggregated data on site
            usage, such as time spent on pages and clicks, to improve site
            performance and address issues.
          </li>
          <li>
            <strong>Targeting Cookies:</strong> Allow XepediaFlyFareHub and our
            trusted partners to deliver personalized ads based on your browsing
            behavior. These cookies also help limit ad frequency and measure ad
            campaign success. Note that third-party practices are not covered by
            this statement.
          </li>
        </ul>
        <h2>Managing Your Cookie Preferences</h2>
        <p>
          You can adjust your browser settings to accept or decline cookies.
          Keep in mind that restricting cookies may limit access to some
          features of our platforms.
        </p>
        <h2>Opting Out of Targeted Advertising</h2>
        <p>
          You can opt out of personalized ads by visiting the following
          resources:
        </p>
        <ul>
          <li>
            <strong>EEA, Switzerland, and UK:</strong>{" "}
            <a href="http://www.youronlinechoices.eu/">Your Online Choices</a>
          </li>
          <li>
            <strong>Canada:</strong>{" "}
            <a href="http://youradchoices.ca/choices/">Ad Choices</a>
          </li>
          <li>
            <strong>U.S. and Rest of World:</strong>
          </li>
          <ul>
            <li>
              <a href="http://www.aboutads.info/choices/">About Ads</a>
            </li>
            <li>
              <a href="http://optout.networkadvertising.org/">
                Network Advertising Initiative
              </a>
            </li>
          </ul>
        </ul>
        <p>
          You will still see ads, but they will be general and less relevant.
        </p>
        <h2>Responding to Do-Not-Track Signals</h2>
        <p>
          Where applicable, XepediaFlyFareHub acknowledges and acts upon
          “do-not-track” signals or similar universal opt-out mechanisms
          approved under relevant data protection laws.
        </p>
        <h2>Contact Us</h2>
        <p>
          For questions or concerns about your data, or to exercise your rights
          regarding personal information, please contact us via the Privacy
          Section on our website.
        </p>
        <h2>Updates to This Statement</h2>
        <p>
          We may update this statement to reflect legal, technical, or business
          developments. Significant changes impacting your rights will be
          communicated in advance unless required urgently.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default cookies;
