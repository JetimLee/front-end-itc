<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <PostList v-if="showPosts" :posts="posts" />
    <div v-if="loading">loading</div>
    <button @click="togglePosts">Toggle Posts</button>
    <p ref="p">
      MY name is {{ ninjaone.name }} and my age is {{ ninjaone.age }}
    </p>
    <button @click="handleClick">Submit</button>
    <button @click="ninjaone.age++">Increase age</button>
    <input type="text" v-model="ninjaone.name" />
    <h2>reactive</h2>
    <p>{{ ninjatwo.name }} - {{ ninjatwo.age }}</p>
    <button @click="updateNinjaTwo">Update Ninja Two</button>
    <h2>Computed</h2>
    <input type="text" v-model="search" />
    <p>search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
      {{ name }}
    </div>
    <p v-if="matchingNames.length === 0">No results!</p>
    <p>{{ computedName }}</p>
  </div>
</template>

<script>
// @ is an alias to /src

import PostList from "../components/PostList.vue";

import { ref, reactive, computed, watch, watchEffect } from "vue";

export default {
  name: "HomeView",
  components: {
    PostList,
  },
  setup() {
    //composition api
    //gets afcess to watch and watchEffect

    console.log("setup");

    // const p = ref(null);
    // const name = ref("mario");
    // const age = ref(30);

    //biggest difference between ref/reactive is that in reactive you cannot use primitive values

    const search = ref("");

    watch(search, () => {
      console.log("search changed");
    });

    watchEffect(() => {
      //this tracks any dependencies that are passed into it, similar to useEffect
      console.log("watch effect function run");
      console.log(search.value, "watch effect ran");
    });

    const posts = ref([]);
    const error = ref(null);
    const loading = ref(false);

    const load = async () => {
      try {
        let response = await fetch("http://localhost:3000/posts");
        loading.value = true;
        console.log(loading.value);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          posts.value = data;
          loading.value = false;
        } else {
          throw new Error("An error occurred when getting the data");
        }
      } catch (err) {
        console.log("an error occurred", err);
        error.value = err;
        loading.value = false;
      }
    };

    load();

    const ninjaone = ref({ name: "mario", age: 30 });
    const ninjatwo = reactive({ name: "luigi", age: 35 });
    const names = ref([
      "mario",
      "yoshi",
      "luigi",
      "toad",
      "bowser",
      "koopa",
      "peach",
    ]);

    const matchingNames = computed(() => {
      return names.value.filter((name) =>
        name.includes(search.value.toLowerCase())
      );
    });

    const computedName = computed(() => {
      return "sapirush";
    });

    const handleClick = () => {
      console.log("you clicked me");
      ninjaone.value.name = "gavin";
    };
    const updateNinjaTwo = () => {
      ninjatwo.name = "sam";
      ninjatwo.age = 69;
    };

    const togglePosts = () => {
      showPosts.value = !showPosts.value;
    };

    const showPosts = ref(true);

    return {
      ninjaone,
      handleClick,
      ninjatwo,
      updateNinjaTwo,
      computedName,
      names,
      matchingNames,
      search,
      posts,
      showPosts,
      togglePosts,
      error,
      loading,
    };
  },

  // created() {
  //   console.log("created");
  // },
  // mounted() {
  //   console.log("mounted");
  // },
};
</script>
