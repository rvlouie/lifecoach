$(document).ready(function() {
    $(".content__timeline__nav-item--upcoming").click(function() {
        $(".content__timeline__wrapper--upcoming").toggleClass("content__timeline__wrapper--open")
    });
    $(".content__timeline__nav-item--past").click(function() {
        $(".content__timeline__wrapper--past").toggleClass("content__timeline__wrapper--open")
    });
    $(".icon-button--upload").click(function() {
        $(".content__add__upload-ui").addClass("content__add__upload-ui--open")
    });
    $(".content__add__close__upload-ui").click(function() {
        $(".content__add__upload-ui").removeClass("content__add__upload-ui--open")
    });
    $(".icon-button--write").click(function() {
        $(".content__add__writing").addClass("content__add__writing--open")
    });
    $(".content__add__close__writing").click(function() {
        $(".content__add__writing").removeClass("content__add__writing--open")
    });
});