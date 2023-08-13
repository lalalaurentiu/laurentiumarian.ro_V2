import "./App.css";
import intro from "./components/intro";

function App() {
  return (
    <div
      className="
      App 
      bg-[url('../public/images/Desktop/Wallpapers/Wallpaper_mobile.webp')] 
      md:bg-[url('../public/images/Desktop/Wallpapers/Wallpaper_tablet.webp')] 
      lg:bg-[url('../public/images/Desktop/Wallpapers/Wallpaper.webp')] 
      bg-cover 
      w-screen 
      h-screen
    "
    >
      {intro()}
    </div>
  );
}

export default App;
