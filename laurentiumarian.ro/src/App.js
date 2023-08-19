import React from "react";
import "./App.css";
import intro from "./components/intro";
import Navbar from "./components/navbar/navbar";
import Body from "./components/body/body";
import Footer from "./components/footer/footer";

function App() {
  const url = 'http://127.0.0.1:8000/api/';
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true); // Adăugăm un starea pentru încărcare

  React.useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setIsLoading(false); // Marcam că datele au fost încărcate
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false); // Marcam că s-a încheiat încărcarea, chiar dacă a fost o eroare
      });
  }, []);

  return (
    <div className="App bg-[url('../public/images/Mobile/Wallpapers/Wallpaper_mobile.webp')] md:bg-[url('../public/images/Tablet/Wallpapers/Wallpaper_tablet.webp')] lg:bg-[url('../public/images/Desktop/Wallpapers/Wallpaper.webp')] overflow-x-hidden bg-cover w-screen h-screen flex flex-col">
      {intro()}

      {/* Aici verificăm dacă datele sunt încărcate */}
      {isLoading ? (
        <p>
          Loading...
        </p> // Afișăm un mesaj de încărcare
      ) : (
        // Datele sunt încărcate, putem afișa componentele
        <>
          {Navbar(data[0].NavApps)}
          {Body()}
          {Footer()}
        </>
      )}
    </div>
  );
}

export default App;

