<template>
	<section class="auth-dialog">
		<dialog :open="openDialog">
			<form method="dialog">
				<h2>Sign In</h2>
				<label for="user-name">Username:</label>
				<input id="user-name" type="email" placeholder="Email" />
				<label for="user-pass">Password:</label>
				<input id="user-pass" type="password" placeholder="Password" />
				<menu>
					<button value="cancel">Cancel</button>
					<button id="confirmBtn" value="default">Confirm</button>
				</menu>
			</form>
		</dialog>
	</section>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true
		},
		openDialog: {
			type: Boolean,
			required: true
		}
	}
}
</script>

<style lang="scss">
.auth-dialog {
	background-color: var(--main-gray);
}
</style>
