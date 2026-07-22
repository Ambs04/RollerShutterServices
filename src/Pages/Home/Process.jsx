export default function Process() {
  const steps = [
    "Get in Touch",
    "Evaluation",
    "Free Quotation",
    "Installation",
    "Aftercare Servicing",
  ];

  const colors = [
    {
      bg: "bg-red-600",
      arrow: "#dc2626",
    },
    {
      bg: "bg-yellow-500",
      arrow: "#eab308",
    },
  ];

  return (
    <>
      <div>
        <div>
          <h2>Our Process</h2>
          <p>
            From your first enquiry to ongoing support, we make every step
            straightforward and hassle-free. Our experienced team works closely
            with you to deliver a solution that meets your needs with quality,
            reliability, and professional service.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row">
          {steps.map((step, index) => {
            const color = colors[index % colors.length];

            return (
              <div
                key={index}
                className={`relative ${color.bg} text-white font-semibold px-10 py-5 min-w-[220px] flex items-center justify-center`}
                style={{
                  clipPath:
                    "polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%, 10% 50%)",
                }}
              >
                {step}

                {/* Right chevron */}
                {index !== steps.length - 1 && (
                  <div
                    className="absolute -right-6 top-0 z-10 w-0 h-0"
                    style={{
                      borderTop: "30px solid transparent",
                      borderBottom: "30px solid transparent",
                      borderLeft: `24px solid ${color.arrow}`,
                    }}
                  />
                )}

                {/* Cut-out on the left */}
                {index !== 0 && (
                  <div
                    className="absolute left-0 top-0 w-0 h-0"
                    style={{
                      borderTop: "30px solid transparent",
                      borderBottom: "30px solid transparent",
                      borderLeft: "24px solid white",
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
