$(document).ready(function() {
	const rowCount = 18;
	const columnCount = 18;

	var row = Math.floor(Math.random() * rowCount) + 1;
	var column = Math.floor(Math.random() * columnCount) + 1;
	var rowLetter = "_ABCDEFGHIJKLMNOPQR".charAt(row);

	$("#secret-row").append(rowLetter);
	$("#secret-column").append(column);

	$("#refresh").click(function() {
		location.reload();
	});
});