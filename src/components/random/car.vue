<template>
  <div class>
    <div class="container">
      <div class="car car-one">
        <div class="driver">
          <div class="main">ARRWEN</div>
          <div class="sub">PING</div>
        </div>
        <div class="psg">
          <div class="first">{{randoms[0].name}}</div>
          <div class="second">{{randoms[1].name}}</div>
          <div class="third">{{randoms[2].name}}</div>
        </div>
      </div>
      <div class="car car-two">
        <div class="driver">
          <div class="main">YUEH</div>
          <div class="sub">COOKIE</div>
        </div>
        <div class="psg">
          <div class="first">{{randoms[3].name}}</div>
          <div class="second">{{randoms[5].name}}</div>
          <div class="third">{{randoms[4].name}}</div>
        </div>
      </div>
    </div>
    <div class="container">
      <button @click="shuffleArray">Click</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      psgs: [
        { id: 1, name: "Redd" },
        { id: 2, name: "Jean" },
        { id: 3, name: "Louis" },
        { id: 4, name: "Shinny" },
        { id: 5, name: "Emily" },
        { id: 6, name: " " }
      ],
      randoms: [
        { id: 1, name: " " },
        { id: 2, name: " " },
        { id: 3, name: " " },
        { id: 4, name: " " },
        { id: 5, name: " " },
        { id: 6, name: " " }
      ]
    };
  },
  methods: {
    shuffleArray() {
      let self = this;
      var numberOfTimes = 10;
      var delay = 200;
      for (let i = 0; i < numberOfTimes; i++) {
        setTimeout(function() {
          var counter = self.psgs.length,
            temp,
            index;
          // While there are elements in the array
          while (counter > 0) {
            // Pick a random index
            index = Math.floor(Math.random() * counter);

            // Decrease counter by 1
            counter--;

            // And swap the last element with it
            temp = self.psgs[counter];
            self.psgs[counter] = self.psgs[index];
            self.psgs[index] = temp;
            self.randoms = self.psgs;
          }
          self.psgs = [
            { id: 1, name: "Redd" },
            { id: 2, name: "Jean" },
            { id: 3, name: "Louis" },
            { id: 4, name: "Shinny" },
            { id: 5, name: "Emily" },
            { id: 6, name: " " }
          ];
        }, delay * i);
      }
    }
  }
};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.car {
  border: 1px solid lightseagreen;
  height: 100vh;
  max-height: 300px;
  flex: 1;
  max-width: 375px;
  width: 100%;
  margin: 7px;
  padding: 14px;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.driver {
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% / 3 * 2);
  height: 20%;
  margin-bottom: 14px;
}
.psg {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20%;
}
.main,
.sub,
.first,
.second,
.third {
  width: 100%;
  height: 100%;
  border: 1px solid orange;
  border-radius: 5px;
  margin: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.5s;
}
button {
  padding: 8px 24px;
  border: 0;
  background: lightseagreen;
  border-radius: 35px;
  color: #f4f4f4;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  outline: none;
  cursor: pointer;
}
button:hover {
  background: rgb(63, 194, 187);
}
@media (max-width: 780px) {
  .container {
    flex-direction: column;
  }
}
</style>