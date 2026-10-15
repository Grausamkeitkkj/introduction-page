document.addEventListener("DOMContentLoaded", function () {
    const cursors = document.querySelectorAll(".code-text > span");
    setTimeout(() => { cursors[0].classList.add("show-cursor"); }, 0);
    setTimeout(() => {
        cursors[0].classList.remove("show-cursor");
        cursors[1].classList.add("show-cursor");
    }, 2000);
    setTimeout(() => {
        cursors[1].classList.remove("show-cursor");
        cursors[2].classList.add("show-cursor");
    }, 4000);
    setTimeout(() => { cursors[2].classList.add("third-line-cursor-animation");}, 6000);
})