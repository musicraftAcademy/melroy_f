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
            <div className="h-full flex items-center justify-center text-center">
              <div style={styles.bgImg} className="">
                <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-4xl lg:text-7xl font-black">
                  MELROY <br /> FERNANDEZ
                </h1>
                <h3 className="px-10 text-[125%]  sm:text-3xl text-yellow-300 py-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid, nihil dolorem accusantium aperiam tempora similique
                  impedit dicta? Velit, quo sequi nemo sit nihil tempora cumque
                  eos iusto error sed fuga!
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

