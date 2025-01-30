// const navLinks = document.querySelectorAll(".click-nav");
// navLinks.forEach((event) => {
//   event.addEventListener("click", function () {
//     navLinks.forEach((nav) => nav.classList.remove("active"));
//     this.classList.add("active");
//   });
// });
// window.addEventListener("load", () => {
//   const hash = window.location.hash;
//   if (hash) {
//     const activeLink = document.querySelector(`a[href="${hash}"]`);
//     if (activeLink) {
//       navLinks.forEach((nav) => nav.classList.remove("active"));
//       activeLink.classList.add("active");
//     } else {
//       console.warn(`No element found for hash: ${hash}`);
//     }
//   }
// });
// window.addEventListener("hashchange", () => {
//   const hash = window.location.hash;
//   if (hash) {
//     const activeLink = document.querySelector(`a[href="${hash}"]`);
//     if (activeLink) {
//       navLinks.forEach((nav) => nav.classList.remove("active"));
//       activeLink.classList.add("active");
//     } else {
//       console.warn(`No element found for hash: ${hash}`);
//     }
//   }
// });

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".click-nav");
    const headerHeight = document.querySelector(".header-content").offsetHeight;
    window.addEventListener("scroll", () => {
      let posisi = window.scrollY + headerHeight;
      navLinks.forEach(event => {
        const section = document.querySelector(event.getAttribute("href"));
        if (section) {
          if (
            section.offsetTop <= posisi &&
            section.offsetTop + section.offsetHeight > posisi
          ) {
            event.classList.add("active");
          } else {
            event.classList.remove("active");
          }
        }
      });
    });
    var date = new Date().getFullYear();
    document.getElementById('year').innerHTML = date;
  });
  
  