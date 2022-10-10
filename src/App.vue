<template>
  <div class="container">
    <NavbarPage />
    <router-view />
  </div>
</template>

<script>
import NavbarPage from "./components/NavbarPage";

export default {
  components: { NavbarPage },
};
</script>