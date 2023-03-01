<template>
    <section class="container posts-page">
        <el-card>
            <div slot="header" class="clearfix">
                <span>新規投稿</span>
            </div>
            <el-table :data="showPosts" style="width: 100%;" class="table">
                <el-table-column prop="title" label="タイトル"></el-table-column>
                <el-table-column prop="user.id" label="投稿者" width="180"></el-table-column>
                <el-table-column prop="created_at" label="投稿日" width="240"></el-table-column>
            </el-table>
        </el-card>
    </section>
</template>

<script>
export default {
    computed: {
        showPosts() {
            return [
                {
                    id:"001",
                    title: "how to develop nuxt.js",
                    body: "nuxt.js is a framework for vue.js",
                    created_at: "2019-01-01",
                    user: {
                        id: "test",
                    },
                },
                {
                    id:"002",
                    title: "how to develop nuxt.js",
                    body: "nuxt.js is a framework for vue.js",
                    created_at: "2019-01-01",
                    user: {
                        id: "test",
                    },
                },
                {
                    id:"003",
                    title: "how to develop nuxt.js",
                    body: "nuxt.js is a framework for vue.js",
                    created_at: "2019-01-01",
                    user: {
                        id: "test",
                    },
                },
                {
                    id:"004",
                    title: "how to develop nuxt.js",
                    body: "nuxt.js is a framework for vue.js",
                    created_at: "2019-01-01",
                    user: {
                        id: "test",
                    },
                },
                {
                    id:"005",
                    title: "how to develop nuxt.js",
                    body: "nuxt.js is a framework for vue.js",
                    created_at: "2019-01-01",
                    user: {
                        id: "test",
                    },
                },
                {
                    id:"006",
                    title: "how to develop nuxt.js",
                    body: "nuxt.js is a framework for vue.js",
                    created_at: "2019-01-01",
                    user: {
                        id: "test",
                    },
                },
                {
                    id:"007",
                    title: "how to develop nuxt.js",
                    body: "nuxt.js is a framework for vue.js",
                    created_at: "2019-01-01",
                    user: {
                        id: "test",
                    },
                },
            ];
        },
    },
}
</script>

<style>
.posts-page .el-table__row{
    cursor: pointer;
}
</style>