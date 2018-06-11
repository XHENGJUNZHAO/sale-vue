(()=>{
    $(`<link rel="stylesheet" href="css/header.css">`).appendTo(document.head);
    $('#header').load('header.html');
    $(`<link rel="stylesheet" href="css/footer.css">`).appendTo(document.head);
    $('#footer').load('footer.html');
})();