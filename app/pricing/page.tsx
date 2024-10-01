import React from "react";

const Pricing = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Pricing</h1>
      
      {/* Packages Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Portrait Photography", price: "£200", description: "Includes a 2-hour shoot and 10 edited photos." },
            { title: "Music Videos", price: "£500", description: "Includes a 4-hour shoot and full editing." },
            { title: "Commercial Promo", price: "£300", description: "Includes a 3-hour shoot and promotional edits." },
          ].map((packageItem, index) => (
            <div key={index} className="pricing-card">
              <h3 className="pricing-title">{packageItem.title}</h3>
              <p className="pricing-price">{packageItem.price}</p>
              <p className="pricing-description">{packageItem.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Rates Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Rates</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Photography", rates: ["Hourly: £75", "Half-day: £250", "Full day: £400"] },
            { title: "Filming", rates: ["Hourly: £100", "Half-day: £350", "Full day: £600"] },
            { title: "Video Editing", rates: ["Hourly: £50", "Half-day: £150", "Full day: £250"] },
          ].map((service, index) => (
            <div key={index} className="pricing-card">
              <h3 className="pricing-title">{service.title}</h3>
              <ul className="list-disc pl-5">
                {service.rates.map((rate, idx) => (
                  <li key={idx} className="text-gray-600">{rate}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Pricing;
