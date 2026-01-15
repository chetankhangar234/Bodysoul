const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");

document.querySelectorAll(".art-img").forEach(img=>{
  img.onclick = ()=>{
    modalImg.src = img.src;
    modal.style.display = "flex";
  }
});

modal.onclick = ()=>{
  modal.style.display = "none";
};
