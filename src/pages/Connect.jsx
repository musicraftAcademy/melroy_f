import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function Connect() {
  return (
    <>
      <div className="bg-white">
        <Navigation></Navigation>
        <div className="my-5 flex flex-col items-center">
          <div className="w-2/4">
            <h1 className="text-4xl font-bold text-yellow-400 mb-6">
              Connect with Melroy Fernandes
            </h1>
            <h2 className="text-2xl font-semibold mb-4">
              Let's Collaborate | Stay in Touch
            </h2>
            <p className="mb-6">
              Whether you want to collaborate, inquire about projects, or simply
              say hello, feel free to reach out. Here’s how you can connect with
              Melroy.
            </p>

            <div className="flex gap-10 py-10 justify-around">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4">
                  Contact Information
                </h3>
                <ul className="list-none mb-6">
                  <li className="mb-3">
                    <span className="font-bold">Email:</span>{" "}
                    <a
                      href="mailto:melroyfernandesmusic@gmail.com"
                      className="text-blue-500 underline"
                    >
                      melroyfernandesmusic@gmail.com
                    </a>
                  </li>
                  <li className="mb-3">
                    <span className="font-bold">LinkedIn</span>{" "}
                    <a
                      href="https://www.linkedin.com/in/melroy-fernandes-44a81420b/"
                      className="text-blue-500 underline"
                    >
                      Melroy Fernandes
                    </a>
                  </li>
                  <li className="mb-3">
                    <span className="font-bold">Academy</span>{" "}
                    <a
                      href="https://www.instagram.com/musicraftacademy/"
                      className="text-blue-500 underline"
                    >
                      Musicraft
                    </a>
                  </li>
                  <li className="mb-3">
                    <span className="font-bold">Productions</span>{" "}
                    <a
                      href="https://www.youtube.com/@choralproductions1992"
                      className="text-blue-500 underline"
                    >
                      ChoralProductions
                    </a>
                  </li>
                  <li className="mb-3">
                    123 Music Lane, Harmony Heights, Mangalore, India
                  </li>
                </ul>
              </div>
              <div className="text-center flex flex-col align-bottom">
                <h3 className="text-2xl font-semibold mb-4">Social Media</h3>
                <ul className="list-none flex flex-col gap-5 mb-6 items-center">
                  <li className="flex gap-2" >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      color={"#000000"}
                      fill={"none"}
                    >
                      <path
                        d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M17.5078 6.5L17.4988 6.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <a
                      href="https://www.instagram.com/melroy_fernandez/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      Instagram
                    </a>
                  </li>
                  <li className="flex gap-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      color={"#000000"}
                      fill={"none"}
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M7.5 12.0685C8.59944 11.6998 9.77639 11.5 11 11.5C13.0238 11.5 14.9199 12.0465 16.5488 13M18 10C16.1509 8.7383 13.9122 8 11.5 8C9.90307 8 8.38216 8.32358 7 8.90839M15.129 16C13.8927 15.3609 12.4894 15 11.0018 15C10.1819 15 9.38762 15.1096 8.63281 15.315"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    <a
                      href="https://open.spotify.com/artist/7tunp0LUiYscOnVvGmmhbK?si=uGanbEYCRTCXQlnOmgG31w"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      Spotify
                    </a>
                  </li>

                  <li className="flex gap-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      color={"#000000"}
                      fill={"none"}
                    >
                      <path
                        d="M12 20.5C13.8097 20.5 15.5451 20.3212 17.1534 19.9934C19.1623 19.5839 20.1668 19.3791 21.0834 18.2006C22 17.0221 22 15.6693 22 12.9635V11.0365C22 8.33073 22 6.97787 21.0834 5.79937C20.1668 4.62088 19.1623 4.41613 17.1534 4.00662C15.5451 3.67877 13.8097 3.5 12 3.5C10.1903 3.5 8.45489 3.67877 6.84656 4.00662C4.83766 4.41613 3.83321 4.62088 2.9166 5.79937C2 6.97787 2 8.33073 2 11.0365V12.9635C2 15.6693 2 17.0221 2.9166 18.2006C3.83321 19.3791 4.83766 19.5839 6.84656 19.9934C8.45489 20.3212 10.1903 20.5 12 20.5Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M15.9621 12.3129C15.8137 12.9187 15.0241 13.3538 13.4449 14.2241C11.7272 15.1705 10.8684 15.6438 10.1728 15.4615C9.9372 15.3997 9.7202 15.2911 9.53799 15.1438C9 14.7089 9 13.8059 9 12C9 10.1941 9 9.29112 9.53799 8.85618C9.7202 8.70886 9.9372 8.60029 10.1728 8.53854C10.8684 8.35621 11.7272 8.82945 13.4449 9.77593C15.0241 10.6462 15.8137 11.0813 15.9621 11.6871C16.0126 11.8933 16.0126 12.1067 15.9621 12.3129Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <a
                      href="https://instagram.com/melroy_music"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      Youtube
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-4 flex flex-col items-center ">Work with Me</h3>
            <p className="mb-6 text-center px-6">
              For collaborations, performances, or project inquiries, don’t
              hesitate to get in touch. Melroy is always open to exciting new
              opportunities.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
