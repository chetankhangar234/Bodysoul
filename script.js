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
// ✅ PER-IMAGE LIKE SYSTEM (WITH SAVE)

// saare like buttons pakdo
document.querySelectorAll(".like").forEach((btn, index) => {
  const countSpan = btn.querySelector("span");
  const key = "like_count_" + index;

  // page load pe saved like dikhao
  let savedCount = localStorage.getItem(key);
  countSpan.innerText = savedCount ? savedCount : 0;

  // click event
  btn.addEventListener("click", () => {
    let count = Number(countSpan.innerText);
    count++;
    countSpan.innerText = count;
    localStorage.setItem(key, count);
  });
});
const search = document.getElementById("search");

search.addEventListener("input", ()=>{
  const value = search.value.toLowerCase();

  for(let i=1;i<=20;i++){        // jitni arts hain utna number
    const art = document.getElementById("art"+i);
    if(!art) continue;

    art.style.display =
      art.innerText.toLowerCase().includes(value)
      ? "block"
      : "none";
  }
});



