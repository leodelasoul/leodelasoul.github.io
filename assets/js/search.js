function search() {
    document.location.href = document.getElementById('mySearch').value;
    return false;
};


document.getElementsByClassName('navbar-form navbar-right')[0].addEventListener('submit', search);
