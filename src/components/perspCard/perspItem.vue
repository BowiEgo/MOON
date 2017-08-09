<template>
    <div class="persp-card-item">
        <slot></slot>
    </div>
</template>

<script>
/**
 * persp-card
 * @module components/perspItem
 * @desc 透视拖动卡片
 *
 * @example
 * <persp-card width="100%" height="300" persp="1" action="callback">
 *    <persp-item v-for="(item, index) in cardList width="40%">...</persp-item>
 * </persp-card>
 */

export default {
    name: 'perspItem',
    props: {
        width: {
            type: String,
            default: '100%'
        },
        height: {
            type: String,
            default: '100px'
        }
    },
    computed: {
        cardStyle () {
            return {
                width: this.width,
                height: this.height
            }
        }
    }
}
</script>

<style lang="scss">
</style>
