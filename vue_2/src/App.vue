<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="NohTyp"/>
    <SchoolCompo/>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  import SchoolCompo from './components/SchoolCompo.vue'
  
  export default {
    name: 'App',
    components: {
      HelloWorld,
      SchoolCompo
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
  margin-top: 60px;
}
</style>
