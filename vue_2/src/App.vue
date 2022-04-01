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
          <HelloWorld msg="NohTyp"/>
          <SchoolCompo/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld'
  import SchoolCompo from './components/SchoolCompo'
  import NavBar from './components/NavBar'
  import NavMenu from './components/NavMenu'

export default {
    name: 'App',
    components: {
    HelloWorld,
    SchoolCompo,
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
