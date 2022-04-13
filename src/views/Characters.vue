<template>
	<div class="p-16 bg-gray-50" data-context="characters-view">
		<div class="flex mb-4">
			<div class="relative">
				<input
					type="text"
					class="h-14 w-96 pl-10 pr-20 rounded-lg focus:shadow focus:outline-none"
					placeholder="Search..."
					v-model="search_param"
					@keydown.enter="fetchCharacters"
				/>
				<div class="absolute top-2 right-2">
					<button
						type="submit"
						class="h-10 w-10 text-white"
						@click="fetchCharacters"
						:disabled="!search_param"
					>
						<!-- HeroIcon svg -->
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6 text-gray-400"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>

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
		search_param: null,
	}),
	computed: {
		...mapGetters('Characters', ['getCharacters']),
	},
	methods: {
		...mapActions('Characters', ['fetchCharactersFromApi']),
		async fetchCharacters() {
			await this.fetchCharactersFromApi({ name: this.search_param })
			this.characters = this.getCharacters
		},
	},
	async mounted() {
		// if (this.getCharacters.length === 0) {
		// 	// set loading screen
		// 	this.is_loading = true
		this.fetchCharacters()
		// this.is_loading = false
		// }
	},
}
</script>
