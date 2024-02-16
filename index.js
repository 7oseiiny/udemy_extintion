function kk() {
        try {
                let e
                try {
                        document.getElementById("playerId__51792684--184shaka-mock-vjs-control-bar-popover-area").id
                        e = document.getElementById("playerId__51792684--184shaka-mock-vjs-control-bar-popover-area")
                } catch { }
                try {
                        document.getElementById("playerId__51792684--11shaka-mock-vjs-control-bar-popover-area").id
                        e = document.getElementById("playerId__51792684--11shaka-mock-vjs-control-bar-popover-area")
                } catch { }
                var doubleTapTimeout;
                var doubleTapCount = 0;
                var doubleTapArea = document.getElementById('doubleTapArea');
                e.addEventListener('click', function () {
                        doubleTapCount++;
                        clearTimeout(doubleTapTimeout);
                        doubleTapTimeout = setTimeout(function () {
                                doubleTapCount = 0;
                        }, 500);
                        if (doubleTapCount === 2) {
                                toggleFullScreen();
                                doubleTapCount = 0;
                        }
                });
        }
        catch {
                setTimeout(() => {
                        kk()
                }, 2000);
        }

}
window.onload = kk()

function toggleFullScreen() {
        var doc = window.document;
        var docEl = doc.documentElement;
        var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
        let courseVideo =document.getElementsByClassName("course-content-toggle--button--RLfW6")
        console.log(courseVideo);
        let btn =courseVideo[0]
        if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
                // Enter fullscreen
                if (requestFullScreen) {
                        requestFullScreen.call(docEl);
                        window.scrollTo(0, 0);
                        document.body.style.overflow = 'hidden';
                        btn.style.display='none'
                }
        } else {
                // Exit fullscreen
                if (cancelFullScreen) {
                        cancelFullScreen.call(doc);
                        document.body.style.overflow = 'auto'
                        btn.style.display='inline-flex'
                }
        }
}
