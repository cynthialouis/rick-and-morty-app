<template>
	<div>
		<ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" data-context="characters">
			<li
				v-for="character in characters"
				:key="character.id"
				class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
				data-context="thumbnail"
			>
				<router-link :to="`/characters/${character.id}`">
					<div class="flex-1 flex flex-col p-8">
						<img
							class="w-32 h-32 flex-shrink-0 mx-auto rounded-full"
							:src="character.image"
							alt=""
							data-context="image"
						/>
						<h3 class="mt-6 text-gray-900 text-sm font-medium" data-context="name">
							{{ character.name }}
						</h3>
						<div class="mt-1 flex-grow flex flex-col justify-between">
							<span class="text-gray-500 text-sm" data-context="specie">
								{{ character.species }}
							</span>
						</div>
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'Characters',
	components: {},
	computed: {
		characters() {
			return this.$store.state.Characters.characters
		},
	},
}
</script>
