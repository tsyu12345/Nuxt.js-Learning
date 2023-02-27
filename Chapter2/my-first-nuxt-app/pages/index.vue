<template>
	<div></div>
</template>

<script>
export default {
	async mounted() {
		const reaponse = await this.$axios.$get('https://qiita.com/api/v2/tags?page=1&per_page=20&sort=count HTTP/1.1');
		const JSONData = JSON.stringify(reaponse, true, ' ');
		console.log('Qiita API Response: ', JSONData);
	},
}
</script>