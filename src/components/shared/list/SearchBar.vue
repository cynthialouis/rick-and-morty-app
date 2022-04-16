<template>
	<div class="flex mb-4">
		<div class="relative">
			<input
				type="text"
				class="h-14 w-96 pl-10 pr-20 rounded-lg focus:shadow focus:outline-none"
				placeholder="Search..."
				v-model="search_param"
				@keyup="search"
				data-context="search-input"
			/>
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
