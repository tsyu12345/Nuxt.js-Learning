<template>
	<section>
		<div>
			<h3>投稿一覧</h3>
			<ul>
				<li v-for="item in items" :key="item.id">
					<h4>
						<span>{{ item.title }}</span>
						<small>by {{ item.user.id }}</small>
					</h4>
				</li>
			</ul>
		</div>
	</section>
</template>

<script>
export default {
	async asyncData({ app }) {
		const items = await app.$axios.$get('https://qiita.com/api/v2/tags?page=1&per_page=20&sort=count HTTP/1.1')
		return { items }
	}
}
</script>