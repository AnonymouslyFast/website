const showOnPx = 1;
var scroll = 810;

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  scroll = 374;
}


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