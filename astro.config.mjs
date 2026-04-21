// @ts-check
import tailwind from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	integrations: [icon()],
	outDir: "public",
	publicDir: "static",
	vite: {
		plugins: [tailwind()],
	},
});
