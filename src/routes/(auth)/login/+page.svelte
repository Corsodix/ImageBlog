<!-- <div class="pb-8 md:pb-0.5">
	<div class="py-10 p-0 mx-auto max-w-md">
		<header class="text-center py-4">
			<div class="text-center mb-2 text-3xl font-bold">Добро пожаловать!</div>
			<p class="unstyled text-sm md:text-base opacity-50">
				Еще нет аккаунта? <a href="/register" class="">Зарегистрироваться</a>
			</p>
		</header>
		<div class="card p-6 space-y-6 shadow-xl text-left">
			<form class="space-y-4">
				<label class="label">
					<span>Почта</span>
					<input type="email" placeholder="адрес@почты.рф" class="input" />
				</label>
				<label class="label">
					<span>Пароль</span>
					<input type="password" placeholder="Ваш пароль" class="input" />
				</label>
				<label class="inline-flex items-center">
					<input type="checkbox" class="checkbox" />
					<span class="ml-2">Запомнить меня</span>
				</label>
				<button class="btn variant-filled-primary w-full">Сбросить пароль</button>
			</form>
		</div>
	</div>
</div> -->


<div class="p-0 mx-auto sm:max-w-xl md:max-w-2xl">
	<header class="text-center py-4">
		<div class="text-center mb-2 text-3xl font-bold">Добро пожаловать!</div>
		<p class="unstyled text-sm md:text-base opacity-50">
			Еще нет аккаунта? <a href="/register" class="">Зарегистрироваться</a>
		</p>	</header>
	<div class="card p-6 space-y-6 shadow-xl text-left">
		<form method="POST" class="space-y-4">
			<label for="email" class="label">
				<span>Почта<span class="text-red-500">*</span></span>
				<input type="email" class="input" id="email" name="email" required/>
			</label>
			<label for="password" class="label">
				<span>Пароль<span class="text-red-500">*</span></span>
				<input type="password" class="input" id="password" name="password" required/>
			</label>

			<div class="flex justify-end">
				<button type="submit" class="btn variant-filled-primary">Войти</button>
			</div>
		</form>
	</div>
</div>

