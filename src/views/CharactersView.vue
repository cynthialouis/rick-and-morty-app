<template>
	<div>
		<page-header />

		<div class="p-16 bg-gray-50" data-context="characters-view">
			<div class="flex mb-4">
				<search-bar @search="searchByName" class="mr-8" />
				<statuses-filter @status="filterByStatus" />
			</div>

			<characters />

			<simple-pagination @previous="paginate" @next="paginate" />
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Characters from '../components/characters/Characters.vue'
import SearchBar from '../components/list/SearchBar.vue'
import StatusesFilter from '../components/list/StatusesFilter.vue'
import SimplePagination from '../components/list/SimplePagination.vue'
import PageHeader from '../components/ui/PageHeader.vue'

export default {
	name: 'CharactersView',
	components: {
		Characters,
		SearchBar,
		SimplePagination,
		PageHeader,
		StatusesFilter,
	},
	data: () => ({
		is_loading: false,
		params: {
			page: 1,
			name: null,
			status: null,
		},
	}),

	methods: {
		...mapActions('Characters', ['fetchCharactersFromApi']),
		/**
		 * Reset params and call fetch API
		 */
		searchByName(name) {
			this.params.name = name ? name : null
			this.params.page = 1
			this.fetchCharacters()
		},
		/**
		 * Set page param and call fetch API
		 */
		paginate(page) {
			this.params.page = page
			this.fetchCharacters()
		},
		/**
		 * Reset params and call fetch API
		 */
		filterByStatus(status) {
			this.params.status = status ? status : null
			this.params.page = 1
			this.fetchCharacters()
		},

		/**
		 * Call fetch API
		 * @returns {Promise<void>}
		 */
		async fetchCharacters() {
			await this.fetchCharactersFromApi(this.params)
		},
	},
	mounted() {
		// if (this.getCharacters.length === 0) {
		// 	// set loading screen
		// 	this.is_loading = true
		this.fetchCharacters()
		// this.is_loading = false
		// }
	},
}
</script>
