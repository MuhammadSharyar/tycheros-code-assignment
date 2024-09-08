import BookingSteps from "./sections/booking-steps";
import Destinations from "./sections/destinations";
import Hero from "./sections/hero";
import Newsletter from "./sections/newsletter";
import Partners from "./sections/partners";
import Services from "./sections/services";
import Testimonials from "./sections/testimonials";

export default function Home() {
  return (
    <main className="flex justify-center px-5 lg:px-0">
      <div className="w-full max-w-6xl">
        <Hero />
        <Services />
        <Destinations />
        <BookingSteps />
        <Testimonials />
        <Partners />
        <Newsletter />
      </div>
    </main>
  );
}
