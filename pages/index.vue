<template>
  <section id="top" class="site">
    <menu-bar />
    <header-comp/>

    <!-- First Section -->
    <h2 id="nosotros">Soluciones por aire, mar y tierra</h2>
    <section class="cont-1">
      <div class="sidea">
        <p>
          <b>El Grupo Empresarial Berlin Baqueira</b> se ha consolidado 
          como líder en soluciones de importación y logística de materias primas en Venezuela.
          <b>Nuestro portafolio</b> de productos comprende cartones
          corrugados, empaque PET, polipropileno y químicos, 
          entre varios otros. 
          </p>
          <p><b>El Grupo</b> es proactivo en diferentes
          líneas  de negocio, teniendo un brazo logístico y
          financiero que le permite ser competitivo en
          soluciones por aire, mar y tierra en <b>el territorio</b>
          <b>venezolano</b> y <b>a nivel internacional.</b>
        </p>
      </div>
      <div class="sideb">
        <img src="../assets/img/plane.jpg" alt="plane">
      </div>
    </section>

    <!-- Second section -->
    <h2>Nuestro Pilares</h2>
    <section class="cont-2">

      <div class="subcont-1">
        <mini-card
          image="./back4.png"
          title="Misión"
          cont="Creamos y ejecutamos las mejores soluciones para los retos logísticos y financieros del empresariado venezolano"
          />
        <mini-card
          image="./back4.png"
          title="Valores"
          cont="Honestidad <br> Consistencia <br> Eficiencia"
          />
      </div>

      <div class="subcont-2">
        <mini-card
          image="./back4.png"
          title="Visión"
          cont="Ser la empresa líder en  el desarrollo de soluciones  para las marcas más emblemáticas y queridas  de los venezolanos"
          />
      </div>

      <img class="separator" src="../assets/img/back1.png" alt="separator">

    </section> 

    <!-- Third section -->
    <h2 id="empresas">Empresas</h2>
    <section class="cont-3">

      <div class="subcont-h">
        <emp-card
          image="./berlin.png"
          title="Berlin Consulting"
          subtitle="Consultoría financiera y de cadena de suministro "
          cont="- Aliado Estratégico de Empacor, S.A. (Colombia) para el desarrollo de la categoría de cartón corrugado en Venezuela.<br>- Operación integrada  verticalmente en soluciones de cartón corrugado (desarrollo y/o homologación, fabricación, importación, almacenamiento y despacho en planta)"
          />

        <emp-card
          image="./baqueira.png"
          title="Inversiones <br> Baqueria Beirit"
          subtitle="Empresa dedicada a la importación y distribución de material de empaque (PET y sacos de polipropileno y/o fique) y pellets de polipropileno"
          cont="- Aliado Estratégico de Esenttia (Colombia) para la distribución de polipropileno en Venezuela <br>- Aliado Estratégico de Microplast SAS (Colombia) para soluciones en  empaque PET para Venezuela"
          />
      </div>

      <div class="subcont-w">
        <emp-card
          class="resp-fix"
          image="./quimiveco3.png"
          title="Inversiones Quimiveco"
          subtitle="Empresa dedicada a la importación y distribución de  una amplia gama de productos  químicos"
          cont="- Régimen 4 y 7 aprobados para la importación, almacenamiento y distribución de materiales químicos restringidos <br>- Galpón habilitado para el almacenamiento de químicos restringidos"
          />
      </div>
      <img class="separator" src="../assets/img/back1.png" alt="separator">
    </section>

    <!-- Fourth section -->
    <h2 id="modelo">Modelo</h2>
    <section class="cont-4">

      <div class="subcont-a">
        <model-card 
          image="./back4.png"
          icon1="./hand.png"
          icon2="./1.png"
          title="El Cliente"
          cont="solicita cotización de materia prima, refiriéndonos al proveedor internacional o solicitando desarrollo"
          />
        <model-card 
          image="./back4.png"
          icon1="./list.png"
          icon2="./2.png"
          title="Recibida"
          cont="la proforma de materia prima, se elabora estructura de costos en BsS, sujeta a aprobación del Cliente"
          />
      </div>

      <div class="subcont-b">
        <model-card 
          image="./back4.png"
          icon1="./cycle.png"
          icon2="./3.png"
          title="El Cliente"
          cont="revisa la estructura de costos en sus diferentes departamentos:<br>- Gerencia<br> - Finanzas<br> - Auditoría"
          />
        <model-card 
          image="./back4.png"
          icon1="./gear.png"
          icon2="./4.png"
          title="El Cliente"
          cont="aprueba la estructura de costos e instruye ejecutar la operación"
          />
      </div>

      <div class="subcont-a">
        <model-card 
          image="./back4.png"
          icon1="./ship.png"
          icon2="./5.png"
          title="El Grupo"
          cont="realiza la importación y despacha en planta"
          />
        <model-card 
          image="./back4.png"
          icon1="./money.png"
          icon2="./6.png"
          title="El Cliente"
          cont="cancela una vez recibida la mercancía en planta, en BsS a la tasa del día del despacho"
          />
      </div>

    </section>

    <!-- Fifth section -->
    <section class="cont-5">
      <h2>Datos Claves</h2>
      <div class="call-action">
        <div class="row">
          <h2>+125</h2>
          <p>
            Operaciones realizadas bajo este esquema logístico y financiero
          </p>
        </div>
        <div class="row" style="margin-bottom:0;">
          <h2>+15</h2>
          <p>
            Aliados comerciales distribuidos en Europa, Asia y América
          </p>
        </div>
      </div>
    </section>

    <!-- Sixth sextion -->
    <section id="proyectos" class="cont-6">
      <h2 style="margin:80px 0 50px;;">Clientes & Proveedores</h2>
      <div class="img-cont">
        <img src="../assets/img/logo1.png" alt="clientes-Afiliados">
        <img src="../assets/img/logo2.png" alt="clientes-Afiliados">
      </div>
    </section>

    <!-- Seventh section -->
    <h2>Manufactura Inteligente </h2>
    <section class="cont-7">
      <div class="sidea">
        <p>
          <b>Para aumentar</b> la eficiencia y reducir 
          la exposición a paradas no programadas, 
          auditamos las líneas de producción 
          y hacemos la planeación de <b>mantenimientos 
          preventivos</b> en conjunto con un manejo 
          de inventario de piezas sensibles 
          y consumibles.
        </p>
        <p>
          <b>Por medio de esta iniciativa</b> buscamos 
          que el retorno de los activos de nuestros 
          clientes sea el mayor posible, identificando 
          las potenciales contingencias antes que 
          se materialicen.
        </p>
      </div>
      <div class="sideb">
        <img src="../assets/img/shippic.jpg" alt="plane">
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
      align-items: baseline;
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
