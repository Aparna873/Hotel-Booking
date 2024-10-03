import React from "react";

export const Service = () => {
  const service = [
    {
      title: "Luxury Accommodation",
      description:
        "Experience the finest rooms equipped with modern amenities and stunning views.",
      icon: "🏨", // Emoji icon for demonstration
    },
    {
      title: "Fine Dining",
      description:
        "Savor gourmet meals prepared by our world-class chefs in a breathtaking setting.",
      icon: "🍽️",
    },
    {
      title: "Spa & Wellness",
      description:
        "Unwind and rejuvenate with our full-service spa offering massages, facials, and wellness treatments.",
      icon: "💆‍♀️",
    },
    {
      title: "Conference & Event Facilities",
      description:
        "Host your meetings and events in our state-of-the-art facilities with professional support.",
      icon: "🏢",
    },
    {
      title: "24/7 Customer Support",
      description:
        "Our dedicated team is here to assist you at any time during your stay.",
      icon: "📞",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-200 to-gray-700 text-gray-800 py-20 px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-8">Our Services</h1>
        <p className="text-lg mb-12">
          We offer a wide range of services to ensure your stay is comfortable and enjoyable.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
