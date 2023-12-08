import Vue from '@vitejs/plugin-vue';
import VueJsx from '@vitejs/plugin-vue-jsx';
import path from 'node:path';
import Unocss from 'unocss/vite';
import AutoImport from 'unplugin-auto-import/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import VueMacros from 'unplugin-vue-macros/vite';
import { defineConfig } from 'vite';
import Pages from 'vite-plugin-pages';

export default defineConfig({
	plugins: [
		Vue(),
		VueJsx(),
		Unocss(),
		Pages(),
		VueMacros(),
		AutoImport({
			imports: ['vue', 'vue-router', 'pinia', '@vueuse/core', 'vue/macros'],
			dts: 'src/auto-imports.d.ts',
			dirs: ['src/composables', 'src/stores'],
			vueTemplate: true,
		}),
		Components({
			resolvers: [NaiveUiResolver()],
			dirs: ['src/components/**'],
			extensions: ['vue', 'tsx'],
			dts: 'src/components.d.ts',
		}),
		// VueSetupExtend(),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	server: {
		port: 1888,
	},
});
