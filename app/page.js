import TopNavBar from "./components/ui/Header";
import NavBar from "./components/ui/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <TopNavBar/>
     <NavBar/>
    </main>
  );
}
