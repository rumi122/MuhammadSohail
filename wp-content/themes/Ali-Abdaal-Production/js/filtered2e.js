$(document).ready(function () {
	var $btn = $("#filter .button");

	$btn.click(function () {
		if (this.id == "all") {
			$("#portfolio > div").fadeIn();
		} else {
			var $el = $("." + this.id);
			$el.fadeIn();
			$("#portfolio > div").not($el).hide();
		}
		$btn.removeClass("is-warning");
		$(this).addClass("is-warning");
	});
});