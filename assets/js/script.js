let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});


$(document).ready(function(){
    $("#send_button").click(function(){
        alert("El correo fue enviado correctamente");
    });
    $(".recipe-section").on("dblclick", "h4", function(){
        $(this).toggleClass("c-red");
    });

    $(".card-title").click(function(){
        $(this).closest('.card').find('.card-text').toggle();
    });


});

