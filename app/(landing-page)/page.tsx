import Destinations from "./sections/destinations";
import Hero from "./sections/hero";
import Services from "./sections/services";

export default function Home() {
  return (
    <main className="flex justify-center px-5 md:px-0">
      <div className="max-w-6xl w-full">
        <Hero />
        <Services />
        <Destinations />
      </div>
    </main>
  );
}
