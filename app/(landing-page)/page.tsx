import BookingSteps from "./sections/booking-steps";
import Destinations from "./sections/destinations";
import Hero from "./sections/hero";
import Services from "./sections/services";
import Testimonials from "./sections/testimonials";

export default function Home() {
  return (
    <main className="flex justify-center px-5 md:px-0">
      <div className="max-w-6xl w-full">
        <Hero />
        <Services />
        <Destinations />
        <BookingSteps />
        <Testimonials />
      </div>
    </main>
  );
}
