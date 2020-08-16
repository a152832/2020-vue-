<template>
    <div class="activity">
        <div class="activity-item border-right">
           <img src="@/assets/img/leftdor.png" alt="">
        </div>
        <div class="activity-item">
            <img src="@/assets/img/rightdor.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.activity{
    margin-top: .2rem;
    display: flex;
    background-color: #ffffff;
}
.activity-item{
    flex: 1;
    font-size: .28rem;
    text-align: center;
    width: 100%;
    height: 1.4rem;
    border-top: 1px solid #ccc;
    
}
.activity-item img{
    width: 100%;
    height: 1.4rem;
}
</style>