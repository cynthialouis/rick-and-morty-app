<template>
	<div class="flex justify-center mt-8" data-context="error">
		{{ error }}
	</div>
</template>

<script>
export default {
	name: 'Error',
	computed: {
		error() {
			return this.$store.state.Characters.error
		},
	},
}
</script>
