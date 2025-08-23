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

  if (!img) return; // ✅ Prevents crash if img not found

  setTimeout(() => {
    img.src = images[1];
    img.width = 188;
  }, 3000);
};


// Accent color picker functionality
document.addEventListener('DOMContentLoaded', () => {
  const gearIcon = document.querySelector('.color-icon');
  const palette = document.getElementById('colorPalette');

  console.log("Gear icon:", gearIcon); // ✅ Debug: Should not be null
  console.log("Palette:", palette);    // ✅ Debug: Should not be null

  gearIcon.addEventListener('click', () => {
    palette.classList.toggle('hidden');
  });

  palette.addEventListener('click', (e) => {
    if (e.target.classList.contains('color-swatch')) {
      const selectedColor = e.target.getAttribute('data-color');

      // Update CSS variable --accent-color
      document.documentElement.style.setProperty('--accent-color', selectedColor);

      // Update --accent-color-rgb
      const rgb = hexToRgb(selectedColor);
      if (rgb) {
        document.documentElement.style.setProperty('--accent-color-rgb', `${rgb.r}, ${rgb.g}, ${rgb.b}`);
      }

      palette.classList.add('hidden');
    }
  });

  // Close palette if clicking outside
  document.addEventListener('click', (e) => {
    if (!gearIcon.contains(e.target) && !palette.contains(e.target)) {
      palette.classList.add('hidden');
    }
  });

  // Helper function for hex to rgb
  function hexToRgb(hex) {
    hex = hex.replace(/^#/, '');
    if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
    if (hex.length !== 6) return null;

    const bigint = parseInt(hex, 16);
    return {
      r: (bigint >> 16) & 255,
      g: (bigint >> 8) & 255,
      b: bigint & 255
    };
  }
});

// Function to toggle between light and dark mode
function initThemeToggle() {
  const themeButton = document.querySelector('.theme-button');
  const icon = themeButton.querySelector('i');

  if (!themeButton || !icon) return;

  // Apply saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
    icon.classList.replace('fa-moon', 'fa-sun');
  }
  else {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
    icon.classList.replace('fa-sun', 'fa-moon');
  }

  // Toggle on button click
  themeButton.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode', !isLight);

    icon.classList.toggle('fa-moon', !isLight);
    icon.classList.toggle('fa-sun', isLight);

    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
}

document.addEventListener('DOMContentLoaded', initThemeToggle);

document.addEventListener("DOMContentLoaded", () => {
  if (!window.location.hash) {
    window.location.hash = '#home';
  }
  showSection(window.location.hash);
});
