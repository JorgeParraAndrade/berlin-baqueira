<template>
  <section class="site">
    <menu-bar/>
    <header-comp/> 
    <footer-comp/>
  </section>
</template>

<script>
import MenuBar from '~/components/MenuBar.vue';
import HeaderComp from '~/components/Header.vue';
import FooterComp from '~/components/Footer.vue';

export default {
  components: {
    MenuBar,
    HeaderComp,
    FooterComp
  }
}
</script>

<style lang="scss">
  

</style>
