$(document).ready(function(){
    
    //PHOTOSETS
   $('.photo-slideshow').pxuPhotoset({
        // options go here
        'highRes'   : true, // will use high res images
        'rounded'   : 'false', // corners, all or false
        'exif'      : false, // display EXIF data if available (tooltip)
        'captions'  : false, // display individual captions on photos (tooltip)
        'gutter'    : '10px', // spacing between the images
        'photoset'  : '.photo-slideshow', // photoset wrapper
        'photoWrap' : '.photo-data', // photo data wrapper (includes photo, icons + exif)
        'photo'     : '.pxu-photo' // photo wrap (includes photo only)
    }, function() {
        // callback
    });
    
});
//end ready

$.slidebars();

$(window).load(function() {
   //alert("window is loaded");
   document.body.focus();
});
//end load

//GLOBAL
function askOn(){
    if( $('#ask').css('display') == "block" ){
        document.getElementById("ask").style.display = 'none';} 
    else { 
        document.getElementById("ask").style.display = 'block';
        scroll();
        document.getElementById("submit").style.display = 'none';}
}

//SUBMIT
function submitOn(){
    if( $('#submit').css('display') == "block" ) {
        document.getElementById("submit").style.display = 'none';} 
    else { 
        document.getElementById("submit").style.display = 'block';
        scroll();
        document.getElementById("ask").style.display = 'none';}
}

//SCROLL TO
function scroll() {
    $('html, body').animate({scrollTop: $(".asksubmit").offset().top}, 500);
        window.location.hash="content"; //FALL BACK
}
</script>

<!--KEYBOARD NAV ON INDEX-->
{block:IndexPage}
<script>
  //RANDOM NAVIGATION FOR INDEX
  document.body.onkeydown = function(e){   
        if (e == null) {
            keycode = event.keyCode;
        } else {
            keycode = e.which;
        }
        if(keycode == 80){
            $("#sb-site").fadeOut();
            //alert('Random');
            setTimeout(function(){
                window.location = $('#random').attr('href');
            },100);
        } 
         if (url) {
        window.location = url;
        }
    };
