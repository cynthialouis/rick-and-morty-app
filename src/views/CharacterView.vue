<template>
	<div>
		<page-header />
		<div
			class="p-16 h-screen bg-gray-50 text-gray-600"
			data-context="character-view"
		>
			<div
				v-if="character"
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
							{{ character.name }}
						</h1>
						<badge :color="gender_color">
							<span data-context="status">{{
								specie_and_status
							}}</span>
						</badge>
					</div>
					<div class="text-sm italic" data-context="type">
						{{ character.type }}
					</div>
				</div>

				<div class="md:row-span-3 md:row-start-1 mb-4 md:mr-4">
					<img
						data-context="image"
						:src="character.image"
						:alt="character.name"
					/>
				</div>

				<div class="md:row-start-3 md:row-span-1 md:col-span-2">
					<div class="flex mb-1">
						<img
							src="@/assets/globeIcon.svg"
							class="h-6 w-6 mr-2"
						/>
						<span data-context="origin">{{
							character.origin.name
						}}</span>
					</div>
					<div class="flex mb-1">
						<img
							src="@/assets/locationIcon.svg"
							class="h-6 w-6 mr-2"
						/>
						<span data-context="location">{{
							character.location.name
						}}</span>
					</div>
					<div class="flex">
						<img
							src="@/assets/videoIcon.svg"
							class="h-6 w-6 mr-2"
						/>
						<span data-context="episodes"
							>{{ character.episode.length }} episodes</span
						>
					</div>
				</div>
			</div>
			<error v-else />
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex'
import Badge from '@/components/shared/ui/Badge.vue'
import PageHeader from '@/components/shared/ui/PageHeader.vue'
import Error from '@/components/shared/ui/Error.vue'

export default {
	name: 'CharacterView',
	components: { Badge, PageHeader, Error },
	computed: {
		character_id() {
			return this.$route.params.id
		},
		character() {
			return this.$store.state.Characters.character
		},
		specie_and_status() {
			return `${this.character.species} (${this.character.status})`
		},
		gender_color() {
			const { gender } = this.character
			if ('Male' === gender) return 'blue'
			if ('Female' === gender) return 'pink'
			return 'yellow'
		},
	},
	methods: {
		...mapActions('Characters', ['fetchCharacterFromApi']),
		/**
		 * Call fetch API
		 * @returns {Promise<void>}
		 */
		async fetchCharacter(id) {
			try {
				await this.fetchCharacterFromApi(id)
			} catch (e) {
				this.$store.commit(
					'Characters/SET_ERROR',
					e.response.data.error
				)
			}
		},
	},
	mounted() {
		this.fetchCharacter(this.character_id)
	},
	watch: {
		character_id(value) {
			this.fetchCharacter(value)
		},
	},
}
</script>
