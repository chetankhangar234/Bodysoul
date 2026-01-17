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
document.querySelectorAll(".like").forEach(btn=>{
  btn.onclick = ()=>{
    const span = btn.querySelector("span");
    span.innerText = +span.innerText + 1;
  };
});

