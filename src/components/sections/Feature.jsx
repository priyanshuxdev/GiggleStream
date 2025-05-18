import React from "react";
import { features } from "../../data/data";

function Feature() {
  return (
    <div className="max-w-6xl mx-auto mb-16">
      <h2 className="text-3xl font-black text-[#4A2C2A] text-center mb-12">
        Amazing Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl border-4 border-[#4A2C2A] shadow-[6px_6px_0px_0px_rgba(74,44,42,0.8)] transform transition-all duration-300 hover:scale-105 feature-card"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold text-[#4A2C2A] mb-2">
              {feature.title}
            </h3>
            <p className="text-[#4A2C2A]">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feature;
