$( document ).ready(function() {
    $("#buttonSwitch").click(function(event){
        event.preventDefault();
        if($("body").hasClass('dark')){
            $("body").removeClass('dark');
            $("#buttonSwitch").removeClass('switchDark');
            $("#buttonSwitch").addClass('switchLight'); 
        } else {
            $("#buttonSwitch").removeClass('switchLight');
            $("#buttonSwitch").addClass('switchDark'); 
            $("body").addClass('dark');
        } 
    })

    $(function() {
        $( "#accordion" ).accordion({ 
            header: "h3",
            animate: 800, 
            heightStyle: "content",
            icons: { "header": "ui-icon-triangle-1-e", "activeHeader": "ui-icon-triangle-1-s" }
        })
    });

    $(".video-js").each(function(){
        var videoID = $(this).attr('id');
        var myPlayer = videojs(videoID);
        var rewindButton = $(this).parent().parent().find(".rewindButton");
        var playButton = $(this).parent().parent().find(".playButton");
        var forwardButton = $(this).parent().parent().find(".forwardButton");

        console.log('ready!');

        myPlayer.ready(function(){
            $(".videoWrapper").hover(
                function() {
                    $(rewindButton).css("display", "block");
                    $(playButton).css("display", "block");
                    $(forwardButton).css("display", "block");
                }, function() {
                    $(rewindButton).css("display", "none");
                    $(playButton).css("display", "none");
                    $(forwardButton).css("display", "none");
            });

            $(playButton).click(function(event){
                event.preventDefault();
                if($(playButton).hasClass('active')){
                    $(playButton).removeClass('active');
                    myPlayer.pause();
                } else {
                    $(playButton).addClass('active');
                    myPlayer.play();
                }
            })
    
            myPlayer.on('timeupdate', function(){
                var time = myPlayer.currentTime();
                console.log(time);
                $(rewindButton).click(function(event){
                    event.preventDefault();
                    myPlayer.currentTime(time - 10);
                }); 
                $(forwardButton).click(function(event){
                    event.preventDefault();
                    myPlayer.currentTime(time + 10);
                });
            })

            myPlayer.on('ended', function(){
                $(".modalWrapper").append("<div class='modal'><a href='#' class='click'> X </a><h2> Nu al afgelopen? <br> Kijk ook meteen volgende!</h2><div id='modalPlay'></div><div id='modalPlayAni'></div></div><div class='modalBackground'></div>")
                alert('video is done!');

                $(".click").click(function(event){
                    event.preventDefault();
                    $(".modal").remove();
                    $('.modalBackground').remove();
                });
            });
        })
    })
});
        
/*
    videojs("my-video-1, my-video-2, my-video-3, my-video-4, my-video-5").ready(function(){ 
        var myPlayer = this;

        console.log('ready!');

        $(".videoWrapper").hover(
            function() {
                $(".rewindButton").css("display", "block")
                $(".playButton").css("display", "block")
                $(".forwardButton").css("display", "block")
              } , function() {
                $(".playButton").css("display", "none")
                $(".rewindButton").css("display", "none")
                $(".forwardButton").css("display", "none")
        });

        $('.playButton').click(function(event){
            event.preventDefault();
            if($(this).hasClass('active')){
                $(this).removeClass('active');
                myPlayer.pause();
            } else {
                $(this).addClass('active');
                myPlayer.play();
            }
        })

        myPlayer.on('timeupdate', function(){
            var time = myPlayer.currentTime();
            console.log(time);
            $('.rewindButton').click(function(event){
                event.preventDefault();
                myPlayer.currentTime(time - 10);
            }); 
            $('.forwardButton').click(function(event){
                event.preventDefault();
                myPlayer.currentTime(time + 10);
            });
        })
    });

     $("#buttonSwitch").click(function(event){
        event.preventDefault();
        if($(this).hasClass('switchDark')){
            $(this).removeClass('switchDark');
            $(this).addClass('switchLight'); 
        } else {
            $(this).removeClass('switchLight');
            $(this).addClass('switchDark');
        } 
    })

    */
	//$(".contactStudents").scrollLeft();
