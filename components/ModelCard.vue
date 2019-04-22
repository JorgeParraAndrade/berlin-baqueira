<template>
  <div class="model-card" :style="`background-image: url('${image}');`">
    <img class="icon" :src="icon1" :alt="title">
    <img  class="number" :src="icon2" :alt="title">
    <p v-html="title+' '+cont"></p>
  </div>
</template>

<script>
export default {
  props:['image','icon1','icon2','title','cont']

}
</script>

<style lang="scss">

  .model-card{
    width: 350px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ul{
      text-align: left !important;
      max-width: 180px !important;
      margin: 0 auto !important;
    }

    h3{
      font-family: 'roboto-black',sans-serif;
      font-size: 19px;
      color: #333333;
      width: 100%;
      text-align: left;
      margin-bottom: 10px;
      padding: 0 20px;
    }

    p{
      font-family: 'roboto-regular',sans-serif;
      font-size: 19px;
      color: #707070;
      line-height: 1.3;
      padding: 0 20px; 
      text-align: center;   

    }


    .number{
      margin: 20px 0 15px;
    }

    @media (max-width: 1080px){
      background-image: none !important;
      margin: 55px 0 30px;

      .icon{
        margin-bottom: 30px;
        max-width: 90px;
      }

      h3{
        text-align: center;
      }

      p{
        text-align: center;
        line-height: 1.3;
      }

      .number{
        display: none;
      }
    }
  }

</style>
