import { useState } from "react";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";

import Container from "../../../components/UI/Container";
import AnimateIn from "../../../components/UI/AnimateIn";

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  company: "",
  phone: "",
  service: "",
  message: "",
};

const serviceOptions = [
  { value: "", label: "Select a service" },
  { value: "homes", label: "HVAC & REFRIGERATION" },
  { value: "commercial", label: "ELECTRICAL & INFRASTRUCTURE" },
  { value: "housing-society", label: "SOLAR ENERGY SOLUTIONS & AMC" },
  { value: "Fire Alarm", label: "FIRE ALARM & SAFETY SYSTEMS" },
];

// Zero-padded field index, spec-sheet style ("01", "02"...)
const idx = (n: number) => String(n).padStart(2, "0");

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {},
  );

  const validate = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const selectedService =
      serviceOptions.find((opt) => opt.value === formData.service)?.label ||
      formData.service;

    const whatsappMessage = `*New Contact Inquiry - Samarth Air Technologies*

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
${formData.company.trim() ? `*Company:* ${formData.company}\n` : ""}*Service:* ${selectedService}
*Message:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/917304739002?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(whatsappUrl, "_blank");

    setSubmitted(true);
    setFormData(initialForm);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputBase =
    "w-full rounded-md border bg-white px-4 py-2.5 text-sm text-[#16211C] outline-none transition-all duration-200 placeholder:text-[#9AA69E] focus:border-[#0E3B2E] focus:ring-2 focus:ring-[#0E3B2E]/15";

  const fieldLabel =
    "mb-1.5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5C6B62]";

  const tagNum = (n: number) => (
    <span className=" text-[10px] text-[#0E3B2E]/60">{idx(n)}</span>
  );

  return (
    <section className="relative overflow-hidden bg-primary-light/30 py-16 md:py-24">
      {/* Background Decorative Glow Blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <Container>
        <div className="relative mx-auto max-w-5xl font-body">
          <div className="mb-12">
            <AnimateIn variant="fade-up" delay={100}>
              <div className="flex items-center gap-2 text-sm font-semibold tracking-[0.2em] text-slate-600">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse-slow" />
                GET IN TOUCH
              </div>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={200}>
              <h2 className="font-display mt-3 text-3xl font-bold leading-tight text-[#16211C] md:text-[2.5rem]">
                Have a project in mind or need
                <br className="hidden md:block" /> urgent support?
              </h2>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={300}>
              <p className="mt-3 max-w-xl text-[#5C6B62]">
                Fill out the request below — HVAC, electrical, solar, or fire
                safety — and our engineering team will follow up with a
                consultation and quote.
              </p>
            </AnimateIn>
          </div>

          {/* Panel with corner-bracket "spec sheet" framing */}
          <div className="relative rounded-xl bg-white p-[1px] shadow-xl ring-1 ring-slate-900/5">
            <div className="grid gap-0 md:grid-cols-5">
              {/* Contact / nameplate panel */}
              <AnimateIn
                variant="fade-right"
                delay={200}
                duration={800}
                className="md:col-span-2 h-full"
              >
                <div className="rounded-xl relative flex flex-col justify-between bg-[#0E3B2E] p-8 text-white h-full">
                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.06]"
                    style={{
                      backgroundImage:
                        "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                  <div className="relative">
                    <h3 className="font-display mt-2 text-xl font-semibold">
                      Samarth Air Technologies
                    </h3>
                    <p className="mt-2 text-sm text-white/70">
                      Fill out the form and our specialists will respond within
                      24 hours.
                    </p>

                    <div className="mt-8 flex flex-col gap-4 text-sm">
                      <div className="group flex items-center gap-3 transition-transform duration-200 hover:translate-x-1">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white transition-colors duration-200 group-hover:bg-white/20">
                          <HiOutlinePhone size={18} className="text-white" />
                        </div>
                        <span className="font-medium">+91 73047 39002</span>
                      </div>
                      <div className="group flex items-center gap-3 transition-transform duration-200 hover:translate-x-1">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white transition-colors duration-200 group-hover:bg-white/20">
                          <HiOutlineMail size={18} className="text-white" />
                        </div>
                        <span className="font-medium">
                          samarthairtechnologies@gmail.com
                        </span>
                      </div>
                      <div className="group flex items-start gap-3 transition-transform duration-200 hover:translate-x-1">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white transition-colors duration-200 group-hover:bg-white/20">
                          <HiOutlineLocationMarker
                            size={18}
                            className="text-white"
                          />
                        </div>
                        <span className="font-medium mt-1">
                          Unit Number 26, Bharat Industrial Estate, Lal Bahadur
                          Shastri Marg, Rajiv Gandhi Nagar, Bhandup West,
                          Mumbai, Maharashtra 400078
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Site location — embedded map, styled like a spec-sheet panel */}
                  <div className="relative mt-8">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="text-[10px] tracking-[0.2em] text-white font-semibold">
                        SITE LOCATION
                      </span>
                      <span className="h-px flex-1 bg-white/15" />
                    </div>
                    <div className="overflow-hidden border border-white/15 rounded-lg transition-transform duration-300 hover:scale-[1.01]">
                      <iframe
                        title="Samarth Air Technologies location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.903601157595!2d72.91617370316253!3d19.14105874628061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9007c41019f%3A0xc4cdb00f93f30a31!2sSamarth%20Air%20Technologies!5e0!3m2!1sen!2sus!4v1791621812712!5m2!1sen!2sus"
                        width="100%"
                        height="180"
                        style={{
                          border: 0,
                          filter: "grayscale(0.15) contrast(1.05)",
                        }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </div>
                </div>
              </AnimateIn>

              {/* Form */}
              <AnimateIn
                variant="fade-left"
                delay={300}
                duration={800}
                className="md:col-span-3"
              >
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5 p-8 rounded-xl bg-white"
                  noValidate
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className={fieldLabel}>
                        {tagNum(1)} Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`${inputBase} ${errors.name ? "border-red-400" : "border-[#DDE3DA]"}`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className={fieldLabel}>
                        {tagNum(2)} Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className={`${inputBase} ${errors.phone ? "border-red-400" : "border-[#DDE3DA]"}`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className={fieldLabel}>
                      {tagNum(3)} Company Name
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="XYZ Pvt. Ltd."
                      className={`${inputBase} ${errors.company ? "border-red-400" : "border-[#DDE3DA]"}`}
                    />
                    {errors.company && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.company}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className={fieldLabel}>
                      {tagNum(4)} Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={`${inputBase} ${errors.email ? "border-red-400" : "border-[#DDE3DA]"}`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="service" className={fieldLabel}>
                      {tagNum(5)} Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`${inputBase} ${errors.service ? "border-red-400" : "border-[#DDE3DA]"}`}
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.service}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className={fieldLabel}>
                      {tagNum(6)} Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      className={`${inputBase} resize-none ${errors.message ? "border-red-400" : "border-[#DDE3DA]"}`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary py-3.5 text-sm font-semibold uppercase tracking-[0.1em] text-white rounded-full transition-all duration-300 hover:bg-[#16211C] hover:shadow-lg hover:scale-[1.01] active:scale-[0.98]"
                  >
                    Submit Request
                  </button>

                  {submitted && (
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#0E3B2E] bg-emerald-50 border border-emerald-200 rounded-lg p-3 transition-opacity duration-300">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      RECEIVED — We'll get back to you shortly.
                    </div>
                  )}
                </form>
              </AnimateIn>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactForm;
