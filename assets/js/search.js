
document.getElementByClass('navbar-form navbar-right').addEventListener ('submit', function() {
    document.location.href = '/browse/' + document.getElementById('mySearch').value;
    console.log(yolo);
    return false;
});
