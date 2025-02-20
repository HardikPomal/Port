localStorage.clear();

//Splash Screen
const splash = document.querySelector ('#splash_screen_loading');
document.addEventListener('DOMContentLoaded', (e)=>{
 setTimeout(()=>{
    splash.classList.add('display-none');
 }, 2000);
})

// Marquee Section

    function updateMarqueeSpeed() {
        let screenWidth = window.innerWidth;
        let speed = screenWidth < 400 ? 20 : screenWidth < 768 ? 25 : 30; // Faster on smaller screens
        document.documentElement.style.setProperty('--animation-speed', speed + 's');
    }

    window.addEventListener("resize", updateMarqueeSpeed);
    updateMarqueeSpeed(); // Run on load


// Technical Skills Section Animation
document.addEventListener("DOMContentLoaded", function () {
  const tools = document.querySelectorAll(".tool");

  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  entry.target.classList.add("show");
              }
          });
      },
      { threshold: 1 } // Adjust as needed
  );

  tools.forEach((tool) => {
      observer.observe(tool);
  });
});

// Homepage > My Work Section Animation
document.addEventListener("DOMContentLoaded", function () {
  const workItems = document.querySelectorAll(".work_item");

  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  entry.target.classList.add("show");
                  observer.unobserve(entry.target); // Stops observing once the animation plays
              }
          });
      },
      { threshold: 1 } // Adjusted to trigger the animation smoothly
  );

  workItems.forEach((item) => {
      observer.observe(item);
  });
});

// Footer Animation
document.addEventListener("DOMContentLoaded", function () {
  const footer = document.querySelector("footer");
  const socialIcons = document.querySelectorAll("footer .social_accounts a");

  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  footer.classList.add("show");

                  // Add show class to social icons one by one
                  socialIcons.forEach((icon, index) => {
                      setTimeout(() => {
                          icon.classList.add("show");
                      }, index * 200); // Adds delay for each icon
                  });

                  observer.unobserve(entry.target); // Stops observing once animation runs
              }
          });
      },
      { threshold: 1 }
  );

  observer.observe(footer);
});

document.addEventListener("DOMContentLoaded", () => {
  const menuOverlay = document.querySelector(".mobile_menu_overlay");
  const menuToggle = document.querySelector("#menu_toggle");
  const closeButton = document.querySelector(".mobile_menu_close");
  const navLinks = document.querySelectorAll(".mobile_menu_nav ul li");

  // Open menu
  menuToggle.addEventListener("click", () => {
    menuOverlay.classList.add("show");

    // Animate nav links (wipe-in from bottom)
    navLinks.forEach((link, index) => {
      setTimeout(() => {
        link.style.opacity = 1; // Fade-in
        link.style.transform = "translateY(0)"; // Move to final position
      }, index * 100); // Delay each link by 100ms
    });
  });

  // Close menu
  closeButton.addEventListener("click", () => {
    menuOverlay.classList.remove("show");

    // Reset nav links to original state
    navLinks.forEach((link) => {
      link.style.opacity = 0; // Fade-out
      link.style.transform = "translateY(20px)"; // Move down
    });
  });
});

// Navbar Toggle
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu_toggle");
  const navMenu = document.querySelector(".nav_menu");

  menuToggle.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    navMenu.classList.toggle("active"); // Toggle class
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (event) {
    if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
      navMenu.classList.remove("active");
    }
  });
});

// Navbar My Work Dropdown
document.addEventListener("DOMContentLoaded", () => {
  const dropdownToggle = document.querySelector(".dropdown_toggle");
  const dropdown = document.querySelector(".dropdown");

  dropdownToggle.addEventListener("click", (event) => {
    event.preventDefault(); // Prevents the link from navigating
    dropdown.classList.toggle("active");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  function updateFavicon() {
    const favicon = document.querySelector('link[rel="icon"]'); // Select the favicon link tag
    if (favicon) {
      favicon.href = "path_to_new_favicon.ico"; // Change the favicon's href if it exists
    } else {
      console.log("Favicon element not found.");
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const achievementItems = document.querySelectorAll(".achievement_item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Array.from(achievementItems).indexOf(entry.target);
          entry.target.style.visibility = "visible";
          entry.target.style.animation = `popout 1s ease-in-out ${
            index * 0.5
          }s forwards`;
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    },
    {
      threshold: 0.25, // Trigger when 25% of element is visible
    }
  );

  achievementItems.forEach((item) => observer.observe(item));
});

const accordionHeaders = document.querySelectorAll(".accordion-header");

document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");

  // Function to handle switching tabs
  function switchTab(targetTab) {
    tabButtons.forEach((btn) => {
      btn.classList.remove("active"); // Remove active class from all buttons
    });

    targetTab.classList.add("active"); // Add active class to clicked button

    const targetTabId = targetTab.dataset.tab;
    tabPanels.forEach((panel) => {
      panel.classList.remove("active"); // Hide all tab panels
    });

    // Show the selected tab panel
    const targetTabContent = document.getElementById(targetTabId);
    targetTabContent.classList.add("active");

    // Ensure accordion items in the active tab are reset (collapsed)
    const accordionItems = targetTabContent.querySelectorAll(".accordion-item");
    accordionItems.forEach((item) => {
      const accordionHeader = item.querySelector(".accordion-header");
      const accordionContent = item.querySelector(".accordion-content");
      accordionContent.style.padding = "0";
      accordionContent.style.height = "0"; // Collapse content
      accordionHeader.classList.remove("active");
    });
  }

  // Add click event listener for each tab button
  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      switchTab(button);
    });
  });

  // Optional: Handle accordion click to toggle open/close
  //old code
  accordionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      // Close all other open accordions
      accordionHeaders.forEach((otherHeader) => {
        if (otherHeader !== this) {
          const otherContent = otherHeader.nextElementSibling;
          otherContent.style.height = "0";
          otherContent.style.padding = "0";
          otherHeader.classList.remove("active");
        }
      });

      // Toggle the clicked accordion
      const content = this.nextElementSibling;
      const isActive = content.style.height === "auto";

      if (isActive) {
        content.style.height = "0"; // Collapse
        content.style.padding = "0";
        this.classList.remove("active");
      } else {
        content.style.height = "auto"; // Expand
        content.style.padding = "20px";
        this.classList.add("active");
      }
    });
  });

  // Optionally, initialize the first tab to be active on page load
  if (tabButtons.length > 0) {
    switchTab(tabButtons[0]);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const customSelect = document.querySelector(".custom-select");
  const chevronIcon = document.querySelector(".chevron_icon");
  if (customSelect && chevronIcon) {
    // Check if elements exist
    customSelect.addEventListener("click", function () {
      chevronIcon.classList.toggle("rotate");
    });
    document.addEventListener("click", function (event) {
      if (!customSelect.contains(event.target)) {
        chevronIcon.classList.remove("rotate");
      }
    });
  } else {
    console.error("Elements not found in DOM.");
  }
});