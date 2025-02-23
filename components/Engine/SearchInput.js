import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import format from "date-fns/format";

const SearchInput = () => {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [showCalendar, setShowCalendar] = useState(false);
  const [showTravelers, setShowTravelers] = useState(false);
  const [travelers, setTravelers] = useState({
    adults: 1,
    children: 0,
    infantsOnLap: 0,
    infantsInSeat: 0,
  });

  const handleDateSelect = (ranges) => {
    setDateRange([ranges.selection]);
    setShowCalendar(false);
  };

  const handleTravelerChange = (type, operation) => {
    setTravelers((prev) => ({
      ...prev,
      [type]:
        operation === "increment"
          ? prev[type] + 1
          : Math.max(0, prev[type] - 1),
    }));
  };

  const getTotalTravelers = () => {
    return (
      travelers.adults +
      travelers.children +
      travelers.infantsOnLap +
      travelers.infantsInSeat
    );
  };

  return (
    <>
      <div className="search-container mt-4 mb-4">
        <div class="input-container">
          <div class="input-box">
            <span class="icon">
              <i class="fa-solid fa-location-dot"></i>
            </span>
            <input type="text" placeholder="Leaving from" />
          </div>
          <button class="swap-button">⇄</button>
          <div class="input-box">
            <span class="icon">
              <i class="fa-solid fa-location-dot"></i>
            </span>
            <input type="text" placeholder="Going to" />
          </div>
          <div
            className="input-box date-box"
            onClick={() => setShowCalendar(!showCalendar)}
          >
            <span className="icon">
              <i class="fa-solid fa-calendar"></i>
            </span>
            <input
              type="text"
              readOnly
              placeholder="Select dates"
              value={`${format(dateRange[0].startDate, "dd MMM")} - ${format(
                dateRange[0].endDate,
                "dd MMM"
              )}`}
            />
          </div>

          {showCalendar && (
            <div className="calendar-dropdown">
              <DateRange
                ranges={dateRange}
                onChange={handleDateSelect}
                moveRangeOnFirstSelection={false}
              />
            </div>
          )}

          {/* Travelers Input */}
          <div
            className="input-box traveler-box"
            onClick={() => setShowTravelers(!showTravelers)}
          >
            <span className="icon">
              <i class="fa-solid fa-user"></i>
            </span>
            <input
              type="text"
              readOnly
              value={`${getTotalTravelers()} traveler${
                getTotalTravelers() > 1 ? "s" : ""
              }`}
            />
          </div>

          {showTravelers && (
            <div className="travelers-dropdown">
              <div className="counter">
                <span>Adults</span>
                <div className="counter-controls">
                  <button
                    onClick={() => handleTravelerChange("adults", "decrement")}
                  >
                    -
                  </button>
                  <span>{travelers.adults}</span>
                  <button
                    onClick={() => handleTravelerChange("adults", "increment")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="counter">
                <span>
                  Children <small>(Ages 2 to 17)</small>
                </span>
                <div className="counter-controls">
                  <button
                    onClick={() =>
                      handleTravelerChange("children", "decrement")
                    }
                  >
                    -
                  </button>
                  <span>{travelers.children}</span>
                  <button
                    onClick={() =>
                      handleTravelerChange("children", "increment")
                    }
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="counter">
                <span>
                  Infants on lap <small>(Younger than 2)</small>
                </span>
                <div className="counter-controls">
                  <button
                    onClick={() =>
                      handleTravelerChange("infantsOnLap", "decrement")
                    }
                  >
                    -
                  </button>
                  <span>{travelers.infantsOnLap}</span>
                  <button
                    onClick={() =>
                      handleTravelerChange("infantsOnLap", "increment")
                    }
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="counter">
                <span>
                  Infants in seat <small>(Younger than 2)</small>
                </span>
                <div className="counter-controls">
                  <button
                    onClick={() =>
                      handleTravelerChange("infantsInSeat", "decrement")
                    }
                  >
                    -
                  </button>
                  <span>{travelers.infantsInSeat}</span>
                  <button
                    onClick={() =>
                      handleTravelerChange("infantsInSeat", "increment")
                    }
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                className="done-button"
                onClick={() => setShowTravelers(false)}
              >
                Done
              </button>
            </div>
          )}
          <button className="search-btn">Search</button>
        </div>
      </div>
    </>
  );
};

export default SearchInput;
