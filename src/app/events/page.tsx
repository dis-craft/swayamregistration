import NavBar from "@/components/NavBar";
import EventsSlider from "@/components/events/EventsSlider";
import ClubEvents from "@/components/events/ClubEvents";
import { Angkor } from "next/font/google";

const angkor = Angkor({ subsets: ["latin"], weight: "400" });

export default function EventsPage() {
  return (
    <div 
      className={`min-h-screen bg-contain bg-center bg-[url('/assets/AndroidBackground.png')] md:bg-[url('/assets/Background.png')] bg-fixed text-[#5F4A37] ${angkor.className} scroll-smooth`}
    >
      <NavBar />
      <main className="container mx-auto px-4 ">
        <EventsSlider />
        <ClubEvents />
      </main>
    </div>
  );
}