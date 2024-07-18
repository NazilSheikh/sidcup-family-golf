var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
// pure docum per eventlistner lagaa do cursor mouse wala kabhi mouse move pataa lagegaa see in cosole window
document.addEventListener("mousemove",function(dets)
{
//    console.log("hey");
//   jab jab mouse move det   se x and y per jo bhi prakriyaa ho rahi ptaa lagegii
// console.log(dets.y)
// we used cursor here  jisse left ho ya top hmaree saath ek green cursor move hogaa
crsr.style.left=dets.x+30+"px"
crsr.style.top=dets.y+"px"

// MOVE KAA SARAA KAAAM JS SE HO RAHAAA cursor ko :
// AB HMKO BADAA WAALAA BLUR CRSR BHI THO MOVE KARNAA HAI 
// HMNE DEKHAA CURSOR ARROW UPPER HAI CIRCLE SE THEREFORE -150 DONO SATH MAI CHALEE
blur.style.left=dets.x-98+"px"
blur.style.top=dets.y-88+"px"
})



// JAB HM MOUSE LEKEE NAV PER YA TEXT PER JAA RAHE CURSOR KA SIZE CHANGE HO RHAA HAAIII
// all se SARE NAV BAAR KE ELEMENT LEGAAA
var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem)
{
    // ele mai event mouse enter ek funcn run uske ander crsr ki length change hogi in nav baar
    elem.addEventListener("mouseenter",function()
    {
        crsr.style.scale=3
        // green cursor  ke upper white ring dekhegi
        crsr.style.border="0.5px solid #fff" 
        // isse gren color gyab
        crsr.style.backgroundColor="transparent"
    })

    
    // AB MOUSE JAISE HI LEAVE KAREGAA ELEM KO THO WAPIS CURSOR KA SIZE CHOTAAA HOGAA
    elem.addEventListener("mouseleave",function()
    {
        crsr.style.scale=1
        // jaise hi leave mtlb nac baar se htaya  tho normal cursor dekhegi
        crsr.style.border="0px solid #95C11E" 
        // isse gren color ayegaa
        crsr.style.backgroundColor="#95C11E"
    })
})



// gsap kaise used see :
// nav mai lagegi ye sab
gsap.to("#nav",{
    // css ki koe seee bhi property we can used using camel case :
     backgroundColor:"#000",
     duration:0.5, // 1 second ka samay
     height:"95px",// black colr 1 sec baad chotaa hotaa dekhegaa on bassis of scrooling
    scrollTrigger:{
        // trigger nav ko kar rahe scrool body ho rahi hai 
        trigger:"#nav",
        scroller:"body", 
        // ISSE RIGHT SIDE CONER MAI START END MARKER DIKH JAYENGEE per asaal MAI HM NHI LAGEYNGE ISSE PTAA CHALTAA HAI GSP IS WORKING OR NOT 
        // markers:true,
        // start top se -10%;
        // aaap halkaa sa ab scroll karoge tho : black colr 1 sec baad chotaa hotaa dekhegaa on bassis of scrooling 
        start :"top -10%",
        // ab vapise upper scroll karne per black colr hataanaa ho too :
        end :"top  -11%",
        scrub:3  // 3 is same as true 
    }

})


// JAISE HM PAGE1 PER JAYNGEE HME CCOLOR CHANGE HOTAA DEKHEGAA USKE LIE BHI GSAAP :
gsap.to("#main",{
    backgroundColor:"#000",
    // yha per color scrolling ke basis per hogaa black :
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        
        // markers:true
        //    itna scroll karne per colr change hogaa
        start:"top -25%",
        end:"top -70%",
        // ekdum se colr change naa hooo
        scrub :2

    }
})


// ABHI TAK SCROLL TRIGGER SE HMARAA NAV BAAR BLACK HO RAHA THAA AND HMAREE SCROLL KARNE PER COLR BLACK HO RAHAA
// THAA 



// dono ek sath select
// HM CHAHTE HAI KI JAB SCROLL KARE THO ABOUT US WAALE UTHTEE HOE AAYE
gsap.from("#about-us img,#about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#about-us",
      scroller: "body",
    //   ptaa lagegaa eanble hoa ya nhi 
      // markers:true,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });


//   about us jaise hi card and green div UTHTEE HOAA AYENGE WHEN WE SCROOL DOWN :

  gsap.from(".card", {
    // scale badaa karenge scroll per chotee see
    scale:0.8,
    opacity: 0,
    duration: 1,
    // card ek sath 3 thino bade nhi honge ek ek karke honge
    stagger:"0.1",
    scrollTrigger: {
      trigger: ".card",
      scroller: "body",
    //   ptaa lagegaa eanble hoa ya nhi 
      // markers:true,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });



//   NOW JO COLON IMG HAI WE WANT KE VO ANIMATE HO NEECHE KI TARAF WHEN WE SCROLL WEBSITE
// WE CAN USE GSAP AS SCROLL TRIGER;
  gsap.from("#colon1",{
    // x and y axis se neeche 70 70 per animate 
    y:-70,
    x:-70, 
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 47%",
        scrub:4

    },
  });

  gsap.from("#colon2",{
    // x and y axis se neeche 70 70 per animate 
    y:70,
    x:70, 
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 47%",
        scrub:4

    },
  });

  gsap.from("#page4 h1",{
    // BAHI ISSE SCROLLING KE TIME HEADING UPPER NIKALTI HOE AYEGI 
    y:50,
    scrollTrigger:{
      trigger:"#page4 h1",
      scroller:"body",
      // markers:true,
      start:"top 50%",
      end:"top 47%",
      scrub:4

  },
  })
