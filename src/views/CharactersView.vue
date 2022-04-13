<template>
	<div class="p-16 bg-gray-50" data-context="characters-view">
		<search-bar @search="fetchCharacters" />

		<character-thumbnail v-if="characters" :characters="characters" />
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import CharacterThumbnail from '../components/characters/CharacterThumbnail.vue'
import SearchBar from '../components/form/SearchBar.vue'

export default {
	name: 'Characters',
	components: { CharacterThumbnail, SearchBar },
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
