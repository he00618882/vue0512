<template>
  <span class="HelloWorld">
    EEEE
        <ve-histogram style="width:50%" v-if="$store.state.selectData =='fun1-1'" :data="doneTodosCount"></ve-histogram>
        <ve-pie style="width:50%" v-if="$store.state.selectData =='func1-2'" :data="doneTodosCount"></ve-pie>
        <ve-funnel style="width:50%" v-if="$store.state.selectData =='func2-1'" :data="doneTodosCount"></ve-funnel>
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
      tree: {
       name: "目錄",
       Lv:'1',
       node: [
         {
           name: "基本圖表",
           Lv:'1',
           node: [
             {
               name: "fun1-1",
               Lv:'1',
             },
             {
               name: "func1-2",
               Lv:'2',
             },
           ],
         },
         {
           name: "進階圖表",
           Lv:'2',
           node: [
             {
               name: "func2-1",
               Lv:'3',
             },
           ],
         },
       ],
     },

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


