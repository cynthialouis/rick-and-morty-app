<template>
	<div class="flex mb-4">
		<div class="relative">
			<input
				type="text"
				class="h-14 w-96 pl-10 pr-20 rounded-lg focus:shadow focus:outline-none"
				placeholder="Search..."
				v-model="search_param"
				@keydown.enter="search"
				data-context="search-input"
			/>
			<div class="absolute top-2 right-2">
				<button
					type="submit"
					class="h-10 w-10 text-white"
					@click="search"
					:disabled="!search_param"
					data-context="search-btn"
				>
					<!-- HeroIcon svg -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 text-gray-400"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'SearchBar',
	data: () => ({
		search_param: null,
	}),
	methods: {
		search() {
			this.$emit('search', this.search_param)
		},
	},
}
</script>
