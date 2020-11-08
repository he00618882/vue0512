<template>
  <div class="root">
      <input type="text" v-model="$store.state.Lv" >
  </div>
</template>


<script>
import { mapState, mapGetters } from 'vuex';
export default {
  name: 'root',
  data () {
    return {
        
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
  }
}
</script>
