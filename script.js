       function hangLejatszas(allathang) {
        var hang=document.getElementById(allathang);
        hang.play();
    }
    
    function hangStop(allathang) {
        var hang=document.getElementById(allathang);
        hang.pause();
        hang.currentTime = 0;
    }  


    function mutasd(allat){
        window.open("leirasok/"+allat+".html", allat, "height=320px, width=510px");
    }