// document.addEventListener('DOMContentLoaded', function () {
//     // Get all sections and navbar links
//     const sections = document.querySelectorAll('section');
//     const navLinks = document.querySelectorAll('nav ul li a');

//     // Function to check if an element is in the viewport
//     function checkVisibility() {
//         sections.forEach(function (section) {
//             const rect = section.getBoundingClientRect();
//             const id = section.getAttribute('id');
//             const link = document.querySelector(`nav ul li a[href="#${id}"]`);

//             // If the section is visible in the viewport
//             if (rect.top >= 0 && rect.top <= window.innerHeight) {
//                 section.classList.add('is-visible'); // Add visibility class
//                 link.classList.add('active'); // Highlight the active link
//             } else {
//                 section.classList.remove('is-visible'); // Remove visibility class
//                 link.classList.remove('active'); // Remove active link highlight
//             }
//         });
//     }

//     // Call checkVisibility on scroll
//     window.addEventListener('scroll', checkVisibility);

//     // Initial check when the page loads to show sections already in view
//     checkVisibility();
// });
document.addEventListener('DOMContentLoaded', function () {
    // Function to show the section based on the current hash
    function showSection() {
        const sections = document.querySelectorAll('section');
        const currentHash = window.location.hash; // Get the current URL hash

        sections.forEach(function (section) {
            // If the section's id matches the current URL hash, display it
            if (`#${section.id}` === currentHash) {
                section.style.display = 'block'; // Show the section
            } else {
                section.style.display = 'none'; // Hide the section
            }
        });
    }

    // When the URL hash changes, show the appropriate section
    window.addEventListener('hashchange', showSection);

    // Initial call to show the section based on the current URL hash
    showSection();
});


window.onload = function () {
    const img = document.getElementById("swap-img");
    const images = ["/images/hello.png", "/images/cringe.jpg"];
  
    setTimeout(() => {
      img.src = images[1];     // Change to second image
      img.width = 188;         // Optional: resize it too
    }, 3000); // 3000ms = 3 seconds
  };


  