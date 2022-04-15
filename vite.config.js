import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import path from 'path'

const HOST = '0.0.0.0'

export default (/** if you want to use mode : { mode }*/) => {
	return defineConfig({
		base: './',
		server: {
			host: HOST,
			port: process.env.PORT,
		},
		resolve: {
			alias: {
				'@': '/src',
			},
		},
		plugins: [createVuePlugin(/* options */)],
	})
}
