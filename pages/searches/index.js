import Dom_Int_OneWay from "@/components/Results/Dom_Int_Oneway";
import React, { useState } from "react";
import SearchEngine from "@/components/Engine/SearchEngine";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import AirResult2 from "../../utils/Jsons/AirResults.json";

const Results = () => {
  const [AirResult, setAirResult] = useState([]);
  const [sort, setsort] = useState([]);

  const airlinePrice = AirResult2.flightResult.reduce(function (r, a) {
    r[a.airline] = r[a.airline] || [];
    r[a.airline].push(a);
    return r;
  }, Object.create(null));

  const airlinePrice2 = AirResult2.flightResult.reduce(function (r, a) {
    r[a.outBound.length] = r[a.outBound.length] || [];
    r[a.outBound.length].push(a);
    return r;
  }, Object.create(null));

  const modAirlinearray = Object.keys(airlinePrice).map(function (key) {
    var value = airlinePrice[key];

    return {
      airlineCode: key.substring(0, 2),
      firstPrice:
        value[0].fare.adultFare +
        value[0].fare.adultTax +
        value[0].fare.adultMarkup,
      alldata: value,
    };
  });
  const getUniqueSearches = uniqueByMultipleKey(modAirlinearray, [
    "airlineCode",
  ]);
  function uniqueByMultipleKey(arr, keyProps) {
    return Object.values(
      arr.reduce((uniqueMap, entry) => {
        const key = keyProps.map((k) => entry[k]).join("|");
        if (!(key in uniqueMap)) uniqueMap[key] = entry;
        return uniqueMap;
      }, {})
    );
  }

  const selectFile = (e) => {
    const checked = e.target.checked;
    const airlineFly = e.target.value;

    if (airlineFly == airlineFly) {
      {
        checked
          ? setAirResult([...sort, ...airlinePrice[airlineFly]])
          : setAirResult(sort.filter((items) => items.airline != airlineFly));
      }
      {
        checked
          ? setsort([...sort, ...airlinePrice[airlineFly]])
          : setsort(sort.filter((items) => items.airline != airlineFly));
      }
    }
  };

  const airline = AirResult2.airline;

  const stopFunction = (e) => {
    const checked = e.target.checked;
    const airlineFly = e.target.value;

    if (airlineFly == airlineFly) {
      {
        checked
          ? setAirResult([...sort, ...airlinePrice2[airlineFly]])
          : setAirResult(
              sort.filter((items) => items.outBound.length != airlineFly)
            );
      }
      {
        checked
          ? setsort([...sort, ...airlinePrice2[airlineFly]])
          : setsort(
              sort.filter((items) => items.outBound.length != airlineFly)
            );
      }
    }
  };

  function departure(e) {
    if (e == "morning") {
      setAirResult([
        ...AirResult2.flightResult.filter(
          (items) =>
            items.outBound[0].depDate.slice(11, 13) >= 5 &&
            items.outBound[0].depDate.slice(11, 13) < 12
        ),
      ]);
    }
    if (e == "afternoon") {
      setAirResult([
        ...AirResult2.flightResult.filter(
          (items) =>
            items.outBound[0].depDate.slice(11, 13) >= 12 &&
            items.outBound[0].depDate.slice(11, 13) < 18
        ),
      ]);
    }
    if (e == "evening") {
      setAirResult([
        ...AirResult2.flightResult.filter(
          (items) =>
            items.outBound[0].depDate.slice(11, 13) >= 18 &&
            items.outBound[0].depDate.slice(11, 13) < 24
        ),
      ]);
    }
    if (e === "night") {
      setAirResult([
        ...AirResult2.flightResult.filter(
          (items) =>
            items.outBound[0].depDate.slice(11, 13) >= 0 &&
            items.outBound[0].depDate.slice(11, 13) < 5
        ),
      ]);
    }
  }

  function arrival(e) {
    if (e == "morning") {
      setAirResult([
        ...AirResult2.flightResult.filter(
          (items) =>
            items.outBound[0].reachDate.slice(11, 13) >= 5 &&
            items.outBound[0].reachDate.slice(11, 13) < 12
        ),
      ]);
    }
    if (e == "afternoon") {
      setAirResult([
        ...AirResult2.flightResult.filter(
          (items) =>
            items.outBound[0].reachDate.slice(11, 13) >= 12 &&
            items.outBound[0].reachDate.slice(11, 13) < 18
        ),
      ]);
    }
    if (e == "evening") {
      setAirResult([
        ...AirResult2.flightResult.filter(
          (items) =>
            items.outBound[0].reachDate.slice(11, 13) >= 18 &&
            items.outBound[0].reachDate.slice(11, 13) < 24
        ),
      ]);
    }
    if (e === "night") {
      setAirResult([
        ...AirResult2.flightResult.filter(
          (items) =>
            items.outBound[0].reachDate.slice(11, 13) >= 0 &&
            items.outBound[0].reachDate.slice(11, 13) < 5
        ),
      ]);
    }
  }

  return (
    <div>
      <Header />
      <section>
        <div>
          <SearchEngine />
        </div>
      </section>

      <Container fluid className="position-relative mt-5">
        <Row>
          <Col md={3}>
            <div class="offcanvas offcanvas-sidenav offcanvas-start offcanvasbyfilter show">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                  Filter
                </h5>
                <button
                  type="button"
                  className="btn-close text-reset"
                  // onClick={() => {
                  //   setfiltersort(!filtersort);
                  // }}
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <aside className="filterres-custom">
                  <div className="bg-gray-50 rounded-xl mt-xl-3">
                    <div className="grid grid-cols-1 px-3 py-3 border-bottom">
                      <div className="grid grid-cols-2 text-left">
                        <p className="text-lg font-bold mb-0 text-black">
                          Filters
                        </p>
                        <div
                          onClick={() => setAirResult(AirResult2.flightResult)}
                        >
                          <p className="text-right mb-0 text-gray-500 font-normal reset-pointer">
                            Reset All
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 px-3 py-3 ">
                      <div className="grid grid-cols-1 text-left">
                        {/*------------------------ choose stop---------------------------------------  */}
                        <Disclosure defaultOpen="true">
                          {({ open }) => (
                            <>
                              <DisclosureButton className="group flex w-full items-center justify-between">
                                <span className="text-sm/6 font-medium text-white group-data-[hover]:text-white/80">
                                  Choose Stop
                                </span>
                                {/* <ChevronUpIcon
                                className={`${
                                  open ? "transform rotate-180" : ""
                                } w-5 h-5 text-gray-900`}
                              /> */}
                              </DisclosureButton>

                              {/* {Stops.filter((items) => items.length > 0).map(
                                (items, i) => ( */}
                              <DisclosurePanel
                                // key={i}
                                className="pt-2 rounded-2xl text-sm text-gray-900"
                              >
                                {/* {items[0].outBound.length == 1 ? ( */}
                                {airlinePrice2[1] == undefined ? (
                                  ""
                                ) : (
                                  <div className="d-flex mb-2">
                                    <div className="flex-grow-1 themeascheckbox font-14">
                                      <div className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          value={1}
                                          onClick={(e) => stopFunction(e)}
                                          id={"airlprice-gt-1"}
                                        />
                                        <label
                                          className="form-check-label text-sm"
                                          htmlFor={"airlprice-gt-1"}
                                        >
                                          Non-Stop
                                        </label>
                                      </div>
                                    </div>

                                    <div className="text-right pl-3 font-medium text-sm rpr-w-100">
                                      {/* {currency_Name_rd.currency_Logo}{" "} */}
                                      {airlinePrice2[1][0].fare.grandTotal.toFixed(
                                        0
                                      )}
                                    </div>
                                  </div>
                                )}

                                {airlinePrice2[2] == undefined ? (
                                  ""
                                ) : (
                                  <div className="d-flex mb-2">
                                    <div className="flex-grow-1 themeascheckbox font-14">
                                      <div className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          value={2}
                                          onClick={(e) => stopFunction(e)}
                                          id={"airlprice-gt-2"}
                                        />
                                        <label
                                          className="form-check-label text-sm"
                                          htmlFor={"airlprice-gt-2"}
                                        >
                                          One-Stop
                                        </label>
                                      </div>
                                    </div>

                                    <div className="text-right pl-3 font-medium text-sm rpr-w-100">
                                      {/* {currency_Name_rd.currency_Logo}{" "} */}
                                      {airlinePrice2[2][0].fare.grandTotal.toFixed(
                                        0
                                      )}
                                    </div>
                                  </div>
                                )}

                                {airlinePrice2[3] == undefined ? (
                                  ""
                                ) : (
                                  <div className="d-flex mb-2">
                                    <div className="flex-grow-1 themeascheckbox font-14">
                                      <div className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          value={3}
                                          onClick={(e) => stopFunction(e)}
                                          id={"airlprice-gt-3"}
                                        />
                                        <label
                                          className="form-check-label text-sm"
                                          htmlFor={"airlprice-gt-3"}
                                        >
                                          Two-Stop
                                        </label>
                                      </div>
                                    </div>

                                    <div className="text-right pl-3 font-medium text-sm rpr-w-100">
                                      {/* {currency_Name_rd.currency_Logo}{" "} */}
                                      {airlinePrice2[3][0].fare.grandTotal.toFixed(
                                        0
                                      )}
                                    </div>
                                  </div>
                                )}

                                {airlinePrice2[4] == undefined ? (
                                  ""
                                ) : (
                                  <div className="d-flex mb-2">
                                    <div className="flex-grow-1 themeascheckbox font-14">
                                      <div className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          value={4}
                                          onClick={(e) => stopFunction(e)}
                                          id={"airlprice-gt-4"}
                                        />
                                        <label
                                          className="form-check-label text-sm"
                                          htmlFor={"airlprice-gt-4"}
                                        >
                                          Three-Stop
                                        </label>
                                      </div>
                                    </div>

                                    <div className="text-right pl-3 font-medium text-sm rpr-w-100">
                                      {/* {currency_Name_rd.currency_Logo}{" "} */}
                                      {airlinePrice2[4][0].fare.grandTotal.toFixed(
                                        0
                                      )}
                                    </div>
                                  </div>
                                )}

                                {airlinePrice2[5] == undefined ? (
                                  ""
                                ) : (
                                  <div className="d-flex mb-2">
                                    <div className="flex-grow-1 themeascheckbox font-14">
                                      <div className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          value={5}
                                          onClick={(e) => stopFunction(e)}
                                          id={"airlprice-gt-5"}
                                        />
                                        <label
                                          className="form-check-label text-sm"
                                          htmlFor={"airlprice-gt-5"}
                                        >
                                          Four-Stop
                                        </label>
                                      </div>
                                    </div>

                                    <div className="text-right pl-3 font-medium text-sm rpr-w-100">
                                      {/* {currency_Name_rd.currency_Logo}{" "} */}
                                      {airlinePrice2[5][0].fare.grandTotal.toFixed(
                                        0
                                      )}
                                    </div>
                                  </div>
                                )}

                                {airlinePrice2[6] == undefined ? (
                                  ""
                                ) : (
                                  <div className="d-flex mb-2">
                                    <div className="flex-grow-1 themeascheckbox font-14">
                                      <div className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          value={6}
                                          onClick={(e) => stopFunction(e)}
                                          id={"airlprice-gt-6"}
                                        />
                                        <label
                                          className="form-check-label text-sm"
                                          htmlFor={"airlprice-gt-6"}
                                        >
                                          Five-Stop
                                        </label>
                                      </div>
                                    </div>

                                    <div className="text-right pl-3 font-medium text-sm rpr-w-100">
                                      {/* {currency_Name_rd.currency_Logo}{" "} */}
                                      {airlinePrice2[6][0].fare.grandTotal.toFixed(
                                        0
                                      )}
                                    </div>
                                  </div>
                                )}

                                {airlinePrice2[7] == undefined ? (
                                  ""
                                ) : (
                                  <div className="d-flex mb-2">
                                    <div className="flex-grow-1 themeascheckbox font-14">
                                      <div className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          value={7}
                                          onClick={(e) => stopFunction(e)}
                                          id={"airlprice-gt-7"}
                                        />
                                        <label
                                          className="form-check-label text-sm"
                                          htmlFor={"airlprice-gt-7"}
                                        >
                                          Six-Stop
                                        </label>
                                      </div>
                                    </div>

                                    <div className="text-right pl-3 font-medium text-sm rpr-w-100">
                                      {/* {currency_Name_rd.currency_Logo}{" "} */}
                                      {airlinePrice2[7][0].fare.grandTotal.toFixed(
                                        0
                                      )}
                                    </div>
                                  </div>
                                )}

                                {/* ) : (
                                      <span></span>
                                    )} */}
                              </DisclosurePanel>
                              {/* )
                              )} */}
                            </>
                          )}
                        </Disclosure>

                        {/*------------------------ choose stop---------------------------------------  */}
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl mt-3">
                    <div className="w-100">
                      <Disclosure defaultOpen="true">
                        {({ open }) => (
                          <>
                            <div className="px-3 py-3">
                              <DisclosureButton className="flex justify-between w-full text-sm font-medium text-left text-gray-900  rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-opacity-75">
                                <span className="text-lg font-bold ">
                                  Departure Time
                                </span>
                                {/* <ChevronUpIcon
                                className={`${
                                  open ? "transform rotate-180" : ""
                                } w-5 h-5 text-gray-900`}
                              /> */}
                              </DisclosureButton>
                            </div>

                            <DisclosurePanel className="day-fltimeing-row">
                              <Row className="day-fltimeing">
                                <Col
                                  xs={6}
                                  onClick={(e) => departure("morning")}
                                  className="d-flex align-items-center justify-content-center flex-column"
                                >
                                  <div className="justify-center flex">
                                    {/* <Image src={morning} width={30} height={25} /> */}
                                  </div>
                                  <p className="text-xs font-semibold mb-0 mt-2 text-center">
                                    (05:00am - 11:59am)
                                  </p>
                                </Col>

                                <Col
                                  xs={6}
                                  onClick={(e) => departure("afternoon")}
                                  className="d-flex align-items-center justify-content-center flex-column"
                                >
                                  <div className="justify-center flex">
                                    {/* <Image src={noon} width={30} height={25} /> */}
                                  </div>
                                  <p className="text-xs font-semibold mb-0 mt-2 text-center">
                                    (12:00pm - 05:59pm)
                                  </p>
                                </Col>

                                <Col
                                  xs={6}
                                  onClick={(e) => departure("evening")}
                                  className="d-flex align-items-center justify-content-center flex-column"
                                >
                                  <div className="justify-center flex">
                                    {/* <Image src={evening} width={30} height={25} /> */}
                                  </div>
                                  <p className="text-xs font-semibold mb-0 mt-2 text-center">
                                    (06:00pm - 11:59pm)
                                  </p>
                                </Col>

                                <Col
                                  xs={6}
                                  onClick={(e) => departure("night")}
                                  className="d-flex align-items-center justify-content-center flex-column"
                                >
                                  <div className="justify-center flex">
                                    {/* <Image src={night} width={30} height={25} /> */}
                                  </div>
                                  <p className="text-xs font-semibold mb-0 mt-2 text-center">
                                    (00:00am - 04.59am)
                                  </p>
                                </Col>
                              </Row>
                            </DisclosurePanel>
                          </>
                        )}
                      </Disclosure>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl mt-3">
                    <div className="w-100">
                      <Disclosure defaultOpen="true">
                        {({ open }) => (
                          <>
                            <div className="px-3 py-3">
                              <DisclosureButton className="flex justify-between w-full text-sm font-medium text-left text-gray-900  rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-opacity-75">
                                <span className="text-lg font-bold ">
                                  Arrival Time
                                </span>
                                {/* <ChevronUpIcon
                                className={`${
                                  open ? "transform rotate-180" : ""
                                } w-5 h-5 text-gray-900`}
                              /> */}
                              </DisclosureButton>
                            </div>

                            <DisclosurePanel className="day-fltimeing-row">
                              <Row className="day-fltimeing">
                                <Col
                                  xs={6}
                                  onClick={(e) => arrival("morning")}
                                  className="d-flex align-items-center justify-content-center flex-column"
                                >
                                  <div className="justify-center flex">
                                    {/* <Image src={morning} width={30} height={25} /> */}
                                  </div>
                                  <p className="text-xs font-semibold mb-0 mt-2 text-center">
                                    (05:00am - 11:59am)
                                  </p>
                                </Col>

                                <Col
                                  xs={6}
                                  onClick={(e) => arrival("afternoon")}
                                  className="d-flex align-items-center justify-content-center flex-column"
                                >
                                  <div className="justify-center flex">
                                    {/* <Image src={noon} width={30} height={25} /> */}
                                  </div>
                                  <p className="text-xs font-semibold mb-0 mt-2 text-center">
                                    (12:00pm - 05:59pm)
                                  </p>
                                </Col>

                                <Col
                                  xs={6}
                                  onClick={(e) => arrival("evening")}
                                  className="d-flex align-items-center justify-content-center flex-column"
                                >
                                  <div className="justify-center flex">
                                    {/* <Image src={evening} width={30} height={25} /> */}
                                  </div>
                                  <p className="text-xs font-semibold mb-0 mt-2 text-center">
                                    (06:00pm - 11:59pm)
                                  </p>
                                </Col>

                                <Col
                                  xs={6}
                                  onClick={(e) => arrival("night")}
                                  className="d-flex align-items-center justify-content-center flex-column"
                                >
                                  <div className="justify-center flex">
                                    {/* <Image src={night} width={30} height={25} /> */}
                                  </div>
                                  <p className="text-xs font-semibold mb-0 mt-2 text-center">
                                    (00:00am - 04.59am)
                                  </p>
                                </Col>
                              </Row>
                            </DisclosurePanel>
                          </>
                        )}
                      </Disclosure>
                    </div>
                  </div>

                  {/* ----------------------Flight sort checkbox------------------------------- */}

                  <div className="bg-gray-50 rounded-xl mt-3">
                    <div className="w-100">
                      <Disclosure defaultOpen="true">
                        {({ open }) => (
                          <>
                            <div className="grid grid-cols-1 px-3 py-3">
                              <DisclosureButton className="flex justify-between w-full text-sm font-medium text-left text-gray-900  rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-opacity-75">
                                <span className="text-lg font-bold ">
                                  Airline
                                </span>
                                {/* <ChevronUpIcon
                                className={`${
                                  open ? "transform rotate-180" : ""
                                } w-5 h-5 text-gray-900`}
                              /> */}
                              </DisclosureButton>
                            </div>

                            <DisclosurePanel className="day-fltimeing-row px-3 py-3 border-top">
                              {getUniqueSearches.map((items, i) => (
                                <>
                                  {airline
                                    .filter(
                                      (item) => item.code == items.airlineCode
                                    )
                                    .map((item, index) => (
                                      <div className="d-flex mb-2">
                                        <div className="flex-grow-1 themeascheckbox font-14">
                                          <div className="form-check">
                                            <input
                                              className="form-check-input"
                                              type="checkbox"
                                              value={item.code}
                                              onClick={(e) => selectFile(e)}
                                              id={"flexairresultcd-" + i}
                                            />
                                            <label
                                              className="form-check-label text-sm"
                                              htmlFor={"flexairresultcd-" + i}
                                            >
                                              {item.name}
                                            </label>
                                          </div>
                                        </div>

                                        <div className="text-right pl-3 font-medium text-sm rpr-w-100">
                                          {/* {currency_Name_rd.currency_Logo}{" "} */}
                                          {items.firstPrice}
                                        </div>
                                      </div>
                                    ))}
                                </>
                              ))}
                            </DisclosurePanel>
                          </>
                        )}
                      </Disclosure>
                    </div>
                  </div>
                </aside>

                <div className="text-center mt-4 d-xl-none">
                  <button
                    type="button"
                    className="btn btn-siteorange done-vel"
                    onClick={() => {
                      setfiltersort(!filtersort);
                    }}
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
          </Col>
          <Col md={9}>
            <Dom_Int_OneWay />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Results;
