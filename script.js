function openSection(evt, sectionName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      if (!tabcontent[i].classList.contains("nav-button")) {
        tabcontent[i].style.display = "none";
      }
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    document.getElementById(sectionName).style.display = "block";
    if (evt) { // Only try to add 'active' class if event exists
      evt.currentTarget.className += " active";
    } else {
      // Find the button corresponding to the sectionName and add 'active' class
      for (i = 0; i < tablinks.length; i++) {
        if (tablinks[i].getAttribute('onclick').includes(sectionName)) {
          tablinks[i].className += " active";
        }
      }
    }
}

document.addEventListener('DOMContentLoaded', () => openSection(null, 'about-section'));