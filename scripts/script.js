'use strict';

// const navAbout = document.querySelector('.nav-about');

// navAbout.addEventListener('click', function (e) {
//   e.preventDefault();

//   const id = e.target.getAttribute('href');
//   console.log(id);

//   document.querySelector(`${id}`).scrollIntoView({
//     behavior: 'smooth',
//   });
// });

const navAbout = document.querySelector('.nav-items');

navAbout.addEventListener('click', function (e) {
  if (!e.target.classList.contains('nav-link-scroll')) return;

  e.preventDefault();

  const id = e.target.getAttribute('href');

  document.querySelector(`${id}`).scrollIntoView({
    behavior: 'smooth',
  });
});
