// Function to remove the Reels section
function removeReelsSection() {
  const reelsSection = document.querySelector('.x1h91t0o'); // Replace with the actual class name
  if (reelsSection) {
    reelsSection.remove();
  }
}

// Function to redirect the user to a different page if on Instagram
function redirectToNewPage() {
  const targetUrl = 'https://www.instagram.com/direct/inbox/';

  if (window.location.hostname === 'www.instagram.com' && window.location.href !== targetUrl) {
    // Check if the current domain is Instagram
    window.location.href = targetUrl;
  }
}

// Run the functions when the DOM content is loaded
window.onload = function () {
  removeReelsSection();
  redirectToNewPage();
};