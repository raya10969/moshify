const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

const spriteUrl = new URL("./img/sprite.svg", import.meta.url);
document.querySelectorAll("use[data-icon]").forEach(el => {
  el.setAttribute("href", `${spriteUrl}#${el.dataset.icon}`);
});