<template>
	<li
		class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
	>
		<div class="flex-1 flex flex-col p-8">
			<img
				class="w-32 h-32 flex-shrink-0 mx-auto rounded-full"
				:src="character.image"
				alt=""
			/>
			<h3 class="mt-6 text-gray-900 text-sm font-medium">
				{{ character.name }}
			</h3>
			<dl class="mt-1 flex-grow flex flex-col justify-between">
				<dd class="text-gray-500 text-sm">
					{{ character.species }}
				</dd>
			</dl>
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
