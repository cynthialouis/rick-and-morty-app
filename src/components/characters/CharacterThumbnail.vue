<template>
	<li
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
				<span class="text-gray-500 text-sm" data-context="specie">
					{{ character.species }}
				</span>
			</div>
		</div>
	</li>
</template>

<script>
export default {
	name: 'CharacterThumbnail',
	components: {},
	props: {
		character: {
			type: Object,
			required: true,
		},
	},
	data: () => ({}),
	computed: {},
	methods: {},
}
</script>
