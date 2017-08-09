<template>
    <div id="play">
        <persp-card height="200px" :list="perspCardList">
             <!-- <persp-item></persp-item>  -->
        </persp-card>
        <h1>hahaah</h1>
        <h2>hahaah</h2>
    </div>
</template>

<script>
import { perspCard, perspItem } from '@/components/perspCard'

export default {
    name: 'app',
    data() {
        return {
            perspCardList: [{
                url: 'javascript:',
                img: 'https://static.vux.li/demo/1.jpg',
                title: '送你一朵fua'
            }, {
                url: 'javascript:',
                img: 'https://static.vux.li/demo/2.jpg',
                title: '送你一辆车'
            }, {
                url: 'javascript:',
                img: 'https://static.vux.li/demo/3.jpg',
                title: '送你一次旅行'
            }]
        }
    },
    components: {
        'persp-card': perspCard,
        'persp-item': perspItem
    },
    mounted() {
    }
}
</script>

<style lang="scss">

:root {
  --fontSize: 1rem;
}

h1 {
  font-size: calc(var(--fontSize) * 2);
}

h2 {
    font-size: 1rem;
}

</style>
