<template>
  <div class="header">
      <div class="header-left">
        <span class="return"></span>
        <span class='iconfont left-return'
        @click="tohome()"
        >&#xe624;</span>
      </div>
  </div>
</template>

<script>
export default {
    methods:{
        tohome(){
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
.return{
    display: block;
     width: .7rem;
    height: .7rem;
    background-color:#000;
    opacity: .5;
    border-radius: .35rem;

}
.header-left{
    position: absolute;
    top:.1rem;
    left: .1rem;
    width: .7rem;
    height: .7rem;
    color: #fff;
}
.left-return{
    position: absolute;
    top:10px;
    left: 7px;
}
</style>