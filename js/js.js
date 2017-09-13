    var link = document.querySelector(".form-search");
    var popup = document.querySelector(".form");
    var close = popup.querySelector(".form-button-search");
    var password = popup.querySelector("[name=date-back]");
    var form = popup.querySelector("form");
    link.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.add("modal-show");
        name=date-there.focus();
    });
    close.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.remove("modal-show");
    });   
    form.addEventListener("submit", function (evt) {
        evt.preventDefault();
    });
