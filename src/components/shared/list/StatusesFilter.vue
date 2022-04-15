<template>
	<div class="flex text-gray-700" data-context="statuses-filter">
		<div class="flex flex-col">
			<div>
				<input
					type="checkbox"
					class="mr-2"
					v-model="checked_status"
					value="alive"
					@click="checkOne"
				/>
				<span>Alive</span>
			</div>
			<div>
				<input
					type="checkbox"
					class="mr-2"
					v-model="checked_status"
					value="dead"
					@click="checkOne"
				/>
				<span>Dead</span>
			</div>
			<div>
				<input
					type="checkbox"
					class="mr-2"
					v-model="checked_status"
					value="unknown"
					@click="checkOne"
				/>
				<span>Unknown</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'StatusesFilter',
	data: () => ({
		checked_status: [],
	}),
	methods: {
		/**
		 * Can only check one value out of the three
		 */
		checkOne() {
			this.checked_status = []
		},
	},
	watch: {
		checked_status(value) {
			this.$emit('status', value[0])
		},
	},
}
</script>
