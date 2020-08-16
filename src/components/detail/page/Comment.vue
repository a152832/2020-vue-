<template>
<div>
    <div class="comment">
        <div class="comment-item border-right">
            <div class="comment-left-text">4.9分 很棒</div>
            <div class="comment-number">1077条评论 2条攻略</div>
        </div>
        <div class="comment-item">
            <div class="comment-item-text">景点简介</div>
            <div class="comment-number">开放时间、贴士</div>
        </div>
        
    </div>
    <div class="location-item">
            <div class="iconfont">&#xe63f;
            福建省福州市台江广场
            </div>
            <div class="font">></div>
    </div>
</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.font{
    color:#ccc;
    font-size: .48rem;
}
.location-item{
    display: flex;
    justify-content: space-between;
    font-size: .32rem;
    text-align: center;
    padding: .2rem .2rem;
}
.comment{
    display: flex;
}
.comment-item{
    display: flex;
    align-items: left;
    justify-content: center;
    flex: 1;
    font-size: .28rem;
    /* text-align: center; */
    flex-direction: column;
    height: 1rem;
    border-top: 1px solid #ccc;
}
.comment-left-text{
    padding: .2rem .2rem;
    font-size: .36rem;
    color:orange;
}
.comment-number{
    color: #ccc;
    padding: 0 .2rem;
}
.comment-item-text{
    padding: .2rem .2rem;
    font-size: .36rem;
    color:rgb(36, 32, 32);
}
</style>