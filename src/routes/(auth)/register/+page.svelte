<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	type Profile = {
		name: String;
		surname: String;
		email: String;
		role: String;
		division: String;
		firm: String;
		about: String;
		img: String;
	};
</script>

<div class="pb-8 md:pb-0.5">
	<div class="py-10 p-0 mx-auto max-w-5xl">
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
				<div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
					<label class="label">
						<span>Input (text)</span>
						<input class="input variant-form-material" type="text" placeholder="input text" />
					</label>
					<label class="label">
						<span>Input (password)</span>
						<input
							class="input variant-form-material"
							type="password"
							placeholder="Enter password..."
						/>
					</label>
					<label class="label">
						<span>Select</span>
						<select class="select variant-form-material">
							<option value="1">Option 1</option>
							<option value="2">Option 2</option>
							<option value="3">Option 3</option>
							<option value="4">Option 4</option>
							<option value="5">Option 5</option>
						</select>
					</label>
				</div>
			</form>
		</div>
	</div>
</div>
<div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
	<label class="label">
		<span>Input (text)</span>
		<input class="input variant-form-material" type="text" placeholder="input text" />
	</label>
	<label class="label">
		<span>Input (password)</span>
		<input class="input variant-form-material" type="password" placeholder="Enter password..." />
	</label>
	<label class="label">
		<span>Select</span>
		<select class="select variant-form-material">
			<option value="1">Option 1</option>
			<option value="2">Option 2</option>
			<option value="3">Option 3</option>
			<option value="4">Option 4</option>
			<option value="5">Option 5</option>
		</select>
	</label>
</div>

<div class="pb-8 md:pb-0.5">
	<div class="py-10 p-0 mx-auto max-w-md">
		<form>
			<div class="relative z-0 w-full mb-6 group">
				<input
					type="email"
					name="floating_email"
					id="floating_email"
					class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
					placeholder=" "
					required
				/>
				<label
					for="floating_email"
					class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>Email address</label
				>
			</div>
			<div class="relative z-0 w-full mb-6 group">
				<input
					type="password"
					name="floating_password"
					id="floating_password"
					class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
					placeholder=" "
					required
				/>
				<label
					for="floating_password"
					class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>Password</label
				>
			</div>
			<div class="relative z-0 w-full mb-6 group">
				<input
					type="password"
					name="repeat_password"
					id="floating_repeat_password"
					class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
					placeholder=" "
					required
				/>
				<label
					for="floating_repeat_password"
					class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>Confirm password</label
				>
			</div>
			<div class="grid md:grid-cols-2 md:gap-6">
				<div class="relative z-0 w-full mb-6 group">
					<input
						type="text"
						name="floating_first_name"
						id="floating_first_name"
						class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=" "
						required
					/>
					<label
						for="floating_first_name"
						class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>First name</label
					>
				</div>
				<div class="relative z-0 w-full mb-6 group">
					<input
						type="text"
						name="floating_last_name"
						id="floating_last_name"
						class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=" "
						required
					/>
					<label
						for="floating_last_name"
						class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>Last name</label
					>
				</div>
			</div>
			<div class="grid md:grid-cols-2 md:gap-6">
				<div class="relative z-0 w-full mb-6 group">
					<input
						type="tel"
						pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
						name="floating_phone"
						id="floating_phone"
						class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=" "
						required
					/>
					<label
						for="floating_phone"
						class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>Phone number (123-456-7890)</label
					>
				</div>
				<div class="relative z-0 w-full mb-6 group">
					<input
						type="text"
						name="floating_company"
						id="floating_company"
						class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=" "
						required
					/>
					<label
						for="floating_company"
						class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>Company (Ex. Google)</label
					>
				</div>
			</div>
			<button
				type="submit"
				class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>Submit</button
			>
		</form>
	</div>
</div>
