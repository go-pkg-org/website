module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  // todo: purging with tailwind/ui doesn't seems to work with this setup
  purge: false,
  // purge: [
  // './src/components/**/*.{js,ts,jsx,tsx}',
  // './src/pages/**/*.{js,ts,jsx,tsx}',
  // ],
  theme: {
    extend: {
      colors: {},
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
};
