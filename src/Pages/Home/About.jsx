import about from "../../assets/about.jpeg";

export default function About() {
  return (
    <div class=" py-15 overflow-hidden bg-[#353535]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div class="grid lg:grid-cols-2 lg:grid-cols-[1.3fr_1fr] items-center gap-16 justify-center">
          <div class="h-150 w-auto ">
            <img
              src={about}
              class="sm:h-full md:h-full  sm:w-full object-contain md:rounded-lg rounded-lg    opacity-80"
            />
          </div>
          <div class="text-[#e0e1e6] text-sm sm:text-lg font-medium flex flex-col gap-4 tracking-wide max-w-3xl   ">
            <p class="font-semibold text-2xl md:text-left text-center text-[#f2b90f]">
              WHO ARE WE?
            </p>
            <p>
              Roller Shutter Services is a family-owned business founded in 2002
              in Cape Town, South Africa. Since its establishment, the company
              has built a strong reputation for delivering high-quality roller
              shutter solutions, specialising in the manufacturing,
              installation, and servicing of roller shutters for residential,
              commercial, and industrial clients.
            </p>
            <p>
              Operating throughout Cape Town and the surrounding areas, RSS is
              committed to providing reliable products and exceptional customer
              service. With a strong focus on quality assurance, the company
              ensures that every project meets the highest standards of
              workmanship, durability, and customer satisfaction. Through years
              of experience and dedication, RSS continues to be a trusted name
              in the roller shutter industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
