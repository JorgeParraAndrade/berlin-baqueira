<template>
  <div class="emp-card">
    <img :src="image" :alt="title">
    <h3>{{title}}</h3>
    <h5 v-html="subtitle"></h5>
    <p v-html="cont"></p>
  </div>
</template>

<script>
export default {
  props:['image','title','subtitle','cont']

}
</script>

<style lang="scss" scoped>
  .emp-card{
    width: 520px;
    text-align: center;

    h3{
      font-family: 'roboto-black', sans-serif;
      font-size: 56px;
      color: #333333;
      margin: 15px 0;
    }

    h5{
      font-family: 'roboto-regular', sans-serif;
      font-size: 18px;
      color: #333333;
      margin-bottom: 20px;
    }

    p{
      font-family: 'roboto-regular', sans-serif;
      font-size: 22px;
      color: #707070;
      line-height: 1.6;
    }

  }
</style>
