<template>
	<nav
		v-if="getPagination"
		class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
	>
		<div class="hidden sm:block">
			<p class="text-sm text-gray-700">
				Showing
				<span class="font-medium">{{ current_results.from }}</span>
				to
				<span class="font-medium">{{ current_results.to }}</span>
				of
				<span class="font-medium">{{ getPagination.count }}</span>
				results
			</p>
		</div>
		<div class="flex-1 flex justify-between sm:justify-end">
			<button
				class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
				@click="getPreviousPage"
			>
				Previous
			</button>
			<button
				class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
				@click="getNextPage"
			>
				Next
			</button>
		</div>
	</nav>
</template>

<script>
import { mapGetters } from 'vuex'

const LIMIT_PARAM = 20

export default {
	name: 'SimplePagination',
	computed: {
		...mapGetters('Characters', ['getCharacters', 'getPagination']),
		current_page() {
			const pagination_previous = this.getPagination.prev
			if (null === pagination_previous) {
				return 1
			} else {
				return parseInt(pagination_previous.match(/page=(\d+)/)[1]) + 1
			}
		},
		current_results() {
			if (1 === this.current_page) {
				return {
					from: 1,
					to: this.getCharacters.length,
				}
			} else {
				return {
					from: (this.current_page - 1) * LIMIT_PARAM + 1,
					to:
						(this.current_page - 1) * LIMIT_PARAM +
						this.getCharacters.length,
				}
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
