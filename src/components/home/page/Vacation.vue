<template>
     <div class="vacation">
        <div class="vacation-title">周末去哪儿</div> 
        <ul>
            <li class="vacation-item" v-for="item in vacationList" :key="item.id">
                <div class="img-list">
                    <img :src="item.imgUrl">
                </div>
                <div class="vacation-text">
                    <p class="text-top">{{item.msg}}</p>
                    <p class="text-bottom">{{item.title}}</p>
                </div>
            </li>
        </ul> 
    </div>
</template>
<script>
export default {
    props:['vacationList'],
    data(){
        return{
            // vacationList:[
            //     {
            //         id:'01',
            //         imgUrl:'http://img1.qunarzz.com/sight/source/1606/85/c6b6bad1b977e.jpg_r_640x214_5c638941.jpg',
            //         msg:'激流勇进',
            //         title:'轻松水上漂'
            //     },
            //     {
            //         id:'02',
            //         imgUrl:'http://img1.qunarzz.com/sight/source/1505/53/02091f1ee43d0a.jpg_r_640x214_2e3256b1.jpg',
            //         msg:'北京清凉避暑胜地',
            //         title:'到大自然中享受“天然空调”的清凉'
            //     },
            //     {
            //         id:'03',
            //         imgUrl:'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
            //         msg:'福建必游圣地',
            //         title:'到大自然中享受“天然空调”的清凉'
            //     },
            // ]
        }
    }
}
</script>
<style scoped>
.vacation-title{
    font-size: .32rem;
    padding:.2rem .2rem;
    color:#212121;
    font-weight: bold;
}
.vacation-item{
    background-color: #fff;
}
.img-list img{
    width: 100%;
    height: 3rem;
}
.vacation-text{
    padding: 0.05rem 0 .2rem .2rem;
}
.vacation-text p{
    margin-top: .2rem;
    
}
.text-top{
    font-size: .32rem;
    color:#212121;
    font-weight: bold;
}
.text-bottom{
    font-size: .28rem;
    color:#616161;
}
</style> 