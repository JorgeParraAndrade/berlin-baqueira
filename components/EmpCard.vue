<template>
  <div class="emp-card">
    <img :src="image" :alt="title">
    <h3 v-html="title"></h3>
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

  .resp-fix{
    @media (max-width: 1080px){
      margin-top: -122px;

      h3{
        margin-top: -15px !important;
      }
    }
  }
  .emp-card{
    width: 520px;
    text-align: center;

    @media (max-width: 1080px){
      width: auto;

      img{
        width: 80%;
      }
    }

    h3{
      font-family: 'roboto-black', sans-serif;
      font-size: 50px;
      color: #333333;
      margin: 15px 0;

      @media (max-width: 1080px){
        font-size: 32px;
      }
    }

    h5{
      font-family: 'roboto-regular', sans-serif;
      font-size: 18px;
      color: #333333;
      margin-bottom: 20px;

      @media (max-width: 1080px){
        font-size: 17px;
        max-width: 206px;
        margin: 0 auto 20px;
      }
    }

    p{
      font-family: 'roboto-regular', sans-serif;
      font-size: 22px;
      color: #707070;
      line-height: 1.3;
      text-align: justify;

      @media (max-width: 1080px){
        font-size: 18px;
        max-width: 307px;
        margin: 0 auto 60px;
      }
    }

  }
</style>
