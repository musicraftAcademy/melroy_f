import Navigation from "../components/Navigation";

export default function Tracks() {
  return (
    <div className="bg-slate-900 text-white h-screen">
      <Navigation></Navigation>
      <h2 className="font-bold text-5xl text-center py-5 text-white">
        Projects
      </h2>
      <p className="text-center font-bold text-1xl">
        These are some of the projects i&apos;ve worked on over the past years
      </p>
      <div className="px-10 flex flex-col items-center justify-center py-5">
				<div className="w-1/2">
					<h4 className="py-2 font-bold text-2xl">Missing Piece</h4>
					<h5 className="text-gray-300 text-1xl py-1">Melroy Fernandez , Akshita</h5>
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
					<h4 className="py-2 font-bold text-2xl">Missing Piece</h4>
					<h5 className="text-gray-300 text-1xl py-1">Melroy Fernandez , Akshita</h5>
					<iframe
						style={{ borderRadius: "" }}
						src="https://open.spotify.com/embed/track/1pCOe2HpJduHmpHEe1gtIN?utm_source=generator"
						width="100%"
						height="152"
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
						loading="lazy"
						title="Spotify Player"
					></iframe>
				</div>
      </div>
    </div>
  );
}
