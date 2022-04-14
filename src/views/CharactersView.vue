<template>
	<div>
		<page-header />

		<div v-if="!is_loading">
			<div class="p-16 bg-gray-50" data-context="characters-view">
				<div class="flex mb-4">
					<search-bar @search="searchByName" class="mr-8" />
					<statuses-filter @status="filterByStatus" />
				</div>
				<characters />
				<simple-pagination @previous="paginate" @next="paginate" />
			</div>
		</div>

		<skeleton v-else />
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Characters from '../components/characters/Characters.vue'
import SearchBar from '../components/list/SearchBar.vue'
import StatusesFilter from '../components/list/StatusesFilter.vue'
import SimplePagination from '../components/list/SimplePagination.vue'
import PageHeader from '../components/ui/PageHeader.vue'
import Skeleton from '../components/ui/Skeleton.vue'

export default {
	name: 'CharactersView',
	components: {
		Characters,
		SearchBar,
		SimplePagination,
		PageHeader,
		StatusesFilter,
		Skeleton,
	},
	data: () => ({
		is_loading: false,
		params: {
			page: 1,
			name: null,
			status: null,
		},
	}),
	computed: {
		...mapGetters('Characters', ['getCharacters']),
	},
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
			this.is_loading = true
			await this.fetchCharactersFromApi(this.params)
			this.is_loading = false
		},
	},
	mounted() {
		if (this.getCharacters.length === 0) {
			this.fetchCharacters()
		}
	},
}
</script>
