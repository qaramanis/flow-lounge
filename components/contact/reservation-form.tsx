"use client";

import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import ActionButton from "@/components/action-button";
import { Calendar22 } from "@/components/contact/calendar-22";

export default function ReservationForm() {
  const [reservationData, setReservationData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    people: "2",
  });
  const [isSubmittingReservation, setIsSubmittingReservation] = useState(false);
  const [reservationStatus, setReservationStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleReservationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingReservation(true);
    setReservationStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reservationData),
      });

      const data = await response.json();

      if (response.ok) {
        setReservationStatus({
          type: "success",
          message: "Reservation request sent. Please check your emails.",
        });
        setReservationData({
          name: "",
          email: "",
          phone: "",
          date: "",
          people: "2",
        });
      } else {
        setReservationStatus({
          type: "error",
          message:
            data.error || "Failed to submit reservation. Please try again.",
        });
      }
    } catch (error) {
      setReservationStatus({
        type: "error",
        message: "Failed to submit reservation. Please try again.",
      });
    } finally {
      setIsSubmittingReservation(false);
    }
  };

  const handleReservationChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setReservationData({
      ...reservationData,
      [e.target.name]: e.target.value,
    });
  };

  // Auto-dismiss success message after 3 seconds
  useEffect(() => {
    if (reservationStatus.type === "success") {
      const timer = setTimeout(() => {
        setReservationStatus({ type: null, message: "" });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [reservationStatus.type]);

  return (
    <div>
      <h2 className="text-4xl md:text-5xl font-light text-foreground mb-8">
        Make a{" "}
        <span className="text-accent font-echelon italic">Reservation</span>
      </h2>

      <form onSubmit={handleReservationSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-lg text-foreground/60 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={reservationData.name}
            onChange={handleReservationChange}
            required
            className="w-full bg-foreground/5 border border-foreground/15 rounded-lg px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent transition-colors duration-300"
            placeholder="Your name"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-lg text-foreground/60 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={reservationData.email}
              onChange={handleReservationChange}
              required
              className="w-full bg-foreground/5 border border-foreground/15 rounded-lg px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent transition-colors duration-300"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-lg text-foreground/60 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={reservationData.phone}
              onChange={handleReservationChange}
              required
              className="w-full bg-foreground/5 border border-foreground/15 rounded-lg px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent transition-colors duration-300"
              placeholder="+30 123 456 7890"
            />
          </div>
        </div>

        <Calendar22
          label="Date"
          value={reservationData.date}
          onChange={(date) =>
            setReservationData({ ...reservationData, date })
          }
          minDate={new Date()}
          required
        />

        <div>
          <label htmlFor="people" className="block text-lg text-foreground/60 mb-2">
            Number of People
          </label>
          <select
            id="people"
            name="people"
            value={reservationData.people}
            onChange={handleReservationChange}
            required
            className="w-full bg-foreground/5 border border-foreground/15 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors duration-300 appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.6)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 1rem center",
              backgroundSize: "1.5rem",
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? "Person" : "People"}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col w-fit md:flex-row gap-4 md:items-center">
          <ActionButton
            type="submit"
            text={isSubmittingReservation ? "Submitting..." : "Reserve Table"}
            icon={Calendar}
            disabled={isSubmittingReservation}
          />

          <div className="flex-1 min-h-[56px] flex items-center">
            <AnimatePresence>
              {reservationStatus.type && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                  className={`p-4 rounded-lg w-full ${
                    reservationStatus.type === "success"
                      ? "bg-green-500/10 border border-green-500/30 text-green-400"
                      : "bg-red-500/10 border border-red-500/30 text-red-400"
                  }`}
                >
                  {reservationStatus.message}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </form>
    </div>
  );
}
