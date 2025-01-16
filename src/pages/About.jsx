import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function About() {
  return (
    <>
      <div className="bg-white">
        <Navigation></Navigation>
        <div className="my-5 flex flex-col items-center">
          <div className="w-2/4">
            <h1 className="text-4xl font-bold text-yellow-400 mb-6">
              About Melroy Fernandes
            </h1>
            <h2 className="text-2xl font-semibold mb-4">
              Composer | Music Producer | Educator
            </h2>
            <p className="mb-6">
              Melroy Fernandes is a multi-faceted record producer, composer, and
              educator from Mangalore, India, whose music defies boundaries.
              From cinematic soundscapes to experimental fusions of Indian
              classical and modern genres, his work tells stories and resonates
              deeply with listeners.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Musical Roots</h3>
            <p className="mb-6">
              Melroy’s journey began at age 10, playing the keyboard under the
              guidance of his uncle, Deacon Sunil Fernandes. By 16, he was
              performing hymns for his church choir. Influenced by bands like
              Dream Theater and composers such as A.R. Rahman, his passion for
              storytelling through music grew exponentially.
            </p>

            <h3 className="text-2xl font-semibold mb-4">
              Journey to Excellence
            </h3>
            <p className="mb-6">
              From Ujire to Bangalore, Melroy honed his skills at The Music
              School Bangalore, under EDM artist Rahul Desai. He performed at
              venues like The Ritz-Carlton, collaborated with
              singer-songwriters, and scored for short films. His sound blends
              the local with the global, creating unforgettable compositions.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Creative Highlights</h3>
            <ul className="list-disc list-inside mb-6">
              <li>Began playing keyboard at 10; church choir by 16.</li>
              <li>Explored music production and performed at luxury venues.</li>
              <li>
                Scored short films and web series, mastering storytelling
                through sound.
              </li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4">
              Educator and Innovator
            </h3>
            <p className="mb-6">
              As an educator at TMSB, Melroy teaches mixing, mastering, and
              production. A Berklee Online alumnus with the Glen Ballard
              Celebrity Scholarship, he has delved into music cognition and
              therapy under Dr. Susan Rogers, exploring sound’s transformative
              power.
            </p>

            <h3 className="text-2xl font-semibold mb-4">A Visionary Sound</h3>
            <p className="mb-6">
              Melroy’s compositions span genres like progressive rock, lo-fi,
              and cinematic. His innovative approach merges Indian classical
              music with modern experimental palettes, pushing creative
              boundaries and crafting universal stories through sound.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Future Aspirations</h3>
            <p className="mb-6">
              Melroy aims to innovate, collaborate globally, and refine his
              craft further. Whether producing music for films, exploring live
              performances, or mentoring aspiring musicians, his mission is to
              leave a lasting impact on the music world.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Timeline</h3>
            <ul className="list-disc list-inside mb-6">
              <li>2016: Started playing for the church choir.</li>
              <li>2018: Joined collaborative band projects.</li>
              <li>
                2020: Began independent music production and film scoring.
              </li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4">Collaborations</h3>
            <p className="mb-6">
              Melroy has collaborated with numerous singer-songwriters, short
              film directors, and bands, combining creative visions to produce
              impactful music.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
