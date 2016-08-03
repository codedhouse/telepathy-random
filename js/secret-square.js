$(document).ready(function() {
	const rowLetters = "ABCDEFGHIJKLMNOPQR";
	const rowCount = rowLetters.length;
	const columnCount = 18;

	$("#refresh").click(function() {
		showSquare((function() {
			var row = Math.floor(Math.random() * rowCount);

			return {
				row: rowLetters.charAt(row),
				column: Math.floor(Math.random() * columnCount) + 1
			};
		})());
	});

	$("#refresh").trigger("click");
});

function showSquare(square) {
	$("#secret-row").html(square.row);
	$("#secret-column").html(square.column);
}