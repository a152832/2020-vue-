<template>
  <div class="where">
      <div class="where-title">
          <img src="@/assets/img/qunar_recommand.png" alt="">
          旅游推荐</div>
      <ul>
          <li class="active-item">
              <div class="active-title">【活动票】
                  <span>福州贵安欢乐水世界</span>
              </div>
              <div class="title-item">水球大战儿童票
                  <span>￥19.9元</span>
              </div>
              <div class="reserve">
                  <img src="@/assets/img/time.png" alt="">
                  <div class="reserve-text">可定7月29日</div>
                  <div class="reserve-title">预定</div>
              </div>
              
          </li>

          <li class="active-item">
              <div class="active-title">
                  <span>福州国际鲜花港非画展成人门票</span>
              </div>
              <div class="title-item">淡季门票
                  <span>￥19.9元</span>
              </div>
              <div class="reserve">
                  <img src="@/assets/img/time.png" alt="">
                  <div class="reserve-text">16：30前购买可用</div>
                  
                  <div class="reserve-title">预定</div>
              </div>
              
          </li>

          <li class="active-item">
              <div class="active-title">
                  <span>福州国际鲜花港非画展成人门票</span>
              </div>
              <div class="title-item">
                  <div class=" shelf-border"></div>
                  水球大战儿童票
                  <span>￥77元</span>
              </div>
              <div class="reserve">
                  <img src="@/assets/img/time.png" alt="">
                  <div class="reserve-text">可定8月29日</div>
                  
                  <div class="reserve-title">预定</div>
              </div>
              
          </li>
      </ul>


      <div class="where-title">
          <img src="@/assets/img/qunar_recommand.png" alt="">
          旅游推荐</div>
      <ul>
          <li class="active-item">
              <div class="active-title">【活动票】
                  <span>福州贵安欢乐水世界</span>
              </div>
              <div class="title-item">水球大战儿童票
                  <span>￥19.9元</span>
              </div>
              <div class="reserve">
                  <img src="@/assets/img/time.png" alt="">
                  <div class="reserve-text">可定7月29日</div>
                  <div class="reserve-title">预定</div>
              </div>
              
          </li>

          <li class="active-item">
              <div class="active-title">
                  <span>福州国际鲜花港非画展成人门票</span>
              </div>
              <div class="title-item">淡季门票
                  <span>￥19.9元</span>
              </div>
              <div class="reserve">
                  <img src="@/assets/img/time.png" alt="">
                  <div class="reserve-text">16：30前购买可用</div>
                  
                  <div class="reserve-title">预定</div>
              </div>
              
          </li>

          <li class="active-item">
              <div class="active-title">
                  <span>福州国际鲜花港非画展成人门票</span>
              </div>
              <div class="title-item">
                  <div class=" shelf-border"></div>
                  水球大战儿童票
                  <span>￥77元</span>
              </div>
              <div class="reserve">
                  <img src="@/assets/img/time.png" alt="">
                  <div class="reserve-text">可定8月29日</div>
                  
                  <div class="reserve-title">预定</div>
              </div>
              
          </li>
      </ul>
  </div>

  
</template>

<script>
export default {

}
</script>

<style>
.where{
    padding-top: .2rem;
    background-color: #e9e9e9;
}
.where-title img{
    width: .3rem;
    height:.3rem;
}
.where-title{
    background-color: #fff;
    font-size: .36rem;
    padding: .2rem .2rem;
    border-bottom: 1px solid #ccc;
}
.active-item{
    background-color: #fff;
    border-bottom:1px solid #ccc;
    padding-bottom:.2rem;
}
.active-title{
    font-size: .4rem;
    /* padding-top: .2rem; */
}
.active-title span{
    font-size: .32rem;
}
.active-item div{
    padding: .2rem ;
}
.title-item span{
    display: block;
    float: right;
    color:orange;
    font-size: .36rem;
}
.title-item{
    font-size: .32rem;
    margin-left: .2rem;
}
.active-item .reserve{
    font-size: .28rem;
    margin-left: .2rem;
    display: flex;
    color: green;
    justify-content: space-between;
    align-items: center;
    padding:0 .2rem;
}
.reserve-text{
    margin-right: 34%;
}
.reserve img{
    width: .2rem;
    height:.2rem;
}
.reserve-title{
    float: right;
    text-align: center;
    color: #fff;
    background-color: orange;
    width: 60px;
}
</style>