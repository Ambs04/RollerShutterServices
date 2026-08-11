import hero from "../../assets/hero.png";

export default function Hero() {
  return (
    <div
      class=" min-h-screen relative overflow-hidden shadow-2xl bg-gradient-to-r
from-black/80
via-black/60
to-transparent"
    >
      <img src={hero} class="absolute inset-0 w-full  h-full object-cover" />
      <div class="absolute h-full inset-0 bg-black/60">
        <div />
        <div
          data-aos="fade-in"
          class="relative top-10 z-10 max-w-7xl mx-auto px-6 sm:px-4 lg:px-8 py-40 min-h-screen flex flex-col items-center justify-center "
        >
          <h2 class="text-4xl font-semibold tracking-wider text-[#e0e1e6] sm:text-6xl text-center">
            Welcome To <span class="text-[#e0e1e6]">R</span>
            <span class="text-[#e0e1e6]">SS</span>
          </h2>
          <p class="py-6 text-[#e0e1e6] text-sm sm:text-lg text-center">
            Cape Town's Leaders in Roller Shutter Doors
          </p>
          <i>
            <p class="text-[#f22233] font-medium">
              "Where we keep you, <span class="text-[#f2b90f]">rolling</span>."
            </p>
          </i>
        </div>
      </div>
    </div>
  );
}
