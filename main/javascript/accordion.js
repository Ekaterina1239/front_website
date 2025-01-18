document.addEventListener("DOMContentLoaded", function() {
    const accordion = document.getElementById('cokeAccordion');
    const buttons = accordion.querySelectorAll('.accordion-button');
    const panels = accordion.querySelectorAll('.panel');
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const panel = panels[index];
            if (panel.classList.contains('active')) {
                panel.classList.remove('active');
            } else {
                panels.forEach(p => p.classList.remove('active'));
                panel.classList.add('active');
            }
        });
    });
});