export function link() {
    document.querySelectorAll("a[href^='#']").forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            const targetElemnet = document.querySelector(targetId);

            if (targetElemnet) {
                targetElemnet.scrollIntoView({ behavior: "smooth" });
            }
        })
    })
}