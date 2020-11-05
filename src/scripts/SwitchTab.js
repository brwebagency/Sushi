export default function SwitchTab(id) {
    const allTabs   = document.querySelectorAll(".tab"),
          targetTab = document.querySelector(".tab-" + id);
          
    for (let i = 0; i < allTabs.length; i++) {
        allTabs[i].classList.remove("active");
    }

    targetTab.classList.add("active");
}