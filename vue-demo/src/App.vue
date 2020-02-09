<template>
  <div id="app">
    <TodoList>
      <CustomInput v-model="cusValue" />
    </TodoList>
    输出的值为：{{cusValue}}
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';
import CustomInput from './components/CustomInput.vue';

export default {
  name: 'app',
  components: {
    TodoList,
    CustomInput
  },
  data: function(){
    return {
      cusValue : ''
    }
  },
  beforeCreate(){
    console.log('beforeCreate p ' + this.cusValue)
  },
  created(){
    console.log('created p ' + this.cusValue)
  },
  beforeMount(){
     console.log('beforeMout p ' + this.cusValue)
  },
  mounted(){
     console.log('mounted p ' + this.cusValue)
  },
  beforeUpdate(){
    console.log('beforeUpdate p' + this.cusValue)
  },
  updated(){
    console.log('updated p ' + this.cusValue)
  },
  beforeDestroy(){
    console.log('beforeDestroy p ' + this.cusValue)
  },
  destroyed(){
    console.log('destroyed p ' + this.cusValue)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
