<template>
  <div class="home">
    <!-- vuex basics -->
    <!-- <div>points : {{ points }}</div>
    <button @click="updatePoints(1)">add a point</button>
    <button @click="updatePoints(-1)">remove a point</button> -->
    <!-- Vuex basics -->

    <div v-for="blog in blogs" :key="blog.id">
      <div class="blog">
        <h3>{{ blog.title }}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          aspernatur consectetur doloremque sunt ducimus enim iure animi fugit
          nulla et! Perferendis autem deleniti quo eum corrupti reiciendis
          voluptatem ab ducimus?
        </p>
        <div class="icons" v-if="user">
          <span>upvote or downvote this article: </span>
          <span class="material-icons">thumb_up</span>
          <span class="material-icons">thumb_down</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "HomeView",
  setup() {
    const blogs = ref([
      { title: "Why Coffee is Better than Tea", id: 1 },
      { title: "...Then I Took an Arrow in the Knee", id: 2 },
      { title: "Mario vs Luigi, Ultimate Showdown", id: 3 },
    ]);

    const store = useStore();

    console.log(store.state.user);
    // store.commit("setUser", "Severus");
    // Ce computed est egal à c k j'ai mi ds l computed =
    // const points = computed(() => store.state.points);

    // Cette method est egal à c k j'ai mi ds l methods =>
    // const updatePoints = (p) => {
    //   store.commit("updatePoints", p);
    // };

    return {
      blogs,
      user: computed(() => store.state.user),
      // points,
      // updatePoints,
    };
  },
  // Cette method est egal à c k j'ai mi ds l setup =>
  // methods: {
  //   updatePoints(points) {
  //     this.$store.commit("updatePoints", points);
  //   },
  // },
  // Ce computed est egal à c k j'ai mi ds l setup =
  // computed: {
  //   points() {
  //     return this.$store.state.points;
  //   },
  // },
};
</script>
