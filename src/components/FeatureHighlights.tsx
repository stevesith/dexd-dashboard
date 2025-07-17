import React from "react";

const features = [
  {
    title: "",
    description: "",
    icon: "",
  },
];

const FeatureHighlights: React.FC = () => {
  return (
    <section className="text-center py-12">
      {/* <h2 className="text-3xl font-bold mb-6">Our Top Features</h2> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 border-0 rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureHighlights;
