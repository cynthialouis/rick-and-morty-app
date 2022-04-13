<template>
	<div>
		<ul
			class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border rounded"
			data-context="characters"
		>
			<li
				v-for="character in getCharacters"
				:key="character.id"
				class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
				data-context="thumbnail"
			>
				<div class="flex-1 flex flex-col p-8">
					<img
						class="w-32 h-32 flex-shrink-0 mx-auto rounded-full"
						:src="character.image"
						alt=""
						data-context="image"
					/>
					<h3
						class="mt-6 text-gray-900 text-sm font-medium"
						data-context="name"
					>
						{{ character.name }}
					</h3>
					<div class="mt-1 flex-grow flex flex-col justify-between">
						<span
							class="text-gray-500 text-sm"
							data-context="specie"
						>
							{{ character.species }}
						</span>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'Characters',
	components: {},
	computed: {
		...mapGetters('Characters', ['getCharacters']),
	},
}
</script>
