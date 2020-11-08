<template>
    <li @click.stop="toggle(treeData.name)" v-if="$store.state.Lv >= treeData.Lv"  :class="treeData.name=='root'?'?root':''">
      {{treeData.name}}
      <ul v-show="open" v-if="treeData.node && treeData.node.length" >
        <tree v-for="value , index in treeData.node" :key="index" :treeData="value"></tree>
      </ul>
    </li>
</template>


<script>
import { mapState, mapGetters } from 'vuex';
import tree from  "./tree"
export default {
  name: 'tree',
  data () {
    return {
      open:false,
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
      return this.$store.getters.getChartData
    },
  },
  methods:{
    toggle(name){
      if(this.treeData.node && this.treeData.node.length){
        this.open = !this.open ;
      }else{
        console.log(name)
        this.$store.state.selectData =name;
      }
    }
  },
  components: {tree},
  props:['treeData']
}
</script>

