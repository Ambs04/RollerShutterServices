import { Link } from "react-router-dom";

export default function ServiceIntro() {
  return (
    <div class="bg-[#2f2f2f] py-25 ">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div class="mb-12">
          <h2 class="text-[#e0e1e6] text-lg sm:text-xl mb-4 font-semibold">
            WHAT WE OFFER
          </h2>
          <p class="text-[#e0e1e6]/80 text-sm sm:text-lg font-normal tracking-wide">
            Roller Shutter Services offers a wide range of services tailored to
            the customer's needs. Whether it be installing roller shutters or
            manufaturing them, we do it ALL.
          </p>
        </div>
        <div class="mx-auto max-w-5xl flex flex-col sm:flex-row gap-4 justify-center items-center ">
          <Link to="services">
            <button class="rounded-xl bg-[#F22233] py-4 px-10  font-semibold hover:bg-[#dd0d1e] hover:text-[#e0e1e6]">
              VIEW OUR SERVICES
            </button>
          </Link>
          <Link to="/gallery">
            <button class="rounded-xl bg-[#F2B90F] py-4 px-10  font-semibold hover:bg-[#af8509] hover:text-[#e0e1e6]">
              VIEW OUR GALLERY
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
