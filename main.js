const loader = document.querySelector("#loader");
const cards = document.querySelectorAll(".project-card");
const modal = document.querySelector("#projectModal");
const modalImage = document.querySelector("#modalImage");
const modalTitle = document.querySelector("#modalTitle");
const modalDesc = document.querySelector("#modalDesc");
const modalClose = document.querySelector("#modalClose");

window.addEventListener("load", () => {
  window.setTimeout(() => {
    document.body.classList.add("loaded");
    window.setTimeout(() => loader?.remove(), 800);
  }, 1100);
});

cards.forEach((card) => {
  card.addEventListener("click", () => {
    modalImage.src = card.dataset.image;
    modalImage.alt = card.getAttribute("aria-label") || "作品预览";
    if (modalTitle) modalTitle.textContent = card.dataset.title || "";
    if (modalDesc) modalDesc.textContent = card.dataset.desc || "";
    modal.showModal();
  });
});

modalClose.addEventListener("click", () => modal.close());

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.close();
  }
});
