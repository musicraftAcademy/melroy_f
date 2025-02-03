export default function Footer() {
  return (
    <footer className="z-50 bg-white dark:bg-black">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a  href={`${import.meta.env.BASE_URL}/`} className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Melroy Lynal Fernandes
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Browse
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href={`${import.meta.env.BASE_URL}/about`}
                    className="hover:underline"
                  >
                    About
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href={`${import.meta.env.BASE_URL}/projects`}
                    className="hover:underline"
                  >
                    Projects
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href={`${import.meta.env.BASE_URL}/blogs`}
                    className="hover:underline"
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <a
                    href={`${import.meta.env.BASE_URL}/connect`}
                    className="hover:underline"
                  >
                    Connect
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow Me
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://www.instagram.com/melroy_fernandez/"
                    className="hover:underline "
                  >
                    Instagram
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://open.spotify.com/artist/7tunp0LUiYscOnVvGmmhbK?si=uGanbEYCRTCXQlnOmgG31w"
                    className="hover:underline "
                  >
                    Spotify
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/melroy-fernandes-44a81420b/"
                    className="hover:underline"
                  >
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Other Links
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://www.instagram.com/musicraftacademy/" className="hover:underline">
                    Musicraft Acaademy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      </div>
    </footer>
  );
}
