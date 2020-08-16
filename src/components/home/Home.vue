<template>
    <div class="home">
        <!-- <span @click="toDetail(3)">跳转</span> -->
        <Home-Header></Home-Header>
        <Home-Swiper :swiperList='swiperList'></Home-Swiper>
        <Home-Icons :iconList='iconList'></Home-Icons>
        <Home-Location></Home-Location>
        <Home-Activity></Home-Activity>
        <Home-Hot :hotList='hotList'></Home-Hot>
        <Home-Like :likeList='likeList'></Home-Like>
        <Home-Vacation :vacationList = 'vacationList'></Home-Vacation>
    </div>
</template>
<script>
import {mapState} from 'vuex'
import HomeHeader from './page/Header'
import HomeSwiper from './page/Swiper'
import HomeIcons from './page/Icons'
import HomeLocation from './page/Location'
import HomeActivity from './page/Activity'
import HomeHot      from './page/Hot'
import HomeLike      from './page/Like'
import HomeVacation      from './page/Vacation'
export default {
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeLocation,
        HomeActivity,
        HomeHot,
        HomeLike,
        HomeVacation
    },
    computed:{
        ...mapState(['city'])
    },
    data(){
        return{
            swiperList:[],
            iconList:[],
            hotList:[],
            likeList:[],
            vacationList:[],
            changecity:[]
        }
    },
    methods: {
        gethttp() {
            this.$http.get("http://localhost:8080/static/mock/data.json").then((res)=>{
           const data=  res.data.data
        //    console.log(data)
           data.forEach((item,index)=>{
            //    console.log(item,index)
            //    console.log(item.city,this.city)
            if(item.city==this.city){
                console.log(item)
                    this.swiperList = item.swiperList
                    this.iconList = item.iconList
                    this.hotList = item.hotList
                    this.likeList = item.likeList
                    this.vacationList = item.vacationList
            }
               //item.city城市名称
           })
        //    this.swiperList = data.swiperList
        //    this.iconList = data.iconList
        //    this.hotList = data.hotList
        //    this.likeList = data.likeList
        //    this.vacationList = data.vacationList
        })
    }
            
        },
    mounted(){
        this.gethttp()
        this.changecity = this.city
    },
    // keepalive新增生命周期
    activated(){
        // console.log(this.city,this.changecity)
        if(this.city!=this.changecity){
            this.gethttp();
            this.changecity = this.city
        }
    }
}
</script>
<style scope>
    .home{
        background-color: #f5f5f5;
    }
</style>