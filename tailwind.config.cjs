module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f2fbf5",
          100: "#def7e6",
          200: "#b9edc6",
          300: "#8fe2a3",
          400: "#64d682",
          500: "#3BAA54",
          600: "#2f8a45",
          700: "#216436",
          800: "#184a2a",
          900: "#0f2f1b"
        },
        accent: {
          500: "#FFC043"
        }
      },
      boxShadow: {
        glow: "0 0 30px rgba(59, 170, 84, 0.35)"
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(1200px 600px at 0% 0%, rgba(59,170,84,0.15) 0%, transparent 60%), radial-gradient(800px 400px at 100% 0%, rgba(255,192,67,0.12) 0%, transparent 60%), linear-gradient(135deg, #0b1f16 0%, #0f2f1b 50%, #1a472f 100%)"
      }
    }
  },
  plugins: []
}
