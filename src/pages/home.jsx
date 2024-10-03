import React, { useState, useEffect, useContext } from "react";
import "./home.css";
import { Tiles } from "../components/tiles.jsx";
import { AppContext } from "../App.jsx";
import { Card } from "../components/cards.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";

export const Home = () => {
  const { setHotels } = useContext(AppContext);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  // Create state variables for the search query, check-in date, and check-out date
  const [searchQuery, setSearchQuery] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    if (!checkInDate || !checkOutDate) {
      toast.error("You need to provide both check-in and check-out dates", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "light",
        style: {
          background: "#ffcccb", // Soft red for an error message
          color: "#333333", // Darker text color for readability
          borderRadius: "8px", // Subtle rounded corners for a clean look
          padding: "10px", // Ample padding for balanced spacing
          fontWeight: "bold", // Bold text to emphasize the error
          border: "1px solid #ff4e50", // Border to define the toast clearly
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)", // Added shadow for better depth and visual appeal
        },
        icon: "🚫", // Custom icon for better user experience
      });
      return;
    }
    
    
    // Log the state values (searchQuery, checkInDate, checkOutDate)
    console.log("Search Query:", searchQuery);
    console.log("Check-in Date:", checkInDate);
    console.log("Check-out Date:", checkOutDate);

    // Make the API call
    fetchHotels(searchQuery, checkInDate, checkOutDate);
  };

  // Function to handle the API call
  const fetchHotels = async (query, checkIn, checkOut) => {
    setLoading(true); // Start loading
    try {
      const response = await fetch(
        `https://hotel-backend-0kqd.onrender.com/hotels?q=${encodeURIComponent(query)}&check_in_date=${checkIn}&check_out_date=${checkOut}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch hotels");
      }

      const data = await response.json();
      setHotels(data); // Store the response in the state
      console.log("Fetched Hotels:", data);
    } catch (error) {
      console.error("Error fetching hotels:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <>
      <div className={`${isHomePage ? "with-background" : ""}`}>
        <div>
          <h1 className="text-3xl md:text-6xl text-yellow-500 text-center pt-24 font-black">
            Find Your Home Away From Home <br />
            Book Your Stay Today
          </h1>
        </div>
        <div className="m-10 flex">
          <form className="max-w-4xl mx-auto" onSubmit={handleSubmit}>
            <div className="flex flex-row gap-4">
              {/* Search Input */}
              <div className="relative w-96">
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search Hotels..."
                  required
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 flex items-center justify-center"
                >
                  {loading ? (
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                  ) : (
                    "Search"
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* Date Picker Range */}
        <div id="date-range-picker" className="flex flex-row justify-center gap-1">
          <div className="relative items-center">
            <input
              id="datepicker-range-start"
              name="start"
              type="date"
              className="bg-gray-50 border w-36 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-8 py-3"
              placeholder="Select date start"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
          </div>
          <span className="text-white font-bold m-2">to</span>
          <div className="relative">
            <input
              id="datepicker-range-end"
              name="end"
              type="date"
              className="bg-gray-50 border w-36 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-8 py-3"
              placeholder="Select date end"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
      <Tiles /> {/* Pass the fetched hotels data to the Tiles component */}
      <Card />
    </>
  );
};
