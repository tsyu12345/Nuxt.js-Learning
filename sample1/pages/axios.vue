<template>
    <div>
        <button @click="getIp">IPアドレスをとってくる</button>
        <p>{{ ip }}</p>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                ip: null
            }
        },
        methods: {
            async getIp() {
                this.ip = await this.$axios.$get('https://icanhazip.com');
            }
        }
    }
</script>