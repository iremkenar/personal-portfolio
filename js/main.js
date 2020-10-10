
$(document).ready(function(){

    (function(){
        var words = [
            'clean & elegant code',
            'simple design',
            'design thinking',
            'thinking',
            'learning',
            'unlearning',
            'relearning',
            'hiking'
            ], i = 0;
        setInterval(function(){
            $('#changingword').fadeOut(function(){
                $(this).html(words[i=(i+1)%words.length]).fadeIn();
            });
        }, 2500);
          
    })();

});

    //find all elements tagged "html"
    var htmls = document.querySelectorAll('.html');

    //find all elements tagged "responsive"
    var responsives = document.querySelectorAll('.responsive');

    //find all elements with "design" class
    var designs = document.querySelectorAll('.design');

    //find all elements with "javascript" class
    var javascripts = document.querySelectorAll('.javascript');

    //find all elements with "wordpress" class
    var wordpresss = document.querySelectorAll('.wordpress');

    //find all elements with "tag" class
    var tags = document.querySelectorAll('.tag');


    //function to initially loop through all items and hide them
    function hide_init(){
    for (var i = 0; i < tags.length; ++i) { 
            tags[i].style.display = 'none'; 
    }
    }

    function show_all(){  
        //loop through all items and show them
        for (var i = 0; i < tags.length; ++i) { 
            tags[i].style.display = 'inherit'; 
    } 
    }

    function show_html(){  
    //call the inital hide function
        hide_init();
        //loop through html-tagged items and show them  
    for (var i = 0; i < htmls.length; ++i) { 
            htmls[i].style.display = 'inherit'; 
    } 
    }

    function show_responsive(){  
    //call the inital hide function
        hide_init();
        //loop through responsive-tagged items and show them  
    for (var i = 0; i < responsives.length; ++i) { 
            responsives[i].style.display = 'inherit'; 
    } 
    }

    function show_design(){  
    //call the inital hide function
        hide_init();
        //loop through all items and show them
        for (var i = 0; i < designs.length; ++i) { 
            designs[i].style.display = 'inherit'; 
        } 
        }


    function show_javascript(){  
        //call the inital hide function
        hide_init();
        //loop through all items and show them
        for (var i = 0; i < javascripts.length; ++i) { 
            javascripts[i].style.display = 'inherit'; 
    } 
    }

    function show_wordpress(){  
        //call the inital hide function
        hide_init();
        //loop through all items and show them
        for (var i = 0; i < wordpresss.length; ++i) { 
            wordpresss[i].style.display = 'inherit'; 
    } 
    }


