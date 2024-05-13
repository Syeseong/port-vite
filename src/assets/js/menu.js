export function menu() {
    const headerToggle = document.getElementById("headerToggle");
    const headerNav = document.querySelector(".header__nav");

    if (headerToggle) {
        // headerToggle이 있어야만 실행 되도록 해줌, 오류방지
        headerToggle.addEventListener("click", () => {
            headerNav.classList.toggle("show");

            headerToggle.getAttribute("aria-expanded") === "true" ? headerToggle.setAttribute("aria-expanded", "false") : headerToggle.setAttribute("aria-expanded", "true")
        })
    }
}