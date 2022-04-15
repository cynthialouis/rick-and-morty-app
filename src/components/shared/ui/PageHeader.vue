<template>
	<header data-context="page-header" class="px-16 p-0 m-0 bg-white border-b">
		<div class="flex">
			<img
				src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRtuJsCJezdhm0DRmP3cDTVUDZdrKn_uzS5IrMQeT-3VlK52LJT"
				class="w-16 h-16 rounded mr-4"
				alt=""
			/>
			<div class="m-0">
				<router-link :to="`/characters`">
					<h1
						class="px-3 py-5 m-0 flex items-center font-bold text-base uppercase h-full leading-none"
						data-context="title"
					>
						Rick and Morty characters
					</h1></router-link
				>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	name: 'PageHeader',
}
</script>
