document.addEventListener('DOMContentLoaded', () => {
    const iframe = document.querySelector('#dexscreener-embed iframe');
    const iframeContainer = document.querySelector('#dexscreener-embed');
    let iframeLoaded = false;

    if (iframe) {
        iframe.addEventListener('load', () => {
            iframeLoaded = true;
            checkAllLoaded();
        });

        iframe.addEventListener('error', () => {
            iframeContainer.style.display = 'none';
            document.body.classList.remove('loading');
            document.getElementById('loading-screen').style.opacity = '0';
            setTimeout(() => {
                document.getElementById('loading-screen').style.display = 'none';
            }, 500);
        });
    }

    function checkAllLoaded() {
        if (document.readyState === 'complete' && (!iframe || iframeLoaded)) {
            document.body.classList.remove('loading');
            document.getElementById('loading-screen').style.opacity = '0';
            setTimeout(() => {
                document.getElementById('loading-screen').style.display = 'none';
            }, 500);
        }
    }

    window.addEventListener('load', checkAllLoaded);
});
