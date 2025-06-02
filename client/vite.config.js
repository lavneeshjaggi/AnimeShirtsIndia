import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    proxy: {
      // Proxying API requests from /api to http://localhost:5000/api
      // Adjust the '/api' path if your client makes requests to a different base path
      "/api": {
        // Or any other path your client uses to call the backend
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },
});
