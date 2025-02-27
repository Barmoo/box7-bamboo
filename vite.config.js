import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});

// module.exports = {
//   theme: {
//     extend: {
//       animation: {
//         fadeUp: "fadeUp 1.5s ease-in-out",
//       },
//       keyframes: {
//         fadeUp: {
//           "0%": { opacity: 0, transform: "translateY(10px)" },
//           "100%": { opacity: 1, transform: "translateY(0)" },
//         },
//       },
//     },
//   },
//   plugins: [react(), tailwindcss()],
// };

