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

	</div>

</template>

<script>
	export default {
			
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
		}

		.main-logo{
			max-width: 380px;
			img{
				width:100%;
				margin-top: -20px;
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
		}
	}

</style>
