  function play(hangszer) {
        var hang=document.getElementById(hangszer);
        hang.play();
    }
    
    function stop(hangszer) {
        var hang=document.getElementById(hangszer);
        hang.pause();
        hang.currentTime = 0;
    }  

    function mutasd(hangszercsoport){
        window.open("leirasok/"+hangszercsoport+".html", hangszercsoport, "height=320px, width=510px");
    }
