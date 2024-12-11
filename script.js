document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".menu-btn");

  function showSection(sectionId) {
    const sections = ["Ameritrash", "Eurogame", "Party-Game"];
    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        section.style.display = id === sectionId ? "block" : "none";
      }
    });
    attachHoverEvents(sectionId);
    setInitialImage(sectionId);
  }

  function updateHeroBackground(sectionId) {
    const activeSection = document.getElementById(sectionId);
    const heroElement = activeSection.querySelector(".hero");

    switch (sectionId) {
      case "Ameritrash":
        heroElement.style.backgroundImage = "url('./Ameritrash.jpg')";
        break;
      case "Eurogame":
        heroElement.style.backgroundImage = "url('./Eurogame.jpg')";
        break;
      case "Party-Game":
        heroElement.style.backgroundImage = "url('./Party-Game.jpg')";
        break;
      default:
        heroElement.style.backgroundImage = "none";
        break;
    }
  }

  function attachHoverEvents(sectionId) {
    const activeSection = document.getElementById(sectionId);
    const gameImage = activeSection.querySelector(".left-column img");
    const gameItems = activeSection.querySelectorAll(".exemples ul li");

    gameItems.forEach((item) => {
      item.addEventListener("mouseover", function () {
        const newImage = this.getAttribute("data-image");
        if (newImage) {
          gameImage.src = newImage;
        }
      });
    });
  }

  function setInitialImage(sectionId) {
    const activeSection = document.getElementById(sectionId);
    const gameImage = activeSection.querySelector(".left-column img");
    const firstGameItem = activeSection.querySelector(".exemples ul li");

    if (firstGameItem) {
      const initialImage = firstGameItem.getAttribute("data-image");
      if (initialImage) {
        gameImage.src = initialImage;
      }
    }
  }

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const sectionId = this.id.replace("BTN", "");
      showSection(sectionId);
      updateHeroBackground(sectionId);
    });
  });

  showSection("Ameritrash");
  updateHeroBackground("Ameritrash");
});
