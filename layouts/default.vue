<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">

@font-face {
  font-family: 'roboto-regular';
  src: url('~assets/fonts/roboto-regular.ttf');
}

@font-face {
  font-family: 'roboto-black';
  src: url('~assets/fonts/roboto-black.ttf');
}

@font-face {
  font-family: 'roboto-medium';
  src: url('~assets/fonts/roboto-medium.ttf');
}

html {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.btn-primary{
  font-family: 'roboto-black', sans-serif;
  font-size: 19px;
  padding: 15px 30px;
  background-color: #FC3A2C;
  border: none;
  border-radius: 25px;
  color: #ffffff;

  @media (max-width: 1080px){
    margin-top: 80px;
    font-size: 12px;
    padding: 13px 60px;
  }
}

</style>
