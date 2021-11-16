window.onload = () => {

    // it's line get t tag
    // let p = document.getElementsByTagName("ph")[0].getAttribute("te");
    // console.log(p);

    // if you tag name then you also provie a index no. to get attribute value 
    // if you use id then you use getAttribute() without using index no.


    // if (tp == "") {
    //         for (i = 0; i < t.lenght; i++){
    //         t[i].innerHTML = "9988774455";
    //     }
    // } else {
    //     tp.innerHTML = t;
    // }
    

    // it's line get e tag
    let e = document.getElementsByTagName("e");

    // it's loop for all t tag (it's give email on e tag)
    for (i = 0; i < e.length; i++){
        e[i].innerHTML = "demo@gmail.com";
    }

    // it's line get e tag
    let a = document.getElementsByTagName("ad");

    // it's loop for all t tag (it's give address on ad tag)
    for (i = 0; i <a.length; i++){
        a[i].innerHTML = "49 demo - 1 falne Nager , Kanpur";
    }


    // t tag for time when you use t tag any time given by function 

    var t = document.getElementsByTagName("t");
    for (i = 0; i < t.length; i++){
        t[i].innerHTML = "9:47";
    }

    // welcome tag for full web template for screen
    we = document.getElementsByTagName("welcome");
    for (i = 0; i < we.length; i++) {

        var sr = "", bn = "", ql = "", tel = "";
        if (we[i].getAttribute("sr") != undefined) {
            sr = we[i].getAttribute("sr");
        }
        if (we[i].getAttribute("bn") != undefined) {
            bn = we[i].getAttribute("bn");
        }
        if (we[i].getAttribute("ql") != undefined) {
            ql = we[i].getAttribute("ql");
        }
        if (we[i].getAttribute("tel") != undefined) {
            tel = we[i].getAttribute("tel");
        }
       
        console.log(sr);
        var html = "<div id='bi' class='backimg'>";
        html += "<div class='linear'>";
        html += "<div class='middle'>";
        html += "<h1 class='brand-name'>"+ bn +"</h1>";
        html += "<p class='quato'>"+ ql +"</p>";
        html += "<h1 class='comming-soon'>Comming Soon</h1>";
        html += "<a href=' tel:"+ tel +" ' class='clientnumber'>"+ tel +"</a>";
        html += "</div>";
        html += "</div>";
        html += "</div>";

        let bi = document.getElementsByTagName("body");
        bi.style.backgroundImage = 
        
        we[i].innerHTML = html;
    }

    // Poster js start from here

    po = document.getElementsByTagName("poster");
    pl = po.length;
    
    // it's loop for make the poster tag

    for (i = 0; i < pl; i++){

        var io, it, ith, ifo, ifi;
        if (po[i].getAttribute("ione") != undefined) {
            io = po[i].getAttribute("ione");
            console.log(io);
        }
        if (po[i].getAttribute("itwo") != undefined) {
            it = po[i].getAttribute("itwo");
        }
        if (po[i].getAttribute("ithree") != undefined) {
            ith = po[i].getAttribute("ithree");
        }
        if (po[i].getAttribute("ifour") != undefined) {
            ifo = po[i].getAttribute("ifour");
        }
        if (po[i].getAttribute("ifive") != undefined) {
            ifi = po[i].getAttribute("ifive");
        }

        var html = "<div class='main-poster-div' id='mpd'> ";
        html += "<img src=' " + io + " ' class='poster-img' />";
        html += "<img src=' " + it + " ' class='poster-img' />";
        html += "<img src=' " + ith + " ' class='poster-img' />";
        html += "<img src=' " + ifo + " ' class='poster-img' />";
        html += "<img src=' " + ifi + " ' class='poster-img' />";
        html += "</div>";

        po[i].innerHTML = html;

    }


    // isme side arrow or image hover dot add karna h
    // aur study slide function on it 


    // here add custom nav tag js
    
    var nav = document.getElementsByTagName("na");
    var navlength = nav.length;

    for (i = 0; i < navlength; i++){
        var im, li;
        if (nav[i].getAttribute("i") != undefined) {
            im = nav[i].getAttribute(i);
        }
        if (nav[i].getAttribute("i") != undefined) {
            li = nav[i].getAttribute(i);
        }

        var navmenu = li.split(",");

        console.log(navmenu[i][0]);



    }

}