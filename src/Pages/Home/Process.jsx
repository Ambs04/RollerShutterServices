export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Get in Touch",
    },
    {
      number: "02",
      title: "Evaluation",
    },
    {
      number: "03",
      title: "Free Quotation",
    },
    {
      number: "04",
      title: "Installation",
    },
    {
      number: "05",
      title: "Servicing",
    },
  ];

  return (
    <div class="bg-[#242424] py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div class-="max-w-5xl ">
          <h2 class="text-[#e0e1e6] text-xl font-semibold mb-5">Our Process</h2>
          <p class="text-[#e0e1e6]/80 text-sm sm:text-lg font-normal tracking-wide">
            From your first enquiry to ongoing support, we make every step
            straightforward and hassle-free. Our experienced team works closely
            with you to deliver a solution that meets your needs with quality,
            reliability, and professional service.
          </p>
        </div>
        <div className="relative mt-20">
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-8 hidden h-1 bg-[#A68626] lg:block" />

          <div className="grid gap-12 lg:grid-cols-5">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative flex flex-col items-center text-center"
              >
                {/* Circle */}
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#F22233] border-4 border-[#242424] text-xl font-bold text-white shadow-lg">
                  {step.number}
                </div>

                {/* Card */}
                <div className="mt-6 w-full rounded-xl bg-[#303030] p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <h3 className="text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
