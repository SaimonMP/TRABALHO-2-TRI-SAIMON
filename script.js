document.getElementById('menuToggle').addEventListener('click', function() {
    var navMenu = document.getElementById('navMenu');
    if (navMenu.style.display === 'block') {
        navMenu.style.display = 'none';
    } else {
        navMenu.style.display = 'block';
    }
});

document.querySelectorAll('.nav-menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        var targetId = this.getAttribute('href').substring(1); // Remove o "#" do início do href
        var targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        // Fecha o menu depois de clicar em um link
        document.getElementById('navMenu').style.display = 'none';
    });
});
