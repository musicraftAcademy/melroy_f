import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ProjectComponent from "../components/ProjectComponent";
import projectData from "../assets/projects.json";
import MediaThemeTailwindAudio from "player.style/tailwind-audio/react";

export default function Projects() {
  return (
    <>
      <div className="bg-white text-black min-h-screen">
        <Navigation />
        <h2 className="font-bold text-5xl text-center py-5 text-black">
          Projects
        </h2>
        <p className="text-center font-bold text-1xl">
          These are some of the projects I&apos;ve worked on over the past years
        </p>
        <div className="sm:grid grid-cols-3 gap-4 px-10 py-10 sm:py-4">
          {projectData.map((project, index) => (
            <ProjectComponent
              key={index}
              img={project.img}
              projectLink={project.projectLink}
              projectTitle={project.projectTitle}
              projectPosition={project.projectPosition}
              projectDescription={project.projectDescription}
            />
          ))}
        </div>

        {/* Tracks Section */}
        <h2 className="font-bold text-5xl text-center py-5 text-black">
          Tracks
        </h2>
        <p className="text-center font-bold text-1xl">
          Listen to some of the music I&apos;ve created
        </p>
        <div className="px-10 py-10 space-y-6">
          <div className="border rounded-lg p-5 shadow-md">
            <h3 className="text-2xl font-semibold mb-2">The Quest</h3>
            <MediaThemeTailwindAudio
              className="w-full"
              style={{
                "--media-primary-color": "#000000",
                "--media-secondary-color": "#facc15",
                "--media-accent-color": "#0080ff",
              }}
            >
              <audio
                slot="media"
                src="https://www.dropbox.com/scl/fi/06pi6lyuljvql5941dr9f/4-The_Quest.mp3?rlkey=frk13eqr087ueyxue9cxt70rl&st=moewtbp8&raw=1"
                playsInline
                crossOrigin
              ></audio>
            </MediaThemeTailwindAudio>
          </div>
          <div className="border rounded-lg p-5 shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Get me back to life</h3>
            <MediaThemeTailwindAudio
              className="w-full"
              style={{
                "--media-primary-color": "#000000",
                "--media-secondary-color": "#facc15",
                "--media-accent-color": "#0080ff",
              }}
            >
              <audio
                slot="media"
                src="https://www.dropbox.com/scl/fi/exns2fd265pgq3g07z9nw/2-Get-me-back-to-life-Final-Copy.mp3?rlkey=8felz8rhf9q0dh88d7ziuwkhp&st=mix2iok5&raw=1"
                playsInline
                crossOrigin
              ></audio>
            </MediaThemeTailwindAudio>
          </div>
          <div className="border rounded-lg p-5 shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Emotions</h3>
            <MediaThemeTailwindAudio
              className="w-full"
              style={{
                "--media-primary-color": "#000000",
                "--media-secondary-color": "#facc15",
                "--media-accent-color": "#0080ff",
              }}
            >
              <audio
                slot="media"
                src="https://www.dropbox.com/scl/fi/ambmtnuwsmldpow8s2hw8/5-7_Emotions.mp3?rlkey=sg47ersdr85im67n8nd7h7blr&st=gzp9av9r&raw=1"
                playsInline
                crossOrigin
              ></audio>
            </MediaThemeTailwindAudio>
          </div>
          <div className="border rounded-lg p-5 shadow-md">
            <h3 className="text-2xl font-semibold mb-2">A Last Embrace</h3>
            <MediaThemeTailwindAudio
              className="w-full"
              style={{
                "--media-primary-color": "#000000",
                "--media-secondary-color": "#facc15",
                "--media-accent-color": "#0080ff",
              }}
            >
              <audio
                slot="media"
                src="https://www.dropbox.com/scl/fi/e3wy10cosxqyzc4syw6lj/6-A-Last-Embrace.mp3?rlkey=rdqoqafp8dlldc8svgkc3g1nj&st=hiyx8f57&raw=1"
                playsInline
                crossOrigin
              ></audio>
            </MediaThemeTailwindAudio>
          </div>
          <div className="border rounded-lg p-5 shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Comedy Noir</h3>
            <MediaThemeTailwindAudio
              className="w-full"
              style={{
                "--media-primary-color": "#000000",
                "--media-secondary-color": "#facc15",
                "--media-accent-color": "#0080ff",
              }}
            >
              <audio
                slot="media"
                src="https://www.dropbox.com/scl/fi/eb85oy3gp1f32q0axp6ek/7-Comedy-Noir.mp3?rlkey=pcvqby8i58elzyv2kb0u0ilwi&st=o88w2w4o&raw=1"
                playsInline
                crossOrigin
              ></audio>
            </MediaThemeTailwindAudio>
          </div>
          <div className="border rounded-lg p-5 shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Echoes of the Brave</h3>
            <MediaThemeTailwindAudio
              className="w-full"
              style={{
                "--media-primary-color": "#000000",
                "--media-secondary-color": "#facc15",
                "--media-accent-color": "#0080ff",
              }}
            >
              <audio
                slot="media"
                src="https://www.dropbox.com/scl/fi/84vzh27s3ctyz5w0xkwoa/8-Echoes-of-the-Brave.mp3?"
                playsInline
                crossOrigin
              ></audio>
            </MediaThemeTailwindAudio>
          </div>
          <div className="border rounded-lg p-5 shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Edge of Fury</h3>
            <MediaThemeTailwindAudio
              className="w-full"
              style={{
                "--media-primary-color": "#000000",
                "--media-secondary-color": "#facc15",
                "--media-accent-color": "#0080ff",
              }}
            >
              <audio
                slot="media"
                src="https://www.dropbox.com/scl/fi/xdbehk5kg4h9l8ux89bwy/9-Edge-of-Fury.mp3?rlkey=ieaiooeowvvkroqnwo589q4h9&st=xongf5r4&raw=1"
                playsInline
                crossOrigin
              ></audio>
            </MediaThemeTailwindAudio>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
