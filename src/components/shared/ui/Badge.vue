<template>
	<div
		class="inline-flex items-center justify-center px-3 py-1 text-xs font-bold rounded-full border"
		:class="badge_classes"
		data-context="badge"
	>
		<slot />
	</div>
</template>

<script>
const BADGE_COLORS = {
	yellow: { bg: 'bg-yellow-100', text: 'text-yellow-800' },
	blue: { bg: 'bg-blue-100', text: 'text-blue-800' },
	pink: { bg: 'bg-pink-100', text: 'text-pink-800' },
}

export default {
	name: 'Badge',
	props: {
		color: {
			type: String,
			default: null,
		},
	},
	computed: {
		badge_classes() {
			return this.color
				? [BADGE_COLORS[this.color].bg, BADGE_COLORS[this.color].text]
				: []
		},
	},
}
</script>
