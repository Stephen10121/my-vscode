<div />

<style>
    div {
		width: 10px;
		height: 10px;
		/* border: 1px solid #ffffff; */
		border-top: 1px solid #5e5e5e;
		border-right: 1px solid #5e5e5e;
		border-radius: 2px;
		position: relative;
		margin-bottom: 2px;
	}

	div::after {
		content: "";
		position: absolute;
		width: 9px;
		height: 9px;
		border: 1px solid #5e5e5e;
		border-radius: 2px;
		left: -2px;
		top: 2px;
	}
</style>