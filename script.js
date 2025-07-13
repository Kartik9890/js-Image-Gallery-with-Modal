function openModal(imgElement) {
  console.log("Image clicked:", imgElement.src);

  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const caption = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = imgElement.src;
  caption.textContent = imgElement.alt;

  console.log("Modal opened with image:", modalImg.src);
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
  console.log("Modal closed");
}
