<template>
	<div class="p-16 bg-gray-50" data-context="characters-view">
		<search-bar @search="fetchCharacters" />

		<characters v-if="characters" :characters="characters" />
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Characters from '../components/characters/Characters.vue'
import SearchBar from '../components/form/SearchBar.vue'

export default {
	name: 'CharactersView',
	components: { Characters, SearchBar },
	data: () => ({
		is_loading: false,
		characters: null,
	}),
	computed: {
		...mapGetters('Characters', ['getCharacters']),
	},
	methods: {
		...mapActions('Characters', ['fetchCharactersFromApi']),
		async fetchCharacters($event) {
			await this.fetchCharactersFromApi({ name: $event })
			this.characters = this.getCharacters
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
