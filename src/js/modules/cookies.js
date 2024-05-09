// (() => {
//   const buttons = document.querySelectorAll(".btn__cookies");
//   const privacyPolicyLinks = document.querySelectorAll("[data-modal-open4]");

//   buttons.forEach((btn) => {
//     btn.addEventListener("click", () => {
//       const cookieBar = document.querySelector(".cookiebar");
//       cookieBar.style.display = "none";
//     });
//   });

//   privacyPolicyLinks.forEach((link) => {
//     link.addEventListener("click", (e) => {
//       e.stopPropagation();
//     });
//   });
// })();

// (() => {
//   const buttons = document.querySelectorAll(".btn__cookies");
//   const privacyPolicyLinks = document.querySelectorAll("[data-modal-open4]");
//   const cookieBar = document.querySelector(".cookiebar");

//   // Check local storage to see if the user has accepted cookies
//   if (!localStorage.getItem('cookiesAccepted')) {
//     cookieBar.style.display = "flex";
//   } else {
//     cookieBar.style.display = "none";
//   }

//   buttons.forEach((btn) => {
//     btn.addEventListener("click", () => {
//       // Hide the cookie bar
//       cookieBar.style.display = "none";
//       // Set a flag in local storage
//       localStorage.setItem('cookiesAccepted', 'true');
//     });
//   });

//   privacyPolicyLinks.forEach((link) => {
//     link.addEventListener("click", (e) => {
//       e.stopPropagation();
//     });
//   });
// })();

(() => {
  const buttons = document.querySelectorAll(".btn__cookies");
  const privacyPolicyLinks = document.querySelectorAll("[data-modal-open4]");
  const cookieBar = document.querySelector(".cookiebar");

  // Only manipulate cookieBar if it actually exists
  if (cookieBar) {
    // Check local storage to see if the user has accepted cookies
    if (!localStorage.getItem('cookiesAccepted')) {
      cookieBar.style.display = "flex";
    } else {
      cookieBar.style.display = "none";
    }

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Hide the cookie bar
        cookieBar.style.display = "none";
        // Set a flag in local storage
        localStorage.setItem('cookiesAccepted', 'true');
      });
    });
  }

  privacyPolicyLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  });
})();

