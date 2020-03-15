<template>
  <div id="app">
    <toaster 
    :params="{text:'Assinado com sucesso!', type:'success'}"
    />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    'toaster': () => import('@/components/toaster/toaster-default.vue')    
  }
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
