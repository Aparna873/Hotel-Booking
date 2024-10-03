import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppContext } from "../App";
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
  const {
    hotels
  } = useContext(AppContext);

  return (
    <div className={hotels ? "flex flex-col items-center justify-center -mt-60 " : ""}>
      {hotels.properties && hotels.properties.length > 0 ? (
        hotels.properties.map((hotel) => (
          <div
            key={hotel.id}
            className="m-8 relative w-full flex justify-center ">
            <div className="flex flex-row bg-white border border-gray-200 rounded-lg  hover:bg-gray-100 max-w-4xl w-full  shadow-xl">
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
                            title={amenity} />
                          <span className="text-gray-700">{amenity}</span>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
                <button className="ml-auto bg-blue-600 text-white py-2 px-4 rounded hover:bg-gray-800 mt-4">
                  <a href={hotel.link} target="_blank" rel="noopener noreferrer" className="text-white">
                    Visit
                  </a>
                </button>
                <div className="absolute right-64">
                  <p className="text-lg font-bold text-blue-600">{hotel.total_rate?.lowest}</p>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="mt-52"></div>
      )}
    </div>
  );
};
