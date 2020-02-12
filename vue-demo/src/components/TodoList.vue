<template>
  <div id="todo-list">
    <ul>
      <TodoItem
        v-for="item of list"
        :key="item.name"
        @add-number="addNumber(item)"
        @res-number="resNumber(item)"
        :title="item.title"
        :number="item.number"
      />
      <slot></slot>
    </ul>
    <p>使用Vuex {{ loading }}   {{title}}</p>
    <h5>{{ count }}</h5>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  name: "todo-list",
  components: {
    TodoItem
  },
  data: function() {
    return {
      list: [
        {
          title: "数学",
          number: 98
        },
        {
          title: "英语",
          number: 88
        }
      ]
    };
  },
  computed: {
    count: function() {
      return this.$store.state.count;
    },
    loading: function() {
      return this.$store.state.loading;
    },
    title : function (){
      return this.$store.state.title;
    }
  },
  methods: {
    addNumber(item) {
      item.number++;
      this.$store.dispatch("asyncShowCount");
    },
    resNumber(item) {
      item.number--;
      this.$store.commit('increment' , -10);
    }
  },
  beforeCreate() {
    console.log("beforeCreate c1 ");
  },
  created() {
    console.log("created c1 ");
  },
  beforeMount() {
    console.log("beforeMout c1 ");
  },
  mounted() {
    console.log("mounted c1 ");
  },
  beforeUpdate() {
    console.log("beforeUpdate c1");
  },
  updated() {
    console.log("updated c1 ");
  },
  beforeDestroy() {
    console.log("beforeDestroy c1 ");
  },
  destroyed() {
    console.log("destroyed c1 ");
  }
};
</script>

<style></style>
