<template>
	<div>
		<page-header />
		<div
			class="p-16 h-screen bg-gray-50 text-gray-600"
			data-context="character-view"
		>
			<div
				v-if="getCharacter"
				class="border rounded p-8 m-8 lg:m-16 xl:m-16 grid md:grid-rows-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 max-w-5xl"
			>
				<div
					class="row-start-1 md:row-span-1 md:col-span-2 mb-4 md:flex md:flex-col"
				>
					<div class="flex md:block">
						<h1
							class="text-gray-800 font-medium uppercase tracking-wide mr-2"
							data-context="name"
						>
							{{ getCharacter.name }}
						</h1>
						<badge :color="gender_color">
							<span data-context="status">{{
								specie_and_status
							}}</span>
						</badge>
					</div>
					<div class="text-sm italic" data-context="type">
						{{ getCharacter.type }}
					</div>
				</div>

				<div class="md:row-span-3 md:row-start-1 mb-4 md:mr-4">
					<img
						data-context="image"
						:src="getCharacter.image"
						:alt="getCharacter.name"
					/>
				</div>

				<div class="md:row-start-3 md:row-span-1 md:col-span-2">
					<div class="flex mb-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6 mr-2"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						<span data-context="origin">{{
							getCharacter.origin.name
						}}</span>
					</div>
					<div class="flex mb-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6 mr-2"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>
						<span data-context="location">{{
							getCharacter.location.name
						}}</span>
					</div>
					<div class="flex">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6 mr-2"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
							/>
						</svg>
						<span data-context="episodes"
							>{{ getCharacter.episode.length }} episodes</span
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Badge from '../components/ui/Badge.vue'
import { mapActions, mapGetters } from 'vuex'
import PageHeader from '../components/ui/PageHeader.vue'

export default {
	name: 'CharacterView',
	components: { Badge, PageHeader },
	computed: {
		...mapGetters('Characters', ['getCharacter']),
		character_id() {
			return this.$route.params.id
		},
		specie_and_status() {
			return `${this.getCharacter.species} (${this.getCharacter.status})`
		},
		gender_color() {
			const gender = this.getCharacter.gender
			return 'Male' === gender
				? 'blue'
				: 'Female' === gender
				? 'pink'
				: 'yellow'
		},
	},
	methods: {
		...mapActions('Characters', ['fetchCharacterFromApi']),
	},
	mounted() {
		this.fetchCharacterFromApi(this.character_id)
	},
	watch: {
		character_id(value) {
			this.fetchCharacterFromApi(value)
		},
	},
}
</script>
