<template>
  <span class="HelloWorld">
    <br>
        <input type="radio" id="histogram" value="histogram" v-model="$store.state.veType">
        <label for="histogram">長條圖</label>
        <input type="radio" id="pie" value="pie" v-model="$store.state.veType">
        <label for="pie">圓餅圖</label>
        <input type="radio" id="line" value="line" v-model="$store.state.veType">
        <label for="line">折線圖</label>
        <ve-histogram  v-if="$store.state.veType =='histogram'" :data="doneTodosCount"></ve-histogram>
        <ve-pie  v-if="$store.state.veType =='pie'" :data="doneTodosCount"></ve-pie>
        <ve-line  v-if="$store.state.veType =='line'" :data="doneTodosCount"></ve-line>
  </span>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import root from  "./root"
import tree from  "./tree"

export default {
  name: 'HelloWorld',
  components: { root ,tree}, 
  data () {
    return {
      selectData : this.$store.state.selectData
    }
  },
  watch:{
    selectData:{
      doneTodosCount :function(){
        console.log("更新個")
      }
    }
  },
  computed: {
    ...mapGetters([
      'getChartData',
    ]),
    ...mapState({
    t: "type"
    }),
    ...mapState([
    "type"
    ]),
    doneTodosCount() {
      console.log('123')
      return this.$store.getters.getChartData
    },
  },
  methods:{
    
  },
  
}
</script>

<style>
.HelloWorld{
  flex-direction: row;

}
.tree{
  position:relative;
  background-color: black;
  text-align:left;
  width:auto; 
  display:inline-block  !important; display:inline; 
  color: rgb(38, 0, 255);
}
.chart{
  background-color: rgb(255, 0, 0); 
  width: 100%;
  color: rgb(38, 0, 255);
}

</style>


