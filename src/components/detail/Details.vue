<template>
    <div>
        <Details-banner></Details-banner>
        <Details-header></Details-header>
        <Details-comment></Details-comment>
        <Details-where></Details-where>
    </div>
</template>

<script>
import DetailsBanner from './page/Banner'
import DetailsHeader from './page/Header'
import DetailsComment from './page/Comment'
import DetailsWhere from './page/Where'
export default {
    components:{
        DetailsBanner,
        DetailsHeader,
        DetailsComment,
        DetailsWhere
    }
}
</script>

<style scoped>

</style>