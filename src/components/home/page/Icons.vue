<template>
  <div class="icons">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="item in page" :key="item.id">
        <div class="icons-item" v-for="page in item" :key="page.id">
          <img :src="page.imgUrl" alt />
          <p>{{page.title}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  props:['iconList'],
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        // loop: true,
      },
      // iconList: [
      //   {
      //     id: "01",
      //     imgUrl: require("@/assets/img/train.png"),
      //     title: "景点门票",
      //   },
      //   {
      //     id: "02",
      //     imgUrl: require("@/assets/img/flight.png"),
      //     title: "低价车票",
      //   },
      //   {
      //     id: "03",
      //     imgUrl: require("@/assets/img/hotel.png"),
      //     title: "海外酒店",
      //   },
      //   {
      //     id: "04",
      //     imgUrl: require("@/assets/img/piao.png"),
      //     title: "特惠酒店",
      //   },
      //   {
      //     id: "05",
      //     imgUrl: require("@/assets/img/star.png"),
      //     title: "景点门票",
      //   },
      //   {
      //     id: "06",
      //     imgUrl: require("@/assets/img/package.png"),
      //     title: "景点门票",
      //   },
      //   {
      //     id: "07",
      //     imgUrl: require("@/assets/img/board.png"),
      //     title: "景点门票",
      //   },
      //   {
      //     id: "08",
      //     imgUrl: require("@/assets/img/bus.png"),
      //     title: "景点门票",
      //   },
      //   {
      //     id: "09",
      //     imgUrl: require("@/assets/img/fly.png"),
      //     title: "景点门票",
      //   },
      //   {
      //     id: "10",
      //     imgUrl: require("@/assets/img/free.png"),
      //     title: "景点门票",
      //   },
      //   {
      //     id: "11",
      //     imgUrl: require("@/assets/img/train.png"),
      //     title: "景点门票",
      //   },
      //   {
      //     id: "12",
      //     imgUrl: require("@/assets/img/train.png"),
      //     title: "景点门票",
      //   },
      // ],
    };
  },
  computed:{
    page(){
      let pages=[];
      this.iconList.forEach((item,index)=>{
        // console.log(index)
        let idx = Math.floor(index/8);
        if(!pages[idx]) pages[idx]=[];
        pages[idx].push(item);
      })
      return pages;
    }
  }
}
</script>
<style scoped>
.icons {
  width: 100%;
  height: 3.75rem;
  overflow: hidden;
  background-color: #ffffff;
}
.icons-item {
  width: 25%;
  height: 0;
  padding-bottom: 25%;
  float: left;
}
.icons-item img {
  width: 1rem;
  height: 1rem;
  display: block;
  margin: 0 auto;
  padding-top: 0.2rem;
}
.icons-item p {
  font-size: 0.28rem;
  text-align: center;
  margin-top: 0.2rem;
}
</style>
