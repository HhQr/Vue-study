<template>
  <div>
    <p>自定义组件使用 v-model</p>
    <input :value="value" @input="$emit('input' , $event.target.value)" />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  beforeCreate(){
    console.log('beforeCreate c2 ')
  },
  created(){
    console.log('created c2 ')
  },
  beforeMount(){
     console.log('beforeMout c2 ')
  },
  mounted(){
     console.log('mounted c2 ')
  },
  beforeUpdate(){
    console.log('beforeUpdate c2')
  },
  updated(){
    console.log('updated c2 ')
  },
  beforeDestroy(){
    console.log('beforeDestroy c2 ')
  },
  destroyed(){
    console.log('destroyed c2 ')
  }
};
</script>

<style></style>
