window.onload = function() {

    var desktopFallback = "https://youtube.com/watch?v=4KnNVK-udTU",
    mobileFallback = "https://youtube.com/watch?v=4KnNVK-udTU",
    app = "vnd.youtube://4KnNVK-udTU";

    if( /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
        window.location = app;
        window.setTimeout(function() {
            window.location = mobileFallback;
        }, 25);
    } else {
        window.location = desktopFallback;
    }

    function killPopup() {
        window.removeEventListener('pagehide', killPopup);
    }

    window.addEventListener('pagehide', killPopup);

};