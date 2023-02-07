const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.navbar_list');
const login = document.querySelector('.login_link');

toggleBtn.addEventListener('click',()=>{
    menu.classList.toggle('active');
    login.classList.toggle('active');
});