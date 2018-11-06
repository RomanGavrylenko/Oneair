function showVideo(){
	document.getElementById('show-video-wrap').style.display='block';
	document.getElementById('show-video').play();
}

function closeVideo(){
	document.getElementById('show-video-wrap').style.display='none';
	document.getElementById('show-video').pause();
}

	
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if ((document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) && (document.documentElement.clientWidth > 568 && document.documentElement.clientWidth <768 ))  {
    document.getElementById("header-logo").style.display = "none";
  } else {
    document.getElementById("header-logo").style.display = "block";
  }
}