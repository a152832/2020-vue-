<template>
    <div class="hot">
        <div class="hot-top">
        <img src="@/assets/img/hot.png" alt="">
        <span>本周热门榜单</span>
        <span class="hot-top-right">全部榜单></span>
        </div>
        <ul class="hot-List">
            <li class="hot-item" v-for="item in hotList" :key="item.id">
                <img :src="item.imgUrl" alt="">
                <p>{{item.title}}</p>
                <p>
                    <span class="hot-buttom-text">￥{{item.mark}}</span>起
                </p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:['hotList'],
    data(){
        return {
            // hotList:[
            //     {
            //         id:'01',
            //         imgUrl:require('@/assets/img/hot1.jpg'),
            //         title:'故宫',
            //         mark:'20'
            //     },
            //     {
            //         id:'02',
            //         imgUrl:require('@/assets/img/hot1.jpg'),
            //         title:'十度聚龙湾玻璃栈道',
            //         mark:'30'
            //     },
            //     {
            //         id:'03',
            //         imgUrl:require('@/assets/img/hot3.jpg'),
            //         title:'十度聚龙湾玻璃栈道',
            //         mark:'40'
            //     },
            //     {
            //         id:'04',
            //         imgUrl:require('@/assets/img/hot4.jpg'),
            //         title:'十度聚龙湾玻璃栈道',
            //         mark:'50'
            //     },
            // ]
        }
    }
}
</script>
<style scoped>
.hot{
    margin-top: .2rem;
    background-color:#fff;
    font-size: .28rem;
}
.hot-top{
    position: relative;
    padding: .2rem;;
}
.hot-top img{
    width: .3rem;
    height: .3rem;
}
.hot-top-right{
    position: absolute;
    right: 0;
    color: #616161;
}
.hot-List{
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    height: 3rem;
}
.hot-item{
    display: inline-block;
    width: 2rem;
    height: 2rem;
    margin-left: .2rem;
}
.hot-item img{
    height: 100%;
    width: 100%;
}
.hot-item p{
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow:ellipsis;
    margin-top: .1rem;
    font-size: .28rem;
}
.hot-item p .hot-buttom-text{
    color:#ff8300;
    font-size: .32rem;
}
</style>