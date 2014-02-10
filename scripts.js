
    $('.photoset-grid').photosetGrid({
  highresLinks: true,
  rel: $('.photoset-grid').attr('data-id'),
  gutter: '5px',

  onComplete: function(){});
  }
});



    //Ask button
    function askOn()
    {
        if( $('#ask').css('display') == "block" )  //check if as is displayed
        { 
            //ask is displayed 
            document.getElementById("ask").style.display = 'none';
        } 
        else 
        { 
            //ask is not displayed 
            document.getElementById("ask").style.display = 'block';
            //call scroll function
            scroll();
            document.getElementById("submit").style.display = 'none';
        }
    }
    
    //Submit button
    function submitOn()
    {
        if( $('#submit').css('display') == "block" )  //check if as is displayed
        { 
            //ask is displayed 
            document.getElementById("submit").style.display = 'none';
        } 
        else 
        { 
            //ask is not displayed 
            document.getElementById("submit").style.display = 'block';
            //call scroll function
            scroll();
            document.getElementById("ask").style.display = 'none';
        }
    }
    
    //scroll to ask/submit box
    function scroll() {
        $('html, body').animate({
        scrollTop: $(".asksubmit").offset().top
    }, 500);
    }
    



    $.SyntaxHighlighter.init({
        'wrapLines':false
    });





    var userFeed = new Instafeed({
        limit: 20,
        get: 'user',
        userId: {text:Instagram User ID},
        accessToken: '{text:Instagram Access Token}',
    });
    userFeed.run();
