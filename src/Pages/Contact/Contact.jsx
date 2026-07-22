import { useState } from "react";

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
    <div id="contact">
      <div>
        <div>
          <h3>GET IN TOUCH</h3>

          <p>Request a Free Quotation</p>

          <p>
            Send us your queries and we will get in touch to set up an
            evaluation and issue of a free quotation.
          </p>
        </div>

        <div>
          <div>
            <div>
              <p>Send us a Message</p>
            </div>

            {success && <div>Message sent successfully!</div>}

            <form onSubmit={handleSubmit}>
              <div>
                <div>
                  <label htmlFor="firstName">First Name</label>

                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    placeholder="Your First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="lastName">Last Name</label>

                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    placeholder="Your Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email">Email Address</label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="phone">Phone Number</label>

                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="company">Company Name</label>

                <input
                  id="company"
                  type="text"
                  name="company"
                  placeholder="Your Company Name"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="enquiryType">Enquiry Type</label>

                <select
                  id="serviceRequired"
                  name="serviceRequired"
                  value={formData.serviceRequired}
                  onChange={handleChange}
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
                <label htmlFor="propertyType">Property Type</label>

                <select
                  id="propertyType"
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
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
                <label htmlFor="enquiryType">Contact Method</label>

                <select
                  id="contactMethod"
                  name="contactMethod"
                  value={formData.contactMethod}
                  onChange={handleChange}
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
                <label htmlFor="suburb">Suburb</label>
                <input
                  id="suburb"
                  type="text"
                  name="suburb"
                  placeholder="Suburb"
                  value={formData.suburb}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="message">Message</label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us what service you may require..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <div>
                <input type="checkbox" />
                <label>I agree to Roller Shutter Services contacting me</label>
              </div>

              <button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          <div>
            <div>
              <p>Contact Information</p>

              <div>
                <div>
                  <span>Location</span>
                  <p>19 Stella Cove, Montague Gardens,</p>
                  <p>Cape Town, South Africa</p>
                </div>

                <div>
                  <span>Phone</span>
                  <p>(+27) 71 881 3320</p>
                </div>

                <div>
                  <span>Business Hours</span>

                  <div>
                    <p>Monday - Sunday</p>
                    <p>24 Hrs</p>
                  </div>

                  <div>
                    <p>Public Holidays</p>
                    <p>OPEN</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
