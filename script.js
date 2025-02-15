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
      navLinks.forEach(link => {
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
    const favicon = document.getElementById("favicon");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    favicon.href = prefersDark ? "favicon-dark.png" : "favicon-light.png";
  }

  updateFavicon(); // Set favicon on page load
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", updateFavicon);

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

// // GNOSTIC Tabbing Section
// document.addEventListener("DOMContentLoaded", () => {
//   const tabButtons = document.querySelectorAll(".tab-btn");
//   const tabPanels = document.querySelectorAll(".tab-panel");

//   tabButtons.forEach((button) => {
//     button.addEventListener("click", () => {
//       // Remove active class from all buttons and panels
//       tabButtons.forEach((btn) => btn.classList.remove("active"));
//       tabPanels.forEach((panel) => panel.classList.remove("active"));

//       // Add active class to clicked button and corresponding panel
//       button.classList.add("active");
//       const tabId = button.getAttribute("data-tab");
//       document.getElementById(tabId).classList.add("active");
//     });
//   });
// });

// // GNOSTIC Accordion Section
// document.addEventListener("DOMContentLoaded", () => {
//   const headers = document.querySelectorAll(".accordion-header");

//   headers.forEach((header) => {
//     header.addEventListener("click", () => {
//       const content = header.nextElementSibling;
//       const isOpen = content.style.height && content.style.height !== "0px";

//       // Close all accordions
//       document.querySelectorAll(".accordion-content").forEach((item) => {
//         item.style.height = "0";
//         item.style.paddingTop = "0";
//         item.style.paddingBottom = "0";
//       });

//       document
//         .querySelectorAll(".accordion-header")
//         .forEach((hdr) => hdr.classList.remove("active"));

//       // Toggle the clicked one
//       if (!isOpen) {
//         content.style.height = "auto";
//         content.style.padding = "40px";
//         header.classList.add("active");
//       }
//     });
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   // Get all the tab buttons
//   const tabButtons = document.querySelectorAll(".tab-btn");
//   const tabPanels = document.querySelectorAll(".tab-panel");

//   // Function to switch tabs
//   function switchTab(targetTab) {
//     tabButtons.forEach((btn) => {
//       btn.classList.remove("active"); // Remove active class from all buttons
//     });
//     targetTab.classList.add("active"); // Add active class to clicked button

//     const targetTabContent = document.querySelector(
//       `#${targetTab.dataset.tab}`
//     );

//     tabPanels.forEach((panel) => {
//       panel.classList.remove("active"); // Hide all tab panels
//     });

//     targetTabContent.classList.add("active"); // Show the active tab panel

//     // Ensure accordion items for the selected tab are hidden if needed
//     const accordionItems = targetTabContent.querySelectorAll(".accordion-item");
//     accordionItems.forEach((item) => {
//       const accordionHeader = item.querySelector(".accordion-header");
//       const accordionContent = item.querySelector(".accordion-content");

//       // Reset accordion content height to 0
//       accordionContent.style.height = "0";
//       accordionHeader.classList.remove("active");
//     });
//   }

//   // Add event listeners for tab buttons
//   tabButtons.forEach((button) => {
//     button.addEventListener("click", () => {
//       switchTab(button);
//     });
//   });
// });

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

// document.addEventListener("DOMContentLoaded", function () {
//   const selectWrapper = document.querySelector(".custom-select");
//   const select = document.querySelector(".custom-select select");

//   select.addEventListener("click", function () {
//     selectWrapper.classList.toggle("open");

//   });

//   select.addEventListener("blur", function () {
//     setTimeout(() => selectWrapper.classList.remove("open"), 200);
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const customSelect = document.getElementById("customSelect");
//   const chevronIcon = document.getElementById("chevronIcon");
//   const dropdown = document.getElementById("dropdown");
//   customSelect.addEventListener("click", function () {
//     chevronIcon.classList.toggle("rotate");
//   });
//   // Close when clicking outside
//   document.addEventListener("click", function (event) {
//     if (!customSelect.contains(event.target)) {
//       chevronIcon.classList.remove("rotate");
//     }
//   });
// });

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
