document.addEventListener('DOMContentLoaded', () => {
    const blocks = document.querySelectorAll('.block');
    blocks.forEach(block => {
        block.addEventListener('mouseenter', () => {
            block.style.transform = 'scale(1.1)';
        });
        block.addEventListener('mouseleave', () => {
            block.style.transform = 'scale(1)';
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');
    const loginPopup = document.getElementById('login-popup');
    const signupPopup = document.getElementById('signup-popup');
    const closeLogin = document.getElementById('close-login');
    const closeSignup = document.getElementById('close-signup');

    loginBtn.addEventListener('click', () => {
        loginPopup.style.display = 'flex';
    });

    signupBtn.addEventListener('click', () => {
        signupPopup.style.display = 'flex';
    });

    closeLogin.addEventListener('click', () => {
        loginPopup.style.display = 'none';
    });

    closeSignup.addEventListener('click', () => {
        signupPopup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === loginPopup) {
            loginPopup.style.display = 'none';
        }
        if (event.target === signupPopup) {
            signupPopup.style.display = 'none';
        }
    });
});
