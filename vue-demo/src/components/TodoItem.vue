<template>
  <li>
    <span>{{ title }}</span>
    <span>{{ number }}</span>
    <button v-on:click="addNumber()">添加1分</button>
    <button @click="resNumber()">减少1分</button>
  </li>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    number: {
      type: Number,
      default: 98
    }
  },
  data: function() {
    return {
      item: {
        title: "数学",
        number: 96
      }
    };
  },
  methods: {
    addNumber() {
      this.$emit("add-number");
    },
    resNumber() {
      this.$emit("res-number");
    }
  },
    beforeCreate(){
    console.log('beforeCreate c3 ')
  },
  created(){
    console.log('created c3 ')
  },
  beforeMount(){
     console.log('beforeMout c3 ')
  },
  mounted(){
     console.log('mounted c3 ')
  },
  beforeUpdate(){
    console.log('beforeUpdate c3')
  },
  updated(){
    console.log('updated c3 ')
  },
  beforeDestroy(){
    console.log('beforeDestroy c3 ')
  },
  destroyed(){
    console.log('destroyed c3 ')
  }
};
</script>

<style></style>
