<template>
  <div id="UI">
    <div class="tree">
      <img src="data:image/jpeg;base64,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" />
        <ul>
          <tree :treeData ="tree"></tree>
        </ul>
    </div>
    <span class='chartSeat'>
      RRR
      <router-view></router-view>
    </span>
  </div>
</template>
<style>

</style>

<script>
import helloWorld from  "../src/components/HelloWorld"
import root from  "../src/components/root"
import tree from  "../src/components/tree"
export default {
  name: 'App',
  components: { helloWorld ,root ,tree},
  data () {
    return {
      tree: {
       name: "root",
       Lv:'1',
       node: [
         {
           name: "fun1",
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
           name: "func2",
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
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

ul {
  margin: 0px 0px 0px 5px;
  list-style: none;
  line-height: 2em;
  font-family: Arial;
}

ul li {
  font-size: 16px;
  position: relative;
}

ul li:before {
  position: absolute;
  left: -15px;
  top: 0px;
  content: '';
  display: block;
  border-left: 1px solid #ddd;
  height: 1em;
  border-bottom: 1px solid #ddd;
  width: 10px;
}

ul li:after {
  position: absolute;
  left: -15px;
  bottom: -7px;
  content: '';
  display: block;
  border-left: 1px solid #ddd;
  height: 100%;
}

ul li.root {
  margin: 0px 0px 0px -5px;
}

ul li.root:before {
  display: none;
}

ul li.root:after {
  display: none;
}

ul li:last-child:after {
  display: none;
}
.UI{
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: #1D1E23;
    z-index: 100;
}

.chartSeat{
  background-color: #ff0000;

}
</style>
