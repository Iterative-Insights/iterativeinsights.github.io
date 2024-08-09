document.addEventListener('DOMContentLoaded', function() {
    var body = document.body;
    var imageDiv = document.querySelector('.poster .spiral-image');
    
    // Set initial state
    body.classList.add('dark-theme');
    imageDiv.classList.add('spiral-image-dark-theme');

    document.getElementById('theme-toggle').addEventListener('click', function() {
        if (body.classList.contains('dark-theme')) {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            imageDiv.classList.remove('spiral-image-dark-theme');
            imageDiv.classList.add('spiral-image-light-theme');
        } else {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            imageDiv.classList.remove('spiral-image-light-theme');
            imageDiv.classList.add('spiral-image-dark-theme');
        }
    });
});