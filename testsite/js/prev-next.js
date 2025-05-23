const galleries = {
  exhibitions: [
    "exhibit-001.html",
    "exhibit-002.html",
    "exhibit-003.html",
    // add more...
  ],
  artworks: [
    "work1.html",
    "work2.html",
    "work3.html",
    // add more...
  ],
};

// IMPORTANT: Set this in the HTML before this script loads
let currentGallery = window.currentGallery || "exhibitions";

document.addEventListener("DOMContentLoaded", function () {
  const gallery = galleries[currentGallery];
  if (!gallery) {
    console.warn("Gallery not found:", currentGallery);
    return;
  }

  // Get the last part of the URL (e.g., exhibit-001.html)
  let currentFile = window.location.pathname.split("/").pop();

  // If the URL ends in a slash (e.g., /work/), assume index.html
  if (!currentFile) currentFile = "index.html";

  const currentIndex = gallery.indexOf(currentFile);

  if (currentIndex === -1) {
    console.warn("Current file not found in gallery list:", currentFile);
    return;
  }

  const prevIndex = (currentIndex === 0) ? gallery.length - 1 : currentIndex - 1;
  const nextIndex = (currentIndex === gallery.length - 1) ? 0 : currentIndex + 1;

  const prevLink = document.querySelector(".prev a");
  const nextLink = document.querySelector(".next a");

  // Preserve the current directory path (e.g., /work/)
  const pathPrefix = window.location.pathname.replace(/[^/]+$/, "");

  if (prevLink) {
    prevLink.href = pathPrefix + gallery[prevIndex];
    prevLink.style.pointerEvents = "auto";
    prevLink.style.opacity = "1";
  }

  if (nextLink) {
    nextLink.href = pathPrefix + gallery[nextIndex];
    nextLink.style.pointerEvents = "auto";
    nextLink.style.opacity = "1";
  }
});
