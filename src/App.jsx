import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import "./effect.css";

const styles = {
  bgImg: {
    backgroundImage: `url("https://i.imgur.com/bk5Obix.jpeg")`,
    backgroundAttachment: "fixed",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
};


export default function App() {

  return (
    <>
      <div style={styles.bgImg} className="overflow-hidden">
        <div className="h-screen overflow-hidden">
          <Navigation />
          <div className="h-full z-10 flex">
            <div className="h-full w-full flex items-center justify-center text-center">
              <div style={styles.bgImg} className="">
                <h1 className="text-center animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-4xl lg:text-7xl font-black">
                  MELROY <br /> FERNANDEZ
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

