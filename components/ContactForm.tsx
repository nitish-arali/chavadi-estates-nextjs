import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    interest: "General Inquiry",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        // This handles API-level errors (like validation or DB errors)
        throw new Error(result.error || 'Failed to submit form');
      }

      toast.success("Thank you for your inquiry. We'll contact you shortly.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        interest: "General Inquiry",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(
        error instanceof Error ? error.message : "There was a problem sending your message. Please try again.",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="input-field"
              // placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="input-field"
              // placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="input-field"
              // placeholder="+1 (123) 456-7890"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="interest" className="block mb-2 text-sm font-medium">
              Interested In
            </label>
            <select
              id="interest"
              name="interest"
              className="input-field"
              value={formData.interest}
              onChange={handleChange}
            >
              <option value="General Inquiry">General Inquiry</option>
              <option value="Chavadi Lotus Pond">Chavadi Lotus Pond</option>
              <option value="Chavadi Wedding Retreat">
                Chavadi Wedding Retreat
              </option>
              <option value="Chavadi Blossom Valley">
                Chavadi Blossom Valley
              </option>
              <option value="Chavadi Aura Apartments">
                Chavadi Aura Apartments
              </option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 text-sm font-medium">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="input-field min-h-[120px] resize-y"
            placeholder="I'm interested in learning more about your properties..."
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" disabled={loading} className="btn-gold w-full">
          {loading ? "Sending..." : "Send Message"}
        </button>

        <p className="text-xs text-muted-foreground text-center mt-4">
          By submitting this form, you agree to our Privacy Policy and Terms of
          Service.
        </p>
      </form>
    </>
  );
};

export default ContactForm;
