<template>
  <div ref= 'container' class="container">
     <div>
    <!-- 热门城市 list-->
   
      <div>
        <div class="list-title">热门城市</div>
        <ul class="list-list">
          <li class="list-item" v-for="(val,item) in hotCities" :key="item.id"
          @click="changecityname(val.name)"
          >{{val.name}}</li>
        </ul>
      </div>
      <!-- 热门城市 -->
      <!-- sort -->
      <div class="sort">
        <div class="sort-title">字母排序</div>
        <ul class="sort-list">
          <li class="sort-item" v-for="(val,item) in cities" :key="val.id"
          @click="changesort(item)"
          >{{item}}</li>
        </ul>
      </div>
      <!-- sort -->

      <!-- hot -->
      <div>
        <div class="hot" v-for="(val,item) in cities" :key="item.id" :ref="item">
          <div class="hot-title">{{item}}</div>
          <ul class="hot-item">
            <li class="hot-list" v-for="item in val" :key="item.id"
             @click="changecityname(item.name)"
            >{{item.name}}</li>
          </ul>
        </div>
      </div>
      <!-- hot -->
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import BScroll from "better-scroll";
export default {
  props: ["cities", "hotCities", "cities"],
  data() {
    return{
        scroll: ""
    }
    
  },
  mounted() {
    let container = this.$refs['container']
    this.scroll = new BScroll(container);
  },
  methods:{
    // 点击获取字母名称
    changesort(key){
      // 点击字母跳转城市
      this.scroll.scrollToElement(this.$refs[key][0])

      // console.log(this.$refs[key][0])  点击字母获取对应的城市
    },
    changecityname(cityname){
      this.changeCity(cityname);
      // 点击热门中的城市
      // alert(cityname)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  }
};
</script>

<style scoped>
.container{

  position: absolute;
  overflow: hidden;
  left: 0;
  right: 0;
  top: .88rem;
  bottom: 0;
}
.hot-title {
  font-size: 0.28rem;
  color: #212121;
  padding: 0.2rem;
  background-color: #d7d7d7;
}
.hot-item {
  position: relative;
  overflow: hidden;
}
.hot-item :before {
  position: absolute;
  content: " ";
  height: 100%;
  width: 25%;
  left: 25%;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
}
.hot-item :after {
  position: absolute;
  content: " ";
  height: 100%;
  width: 25%;
  left: 75%;
  border-left: 1px solid #ddd;
}
.hot-list {
  width: 25%;
  font-size: 0.28rem;
  line-height: 0.8rem;
  /* padding-left: .2rem; */
  text-align: center;
  color: #000;
  font-weight: bold;
  float: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-bottom: 1px solid #ddd;
}
/* 热门城市list */
.list-title {
  font-size: 0.28rem;
  color: #212121;
  padding: 0.2rem;
  background-color: #d7d7d7;
  font-weight: bold;
}
.list-list {
  position: relative;
  background-color: #ffffff;
  font-size: 0.32rem;
  overflow: hidden;
}
.list-list:before {
  content: " ";
  position: absolute;
  height: 100%;
  width: 33%;
  left: 33%;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
}
.list-item {
  z-index: 99;
  position: relative;
  text-align: center;
  width: 33.3%;
  line-height: 0.8rem;
  float: left;
  border-bottom: 1px solid #ddd;
}
/* sort */
.sort-title {
  font-size: 0.28rem;
  color: #212121;
  padding: 0.2rem;
  background-color: #d7d7d7;
  font-weight: bold;
}
.sort-list {
  position: relative;
  background-color: #ffffff;
  font-size: 0.3rem;
  overflow: hidden;
}
.sort-item {
  text-align: center;
  width: 16.666%;
  line-height: 0.8rem;
  float: left;
}
</style>