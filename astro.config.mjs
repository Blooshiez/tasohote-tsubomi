// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://blooshiez.github.io/',
	base: 'tasohote-tsubomi',
	integrations: [
		starlight({
			title: 'Tasotsubo EN',
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css'],
			logo: {
				src: './src/assets/icons/logicon_yumehisa_b.png',
			  },
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Overview',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Overview', slug: 'guides/overview' },
					],
				},
				{
					label: 'Main Story',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Chapter 1', slug: 'main-story/chapter-1' },
						{ label: 'Chapter 2', slug: 'main-story/chapter-2' },
					],
				},
				{
					label: 'Card Story',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Card Story 1', slug: 'card-story/card-1' },
					],
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					], 
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});