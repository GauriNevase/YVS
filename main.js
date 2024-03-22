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

//team
const knowMoreButton = document.querySelector('.know-more-button');
  knowMoreButton.addEventListener('click', () => {
    document.querySelectorAll('.collapse-member').forEach((element) => {
      element.classList.toggle('row-col-lg-1');
      element.classList.toggle('row-col-lg-5');
    });
    if (knowMoreButton.textContent === 'Know More') {
      knowMoreButton.textContent = 'Know Less';
    } else {
      knowMoreButton.textContent = 'Know More';
    }
  });
