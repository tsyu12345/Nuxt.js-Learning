<template>
    <div>
        <span>signle layout</span>
        <AppNavigation />
        <hr>
        <nuxt />
        <nuxt-link to="/">return to top</nuxt-link>
        <hr>
        <footer>
            footer
        </footer>
    </div>
</template>

<script>
import AppNavigation from '../components/AppNavigation.vue'

export default {
    components: {
        AppNavigation
    }
}
</script>

<style>

</style>