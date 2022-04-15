<template>
	<div>
		<page-header />

		<div class="p-16 bg-gray-50" data-context="characters-view">
			<div class="flex mb-4">
				<search-bar @search="searchByName" class="mr-8" />
				<statuses-filter @status="filterByStatus" />
			</div>
			<template v-if="characters && characters.length > 0">
				<characters />
				<simple-pagination @previous="paginate" @next="paginate" />
			</template>
			<error v-else />
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex'
import Characters from '@/components/characters/Characters.vue'
import SearchBar from '@/components/shared/list/SearchBar.vue'
import StatusesFilter from '@/components/shared/list/StatusesFilter.vue'
import SimplePagination from '@/components/shared/list/SimplePagination.vue'
import PageHeader from '@/components/shared/ui/PageHeader.vue'
import Error from '@/components/shared/ui/Error.vue'

export default {
	name: 'CharactersView',
	components: {
		Characters,
		SearchBar,
		SimplePagination,
		PageHeader,
		StatusesFilter,
		Error,
	},
	data: () => ({
		params: {
			page: 1,
			name: null,
			status: null,
		},
	}),
	computed: {
		characters() {
			return this.$store.state.Characters.characters
		},
	},
	methods: {
		...mapActions('Characters', ['fetchCharactersFromApi']),
		/**
		 * Reset params and call fetch API
		 */
		searchByName(name) {
			this.params.name = name || null
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
			this.params.status = status || null
			this.params.page = 1
			this.fetchCharacters()
		},
		/**
		 * Call fetch API
		 * @returns {Promise<void>}
		 */
		async fetchCharacters() {
			try {
				await this.fetchCharactersFromApi(this.params)
			} catch (e) {
				console.log('error', e.response.data.error)
				this.$store.commit(
					'Characters/SET_ERROR',
					e.response.data.error
				)
			}
		},
	},
	mounted() {
		if (this.characters.length === 0) {
			this.fetchCharacters()
		}
	},
}
</script>
