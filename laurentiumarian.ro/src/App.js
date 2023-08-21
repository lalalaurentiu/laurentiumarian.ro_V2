import React from "react";
import "./App.css";
import intro from "./components/intro";
import Navbar from "./components/navbar/navbar";
import Body from "./components/body/body";
import Footer from "./components/footer/footer";

function App() {
  const url = 'http://192.168.0.156:8000/api/';
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true); // Adăugăm un starea pentru încărcare

  React.useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setIsLoading(false); 
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false); 
      });
  }, []);

  return (
    <div className="App bg-[url('../public/images/Mobile/Wallpapers/Wallpaper_mobile.webp')] md:bg-[url('../public/images/Tablet/Wallpapers/Wallpaper_tablet.webp')] lg:bg-[url('../public/images/Desktop/Wallpapers/Wallpaper.webp')] overflow-x-hidden bg-cover w-full h-full flex flex-col">
      {intro()}

      {isLoading ? (
        <p>
          Loading...
        </p>
      ) : (
        <>
          {Navbar(data[0].NavApps)}
          {Body(data)}
          {Footer(data[0].LaunchPad)}
        </>
      )}
    </div>
  );
}

export default App;

