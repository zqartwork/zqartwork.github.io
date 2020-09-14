<template>
  <div id="app">
    <Header></Header>
    <Car></Car>
  </div>
</template>

<script>
import Header from "./components/random/header.vue";
import Car from "./components/random/car.vue";
export default {
  name: "app",
  components: {
    Header,
    Car
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900&display=swap");
* {
  -webkit-user-select: none; /* for Chrome */
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
html,
body {
  font-family: "Montserrat", sans-serif;
}
.container {
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
  padding: 14px;
}
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  -webkit-border-radius: 10px;
  border-radius: 10px;
  margin: 80px 0 5px 0;
}
::-webkit-scrollbar-thumb {
  -webkit-border-radius: 4px;
  border-radius: 4px;
  background: rgb(219, 219, 219);
}
</style>
