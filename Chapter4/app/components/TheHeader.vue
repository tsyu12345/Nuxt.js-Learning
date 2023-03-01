<template>
    <el-menu mode="horizontal" :router="true">
        <el-menu-item index="1" style="pointer-events: none;">Nuxt Diary Application</el-menu-item>
        <el-menu-item index="2" :router="{path: '/posts/'}">投稿一覧</el-menu-item>
        <no-ssr>
            <el-menu-item idex="4" style="floot: right;" :route="{path: '/'}">ログイン</el-menu-item>
        </no-ssr>
        <el-menu-item index="5" style="float: right;" :route="{path: '/posts/new'}">新規投稿</el-menu-item>
    </el-menu>
</template>

