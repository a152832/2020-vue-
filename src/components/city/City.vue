<template>
  <div>
      <city-Header></city-Header>
      <city-Hot 
      :hotCities = 'hotCities'
      :cities = 'cities'
      ></city-Hot>
  </div>
</template>

<script>
import CityHeader from './page/Header'
import CityHot from './page/Hot'
export default {
    components:{
        CityHeader,
        CityHot
    },
    data(){
        return{
            hotCities:[],
            cities:[]
        }
    },
    mounted(){
        this.$http.get("http://localhost:8080/static/mock/city.json").then((res)=>{
            
            const data = res.data.data
          
            this.hotCities=data.hotCities
            this.cities = data.cities
        })

    }
}
</script>

<style>

</style>
