import React from 'react';
import Data from '../data.js';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar , faWifi} from '@fortawesome/free-solid-svg-icons'; // Import the star icon

export const Tiles = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-96 min-h-screen'>
            {Data.properties && Data.properties.length > 0 ? (
                Data.properties.map((hotel) => (
                    <div key={hotel.id} className='m-8 relative w-full flex justify-center'>
                        <div className="flex flex-row bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 max-w-4xl w-full">
                
                            <img
                                className="object-cover w-1/3 rounded-l-lg"
                                src={hotel.images[0]?.thumbnail || 'fallback-image-url.jpg'}
                                alt={hotel.name}
                            />


                            <div className="flex flex-col justify-between p-4 w-2/3">
                                <h5 className="text-xl font-bold tracking-tight text-gray-900">{hotel.name}</h5>
                              
                                  <div className=" flex items-center ">
                                <span className="m-1 text-gray-700">{hotel.overall_rating}</span>
                                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                                <span className='text-blue-600 m-1'>({hotel.reviews})</span>
                            </div>
                            <div>
                            {
                                hotel?.amenities?.length>0
                            }
                            </div>
                            
                                <p className="font-normal text-gray-700">{hotel.description}</p>

                            
                                <Link to={hotel.link} className='text-blue-600 hover:underline'>
                                    Visit Hotel Website
                                </Link>

                              

                                {/* Nearby Places (optional) */}
                                {/* {hotel.nearby_places && hotel.nearby_places.length > 0 && (
                                    <div className='mt-4'>
                                       <h6 className="font-bold text-gray-800">Nearby Places:</h6>
                                       <ul className="list-disc ml-5">
                                        {hotel.nearby_places.map((place, index) => {
                                             return (
                                                 <li key={index} className="text-sm text-gray-600">
                                                     {place.name}
                                                     {place.transportations && place.transportations.length > 0 && (
                                                        <ul className="list-inside list-disc mt-1">
                                                             {place.transportations.map((transport, tIndex) => {
                                                                 return (
                                                                     <li key={tIndex} className="text-xs text-gray-500">
                                                                        {transport.type} - {transport.duration}
                                                                     </li>
                                                                 );
                                                             })}
                                                        </ul>
                                                     )}
                                                 </li>
                                             );
                                        })}
                                       </ul>
                                    </div>
                                )} */}
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
