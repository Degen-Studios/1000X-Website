---
layout: home
---

<section id="socials" class="section">
    <h2>Socials</h2>
    <div class="socials-grid">
        <a href="https://twitter.com/1000XonBase" target="_blank" class="social-button">
            <div class="social-icon">
                <i class="fa-brands fa-x-twitter"></i>
                <i class="fab fa-twitter"></i>
            </div>
            <span>Twitter</span>
        </a>
        <a href="https://t.me/X1000onBASE" target="_blank" class="social-button">
            <div class="social-icon">
                <i class="fab fa-telegram-plane"></i>
            </div>
            <span>Telegram</span>
        </a>
    </div>
</section>

<section id="about" class="section">
    <h2>About</h2>
    <div class="timeline">
        <div class="milestone">
            <p>1000X is a meme token on Base Network.</p>
        </div>
        <div class="milestone">
            <p>It's just 1000X.</p>
        </div>
    </div>
</section>

<section id="tokenomics" class="section">
    <h2>Tokenomics</h2>
    <div class="tokenomics-grid">
        <div class="stat-box">
            <h3>Supply</h3>
            <p class="supply-animation"><span class="supply-text">1,000,000</span></p>
        </div>
    </div>
</section>

<section id="exchanges" class="section">
    <h2>Exchanges</h2>
    <div class="exchange-grid">
        <a href="https://app.uniswap.org/swap?outputCurrency=0x397af86a35288f7a219febaab34f9b947d4d772d" target="_blank" class="exchange-button">
            <div class="exchange-icon">
                {% include uniswap.svg %}
            </div>
            <span>Uniswap</span>
        </a>
        <a href="https://matcha.xyz/tokens/base/0x397af86a35288f7a219febaab34f9b947d4d772d" target="_blank" class="exchange-button">
            <div class="exchange-icon">
                {% include matcha.svg %}
            </div>
            <span>Matcha</span>
        </a>
    </div>
</section>

<section id="charts" class="section">
    <h2>Charts</h2>
    <div class="chart-tabs">
        <button class="chart-tab active" data-chart="geckoterminal">GeckoTerminal</button>        
        <button class="chart-tab" data-chart="dexscreener">DexScreener</button>
        <button class="chart-tab" data-chart="dextools">DexTools</button>
    </div>
    <div class="chart-container">
        <iframe class="chart-frame active" id="geckoterminal" src="https://www.geckoterminal.com/base/pools/0x903b8cb16a36b7d9b81a18a564c2b470e889e5b2?embed=1&info=0&swaps=0"></iframe>
        <iframe class="chart-frame" id="dexscreener" src="https://dexscreener.com/base/0x903B8Cb16a36b7d9B81a18A564C2b470e889E5B2?embed=1&theme=dark&trades=0&info=0"></iframe>
        <iframe class="chart-frame" id="dextools" src="https://www.dextools.io/widget-chart/en/base/pe-light/0x903b8cb16a36b7d9b81a18a564c2b470e889e5b2?theme=dark&chartType=2&chartResolution=30&drawingToolbars=false"></iframe>
    </div>
    <div class="charts-grid">
        <a href="https://www.geckoterminal.com/base/pools/0x903b8cb16a36b7d9b81a18a564c2b470e889e5b2" target="_blank" class="exchange-button">
            <div class="exchange-icon">
                <img src="{{ '/assets/images/geckoterminal.png' | relative_url }}" alt="GeckoTerminal" width="96" height="96">
            </div>
            <span>GeckoTerminal</span>
        </a>
        <a href="https://dexscreener.com/base/0x903b8cb16a36b7d9b81a18a564c2b470e889e5b2" target="_blank" class="exchange-button">
            <div class="exchange-icon">
                {% include dexscreener.svg %}
            </div>
            <span>DexScreener</span>
        </a>
        <a href="https://www.dextools.io/app/en/base/pair-explorer/0x903b8cb16a36b7d9b81a18a564c2b470e889e5b2" target="_blank" class="exchange-button">
            <div class="exchange-icon">
                {% include dextools.svg %}
            </div>
            <span>DexTools</span>
        </a>
    </div>
</section>