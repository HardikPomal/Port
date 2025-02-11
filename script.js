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
