// import React, { useState } from "react";
// import SearchInput from "./SearchInput";

// const SearchEngine = () => {
//   const [tripType, setTripType] = useState("return"); // Options: return, one-way, multi-city

//   return (
//     <>
//       <div className="container-custom search-engine-main">
//         <div className="card search-card">
//           {/* Trip Type Header */}
//           <div className="engine-header d-flex justify-content-center">
//             <a
//               className={tripType === "return" ? "active" : ""}
//               onClick={() => setTripType("return")}
//             >
//               Return
//             </a>
//             <a
//               className={tripType === "one-way" ? "active" : ""}
//               onClick={() => setTripType("one-way")}
//             >
//               One-way
//             </a>
//             <a
//               className={tripType === "multi-city" ? "active" : ""}
//               onClick={() => setTripType("multi-city")}
//             >
//               Multi-city
//             </a>
//           </div>
//           <SearchInput tripType={tripType} />
//         </div>
//       </div>
//     </>
//   );
// };

// export default SearchEngine;

import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Tabs,
  Tab,
  InputGroup,
  ListGroup,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import airportData from "../../utils/Jsons/airportdata.json";

const SearchEngine = () => {
  const [tripType, setTripType] = useState("roundtrip");
  const [cabinClass, setCabinClass] = useState("economy");
  const [locations, setLocations] = useState({ from: "", to: "" });
  const [dates, setDates] = useState({ departure: "", return: "" });
  const [filteredAirports, setFilteredAirports] = useState([]);
  const [activeField, setActiveField] = useState("");

  const handleSwapLocations = () => {
    setLocations({ from: locations.to, to: locations.from });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search details:", {
      tripType,
      cabinClass,
      locations,
      dates,
    });
  };

  const filterAirports = (input) => {
    if (input.trim() === "") {
      setFilteredAirports([]);
      return;
    }

    const filtered = airportData.filter(
      (airport) =>
        airport.airportName.toLowerCase().includes(input.toLowerCase()) ||
        airport.airportCode.toLowerCase().includes(input.toLowerCase()) ||
        airport.cityName.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredAirports(filtered);
  };

  const handleInputChange = (field, value) => {
    setLocations({ ...locations, [field]: value });
    setActiveField(field);
    filterAirports(value);
  };

  const handleAirportSelect = (field, airport) => {
    setLocations({
      ...locations,
      [field]: `${airport.cityName} (${airport.airportCode})`,
    });
    setFilteredAirports([]);
    setActiveField("");
  };

  return (
    <Container className="mt-4 search-engine-container">
      <h2 className="text-center">Search Flights</h2>
      <Tabs
        activeKey={tripType}
        onSelect={(k) => setTripType(k)}
        className="mb-3"
      >
        <Tab eventKey="roundtrip" title="Roundtrip" />
        <Tab eventKey="oneway" title="One-way" />
      </Tabs>

      <Form onSubmit={handleSearch}>
        <Row className="mb-3">
          <Col md={6} xs={12} className="position-relative">
            <Form.Group controlId="formFromLocation">
              <Form.Label>Leaving from</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Enter departure city"
                  value={locations.from}
                  onChange={(e) => handleInputChange("from", e.target.value)}
                />
              </InputGroup>
              {activeField === "from" && filteredAirports.length > 0 && (
                <ListGroup className="autocomplete-dropdown overlay-dropdown">
                  {filteredAirports.map((airport, index) => (
                    <ListGroup.Item
                      key={index}
                      action
                      onClick={() => handleAirportSelect("from", airport)}
                    >
                      {airport.cityName} ({airport.airportCode}) -{" "}
                      {airport.airportName}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </Form.Group>
          </Col>
          <Col md={6} xs={12} className="position-relative">
            <Form.Group controlId="formToLocation">
              <Form.Label>Going to</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Enter destination city"
                  value={locations.to}
                  onChange={(e) => handleInputChange("to", e.target.value)}
                />
                <Button
                  variant="outline-secondary"
                  onClick={handleSwapLocations}
                >
                  Swap
                </Button>
              </InputGroup>
              {activeField === "to" && filteredAirports.length > 0 && (
                <ListGroup className="autocomplete-dropdown overlay-dropdown">
                  {filteredAirports.map((airport, index) => (
                    <ListGroup.Item
                      key={index}
                      action
                      onClick={() => handleAirportSelect("to", airport)}
                    >
                      {airport.cityName} ({airport.airportCode}) -{" "}
                      {airport.airportName}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6} xs={12}>
            <Form.Group controlId="formDepartureDate">
              <Form.Label>Departure Date</Form.Label>
              <Form.Control
                type="date"
                value={dates.departure}
                onChange={(e) =>
                  setDates({ ...dates, departure: e.target.value })
                }
              />
            </Form.Group>
          </Col>
          {tripType === "roundtrip" && (
            <Col md={6} xs={12}>
              <Form.Group controlId="formReturnDate">
                <Form.Label>Return Date</Form.Label>
                <Form.Control
                  type="date"
                  value={dates.return}
                  onChange={(e) =>
                    setDates({ ...dates, return: e.target.value })
                  }
                />
              </Form.Group>
            </Col>
          )}
        </Row>

        <Row className="mb-3">
          <Col xs={12}>
            <Form.Group controlId="formCabinClass">
              <Form.Label>Cabin Class</Form.Label>
              <Form.Select
                value={cabinClass}
                onChange={(e) => setCabinClass(e.target.value)}
              >
                <option value="economy">Economy</option>
                <option value="premium-economy">Premium Economy</option>
                <option value="business">Business Class</option>
                <option value="first">First Class</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Button type="submit" variant="primary" className="w-100">
          {/* <a href="/searches">Search Flights</a> */}
          Search Flights
        </Button>
      </Form>
    </Container>
  );
};

export default SearchEngine;
