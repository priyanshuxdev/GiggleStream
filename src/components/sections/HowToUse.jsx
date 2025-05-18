import { howToUse } from "../../data/data";

function HowToUse() {
  return (
    <div className="max-w-4xl mx-auto mb-16">
      <h2 className="text-3xl font-black text-[#4A2C2A] text-center mb-12">
        How to Use
      </h2>
      <div className="space-y-8">
        {howToUse.map((step, index) => (
          <div
            key={index}
            className="flex items-start gap-6 bg-white p-6 rounded-2xl border-4 border-[#4A2C2A] shadow-[6px_6px_0px_0px_rgba(74,44,42,0.8)] step-card"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-[#B85C38] text-white text-2xl font-bold rounded-full flex items-center justify-center">
              {step.step}
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#4A2C2A] mb-2">
                {step.title}
              </h3>
              <p className="text-[#4A2C2A]">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HowToUse;
