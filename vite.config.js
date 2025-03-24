import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        index: "index.html", // 기본 index.html
        about: "src/pages/about.html",
        login: "src/pages/login.html",
        plan: "src/pages/plan.html",
        signup: "src/pages/sign-up.html",
        main: "src/pages/main.html",
        password_reset: "src/pages/password-reset.html",
        components: "src/pages/components/components.html",
        components_login: "src/pages/components/login-page-component",
        components_main: "src/pages/components/main-page-component",
        components_plan: "src/pages/components/plan-page-component",
        components_team: "src/pages/components/team-page-component",
      },
    },
  },
  appType: "mpa", // fallback 사용안함
  server: {
    // open: 'src/pages/main/index.html', // 서버 시작 시 브라우저에서 지정페이지 자동으로 열기
  },
});
