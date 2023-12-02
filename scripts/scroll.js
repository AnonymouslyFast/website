const showOnPx = 1;

const scrollContainer = () => {
  document.scrollingElement;
};
function checkScroll() {
    if (document.scrollingElement.scrollTop > 810) {
        document.getElementById("backtop").classList.remove("hidden");
      } else {
        document.getElementById("backtop").classList.add("hidden");
      }
}
document.addEventListener("scroll", (event) => {
  checkScroll();
});