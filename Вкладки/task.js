const tabs = Array.from(document.querySelectorAll('.tab'));
const tabContents = Array.from(document.querySelectorAll('.tab__content'));

function hideTabs() {
    tabs.forEach((tab) => {
        tab.classList.remove('tab_active')
    });
    tabContents.forEach((content) => {
        content.classList.remove('tab__content_active')
    });
}

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        hideTabs(); 
        tab.classList.add('tab_active');
        index = tabs.indexOf(tab);
        tabContents[index].classList.add('tab__content_active'); 
    });
});
