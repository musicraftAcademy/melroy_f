import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function Tracks() {
  return (
    <>
      <div className="bg-white text-black ">
        <Navigation></Navigation>
        <h2 className="font-bold text-5xl text-center py-5 text-black">
          Tracks
        </h2>
        <h3 className="text-center font-bold text-2xl">
          Check out my music on{" "}
          <span className="text-green-400">
            <a>spotify</a>
          </span>
        </h3>
        <div className="px-10 flex flex-col items-center justify-center py-5">
          <div className="w-1/2">
            <h4 className="py-2 font-bold text-2xl">Missing Piece</h4>
            <h5 className="text-gray-600 text-1xl py-1">
              Melroy Fernandez , Akshita
            </h5>
            <iframe
              style={{ borderRadius: "" }}
              src="https://open.spotify.com/embed/track/7K4FUDsDBlT2q5ZfRSbmvb?utm_source=generator"
              width="100%"
              height="152"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify Player"
            ></iframe>
          </div>
          <div className="w-1/2">
            <h4 className="py-2 font-bold text-2xl">High like clouds</h4>
            <h5 className="text-gray-600 text-1xl py-1">
              Melroy Fernandez , Akshita
            </h5>
            <iframe
              style={{ borderRadius: "" }}
              src="https://open.spotify.com/embed/track/1pCOe2HpJduHmpHEe1gtIN?utm_source=generator"
              width="100%"
              height="152"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify Player"
            ></iframe>
          </div>{" "}
          <div className="w-1/2">
            <h4 className="py-2 font-bold text-2xl">Nightmare</h4>
            <h5 className="text-gray-600 text-1xl py-1">
              Melroy Fernandez , Akshita
            </h5>
            <iframe
              style={{ borderRadius: "" }}
              src="https://open.spotify.com/embed/track/2PlGi57h6kxnKGsuctwHmn?utm_source=generator"
              width="100%"
              height="152"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify Player"
            ></iframe>
          </div>{" "}
          <div className="w-1/2">
            <h4 className="py-2 font-bold text-2xl">The End</h4>
            <h5 className="text-gray-600 text-1xl py-1">
              Melroy Fernandez , Karanvir Gupta
            </h5>
            <iframe
              style={{ borderRadius: "" }}
              src="https://open.spotify.com/embed/track/4DdTzF7cd3yXvF4U8CHqXR?utm_source=generator"
              width="100%"
              height="152"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify Player"
            ></iframe>
          </div>
        </div>
      </div>
	  <Footer></Footer>
    </>
  );
}
