// burger=document.querySelector('.burger')
// navbar=document.querySelector('.navbar')
// navList=document.querySelector('.nav-list')
// rightNav=document.querySelector('.rightNav')

// burger.addEventListener('click',()=>{
//     rightNav.classList.toggle('v-class-resp');
//     navList.classList.toggle('v-class-resp');
//     navbar.classList.toggle('h-nav-resp');
// })

/* Demo purposes only */
// $(".hover").mouseleave(
//     function() {
//       $(this).removeClass("hover");
//     }
//   );


// our goals
  function openTab(tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    document.getElementById(tabName).style.display = "block";

    tabcontent.addEventLitener('onclick',()=>{
        nav.nav-ink.toggle('nav-link.active');
    })
}