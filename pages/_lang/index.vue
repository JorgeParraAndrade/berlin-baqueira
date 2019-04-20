<template>
  <section id="top" class="site">
    <menu-bar />
    <header-comp/>

    <!-- First Section -->
    <!-- <h2 id="nosotros">Soluciones por aire, mar y tierra</h2> -->
    <h2 id="nosotros">{{ $t('about.title') }}</h2>
    <section class="cont-1">
      <div class="sidea" v-html="$t('about.text')"></div>
      <div class="sideb">
        <img src="../../assets/img/plane.jpg" alt="plane">
      </div>
    </section>

    <!-- Second section -->
    <h2>{{$t('pilars.title')}}</h2>
    <section class="cont-2">

      <div class="subcont-1">
        <mini-card
          image="../back4.png"
          :title="$t('pilars.mision')"
          :cont="$t('pilars.misiontext')"
          />
        <mini-card
          image="../back4.png"
          :title="$t('pilars.vision')"
          :cont="$t('pilars.visiontext')"

          />
      </div>

      <div class="subcont-2">
        <mini-card
          image="../back4.png"
          :title="$t('pilars.values')"
          :cont="$t('pilars.valuestext')"
          />
      </div>

      <img class="separator" src="../../assets/img/back1.png" alt="separator">

    </section> 

    <!-- Third section -->
    <h2 id="empresas">{{ $t('enterprises.title') }}</h2>
    <section class="cont-3">

      <div class="subcont-h">
        <emp-card
          image="../berlin.png"
          :title="$t('enterprises.enterprises.emp1.title')"
          :subtitle="$t('enterprises.enterprises.emp1.subtitle')"
          :cont="$t('enterprises.enterprises.emp1.text')"
          />

        <emp-card
          image="../baqueira.png"
          :title="$t('enterprises.enterprises.emp2.title')"
          :subtitle="$t('enterprises.enterprises.emp2.subtitle')"
          :cont="$t('enterprises.enterprises.emp2.text')"
          :fix="true"
          />
      </div>

      <div class="subcont-w">
        <emp-card
          class="resp-fix"
          image="../quimiveco3.png"
          :title="$t('enterprises.enterprises.emp3.title')"
          :subtitle="$t('enterprises.enterprises.emp3.subtitle')"
          :cont="$t('enterprises.enterprises.emp3.text')"
          />
      </div>

      <img class="separator" src="../../assets/img/back1.png" alt="separator">

    </section>

    <!-- Fourth section -->
    <h2 id="modelo">{{$t('model.title')}}</h2>
    <section class="cont-4">

      <div class="subcont-a">
        <model-card 
          image="../back4.png"
          icon1="../hand.png"
          icon2="../1.png"
          :title="$t('model.models.mod1.title')"
          :cont="$t('model.models.mod1.text')"
          />
        <model-card 
          image="../back4.png"
          icon1="../list.png"
          icon2="../2.png"
          :title="$t('model.models.mod2.title')"
          :cont="$t('model.models.mod2.text')"
          />
      </div>

      <div class="subcont-b">
        <model-card 
          image="../back4.png"
          icon1="../cycle.png"
          icon2="../3.png"
          :title="$t('model.models.mod3.title')"
          :cont="$t('model.models.mod3.text')"
          />
        <model-card 
          image="../back4.png"
          icon1="../gear.png"
          icon2="../4.png"
          :title="$t('model.models.mod4.title')"
          :cont="$t('model.models.mod4.text')"
          />
      </div>

      <div class="subcont-a">
        <model-card 
          image="../back4.png"
          icon1="../ship.png"
          icon2="../5.png"
          :title="$t('model.models.mod5.title')"
          :cont="$t('model.models.mod5.text')"
          />
        <model-card 
          image="../back4.png"
          icon1="../money.png"
          icon2="../6.png"
          :title="$t('model.models.mod6.title')"
          :cont="$t('model.models.mod6.text')"
          />
      </div>

    </section>

    <!-- Fifth section -->
    <section class="cont-5">
      <h2>{{$t('cta.title')}}</h2>
      <div class="call-action">
        <div class="row">
          <h2>+125</h2>
          <p>
            {{$t('cta.text1')}}
          </p>
        </div>
        <div class="row" style="margin-bottom:0;">
          <h2>+15</h2>
          <p>
            {{$t('cta.text2')}}
          </p>
        </div>
      </div>
    </section>

    <!-- Sixth sextion -->
    <section id="proyectos" class="cont-6">
      <h2 style="margin:80px 0 50px;;">{{$t('cyp.title')}}</h2>
      <div class="img-cont">
        <img src="../../assets/img/logo1.png" alt="clientes-Afiliados">
        <img src="../../assets/img/logo2.png" alt="clientes-Afiliados">
      </div>
    </section>

    <!-- Seventh section -->
    <h2>{{$t('manu.title')}}</h2>
    <section class="cont-7">
      <div class="sidea" v-html="$t('manu.text')"></div>
      <div class="sideb">
        <img src="../../assets/img/shippic.jpg" alt="plane">
      </div>    
    </section>

    <footer-comp/>
  </section>
