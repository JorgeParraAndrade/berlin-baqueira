<template>
  <div id="contacto" class="footer">

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
          <a href="tel:+582129593353">+58 212 959 3353</a>
        </p>
      </div>

      <div class="contact-card">
        <img class="mail" src="../assets/img/mail.png" alt="Ubicación">
        <p>
          <a href="mailto:comercial@berlinbaqueira.com">comercial@berlinbaqueira.com</a>
        </p>
      </div>
    </div>

    <div class="copy-box">
      <img src="../assets/img/logoresp.png" alt="berlin baqueira">
      <p class="desk">© 2019 Grupo Empresarial Berlín Baqueira, C.A.</p>
      <p class="resp">© 2019 Grupo Empresarial Berlín Baqueira, C.A.</p>
    </div>


  </div>
</template>

<style lang="scss" scoped>

  .desk{
    @media (max-width: 1080px) {
      display: none;
    }
  }

  .resp{
    @media (min-width: 1080px) {
      display: none;
    }
  }

  .footer{
    background-color: #333333;
    color: #ffffff;
  }

  .mail{
    @media (max-width: 1080px){
      max-width: 66px;
      max-height: 46px;
    }
  }

  .deck{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    padding: 158px 0;

    @media (max-width:1080px){
      flex-direction: column;
      align-items: center;
      padding: 30px 0;
    }

    .contact-card{

      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
      text-align: center;

      @media (max-width: 1080px){
        margin-bottom: 30px;
      }

      img{
        height: 62px;
        width: auto;
        margin-bottom: 48px;

        @media (max-width: 1080px){
          margin-bottom: 30px;
        }
      }

      p{
        line-height: 1.3;
        a{
          color:inherit;
          text-decoration: none;
        }

        @media (max-width: 1080px){
          font-size: 18px;
          font-weight: 200;
          line-height: 1.5;
        }
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
      max-width: 184px;
      @media (max-width: 1080px){
        margin-left: -20px;
      }
    }

    p{
      font-size: 10px;
      margin-bottom: 30px; 

      @media (max-width: 1080px){
        font-size: 15px;
        text-align: center;
      }
    }
  }

</style>
