<template>
  <div class="main-header">
    <div class="center-box">
      <p v-html="$t('header.text')"></p>
      <button class="btn-primary"><a href="#" v-scroll-to="'#modelo'">{{ $t('header.button') }}</a></button>
    </div>
  </div>
</template>

<style lang="scss" scoped>

  .main-header{

    background-image: url('../assets/img/header-back.jpg');
    background-position: top;
    background-size: cover;
    height: 765px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    @media (max-width:1080px){
      align-content: center;
      justify-content: center;
      height: 520px;
      margin-top: 81px;
    }

    .center-box{
      font-family: 'roboto-black', sans-serif;
      font-size: 56px;
      color:#333333;
      font-weight: 300;
      width: 100%;
      margin: 0 auto;
      padding-left: 200px;

      @media (max-width:1080px){
        font-size: 28px;
        padding: 0 20px;
        text-align: center;
        
      }
    }

  }
  
</style>
