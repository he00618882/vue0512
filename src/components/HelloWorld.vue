<template>
  <span class="HelloWorld">
    <br>
    <div class="card">
      蘇斐虹 老師<br>
      教師節快樂◝(⁰▿⁰)◜
    </div>
        <!-- <ve-histogram  v-if="$store.state.veType =='histogram'" :data="doneTodosCount"></ve-histogram>
        <ve-pie  v-if="$store.state.veType =='pie'" :data="doneTodosCount"></ve-pie>
        <ve-line  v-if="$store.state.veType =='line'" :data="doneTodosCount"></ve-line> -->
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


