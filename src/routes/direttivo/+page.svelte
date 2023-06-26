<span class="separator"></span>
<div class="container">
	<div class="box">
		<span class="content">
			<div class="info">
				<h3 class="role">Presidente</h3>
				<p class="contact-info">
					<em>Michele Rotella</em>
					<br/>
					<i class="fa-solid fa-phone"></i>
					<a href="tel:+39335455858">335455858</a>
					<br/>
					<i class="fa-solid fa-envelope"></i>
					<a href="mailto:legafccalabria@gmail.com">legafccalabria@gmail.com</a>
				</p>
			</div>
			<img src="" alt="Michele Rotella" class="profile-img">
		</span>
	</div>
	<div class="box">
		<span class="content">
			<div class="info">
				<h3 class="role">Vice Presidente</h3>
				<p class="contact-info">
					<em>Domenico Montesano</em>
					<br/>
					<i class="fa-solid fa-phone"></i>
					<a href="tel:+393388176027">3388176027</a>
					<br/>
					<!-- <i class="fa-solid fa-envelope"></i>
					<a href="mailto:domenico.montesano57@libero.it">domenico.montesano57@libero.it</a> -->
				</p>
			</div>
			<img src="" alt="Domenico Montesano" class="profile-img">
		</span>
	</div>
	<div class="box">
		<span class="content">
			<div class="info">
				<h3 class="role">Segretario</h3>
				<p class="contact-info">
					<em>Alessandra Rotella</em>
					<br/>
					<i class="fa-solid fa-phone"></i>
					<a href="tel:+393206061654">3206061654</a>
					<br/>
					<i class="fa-solid fa-envelope"></i>
					<a href="mailto:rotellalessandra@libero.it">rotellalessandra@libero.it</a>
				</p>
			</div>
			<img src="" alt="Alessandra Rotella" class="profile-img">
		</span>
	</div>
	<div class="box">
		<span class="content">
			<div class="info">
				<h3 class="role">Tesoriere</h3>
				<p class="contact-info">
					<em>Olga Bokach</em>
					<br/>
					<i class="fa-solid fa-phone"></i>
					<a href="tel:+393271529923">3271529923</a>
					<br/>
					<i class="fa-solid fa-envelope"></i>
					<a href="mailto:bokach74@virgilio.it">bokach74@virgilio.it</a>
				</p>
			</div>
			<img src="" alt="Olga Bokach" class="profile-img">
		</span>
	</div>
	<div class="box">
		<span class="content">
			<div class="info">
				<h3 class="role">Consigliere</h3>
				<p class="contact-info">
					<em>Pasquale Costantino</em>
					<br/>
					<i class="fa-solid fa-phone"></i>
					<a href="tel:+393488029041">3488029041</a>
					<br/>
					<i class="fa-solid fa-envelope"></i>
					<a href="mailto:linocostantino@virgilio.it">linocostantino@virgilio.it</a>
				</p>
			</div>
			<img src="" alt="Pasquale Costantino" class="profile-img">
		</span>
	</div>
	<div class="box">
		<span class="content">
			<div class="info">
				<h3 class="role">Consigliere</h3>
				<p class="contact-info">
					<em>Francesco Corasaniti</em>
					<br/>
					<i class="fa-solid fa-phone"></i>
					<a href="tel:+393209757773 ">3209757773 </a>
					<br/>
					<i class="fa-solid fa-envelope"></i>
					<a href="mailto:corfra1980@libero.it">corfra1980@libero.it</a>
				</p>
			</div>
			<img src="" alt="Francesco Corasaniti" class="profile-img">
		</span>
	</div>
</div>
<style lang="scss">
	div.box	{
		border: 4px solid #016bb7;
		border-radius: 40px;
		max-width: 40%;
		margin: 2em;

		animation-name: slideinl;
		animation-duration: 1s;
	}
	div.box:nth-child(even)	{
		position: relative;
		left: calc(55% - .5em);

		animation-name: slideinr;
		animation-duration: 1s;
	}
	div.info	{
		max-width: 40%;
		margin: 2em;
	}
	p.contact-info > a	{
		text-decoration: none;
	}
	span.separator	{
		border: 29px solid #016bb7;
		position: absolute;
		top: 15vh;
		height: 110vmax;
		left: calc(50% - 30px);
	}
	span.content	{
		display: flex;
		flex-flow: row;
	}
	img.profile-img	{
		margin: 6em;
	}
	em	{
		font-size: 1.2em;
		font-weight: 700;
	}
	h3	{
		font-size: 1.6em;
	}
	@keyframes slideinl	{
		from	{
			margin-left: -100vw;
		}
		to	{
			margin-left: 0;
		}
	}
	@keyframes slideinr	{
		from	{
			margin-left: 100vw;
		}
		to	{
			margin-left: 0;
		}
	}
</style>