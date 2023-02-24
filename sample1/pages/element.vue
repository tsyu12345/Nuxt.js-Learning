<template>
    <div class="element-ui-test">
        <el-button type="primary" @click="dialogVisibly">Primary</el-button>
        <el-dialog v-bind:visible.sync="visible"  title="confirm">
            <span>dialog</span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                visible: false,
            }
        },
        methods: {
            dialogVisibly() {
                this.visible = true;
            }
        }
    }
</script>