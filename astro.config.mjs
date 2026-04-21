// @ts-check
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	integrations: [icon(), tailwind()],
	site: "https://itsukikigoshi.gitlab.io",
	base: "/cimetier.org",
	outDir: "public",
	publicDir: "static",
});