import Footer from "./components/Footer";
import "./effect.css";
import Navigation from "./components/Navigation";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const blob = document.getElementById("blob");

    const handlePointerMove = (event) => {
      const { clientX, clientY } = event;

      blob.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: "forwards" },
      );
    };

    // Add the pointermove event listener
    window.addEventListener("pointermove", handlePointerMove);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <>
      <div id="blob"></div>
      <div id="blur"></div>
      <div className="overflow-x-hidden lg:absolute z-10">
				<div className="h-screen" >
					<Navigation> </Navigation>
					<div className=" h-full z-10 flex">
						<div className="flex justify-center items-center sm:flex-col lg:flex-row sm:w-2/4">
							<div className="text-center sm:text-left w-2/3 sm:m-auto">
								<h3 className="text-white text-2xl">Hi I am</h3>
								<h1 className=" animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-4xl lg:text-7xl font-black">
									MELROY <br /> FERNANDEZ
								</h1>
								<h3 className="text-[125%] sm:text-3xl text-gray-400 py-5">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Aliquid, nihil dolorem accusantium aperiam tempora similique
									impedit dicta? Velit, quo sequi nemo sit nihil tempora cumque
									eos iusto error sed fuga!
								</h3>
							</div>
						</div>
						<div className="flex justify-bottom">
							<img
								className="overflow-hidden hidden sm:block w-full py-auto"
								src="https://i.imgur.com/P0J2IVh.png"
								alt="Man smiling"
							/>
						</div>
					</div>
				</div>
        <Footer />
      </div>
    </>
  );
}


