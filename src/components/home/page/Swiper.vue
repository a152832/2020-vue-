<template>
  <div class="header-swiper">
    <swiper ref="mySwiper" :options="swiperOptions">
      <!-- <swiper-slide v-for='(item,index) in swiperList' :key="index">  -->
      <swiper-slide v-for="item in swiperList" :key="item.imgUrl">
        <img :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
export default {
  props:['swiperList'],
  data() {
    return {
      swiperOptions: {
              pagination: {
              el:'.swiper-pagination',
              // pagination : '#swiper-pagination1',

          },
        loop: true
      },
      // swiperList: [
      //   {
      //     id: "01",
      //     imgUrl: require("@/assets/img/banner_one.png"),
      //   },
      //   {
      //     id: "02",
      //     imgUrl: require("@/assets/img/banner_two.png"),
      //   },
      //   {
      //     id: "03",
      //     imgUrl: require("@/assets/img/banner_three.jpg"),
      //   },
      //   {
      //     id: "04",
      //     imgUrl: require("@/assets/img/banner_four.jpg"),
      //   },
      // ],
    };
  },
};
</script>
<style scoped lang='stylus'>
.header-swiper {
  width: 100%;
  height: 4rem;
}
.header-swiper img {
  width: 100%;
  height: 4rem;
}
/* .swiper-pagination{
    width: 2rem;
    height: 2rem;
    font-size: 2rem;
} */
</style>