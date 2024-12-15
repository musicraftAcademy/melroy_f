/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
		extend: {
			backgroundImage: {
				'custom-gradient': 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 53%, rgba(241,135,251,1) 53%, rgba(241,135,251,1) 98%, rgba(0,0,0,1) 98%); ',
      },
      animation: {
        text: 'text 5s ease infinite',

      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },

      },
    },
  },
  plugins: [require("tailwindcss-all"), require("@tailwindcss/typography")],
};
