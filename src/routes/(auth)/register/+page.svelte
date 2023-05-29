
<div class="p-0 mx-auto sm:max-w-xl md:max-w-2xl">
	<header class="text-center py-4">
		<div class="text-center mb-2 text-3xl font-bold">Добро пожаловать!</div>
		<p class="unstyled text-sm md:text-base opacity-50">Укажите свои данные для регистрации</p>
	</header>
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
			<label for="name" class="label">
				<span>Имя<span class="text-red-500">*</span></span>
				<input type="text" class="input" id="name" name="name" required />
			</label>
			<label for="surname" class="label">
				<span>Фамилия<span class="text-red-500">*</span></span>
				<input type="text" class="input" id="surname" name="surname" required />
			</label>
			<label for="division" class="label">
				<span>Дивизион<span class="text-red-500">*</span></span>
				<select value="0" class="select variant-form-material" id="division" name="division" required>
					<option value="0" disabled>Выберите свой дивизион</option>
					<option value="01. див. Дальний Восток">01. див. Дальний Восток</option>
					<option value="02. див. Восточная Сибирь">02. див. Восточная Сибирь</option>
					<option value="03. див. Западная Сибирь">03. див. Западная Сибирь</option>
					<option value="04. див. Урал">04. див. Урал</option>
					<option value="05. див. Юг">05. див. Юг</option>
					<option value="06. див. Средняя Волга">06. див. Средняя Волга</option>
					<option value="07. див. Верхняя Волга">07. див. Верхняя Волга</option>
					<option value="08. див. Центральный">08. див. Центральный</option>
					<option value="09. див. Черноземье">09. див. Черноземье</option>
					<option value="10. див. Приволжский">10. див. Приволжский</option>
					<option value="11. див. Северо-Западный">11. див. Северо-Западный</option>
				</select>
			</label>
			<label for="firm" class="label">
				<span>Филиал</span>
				<input type="text" class="input" id="firm" name="firm"/>
			</label>
			<label for="about" class="label">
				<span>О себе</span>
				<input type="text" class="input" id="about" name="about" />
			</label>
			<label for="img" class="label">
				<span>Изображение</span>
				<input type="file" class="input" id="img" name="img" />
			</label>
			<div class="flex justify-between">
				<span><span class="text-red-500">*</span> Обязательно</span>
				<button type="submit" class="btn variant-filled-secondary">Отправить</button>
			</div>
		</form>
	</div>
</div>
