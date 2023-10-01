// Login functionality
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const password = document.getElementById('password').value;
    if (password === 'access123') { 
        window.location.href = 'main.html'; // Redirect to the main site.
    } else {
        alert('Incorrect password!');
    }
});

// Copy button functionality for the main site
$(document).ready(function() {
    $('.copy-btn').click(function() {
        var $temp = $('<input>');
        $('body').append($temp);
        $temp.val($(this).data('content')).select();
        document.execCommand('copy');
        $temp.remove();

        $(this).text('✓ Copied');
        var btn = $(this);
        setTimeout(function() {
            btn.text('Copy');
        }, 5000);
    });
});
