document.addEventListner("DOMContentLoaded", function()
	{ initialiseMediaPlayer(); }, false);

	var mediaPlayer;

	function initialiseMediaPlayer() {
		mediaPlayer = document.getElementById('media-video');
		mediaPlayer.controls = false;
	}

		function click() {
			if (event.button==2) {
				alert('GTFO FAGGOT BE SMART')
			}
		}
			document.onMouseDown=click

		function togglePlayPause() {
			var btn = document.getElementById('play-pause-button');
			if (mediaPlayer.paused || mediaPlayer.ended) {
				btn.title = 'pause';
				btn.innerHTML = 'pause';
				btn.className = 'pause';
				mediaPlayer.play();
			}
				
				else {
					btn.title = 'play';
					btn.innerHTML = 'play';
					btn.className = 'play';
					mediaPlayer.pause();
				}
			}

				function click() {
			if (event.button==2) {
				alert('No Content Avaliable')
			}
		}
		
				var message="Don't try";

 			function clickIE4(){
					if (event.button==2){
					alert("don't try");
					return false;
		}
	}

				function clickNS4(e){
					if (document.layers||document.getElementById&&!document.all){
					if (e.which==2||e.which==3){
					alert(message);
					return false;
			}
		}
	}

		if (document.layers){
		document.captureEvents(Event.MOUSEDOWN);
		document.onmousedown=clickNS4;
		}
			else if (document.all&&!document.getElementById){
			document.onmousedown=clickIE4;
				}

					document.oncontextmenu=new Function("alert(message);return false")

						var lastBuffered = video.buffered.end(video.buffered.length-1);
							function updateUI() {
  								var lastBuffered = video.buffered.end(video.buffered.length-1);
  									seekbar.min = video.startTime;
  									seekbar.max = lastBuffered;
  									seekbar.value = video.currentTime;
								}

									var seekbar = document.getElementById('seekbar');
										function setupSeekbar() {
											seekbar.max = video.duration;
										}

											video.ondurationchange = setupSeekbar;
												function seekVideo() {
												  video.currentTime = seekbar.value;
											}

											function updateUI() {
  											seekbar.value = video.currentTime;
										}	

										seekbar.onchange = seekVideo;
										video.ontimeupdate = updateUI;

									function setupSeekbar() {
  								seekbar.min = video.startTime;
 							 seekbar.max = video.startTime + video.duration;
						}
					var myVideo=document.getElementById("custom_video_play"); 
				function makeBig() { myVideo.width=650; } 
			function makeSmall() { myVideo.width=350; } 
		function makeNormal() { myVideo.width=450; } 
