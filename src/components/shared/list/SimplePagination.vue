<template>
	<nav
		v-if="pagination"
		class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
		data-context="pagination"
	>
		<div class="hidden sm:block">
			<p class="text-sm text-gray-700" data-context="results">
				Showing
				<span class="font-medium">{{ current_results.from }}</span>
				to
				<span class="font-medium">{{ current_results.to }}</span>
				of
				<span class="font-medium">{{ pagination.count }}</span>
				results
			</p>
		</div>
		<div class="flex-1 flex justify-between sm:justify-end">
			<button
				class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
				@click="getPreviousPage"
				:disabled="null === pagination.prev"
				data-context="previous-btn"
			>
				Previous
			</button>
			<button
				class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
				@click="getNextPage"
				:disabled="null === pagination.next"
				data-context="next-btn"
			>
				Next
			</button>
		</div>
	</nav>
</template>

<script>
const LIMIT_PARAM = 20

export default {
	name: 'SimplePagination',
	computed: {
		pagination() {
			return this.$store.state.Characters.pagination
		},
		characters() {
			return this.$store.state.Characters.characters
		},
		current_page() {
			const paginationPrevious = this.pagination.prev
			if (null === paginationPrevious) {
				return 1
			}
			return parseInt(paginationPrevious.match(/page=(\d+)/)[1], 10) + 1
		},
		current_results() {
			if (1 === this.current_page) {
				return {
					from: 1,
					to: this.characters.length,
				}
			}
			return {
				from: (this.current_page - 1) * LIMIT_PARAM + 1,
				to:
					(this.current_page - 1) * LIMIT_PARAM +
					this.characters.length,
			}
		},
	},
	methods: {
		getPreviousPage() {
			this.$emit('previous', this.current_page - 1)
		},
		getNextPage() {
			this.$emit('next', this.current_page + 1)
		},
	},
}
</script>
