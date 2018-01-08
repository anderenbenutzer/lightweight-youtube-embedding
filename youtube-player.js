$(document).ready(function() {
	$('.youtube-player').each(function() {
		var youtubeID = $(this).attr("data-id");
		if ( youtubeID ) {
			var divOpen = '<div data-id="' + youtubeID + '">';
			var image = $(this).attr("data-img");
			// string or undefined
			if ( image ) {
				var thumb = '<img src="' + image + '">';
			} else {
				var thumb = '<img src="https://i.ytimg.com/vi/' + youtubeID + '/hqdefault.jpg">';
			}
			var play = '<div class="play"></div>';
			var divClose = '</div>';
			$(this).html( divOpen + thumb + play + divClose );
		} // youtubeID
	});

	$('.youtube-player').on('click touchstart', function() {
		var youtubeID = $(this).attr("data-id");
		if ( youtubeID ) {
			var iFrame = '<iframe src="https://www.youtube.com/embed/' + youtubeID + '?rel=0&amp;showinfo=0&amp;autoplay=1" frameborder="0" allowfullscreen></iframe>';
			$(this).html( iFrame );
		}
	});
});
