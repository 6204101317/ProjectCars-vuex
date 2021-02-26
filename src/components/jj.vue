<template>
  <div class="hell">
   <h1>{{ getTodoById(id)}}</h1>
  </div>
</template>

<script>
import { mapGetters} from "vuex";
export default {
  name: "HelloWorld",
  props: {
    id: Number
  },
  computed:{
    ...mapGetters([
      "doneTodosCount",
      "doubleCounter",
      "getTodoById",
      "doneTodos",
      "getTodoById"
    ])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
