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
    $( ".tumblr-box" ).click(function() {
        
      //Turn keyboard off when using photosets
      document.body.onkeydown = function(e){  
        if (e == null) {
            keycode = event.keyCode;
        }
        else {
            keycode = e.which;
        }
        if(keycode == 39){

        } 
        else if(keycode == 37){

        }
        else if(keycode == 191){
            $("#sb-site").fadeOut();
            //alert('Random')
            setTimeout(function(){
                window.location = $('#random').attr('href');
            },100);}
            };
        }); 
    });
    
    var headHeight = document.getElementById('header').clientHeight;    
        $("#headerBackground").css({ "height": headHeight});
        $("#headerTint").css({ "height": headHeight});
            
});//end ready



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
        var askSource = document.getElementById("askSource").href;
        document.getElementById("askBox").src=askSource;
        document.getElementById("ask").style.display = 'block';
        document.getElementById("submit").style.display = 'none';
        scroll();}
}

//SUBMIT
function submitOn(){
    if( $('#submit').css('display') == "block" ) {
        document.getElementById("submit").style.display = 'none';} 
    else { 
        var submitSource = document.getElementById("submitSource").href;
        document.getElementById("submitBox").src=submitSource;
        document.getElementById("submit").style.display = 'block';
        document.getElementById("ask").style.display = 'none';
        scroll();}
}

//SCROLL TO
function scroll() {
    $('html, body').animate({scrollTop: $(".asksubmit").offset().top}, 500);
        window.location.hash="content"; //FALL BACK
}
