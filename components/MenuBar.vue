<template>

	<div class="main-menu" id="top"> 

		<div class="container">

			<div class="main-logo">
				<img src="../assets/img/logo.png" alt="Berlin Baqueira">
			</div>

			<div class="menu-options">
				<ul>
					<li><a href="#" v-scroll-to="'#top'">Inicio</a></li>
					<li><a href="#" v-scroll-to="'#nosotros'">Nosotros</a></li>
					<li><a href="#" v-scroll-to="'#empresas'">Empresas</a></li>
					<li><a href="#" v-scroll-to="'#modelo'">Modelo</a></li>
					<li><a href="#" v-scroll-to="'#proyectos'">Proyectos</a></li>
					<li><a href="#" v-scroll-to="'#contacto'"><img src="../assets/img/phone.png" alt="Contacto"></a></li>
				</ul>
			</div>


		</div>

		<div class="resp-menu">
			<img class="logo" src="../assets/img/logo.png" alt="Berlin Baqueira">
			<img class="openmenu" src="../assets/img/menu.png" alt="Menu" ref="menutrigger" @click="openmenu()">
		</div>

		<div class="resp-menu-options" ref="respmenu">
			<img class="close-btn" src="../assets/img/close.png" alt="close" ref="closetrigger" @click="closemenu()">
			<ul>
				<li><a href="#" v-scroll-to="'#top'" @click="closemenu()">Inicio</a></li>
				<li><a href="#" v-scroll-to="'#nosotros'" @click="closemenu()">Nosotros</a></li>
				<li><a href="#" v-scroll-to="'#empresas'" @click="closemenu()">Empresas</a></li>
				<li><a href="#" v-scroll-to="'#modelo'" @click="closemenu()">Modelo</a></li>
				<li><a href="#" v-scroll-to="'#proyectos'" @click="closemenu()">Proyectos</a></li>
				<li><a href="#" v-scroll-to="'#contacto'" @click="closemenu()">Contacto</a></li>
			</ul>
		</div>



	</div>

</template>

<script>
	export default {
			methods:{
				openmenu(){
					this.$refs.respmenu.style.transform = 'translateY(0)';
				},

				closemenu(){
					this.$refs.respmenu.style.transform = 'translateY(-100vh)';
				}
			}
	}
</script>

<style lang="scss" scoped>

	.main-menu{

		position: absolute;
    top: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
		padding: 45px 67px;

		.container{
			margin: 0 auto;
      width: inherit;
      max-width: 1366px;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;

			@media (max-width: 1080px) {
				display: none;
			}
		}

		.main-logo{
			max-width: 380px;
			img{
				width:100%;
				margin-top: -20px;
			}
			@media (max-width: 1080px) {
				display: none;
			}
		}

		.menu-options{

			ul{
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				list-style: none;

				li{
					margin-right: 30px;
					font-size: 18px;
					
					a{
						color: inherit;
						text-decoration: none;
						font-weight: 400;
					}

					&:last-of-type{
						margin-right: 0;
					}
				}

			}

			@media (max-width: 1080px) {
				display: none;
			}
		}
		@media (max-width: 1080px) {
			padding: 0;
		}
	}

	.resp-menu{

		display: none;

		@media (max-width:1080px){
			width: 100%;
			background-color: #ffffff;
			height: 81px;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			padding: 0 25px;
			position: fixed;

			.logo{
				width: 162px;
				height: 36.21px;
				cursor: pointer;
        margin-top: 5px;
			}

		}
	}

	.openmenu{
		cursor: pointer;
	}

	.resp-menu-options{
		position: absolute;
    background-color: #ffffff;
    width: 100%;
		height: 100vh;
		position: fixed;
		display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
		transform: translateY(-100vh);
		transition: all ease .3s;

		ul{

			list-style: none;

			li{
				list-style: none;
				padding: 10px 0;
    		font-size: 20px;
				text-align: center;

				a{
					color: inherit;
					text-decoration: none;
				}

			}

		}

    @media (min-width:1080px){
      display: none;
    }
	}

	.close-btn{
		position: absolute;
    top: 20px;
    right: 20px;
		cursor: pointer;
	}

</style>
