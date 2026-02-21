import React from "react";
import "./App.css";
import intro from "./components/intro";
import Navbar from "./components/navbar/navbar";
import Body from "./components/body/body";
import Footer from "./components/footer/footer";

function App() {
  const publicUrl = process.env.PUBLIC_URL || "/";
  const [wallpaper, setWallpaper] = React.useState(
    publicUrl + "/images/Mobile/Wallpapers/Wallpaper_mobile.webp",
  );

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setWallpaper(publicUrl + "/images/Desktop/Wallpapers/Wallpaper.webp");
      } else if (window.innerWidth >= 768) {
        setWallpaper(
          publicUrl + "/images/Tablet/Wallpapers/Wallpaper_tablet.webp",
        );
      } else {
        setWallpaper(
          publicUrl + "/images/Mobile/Wallpapers/Wallpaper_mobile.webp",
        );
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [publicUrl]);

  // const url = 'https://dev.laurentiumarian.ro/api/';
  // const url = 'http://localhost:8000/api/'; // URL-ul API-ului tău
  // const [data, setData] = React.useState([]);
  const [isLoading] = React.useState(false); // Adăugăm un starea pentru încărcare

  // React.useEffect(() => {
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(data => {
  //       setData(data);
  //       setIsLoading(false);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //       setIsLoading(false);
  //     });
  // }, []);

  const data = [
    {
      NavApps: [
        {
          name: "About Me",
          apps: [
            {
              app: {
                name: "About Me",
              },
              name: "About Me",
              type: "File",
              img: null,
              content:
                "Hey! Sunt Laurentiu Băluță, pasionat de tehnologie și de tot ce înseamnă cod.  <br>\r\n\r\nLucrez cu Python și Django pentru backend și automatizare, dar ador și JavaScript, unde am experiență cu multe frameworkuri moderne precum React, Next.js, Node.js și altele. Creez aplicații web și mobile (React Native + Expo), sisteme de scraping, task-uri programate și integrare AI cu LLM-uri locale (Ollama).\r\n\r\nÎmi place să construiesc lucruri care chiar funcționează, să experimentez cu tehnologiile noi și să fac codul cât mai curat și eficient. Dacă vrei să vezi ce fac, aruncă o privire pe proiectele mele – mereu sunt ceva cool în lucru!",
            },
          ],
        },
        {
          name: "Peviitor",
          apps: [
            {
              app: {
                name: "Peviitor",
              },
              name: "PeViitor",
              type: "App",
              img: publicUrl + "/images/General/github.png",
              content: "https://peviitor.ro/",
            },
          ],
        },
      ],
      LaunchPad: [
        {
          name: "PeViitor",
          type: "App",
          img: "http://localhost:8000/static/images/adaptive-icon.png",
          content: "https://peviitor.ro/",
        },
      ],
      Notifications: [
        {
          name: "Bine ai venit!",
          img: publicUrl + "/images/General/Siri.png",
          content: "Bine ai venit! Să începem aventura digitală.",
        },
      ],
      Description: [
        {
          name: "PeViitor",
          type: "App",
          img: "http://localhost:8000/static/images/adaptive-icon.png",
          content: "https://peviitor.ro/",
          description:
            "PeViitor.ro este o platformă românească dedicată centralizării locurilor de muncă disponibile în România, construită ca un motor de căutare modern pentru joburi. Scopul proiectului este simplu: să ofere acces rapid și gratuit la oportunități reale de angajare, fără cont obligatoriu și fără bariere inutile.\r\n\r\nPlatforma agregă anunțuri din multiple surse publice și le organizează într-un mod clar și ușor de filtrat, astfel încât utilizatorii să poată găsi rapid poziții relevante în funcție de oraș, domeniu sau companie. Prin actualizări constante și structurarea eficientă a datelor, PeViitor.ro reduce timpul petrecut căutând joburi pe zeci de site-uri diferite.\r\n\r\nProiectul are la bază o abordare tehnică orientată spre automatizare și eficiență, folosind procese de colectare și actualizare a datelor pentru a menține informațiile cât mai recente. În plus, platforma pune accent pe transparență și acces liber la informație, contribuind la o piață a muncii mai conectată și mai ușor de navigat.\r\n\r\nPe scurt, PeViitor.ro simplifică procesul de căutare a unui job, reunind oportunitățile într-un singur loc și oferind o experiență rapidă, directă și prietenoasă pentru utilizatori.",
          code: "https://github.com/peviitor-ro",
        },
      ],
    },
  ];

  return (
    <div
      className="App overflow-x-hidden w-full h-full flex flex-col"
      style={{ backgroundImage: `url(${wallpaper})`, backgroundSize: "cover" }}
    >
      {intro()}

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Navbar
            data={data[0].NavApps}
            notifications={data[0].Notifications}
          />
          {Body(data)}
          <Footer
            LaunchPad={data[0].LaunchPad}
            Description={data[0].Description}
          />
        </>
      )}
    </div>
  );
}

export default App;
