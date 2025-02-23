import Head from "next/head";
import Header from "@/components/Header";
import DiscoverCard from "@/components/DiscoverCard";
import Footer from "@/components/Footer";
import SearchEngine from "@/components/Engine/SearchEngine";
import DestinationCard from "@/components/DestinationCard";
import Toproutes from "@/components/top-routes";
import Aboutus from "@/components/Aboutus";
import Testimonials from "@/components/Testimonials";
import HotelCard from "@/components/HotelCard";
import HolidayPackages from "@/components/HolidayPackages";
import BlogSection from "@/components/BlogSection";
import BusinessClass from "@/components/BusinessClass";
import CruiseBooking from "@/components/CruiseBooking";
import CheapFlights from "@/components/CheapFlights";
import Popup from "@/components/common/popup";

export default function Home() {
  const discoverCard = [
    { image: "images/pool.avif", alt: "Hot Tub", text: "Hot Tub" },
    { image: "images/barcelona.avif", alt: "Barcelona", text: "Barcelona" },
    { image: "images/pool.avif", alt: "Hot Tub", text: "Hot Tub" },
    { image: "images/houseboat.avif", alt: "House Boat", text: "House Boat" },
    { image: "images/pool.avif", alt: "Hot Tub", text: "Hot Tub" },
    { image: "images/pool.avif", alt: "Hot Tub", text: "Hot Tub" },
  ];
  const destinationCard = [
    {
      image: "/images/destinations/new-york.png",
      alt: "New York",
      flight: "New York City(JFK) - Washington D.C.(DCA)",
      time: "1.5 hours",
      price: "$120",
    },
    {
      image: "images/destinations/boston.png",
      alt: "Boston",
      flight: "Boston(BOS) - Philadelphia(PHL)",
      time: "1.5 hours",
      price: "$100",
    },
    {
      image: "images/destinations/la.png",
      alt: "Los Angeles",
      flight: "Los Angeles(LAX) - San Francisco(SFO)",
      time: "1 hour",
      price: "$90",
    },
    {
      image: "images/destinations/miami.png",
      alt: "Miami",
      flight: "Miami(MIA) - New Orleans(MSY)",
      time: "2 hours",
      price: "$150",
    },
    {
      image: "images/destinations/chicago.png",
      alt: "Chicago",
      flight: "Chicago(ORD) - Minneapolis(MSP)",
      time: "1.5 hours",
      price: "$110",
    },
  ];

  const holidayPackage = [
    {
      image: "/images/packages/paris.webp",
      alt: "Paris",
      heading: "Paris City Tour + Flight",
      content: "Paris, France",
      hotel: "4 stars - 8.9/10",
      flight: "New York (JFK) - Paris (CDG)",
      afterprice: "2,400",
      originalprice: "4,500",
      tourdate: "Fri, 15 Mar - Wed, 20 Mar (5 nights)",
    },
    {
      image: "/images/packages/tokyo.webp",
      alt: "Tokyo",
      heading: "Tokyo Adventure Package + Flight",
      content: "Tokyo, Japan",
      hotel: "5 stars - 9.5/10",
      flight: "Los Angeles (LAX) - Tokyo (HND)",
      afterprice: "4,000",
      originalprice: "6,800",
      tourdate: "Thu, 18 Apr - Sun, 28 Apr (10 nights)",
    },
    {
      image: "/images/packages/rome.webp",
      alt: "Rome",
      heading: "Rome Cultural Tour + Flight",
      content: "Rome, Italy",
      hotel: "4.5 stars - 9.2/10",
      flight: "Chicago (ORD) - Rome (FCO)",
      afterprice: "3,600",
      originalprice: "6,200",
      tourdate: "Sat, 1 Jun - Fri, 7 Jun (6 nights)",
    },
    {
      image: "/images/packages/canggu.webp",
      alt: "Bali",
      heading: "Bali Beach Getaway + Flight",
      content: "Bali, Indonesia",
      hotel: "5 stars - 9.8/10",
      flight: "San Francisco (SFO) - Bali (DPS)",
      afterprice: "3,100",
      originalprice: "4,800",
      tourdate: "Mon, 10 Jul - Mon, 17 Jul (7 nights)",
    },
    {
      image: "/images/packages/sydney.webp",
      alt: "Sydney",
      heading: "Sydney Explorer + Flight",
      content: "Sydney, Australia",
      hotel: "4 stars - 8.7/10",
      flight: "Dallas (DFW) - Sydney (SYD)",
      afterprice: "4,600",
      originalprice: "8,650",
      tourdate: "Tue, 1 Aug - Tue, 8 Aug (7 nights)",
    },
  ];
  const toproutes = [
    {
      id: 1,
      from: "John F. Kennedy International Airport (JFK)",
      to: "London Heathrow Airport (LHR)",
      date: "January 15, 2024",
      price: 800,
    },
    {
      id: 2,
      from: "Los Angeles International Airport (LAX)",
      to: "Narita International Airport (NRT)",
      date: "February 5, 2024",
      price: 815,
    },
    {
      id: 3,
      from: "San Francisco International Airport (SFO)",
      to: "Charles de Gaulle Airport (CDG)",
      date: "February 20, 2024",
      price: 905,
    },
    {
      id: 4,
      from: "Miami International Airport (MIA)",
      to: "Adolfo Suárez Madrid–Barajas Airport (MAD)",
      date: "March 10, 2024",
      price: 994,
    },
    {
      id: 5,
      from: "George Bush Intercontinental Airport (IAH)",
      to: "Dubai International Airport (DXB)",
      date: "March 15, 2024",
      price: 884,
    },
    {
      id: 6,
      from: "Chicago O’Hare International Airport (ORD)",
      to: "Leonardo da Vinci–Fiumicino Airport (FCO)",
      date: "March 25, 2024",
      price: 868,
    },
  ];

  return (
    <>
      <Head>
        <title>Home | XepediaFlyFaresHub</title>{" "}
        <meta name="description" content="XepediaFlyFaresHub" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Header />
        <SearchEngine />
        <Aboutus />

        <CheapFlights />

        <BusinessClass />

        <DestinationCard cards={destinationCard} />

        <div className="container destination-container mb-100">
          <div className="row">
            <div className="col-md-6">
              <h2>
                Stays
                <br />
                For Your Comfort
              </h2>
            </div>
            <div className="col-md-6">
              <div className="heading-destination">
                <h5>
                  5000+ <span>Hotels</span>
                </h5>
              </div>
              <div className="para-destination">
                <div class="vl"></div>
                <p>
                  Book your stay in world-class hotels offering unmatched
                  luxury, comfort, and unforgettable experiences in prime
                  locations.
                </p>
              </div>
            </div>
            <div className="col-md-3 card-division">
              <HotelCard
                img={"/images/belgium.jpg"}
                name="Belgium"
                location="Belgium"
                price="$80"
                alt="Belgium"
              />
            </div>
            <div className="col-md-3 card-division">
              <HotelCard
                img={"/images/france.jpg"}
                name="France"
                location="France"
                price="$90"
                alt="France"
              />
            </div>
            <div className="col-md-3 card-division">
              <HotelCard
                img={"/images/greece.jpg"}
                name="Greece"
                location="Greece"
                price="$95"
                alt="Greece"
              />
            </div>
            <div className="col-md-3 card-division">
              <HotelCard
                img={"/images/tropical.webp"}
                name="Bahamas"
                location="Bahamas"
                price="$110"
                alt="Bahamas"
              />
            </div>
          </div>
        </div>

        <Toproutes toproutes={toproutes} />

        <HolidayPackages cards={holidayPackage} />

        <CruiseBooking />

        <BlogSection />

        <Popup />

        <Testimonials />

        <Footer />
      </>
    </>
  );
}
