import './less/index.less'

// Your code goes here!


  document.addEventListener('DOMContentLoaded', () => {
    const heading = document.querySelector('.logo-heading');
    const navLinks = document.querySelectorAll('.nav-link');
    const introImage = document.querySelector('.intro img');
    const introHeading = document.querySelector('.intro h2');
    const contentSection = document.querySelector('.content-section');
    const contentDestination = document.querySelector('.content-destination');
    const destinationButtons = document.querySelectorAll('.destination .btn');
    const footer = document.querySelector('.footer');

    // 1. Mouseover event
    heading.addEventListener('mouseover', () => {
      heading.style.color = 'red';
    });

    // 2. Keydown event
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        heading.textContent = 'Keydown event: Enter pressed!';
      }
    });

    // 3. Wheel event
    introImage.addEventListener('wheel', (event) => {
      event.preventDefault();
      introImage.style.transform = `rotate(${event.deltaY}deg)`;
    });

    // 4. Load event
    window.addEventListener('load', () => {
      console.log('Page loaded');
    });

    // 5. Focus event
    introHeading.addEventListener('focus', () => {
      introHeading.style.backgroundColor = 'yellow';
    });

    // 6. Resize event
    window.addEventListener('resize', () => {
      console.log('Window resized');
    });

    // 7. Scroll event
    window.addEventListener('scroll', () => {
      console.log('Window scrolled');
    });

    // 8. Select event
    introHeading.addEventListener('select', () => {
      console.log('Text selected');
    });

    // 9. Double click event
    contentSection.addEventListener('dblclick', () => {
      contentSection.classList.toggle('highlight');
    });

    // 10. Click event on destination buttons
    destinationButtons.forEach((button) => {
      button.addEventListener('click', () => {
        button.classList.add('clicked');
      });
    });

    // Additional example: Click event on nav links
    navLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        alert(`Clicked on ${link.textContent}`);
      });
    });

    // Additional example: Click event on footer
    footer.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  });

