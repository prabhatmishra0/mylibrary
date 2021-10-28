window.onload = () => {

    // it's line get t tag
    let p = document.getElementsByTagName("ph")[0].getAttribute("te");
    console.log(p);

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


    


}