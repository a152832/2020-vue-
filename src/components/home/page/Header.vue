<template>
    <div class='header'>
        <div class='header-left'>
            <span class='iconfont'>
                &#xe624;
            </span>
        </div>
        <div class='header-search'>
           <span class='iconfont'>
                &#xe632;
            </span>
            输入城市/景点/游玩主题
        </div>
        <div class='header-right' @click="toCity">
            <!-- <router-link to='/city'> -->
           {{city}}
                <span class='iconfont'>
                &#xe6aa;
                </span>
            <!-- </router-link> -->
        </div>
    </div>
</template>
<script >
import {mapState} from 'vuex'
export default{
    computed:{
        ...mapState(['city'])
    },
    methods:{
        toCity(){
            this.$router.push('/city')
        }
    }
}
</script>
<style scoped lang="stylus">
@import '~css/var.styl'
.header{
    width:100%;
    line-height:.88rem;
    height: 0.88rem;
    background:$bgcolor;
    color:#fff;
    font-size:0.34rem;
    display:flex;
}
.header-search{
    flex: 1;
    background-color:#fff;
    height: 0.6rem;
    margin:.14rem 0;
    border-radius: .1rem;
    line-height: .6rem;
    color: #e4e7ea;
    padding-left: .2rem;
}
.header-left{
    
    width: .4rem;
    padding:0 .2rem;
    
}
.header-right{
    /* width: .4rem; */
    padding:0 .2rem;
}
.header-right a{
    color: #fff;
}
</style>