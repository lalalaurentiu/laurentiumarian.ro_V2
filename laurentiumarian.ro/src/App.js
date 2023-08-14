import "./App.css";
import intro from "./components/intro";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div
      className="
      App 
      bg-[url('../public/images/Mobile/Wallpapers/Wallpaper_mobile.webp')] 
      md:bg-[url('../public/images/Tablet/Wallpapers/Wallpaper_tablet.webp')] 
      lg:bg-[url('../public/images/Desktop/Wallpapers/Wallpaper.webp')] 
      bg-cover 
      w-screen 
      h-screen
    "
    >
      {intro()}
      {Navbar()}
    </div>
  );
}

export default App;
