import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	server: {
		port: 3000,
		open: true,
		proxy: {
			'/api': {
				target: 'http://localhost:5000',
				changeOrigin: true,
			},
			'/uploads': {
				target: 'http://localhost:5000',
				changeOrigin: true,
			},
		},
	},
	resolve: {
		alias: {
			'@components': '/src/components',
			'@screens': '/src/screens',
			'@data': '/src/data',
			'@slices': '/src/slices',
			'@utils': '/src/utils',
		},
	},
});
