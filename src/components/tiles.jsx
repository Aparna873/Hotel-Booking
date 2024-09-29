import React from "react";
import Data from "../data.js";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faWifi,
  faCar,
  faMugSaucer,
  faBowlFood,
  faPersonSwimming,
  faUtensils,
  faUmbrellaBeach,
  faDumbbell,
  faBanSmoking,
  faBed,
  faWineGlass,
  faChild
} from "@fortawesome/free-solid-svg-icons"; // Import the necessary FontAwesome icons

// Create a mapping between amenity names and actual icon objects
const IconMapping = {
  faChild: faChild,
  faMugSaucer: faMugSaucer,
  faBowlFood: faBowlFood,
  faWifi: faWifi,
  faCar: faCar,
  faPersonSwimming: faPersonSwimming,
  faUtensils: faUtensils,
  faUmbrellaBeach: faUmbrellaBeach,
  faDumbbell: faDumbbell,
  faBanSmoking: faBanSmoking,
  faBed: faBed,
  faWineGlass: faWineGlass,
};

const Amenities = {
  "Child-friendly": "faChild",
  "Free breakfast": "faBowlFood",
  "Breakfast ($)": "faMugSaucer",
  "Free Wifi": "faWifi",
  "Free parking": "faCar",
  "Air conditioning": "",
  Bar: "faWineGlass",
  "Outdoor pool": "faPersonSwimming",
  Restaurant: "faUtensils",
  "Beach access": "faUmbrellaBeach",
  "Fitness centre": "faDumbbell",
  "Smoke-free property": "faBanSmoking",
  "Room service": "faBed",
};

export const Tiles = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-96 min-h-screen">
      {Data.properties && Data.properties.length > 0 ? (
        Data.properties.map((hotel) => (
          <div
            key={hotel.id}
            className="m-8 relative w-full flex justify-center"
          >
            <div className="flex flex-row bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 max-w-4xl w-full">
              <img
                className="object-cover w-1/3 rounded-l-lg"
                src={hotel.images[0]?.thumbnail || "fallback-image-url.jpg"}
                alt={hotel.name}
              />

              <div className="flex flex-col justify-between p-4 w-2/3">
                <h5 className="text-xl font-bold tracking-tight text-gray-900">
                  {hotel.name}
                </h5>
                <div className="flex items-center">
                  <span className="m-1 text-gray-700">{hotel.overall_rating}</span>
                  <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                  <span className="text-blue-600 m-1">({hotel.reviews})</span>
                </div>

                <div className="grid grid-cols-3 gap-2 mt-4">
                  {hotel.amenities?.map((amenity, index) => {
                    const icon = IconMapping[Amenities[amenity]];
                    if (icon) {
                      return (
                        <div key={index} className="flex items-center space-x-1 text-sm">
                          <FontAwesomeIcon
                            icon={icon}
                            className="text-gray-600"
                            title={amenity}
                          />
                          <span className="text-gray-700">{amenity}</span>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
                <button className="ml-auto bg-blue-600 text-white py-2 px-4 rounded hover:bg-gray-800 mt-4">
                  <Link to={hotel.link} className="text-white">
                    Visit
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No hotel data available.</p>
      )}
    </div>
  );
};
