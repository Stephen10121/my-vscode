<div />

<style>
    div {
		width: 10px;
		height: 10px;
		/* border: 1px solid #ffffff; */
		border-top: 1px solid #8b8b8b;
		border-right: 1px solid #8b8b8b;
		border-radius: 2px;
		position: relative;
		margin-bottom: 2px;
	}

	div::after {
		content: "";
		position: absolute;
		width: 9px;
		height: 9px;
		border: 1px solid #8b8b8b;
		border-radius: 2px;
		left: -2px;
		top: 2px;
	}
</style>