</template>

<script>
import MenuBar from '~/components/MenuBar.vue';
import HeaderComp from '~/components/Header.vue';
import FooterComp from '~/components/Footer.vue';
import MiniCard from '~/components/MiniCard.vue';
import EmpCard from '~/components/EmpCard.vue';
import ModelCard from '~/components/ModelCard.vue';

export default {
  components: {
    MenuBar,
    HeaderComp,
    FooterComp,
    MiniCard,
    EmpCard,
    ModelCard
  }
}
</script>

<style lang="scss">

  #empresas, #modelo{
    @media (max-width: 1080px){
      margin: -50px 0 25px;
    }
  }

  .site{
    h2#nosotros{
      @media (max-width: 1080px) {
        font-size: 21px;
      }
    }
  }

  h2{
    font-family: 'roboto-black', sans-serif;
    font-size: 50px;
    color: #333333;
    text-align: center;
    margin: 100px 0;

    @media (max-width:1080px){
      font-size: 30px;
      margin: 25px 0;
    }
  }

  .separator{
    width: 100%;
    margin-bottom: -290px;

    @media (max-width: 1080px){
      margin: 10px 0;
    }
  }

  .separator-2{
    width: 100%;
  }
  
  .cont-1{
    display:flex;
    flex-direction: row;

    @media (max-width:1080px){
      flex-direction: column-reverse;
    }

    .sidea{
      p{
        font-family: 'roboto-regular', sans-serif;
        font-size: 22px;
        color: #666666;
        margin-bottom: 50px;
        margin-left: 20px;
        padding-right: 20px;
        line-height: 1.6;
        text-align: justify;
        b{
          color: #000000;
          font-weight: inherit;
        }
      }

      @media (max-width:1080px){
        margin-top: 35px;
        p{
          font-size: 18px;
          line-height: 1.3;
          margin-left: 35px;
          padding-right: 35px;
        }
      }
    }

    .sideb{

      @media (max-width: 1080px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img{
          max-width: 328px;
          margin: 0 auto;
        }
      }
    }

  }

  .cont-2{
    display: flex;
    flex-direction: column;

    .subcont-1{
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin-bottom: 50px;

      @media (max-width:1080px){
        flex-direction: column;
        align-items: center;
        justify-content: center;
        div{
          &:first-child{
            margin-bottom: 40px;
          }
        }
      }
    }

    .subcont-2{
      display: flex;
      flex-direction: row;
      justify-content: center;
    }

  }

  .cont-3{

    .subcont-h{
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-around;
      margin-bottom: 100px;

      @media (max-width: 1080px){
        flex-direction: column;
        align-items: center;
      }
    }

    .subcont-w{
      display: flex;
      flex-direction: row;
      justify-content: center;
    }

  }

  .cont-4{
    
    .subcont-a{
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin-bottom: 180px;

      @media (max-width: 1080px){
        flex-direction: column;
        align-items: center;
        margin-bottom: 0;
      }
    }

    .subcont-b{
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-bottom: 80px;

      @media (max-width: 1080px){
        flex-direction: column;
        align-items: center;
        margin-bottom: 0;
      }
    }

  }

  .cont-5{
    background-color: #333333;
    color: #ffffff;
    padding: 40px;

    .row{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
      max-width: 1150px;
      margin-right: auto;
      margin-left: auto;

      @media (max-width:1080px){
        flex-direction: column;
        align-items: center;
      }

      h2{
        font-family: 'roboto-black',sans-serif;
        font-size: 76px;
        
      }

      p{
        font-family: 'roboto-medium', sans-serif;
        font-size: 27px;

        @media (max-width:1080px){
          font-size: 25px;
          text-align: center;
          margin-bottom: 50px;
        }
      }
    }

    h2{
      color: #ffffff;
      margin: 0;
      font-family: 'roboto-black',sans-serif;
      font-size: 52px;

      @media (max-width: 1080px){
        font-size: 32px;
        margin-bottom: 30px;
      }
    }
  }

  .cont-6{
    .img-cont{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;

      @media (max-width:1080px){
        flex-direction: column;
        align-items: center;
        img{
          width:95%;
        }
      }
    }
  }

  .cont-7{
    display:flex;
    flex-direction: row;
    margin-bottom: 80px;

    @media (max-width:1080px){
      flex-direction: column-reverse;
      align-items: center;
    }

    .sidea{
      p{
        font-family: 'roboto-regular', sans-serif;
        font-size: 22px;
        color: #707070;
        margin-top: 20px;
        margin-bottom: 30px;
        margin-left: 20px;
        margin-right: 20px;
        line-height: 1.6;
        text-align: justify;
        b{
          color: #000000;
          font-weight: inherit;
        }

      }
      
      @media (max-width:1080px){
        margin-top: 35px;
        p{
          font-size: 18px;
          line-height: 1.3;
          margin-left: 35px;
          padding-right: 35px;
        }
      }
    }

    .sideb{

      @media (max-width: 1080px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img{
          max-width: 328px;
          margin: 0 auto;
        }
      }
    }

  }


</style>
