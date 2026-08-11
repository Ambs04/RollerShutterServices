import { useState } from "react";
import Header from "../../Components/Common Components/Header";
import Footer from "../../Components/Common Components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    serviceRequired: "",
    propertyType: "",
    contactMethod: "",
    suburb: "",
    message: "",
    consent: false,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.company ||
      !formData.serviceRequired ||
      !formData.propertyType ||
      !formData.contactMethod ||
      !formData.suburb ||
      !formData.message ||
      !formData.consent
    ) {
      alert("Please fill in all fields");
      return;
    }

    setLoading(true);
    setSuccess(false);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          subject: "New Contact Form Submission",
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          serviceRequired: formData.serviceRequired,
          propertyType: formData.propertyType,
          contactMethod: formData.contactMethod,
          suburb: formData.suburb,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          serviceRequired: "",
          propertyType: "",
          contactMethod: "",
          suburb: "",
          message: "",
          consent: false,
        });
      } else {
        alert("Failed to send message.");
        console.error(data);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" class="min-h-screen bg-[#353535]">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-30">
        <div className="grid grid-cols-1 md:grid-cols-[0.7fr_1.3fr] gap-12">
          <div class="md:mt-30" data-aos="fade-right">
            <h3 class="mb-3 text-[#e0e1e6] font-semibold text-xl">
              GET IN TOUCH
            </h3>

            <p class="text-[#F22233]/80 text-lg mb-2">
              Request a Free Quotation
            </p>

            <p class="text-[#e0e1e6]/80 text-sm">
              Send us your queries and we will get in touch to set up an
              evaluation and issue of a free quotation.
            </p>

            <div class="mt-12">
              <p class="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-white">
                Contact Information
              </p>

              <div class="space-y-7 text-sm">
                <div>
                  <span class="mb-1 text-xs uppercase tracking-widest text-[#F2B90F]">
                    Location
                  </span>
                  <a
                    href="https://www.google.com/maps/place/19+Stella+Cove,+Montague+Gardens,+Cape+Town,+7441"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p class="leading-6 text-[#E0E1E6]/70 transition-colors hover:text-white">
                      19 Stella Cove, Montague Gardens,
                      <br />
                      Cape Town, South Africa
                    </p>
                  </a>
                </div>

                <div>
                  <span class="mb-1 text-xs uppercase tracking-widest text-[#F2B90F]">
                    Phone
                  </span>
                  <a href="tel:+27718813320">
                    <p class="leading-6 text-[#E0E1E6]/70">(+27) 71 881 3320</p>
                  </a>
                  <a href="tel:+27791836737">
                    <p class="leading-6 text-[#E0E1E6]/70">(+27) 79 183 6737</p>
                  </a>
                </div>

                <div>
                  <span class="mb-1 text-xs uppercase tracking-widest text-[#F2B90F]">
                    Business Hours
                  </span>

                  <div>
                    <p class="leading-6 text-[#E0E1E6] transition-colors">
                      Monday - Sunday
                    </p>
                    <p class="leading-6 text-[#E0E1E6]/70  ">24 Hrs</p>
                  </div>

                  <div>
                    <p class="leading-6 text-[#E0E1E6]">Public Holidays</p>
                    <p class="leading-6 text-[#E0E1E6]/70 ">OPEN</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div class="mt-6 mb-12 text-center text-[#f22233] font-bold underline text-lg ">
                <p data-aos="fade-in">SEND US A MESSAGE</p>
              </div>

              {success && (
                <div>Message sent successfully! We'll be in touch soon.</div>
              )}

              <form
                onSubmit={handleSubmit}
                class="space-y-8 border-2 border-[#000000] px-8 py-6 rounded-xl bg-[#494a50] "
                data-aos="fade-left"
              >
                <div class="flex flex-row md:flex-col gap-8 md:gap-8 justify-between ">
                  <div>
                    <label
                      htmlFor="firstName"
                      class="mb-2 block text-sm font-medium text-[#E0E1E6]"
                    >
                      First Name
                    </label>

                    <input
                      id="firstName"
                      type="text"
                      name="firstName"
                      placeholder="Your First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      class="w-full rounded-lg border border-white/10 bg-[#222222] px-4 py-3 text-sm text-white outline-none transition focus:border-[#F2B90F]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      class="mb-2 block text-sm font-medium text-[#E0E1E6]"
                    >
                      Last Name
                    </label>

                    <input
                      id="lastName"
                      type="text"
                      name="lastName"
                      placeholder="Your Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      class="w-full rounded-lg border border-white/10 bg-[#222222] px-4 py-3 text-sm text-white outline-none transition focus:border-[#F2B90F]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    class="mb-2 block text-sm font-medium text-[#E0E1E6]"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    class="w-full rounded-lg border border-white/10 bg-[#222222] px-4 py-3 text-sm text-white outline-none transition focus:border-[#F2B90F]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    class="mb-2 block text-sm font-medium text-[#E0E1E6]"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    class="w-full rounded-lg border border-white/10 bg-[#222222] px-4 py-3 text-sm text-white outline-none transition focus:border-[#F2B90F]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    class="mb-2 block text-sm font-medium text-[#E0E1E6]"
                  >
                    Company Name
                  </label>

                  <input
                    id="company"
                    type="text"
                    name="company"
                    placeholder="Your Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    class="w-full rounded-lg border border-white/10 bg-[#222222] px-4 py-3 text-sm text-white outline-none transition focus:border-[#F2B90F]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="enquiryType"
                    class="mb-2 block text-sm font-medium text-[#E0E1E6]"
                  >
                    Enquiry Type
                  </label>

                  <select
                    id="serviceRequired"
                    name="serviceRequired"
                    value={formData.serviceRequired}
                    onChange={handleChange}
                    class="w-full rounded-lg border border-white/10 bg-[#222222] px-4 py-3 text-sm text-white outline-none transition focus:border-[#F2B90F]"
                  >
                    <option value="" disabled>
                      Select Required Service
                    </option>
                    <option value="New Roller Shutter Installation">
                      New Roller Shutter Installation
                    </option>
                    <option value="Roller Shutter Repairs">
                      Roller Shutter Repairs
                    </option>
                    <option value="Roller Shtter Servicing">
                      Roller Shutter Servicing
                    </option>
                    <option value="Maintenance">Maintenance</option>
                    <option value="Emergency Repairs">Emergency Repairs</option>
                    <option value="Roller Shutter Replacement">
                      Roller Shutter Replacement
                    </option>
                    <option value="General Enquiry">General Enquiry</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="propertyType"
                    class="mb-2 block text-sm font-medium text-[#E0E1E6]"
                  >
                    Property Type
                  </label>

                  <select
                    id="propertyType"
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    class="w-full rounded-lg border border-white/10 bg-[#222222] px-4 py-3 text-sm text-white outline-none transition focus:border-[#F2B90F]"
                  >
                    <option value="" disabled>
                      Select Property Type
                    </option>
                    <option value="New Roller Shutter Installation">
                      Residential
                    </option>
                    <option value="Commercial">Commercial</option>
                    <option value="Industrial">Industrial</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="enquiryType"
                    class="mb-2 block text-sm font-medium text-[#E0E1E6]"
                  >
                    Contact Method
                  </label>

                  <select
                    id="contactMethod"
                    name="contactMethod"
                    value={formData.contactMethod}
                    onChange={handleChange}
                    class="w-full rounded-lg border border-white/10 bg-[#222222] px-4 py-3 text-sm text-white outline-none transition focus:border-[#F2B90F]"
                  >
                    <option value="" disabled>
                      Select Preferred Contact Method
                    </option>
                    <option value="phone">Phone</option>
                    <option value="email">Email</option>
                    <option value="whatsapp">Whatsapp</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="suburb"
                    class="mb-2 block text-sm font-medium text-[#E0E1E6]"
                  >
                    Suburb
                  </label>
                  <input
                    id="suburb"
                    type="text"
                    name="suburb"
                    placeholder="Suburb"
                    value={formData.suburb}
                    onChange={handleChange}
                    class="w-full rounded-lg border border-white/10 bg-[#222222] px-4 py-3 text-sm text-white outline-none transition focus:border-[#F2B90F]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    class="mb-2 block text-sm font-medium text-[#E0E1E6]"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us what service you may require..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    class="w-full rounded-lg border border-white/10 bg-[#222222] px-4 py-3 text-sm text-white outline-none transition focus:border-[#F2B90F]"
                  />
                </div>

                <div>
                  <input
                    id="consent"
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    class="mt-1 h-4 w-4 accent-[#F22233] mt-4"
                  />
                  <label
                    htmlFor="consent"
                    class="text-xs leading-5 text-[#E0E1E6] uppercase pl-3"
                  >
                    I agree to Roller Shutter Services contacting me
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  class="mt-w-full rounded-xl bg-[#F22233] px-4 py-3 font-semibold text-white transition-all duration-300  hover:bg-[#590C13] hover:shadow-lg hover:shadow-[#F22233]/20 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
