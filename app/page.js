import Banner from "./banner/page";
import Blogs from "./blogs/page";
import NavBar from "./components/ui/Navbar";
import Footer from "./footer/page";
import Gallery from "./gallery/page";
import Slider from "./home/page";
import Message from "./message/page";
import News from "./news/page";
import ReportAndUpdates from "./report/page";
import Resources from "./resources/page";
import MediaSection from "./videos/page";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen w-full">
      <NavBar />
      <Slider />
      <Message/>
      <News/>
      <Blogs/>
      <Banner/>
      <Gallery/>
      <ReportAndUpdates/>
      <Resources/>
      <MediaSection/>
      <Footer/>
    </main>
  );
}
