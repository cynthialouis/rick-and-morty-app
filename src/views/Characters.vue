<template>
	<div class="p-16 bg-gray-50" data-context="characters-view">
		<ul
			class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border rounded"
			data-context="characters"
		>
			<character-thumbnail
				v-for="character in characters"
				:character="character"
				:key="character.id"
			/>
		</ul>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import CharacterThumbnail from '../components/characters/CharacterThumbnail.vue'

export default {
	name: 'Characters',
	components: { CharacterThumbnail },
	data: () => ({
		is_loading: false,
		characters: null,
	}),
	computed: {
		...mapGetters('Characters', ['getCharacters']),
	},
	methods: {
		...mapActions('Characters', ['fetchCharacters']),
	},
	async mounted() {
		// if (this.getCharacters.length === 0) {
		// 	// set loading screen
		// 	this.is_loading = true
		await this.fetchCharacters()
		this.characters = this.getCharacters
		// this.is_loading = false
		// }
	},
}
</script>
