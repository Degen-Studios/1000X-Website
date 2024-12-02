document.addEventListener('DOMContentLoaded', () => {
    const loaderImage = document.querySelector('.loader-image');
    let imageLoaded = false;

    if (loaderImage) {
        loaderImage.addEventListener('load', () => {
            imageLoaded = true;
            document.getElementById('loading-screen').classList.add('loaded');
            checkAllLoaded();
        });

        if (loaderImage.complete) {
            imageLoaded = true;
            document.getElementById('loading-screen').classList.add('loaded');
            checkAllLoaded();
        }
    }

    function checkAllLoaded() {
        if (document.readyState === 'complete' && imageLoaded) {
            document.body.classList.remove('loading');
            document.getElementById('loading-screen').style.opacity = '0';

            // Make content visible after loading screen fades
            setTimeout(() => {
                document.getElementById('loading-screen').style.display = 'none';
                document.querySelectorAll('.container, .main-header, .main-nav, .section').forEach(el => {
                    el.style.visibility = 'visible';
                });
            }, 500);
        }
    }


    window.addEventListener('load', checkAllLoaded);
});
