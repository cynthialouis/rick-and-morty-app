<template>
	<div>
		<page-header />

		<div class="p-16 bg-gray-50" data-context="characters-view">
			<search-bar @search="search" />

			<characters />

			<simple-pagination @previous="paginate" @next="paginate" />
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Characters from '../components/characters/Characters.vue'
import SearchBar from '../components/list/SearchBar.vue'
import SimplePagination from '../components/list/SimplePagination.vue'
import PageHeader from '../components/ui/PageHeader.vue'

export default {
	name: 'CharactersView',
	components: { Characters, SearchBar, SimplePagination, PageHeader },
	data: () => ({
		is_loading: false,
		params: {
			name: null,
			page: null,
		},
	}),
	methods: {
		...mapActions('Characters', ['fetchCharactersFromApi']),
		/**
		 * Reset params and call fetch API
		 */
		search(name) {
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
