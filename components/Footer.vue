<template>
  <div class="footer">

    <div class="deck">
      <div class="contact-card">
        <img src="../assets/img/house.png" alt="Ubicación">
        <p>
          Centro Ciudad Comercial <br>
          Tamanaco, Torre A, Piso 7, <br>
          Ofic. 708 - Caracas, Distrito Capital <br>
        </p>
      </div>

      <div class="contact-card">
        <img src="../assets/img/phone-w.png" alt="Ubicación">
        <p>
          +58 212 959 3353
        </p>
      </div>

      <div class="contact-card">
        <img src="../assets/img/mail.png" alt="Ubicación">
        <p>
          comercial@berlinbaqueira.com
        </p>
      </div>
    </div>

    <div class="copy-box">
      <img src="../assets/img/logo-w.png" alt="berlin baqueira">
      <p>© Berlin Baqueira Todos los derechos reservados 2019</p>
    </div>


  </div>
</template>

<style lang="scss" scoped>
  .footer{
    background-color: #333333;
    color: #ffffff;
  }

  .deck{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    padding: 158px 0;

    .contact-card{

      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
      text-align: center;

      img{
        height: 62px;
        width: auto;
        margin-bottom: 48px;
      }

      p{
        line-height: 35px;
      }

    }
  }

  .copy-box{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img{
      margin-bottom: 13px;
    }

    p{
      font-size: 10px;
      margin-bottom: 30px;
    }
  }

</style>
