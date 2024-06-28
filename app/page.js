import NavBar from "./components/ui/Navbar";
import Slider from "./home/page";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen w-full">
      <NavBar />
      <Slider />
    </main>
  );
}
