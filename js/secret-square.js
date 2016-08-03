$(document).ready(function() {
	const rowLetters = "ABCDEFGHIJKLMNOPQR";
	const rowCount = rowLetters.length;
	const columnCount = 18;

	$("#refresh").click(function() {
		var row = Math.floor(Math.random() * rowCount);
		var column = Math.floor(Math.random() * columnCount) + 1;

		$("#secret-row").html(rowLetters.charAt(row));
		$("#secret-column").html(column);
	});

	$("#refresh").trigger("click");
});