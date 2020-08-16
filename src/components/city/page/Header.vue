<template>
	<div class='city-header'>
        <div class='city-header-left'>
            <span class='iconfont' @click="toHome">
                &#xe624;
            </span>
        </div>
         <div class="city-header-title">
                城市选择
        </div>
    </div>
</template>
<script type="text/javascript">
export default {
	methods:{
		toHome(){
			this.$router.push('/')
		}
	}
}
</script>
<style scope lang="stylus">
@import '~css/var.styl'
.city-header{
    position relative;
    width:100%;
    line-height:.88rem;
    height: 0.88rem;
    background:$bgcolor;
    color:#fff;
    font-size:0.34rem;
    display:flex;
}
.city-header-left{
    position:absolute;
    width: .4rem;
    padding:0 .2rem;
    
}
.city-header-title{

    margin:0 auto;
}
</style>