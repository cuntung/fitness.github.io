let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector('.navbar').style.top = '0';
  } else {
    document.querySelector('.navbar').style.top = '-80px'; // Adjust this value to match the height of your fixed navbar
  }
  prevScrollpos = currentScrollPos;
};


document.addEventListener("DOMContentLoaded", function () {
  fetch('/public/feature.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('feature1').innerHTML = data;
      })
      .catch(error => console.error('Error loading footer.html:', error));
});

document.addEventListener("DOMContentLoaded", function () {
    fetch('/public/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar1').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer.html:', error));
});


document.addEventListener("DOMContentLoaded", function () {
    fetch('/public/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer.html:', error));
});
