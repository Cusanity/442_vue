<template>
  <div id="app">
    <el-container>
      <el-aside width="auto">
        <NavMenu/>
      </el-aside>
      <el-container>
        <el-header style="height: 60px; padding:0;">
          <NavBar/>
        </el-header>
        <el-main>
          <router-link to="/login"></router-link>
          <!-- <HelloWorld></HelloWorld>
          <CardsStack></CardsStack> -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  // import HelloWorld from './components/HelloWorld'
  // import CardsStack from './components/CardsStack'
  import NavBar from './components/NavBar'
  import NavMenu from './components/NavMenu'
  import Vue from 'vue'
  import axios from 'axios'
  import VueAxios from 'vue-axios'

  Vue.use(VueAxios, axios)

export default {
    name: 'App',
    components: {
    // HelloWorld,
    // CardsStack,
    NavBar,
    NavMenu,
},
    data: () => ({
      loading: false,
      selection: 1,
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
