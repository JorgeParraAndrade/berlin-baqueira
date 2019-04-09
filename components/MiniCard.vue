<template>
  <div class="mini-card" :style="`background-image: url('${image}');`">
    <h3>{{title}}</h3>
    <p v-html="cont"></p>
  </div>
</template>

<script>
export default {
  props:['title','cont','image']

}
</script>

<style lang="scss" scoped>
  .mini-card{
    width: 353px;
    padding: 20px 0;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    text-align: center;

    h3{
      font-family: 'roboto-black',sans-serif;
      font-size: 60px;
      color: #333333;
      margin-bottom: 20px;

      @media (max-width:1080px){
        font-size: 32px;
      }
    }

    p{
      font-family: 'roboto-regular', sans-serif;
      font-size: 22px;
      color: #666666;
      line-height: 1.6;

      @media (max-width:1080px){
        font-size: 18px;
        max-width: 216px;
        margin: 0 auto;
      }
    }
  }
</style>
