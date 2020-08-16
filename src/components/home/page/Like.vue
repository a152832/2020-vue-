<template>
    <div class="like">
        <div class="like-top">
            <img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="">
            猜你喜欢
        </div>
        <ul>
            <li class="like-item" 
            v-for="item in likeList" 
            :key="item.imgUrl"
            @click="todetail()"
            >
                <div class="item-img">
                    <img :src="item.imgUrl" alt="">
                </div>
                <div class="like-text">
                    <div class="like-name">{{item.title}}</div>
                    <div class="like-conment">
                        {{item.msg}}条评论
                    </div>
                    <div class="like-price-text">
                        <span class="like-price">￥{{item.pre}}</span>元
                        <span class="like-area">{{item.map}}</span>
                    </div>
                </div>
            </li>                   
        </ul>
    </div>
</template>
<script>
export default {
    props:['likeList'],
    data(){
        return{
            // likeList:[
            //     {
            //     id:"01",
			// 	imgUrl:"http://img1.qunarzz.com/sight/p0/1609/7a/7ae8ee7831836095a3.water.jpg_200x200_36727f69.jpg",
			// 	title:"金海湖风景区",
			// 	msg:"1341",
			// 	pre:"18.8",
			// 	map:"平谷区"
            //     },
            //     {
			// 		id:"02",
			// 		imgUrl:"http://img1.qunarzz.com/sight/p0/1803/12/126471e0966aca5ba3.img.jpg_200x200_f1286016.jpg",
			// 		title:"北京国际鲜花港",
			// 		msg:"1900",
			// 		pre:"28.8",
			// 		map:"顺义区"
			// 	}
            // ]
        }
    },
    methods:{
        todetail(){
            this.$router.push('/detail')
        }
    }
}
</script>
<style scoped>
.like{
    margin-top: .2rem;
    background-color: #fff;
}
.like-top{
    font-size: .32rem;
    padding: .2rem .2rem;
}
.like-top img{
    width: .3rem;
    height: .3rem;
}
.like-item{
    width: 100%;
    height: 2rem;
    display: flex;
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
    font-size: .32rem;
    margin-top:.2rem;
}
.item-img{
    width: 3rem;
    height: 2rem;
    /* float:left; */
}
.item-img img{
    width: 3rem;
    height: 2rem;
}
.like-text{
    width: 100%;
    height: 100%;
    padding-left: .22rem;
}
.like-text div{
    margin-top: .3rem;
}
.like-name{
    font-size: .36rem;
    font-weight: bold;
    color: #212121;
}
.like-conment{
    font-size: .28rem;
}
.like-price{
    color: #ff8080;
    font-size: .32rem;
}
.like-price-text{
    font-size: .26rem;
}
.like-area{
    float: right;
    margin-right: .2rem;
}
</style>