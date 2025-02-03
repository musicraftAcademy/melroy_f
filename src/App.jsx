import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import "./effect.css";

const styles = {
  bgImg: {
    backgroundImage: `url("https://i.imgur.com/OQ3TfdK.jpeg")`,
    backgroundAttachment: "fixed",
    backgroundPosition: "top left",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%", // Ensure the div takes up the full height of its parent
  },

  bgImg2: {
    backgroundImage: `url("https://i.imgur.com/PbQGV32.jpeg")`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%", // Ensure the div takes up the full height of its parent
  },
};

export default function App() {
  return (
    <>
      <div className="bg-white">
        <Navigation />

        <div className="hidden sm:h-screen sm:z-10 sm:flex "> {/* Use h-screen to make the parent div take up the full viewport height */}
          <div className="flex w-full"> {/* Ensure the flex container takes up the full width */}
            <div className="flex flex-col items-center justify-center w-1/2">
              <h1 className="text-center text-black font-bold text-4xl lg:text-7xl">
                MELROY <br /> FERNANDES
              </h1>
              <h3 className="text-center p-5">Melroy Fernandes is a multi-faceted record producer, composer, and
              educator from Mangalore, India, whose music defies boundaries.
              From cinematic soundscapes to experimental fusions of Indian
              classical and modern genres, his work tells stories and resonates
              deeply with listeners.</h3>
              <div className="bg-black flex gap-3 p-5">
                <a href="https://www.instagram.com/melroy_fernandez">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#ffffff" fill="none">
    <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
    <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="currentColor" stroke-width="1.5" />
    <path d="M17.5078 6.5L17.4988 6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>
                </a>

                <a href="https://open.spotify.com/artist/7tunp0LUiYscOnVvGmmhbK?si=uGanbEYCRTCXQlnOmgG31w">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#ffffff" fill="none">
    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
    <path d="M7.5 12.0685C8.59944 11.6998 9.77639 11.5 11 11.5C13.0238 11.5 14.9199 12.0465 16.5488 13M18 10C16.1509 8.7383 13.9122 8 11.5 8C9.90307 8 8.38216 8.32358 7 8.90839M15.129 16C13.8927 15.3609 12.4894 15 11.0018 15C10.1819 15 9.38762 15.1096 8.63281 15.315" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
</svg>
                </a>
                
                <a href="https://www.youtube.com/@choralproductions1992">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#ffffff" fill="none">
    <path d="M12 20.5C13.8097 20.5 15.5451 20.3212 17.1534 19.9934C19.1623 19.5839 20.1668 19.3791 21.0834 18.2006C22 17.0221 22 15.6693 22 12.9635V11.0365C22 8.33073 22 6.97787 21.0834 5.79937C20.1668 4.62088 19.1623 4.41613 17.1534 4.00662C15.5451 3.67877 13.8097 3.5 12 3.5C10.1903 3.5 8.45489 3.67877 6.84656 4.00662C4.83766 4.41613 3.83321 4.62088 2.9166 5.79937C2 6.97787 2 8.33073 2 11.0365V12.9635C2 15.6693 2 17.0221 2.9166 18.2006C3.83321 19.3791 4.83766 19.5839 6.84656 19.9934C8.45489 20.3212 10.1903 20.5 12 20.5Z" stroke="currentColor" stroke-width="1.5" />
    <path d="M15.9621 12.3129C15.8137 12.9187 15.0241 13.3538 13.4449 14.2241C11.7272 15.1705 10.8684 15.6438 10.1728 15.4615C9.9372 15.3997 9.7202 15.2911 9.53799 15.1438C9 14.7089 9 13.8059 9 12C9 10.1941 9 9.29112 9.53799 8.85618C9.7202 8.70886 9.9372 8.60029 10.1728 8.53854C10.8684 8.35621 11.7272 8.82945 13.4449 9.77593C15.0241 10.6462 15.8137 11.0813 15.9621 11.6871C16.0126 11.8933 16.0126 12.1067 15.9621 12.3129Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
</svg>
                </a>

                
              </div>

            </div>
            <div style={styles.bgImg} className="w-1/2"> {/* Ensure the div takes up half the width */}
            </div>
          </div>
        </div>

        <div className="h-screen z-10 flex lg:hidden"> {/* Use h-screen to make the parent div take up the full viewport height */}
          <div className="flex w-full"> {/* Ensure the flex container takes up the full width */}
            <div className="flex flex-col items-center justify-center w-1/2">
              <h1 className="text-center text-black font-bold text-2xl ">
                MELROY <br /> FERNANDES
              </h1>
              <p className="text-center ">Melroy Fernandes is a multi-faceted record producer, composer, and
              educator from Mangalore, India, whose music defies boundaries.
              From cinematic soundscapes to experimental fusions of Indian
              classical and modern genres, his work tells stories and resonates
              deeply with listeners.</p>

            </div>
            <div style={styles.bgImg2} className="w-1/2"> {/* Ensure the div takes up half the width */}
            </div>
          </div>
          
        </div>
        <div className="bg-black flex gap-3 p-5 justify-center lg:hidden">
                <a href="https://www.instagram.com/melroy_fernandez">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#ffffff" fill="none">
    <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
    <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="currentColor" stroke-width="1.5" />
    <path d="M17.5078 6.5L17.4988 6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>
                </a>

                <a href="https://open.spotify.com/artist/7tunp0LUiYscOnVvGmmhbK?si=uGanbEYCRTCXQlnOmgG31w">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#ffffff" fill="none">
    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
    <path d="M7.5 12.0685C8.59944 11.6998 9.77639 11.5 11 11.5C13.0238 11.5 14.9199 12.0465 16.5488 13M18 10C16.1509 8.7383 13.9122 8 11.5 8C9.90307 8 8.38216 8.32358 7 8.90839M15.129 16C13.8927 15.3609 12.4894 15 11.0018 15C10.1819 15 9.38762 15.1096 8.63281 15.315" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
</svg>
                </a>
                
                <a href="https://www.youtube.com/@choralproductions1992">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#ffffff" fill="none">
    <path d="M12 20.5C13.8097 20.5 15.5451 20.3212 17.1534 19.9934C19.1623 19.5839 20.1668 19.3791 21.0834 18.2006C22 17.0221 22 15.6693 22 12.9635V11.0365C22 8.33073 22 6.97787 21.0834 5.79937C20.1668 4.62088 19.1623 4.41613 17.1534 4.00662C15.5451 3.67877 13.8097 3.5 12 3.5C10.1903 3.5 8.45489 3.67877 6.84656 4.00662C4.83766 4.41613 3.83321 4.62088 2.9166 5.79937C2 6.97787 2 8.33073 2 11.0365V12.9635C2 15.6693 2 17.0221 2.9166 18.2006C3.83321 19.3791 4.83766 19.5839 6.84656 19.9934C8.45489 20.3212 10.1903 20.5 12 20.5Z" stroke="currentColor" stroke-width="1.5" />
    <path d="M15.9621 12.3129C15.8137 12.9187 15.0241 13.3538 13.4449 14.2241C11.7272 15.1705 10.8684 15.6438 10.1728 15.4615C9.9372 15.3997 9.7202 15.2911 9.53799 15.1438C9 14.7089 9 13.8059 9 12C9 10.1941 9 9.29112 9.53799 8.85618C9.7202 8.70886 9.9372 8.60029 10.1728 8.53854C10.8684 8.35621 11.7272 8.82945 13.4449 9.77593C15.0241 10.6462 15.8137 11.0813 15.9621 11.6871C16.0126 11.8933 16.0126 12.1067 15.9621 12.3129Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
</svg>
                </a>

                
              </div>
        <Footer />
      </div>
    </>
  );
}