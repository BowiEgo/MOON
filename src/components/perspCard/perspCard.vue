<template>
    <div class="persp-card-container" ref="root" :style="containerStyle">
        <slot></slot>
        <div class="persp-card-wrapper" :style="{width: wrapperWidth}">
            <div class="persp-card-item" v-for="(item, index) in list" :key="index" :style="itemStyle">
                <div class="persp-card-img" :style="{backgroundImage: buildBackgroundUrl(item.img)}"></div>
                <p class="persp-card-title">{{item.title}}</p>
            </div>
        </div>
    </div>
</template>

<script>
/**
 * persp-card
 * @module components/perspCard
 * @desc 透视拖动卡片
 * @param {String} [width=200] 组件容器宽度，可选200、200px、50%、2rem(不带单位默认为px)
 * @param {String} [height=200] 组件容器高度度，可选200、200px、50%、2rem(不带单位默认为px)
 * @param {Number} [persp=1] 组件透视深度，可选范围[0，infinity]
 * @param {Array} [list=imgList] 组件图片列表，可选范围[0，infinity]
 * @param {Function} [action=callback(direction)] 组件拖动后回调方法，返回参数方向前进：1、后退：0：
 *
 * @example
 * <persp-card width="100%" height="300" persp="1" action="callback">
 *    <persp-item v-for="(item, index) in cardList width="40%">...</persp-item>
 * </persp-card>
 */

export default {
    name: 'perspCard',
    props: {
        width: {
            type: String,
            default: '100%'
        },
        height: {
            type: String,
            default: '100px'
        },
        list: {
            type: Array,
            default () {
                return []
            }
        }
    },
    data() {
        return {
            isMounted: false,
            itemStyle: {
                width: '0px',
                height: '100%',
            },
            wrapperStyle: {
                width: 0
            }
        }
    },
    computed: {
        containerStyle () {
            return {
                position: 'relative',
                width: this.width,
                height: this.height,
                overflow: 'hidden'
            }
        },
        itemWidth () {
            return this.isMounted ? this.$refs.root.getBoundingClientRect().width + 'px' : '0px';
        },
        wrapperWidth () {
            return this.isMounted ? this.$refs.root.getBoundingClientRect().width * this.list.length + 'px' : '0px';
        }
    },
    watch: {
        itemWidth (val) {
            this.itemStyle.width = val;
        }
    },
    mounted () {
        this.isMounted = true;
        this.init();
    },
    methods: {
        init () {
            console.log(this.$refs.root.querySelectorAll('.persp-item'));
            console.log(this.$refs.root.getBoundingClientRect());
        },
        buildBackgroundUrl (url) {
            return `url(${url})`;
        }
    }
}
</script>

<style lang="scss" scope>

.persp-card-container {
    display: flex;
    height: 200px;
}
// /* $persp: "persp-card"; */
// /* 
// // .#{$persp} {
// //     // &-container {
// //     //     height: 200px;
// //     // }
// //     &-wrapper {
// //         height: 100%;
// //     }
// //     &-item {
// //         display: inline-block;
// //     }
// //     &-img {
// //         width: 100%;
// //         height: 100%;
// //         background-size: cover;
// //     }
// // } */

</style>
