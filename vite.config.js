import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        index: "index.html", // 기본 index.html
        about: "src/pages/about.html",
        components: "src/pages/components.html",
        login: "src/pages/login.html",
        plan: "src/pages/plan.html",
        signup: "src/pages/sign-up.html",
        main: "src/pages/main.html",
        passwordreset: "src/pages/password-reset.html",
      },
    },
  },
  appType: "mpa", // fallback 사용안함
  server: {
    // open: 'src/pages/main/index.html', // 서버 시작 시 브라우저에서 지정페이지 자동으로 열기
  },
});
