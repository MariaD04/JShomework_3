const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('click', function(event) {
        let dropdownValue = event.target;
        if (dropdownValue.className != 'dropdown__value') {
            return;
        }
        else {
            const links = dropdown.querySelectorAll('.dropdown__link');
            const list = dropdown.querySelector('.dropdown__list');
        
            list.classList.toggle('dropdown__list_active');
            links.forEach((link) => {
                link.addEventListener('click', (event) => {
                    event.preventDefault(); 
                    dropdownValue.textContent = link.textContent;
                    list.classList.remove('dropdown__list_active');
                });
            });
        }
    })
})


