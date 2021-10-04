<template>
    
<footer class="footer-distributed">

			<div class="footer-left">

				<h3>Vue<span>Movies</span></h3>

				<p class="footer-links">

					<a class="navbar-brand" style="color:#42b983;font-family:monospace;font-weight:700">
      <router-link class="router" to="/">VueMovies</router-link>
    </a>


    <router-link class="router" to="/top-dwonloads">TopDownloads</router-link> |
    <router-link class="router" to="/upcoming">Latest Movies</router-link> |
    <a href="http://esraeldawit.me">ContactDeveloper</a>





				</p>

				<p class="footer-company-name">VueMovies © 2021</p>
			</div>

			<div class="footer-center">

				<div>
					<img class="it" src="../../public/placeholder.png" alt="" width="27">
					<p><span>Adama</span> Ethiophia</p>
				</div>

				<div>
					<img class="it" src="../../public/telephone.png" alt="" width="27">
					<p>+251 982029377</p>
				</div>

				<div>
					<img class="it" src="../../public/envelope.png" alt="" width="27">
					<p><a href="http://esraeldawit.me/">support</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About VueMovies</span>
					This Site is Dedicted to Deliver Latest and New Movies For Customers called VueMovies
				</p>

				<div class="footer-icons">

					<a href="#"><img src="../../public/linkedin.png" alt="" width="27"></a>
					<a href="https://www.facebook.com/esrael.dawit.54"><img src="../../public/facebook-circular-logo.png" alt="" width="27"></a>
					<a href="https://github.com/EsraelDawit-a"><img src="../../public/github(1).png" alt="" width="27"></a>
					<a href="https://www.instagram.com/esrael13/"><img src="../../public/instagram-logo.png" alt="" width="27"></a>

				</div>

			</div>

		</footer>
</template>


<script>
export default {
    name:"Footer",

}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,500,300,700);

* {
  font-family: Open Sans;
}

section {
  width: 100%;
  display: inline-block;
  background: rgb(46, 40, 40);
  height: 50vh;
  text-align: center;
  font-size: 22px;
  font-weight: 700;
  text-decoration: underline;
}

.footer-distributed{
	background: #222;
	box-shadow: 0 1px 1px 0 rgba(65, 54, 54, 0.12);
	box-sizing: border-box;
	width: 100%;
	text-align: left;
	font: bold 16px sans-serif;
	padding: 55px 50px;
}
.it{
    margin-right:15px;
    margin-bottom: 15px;
    background-color: #fff;
    padding: 5px;
    border-radius: 5px;
}
.footer-distributed .footer-left,
.footer-distributed .footer-center,
.footer-distributed .footer-right{
	display: inline-block;
	vertical-align: top;
}

/* Footer left */

.footer-distributed .footer-left{
	width: 40%;
}

/* The company logo */

.footer-distributed h3{
	color:  #ffffff;
	font: normal 36px 'Open Sans', cursive;
	margin: 0;
}

.footer-distributed h3 span{
	color:  lightseagreen;
}

/* Footer links */

.footer-distributed .footer-links{
	color:  #ffffff;
	margin: 20px 0 12px;
	padding: 0;
}

.footer-distributed .footer-links a{
	display:inline-block;
	line-height: 1.8;
  font-weight:400;
	text-decoration: none;
	color:  inherit;
}

.footer-distributed .footer-company-name{
	color:  #222;
	font-size: 14px;
	font-weight: normal;
	margin: 0;
}

/* Footer Center */

.footer-distributed .footer-center{
	width: 35%;
}

.footer-distributed .footer-center i{
	background-color:  #33383b;
	color: #ffffff;
	font-size: 25px;
	width: 38px;
	height: 38px;
	border-radius: 50%;
	text-align: center;
	line-height: 42px;
	margin: 10px 15px;
	vertical-align: middle;
}

.footer-distributed .footer-center i.fa-envelope{
	font-size: 17px;
	line-height: 38px;
}

.footer-distributed .footer-center p{
	display: inline-block;
	color: #ffffff;
  font-weight:400;
	vertical-align: middle;
	margin:0;
}

.footer-distributed .footer-center p span{
	display:block;
	font-weight: normal;
	font-size:14px;
	line-height:2;
}

.footer-distributed .footer-center p a{
	color:  lightseagreen;
	text-decoration: none;;
}

.footer-distributed .footer-links a:before {
  content: "|";
  font-weight:300;
  font-size: 20px;
  left: 0;
  color: #fff;
  display: inline-block;
  padding-right: 5px;
}

.footer-distributed .footer-links .link-1:before {
  content: none;
}

/* Footer Right */

.footer-distributed .footer-right{
	width: 20%;
}

.footer-distributed .footer-company-about{
	line-height: 20px;
	color:  #42b983;
	font-size: 13px;
	font-weight: normal;
	margin: 0;
}

.footer-distributed .footer-company-about span{
	display: block;
	color:  #ffffff;
	font-size: 14px;
	font-weight: bold;
	margin-bottom: 20px;
}

.footer-distributed .footer-icons{
	margin-top: 25px;
}

.footer-distributed .footer-icons a{
	display: inline-block;
	width: 35px;
	height: 35px;
	cursor: pointer;
	background-color:  #fff;
	border-radius: 2px;

	font-size: 20px;
	color: #ffffff;
	text-align: center;
	line-height: 35px;

	margin-right: 3px;
	margin-bottom: 5px;
}

/* If you don't want the footer to be responsive, remove these media queries */

@media (max-width: 880px) {

	.footer-distributed{
		font: bold 14px sans-serif;
	}

	.footer-distributed .footer-left,
	.footer-distributed .footer-center,
	.footer-distributed .footer-right{
		display: block;
		width: 100%;
		margin-bottom: 40px;
		text-align: center;
	}

	.footer-distributed .footer-center i{
		margin-left: 0;
	}

}

</style>