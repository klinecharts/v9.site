import{_ as i,c as a,a9 as t,o as e}from"./chunks/framework.Z8yrkugl.js";const c=JSON.parse('{"title":"🏝️ Environment","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/guide/environment.md","filePath":"en-US/guide/environment.md","lastUpdated":1727374614000}'),n={name:"en-US/guide/environment.md"};function h(l,s,r,p,k,o){return e(),a("div",null,s[0]||(s[0]=[t(`<h1 id="🏝️-environment" tabindex="-1">🏝️ Environment <a class="header-anchor" href="#🏝️-environment" aria-label="Permalink to &quot;🏝️ Environment&quot;">​</a></h1><h2 id="browser-support" tabindex="-1">Browser support <a class="header-anchor" href="#browser-support" aria-label="Permalink to &quot;Browser support&quot;">​</a></h2><p>The chart is built based on html5 canvas and needs to run on a browser that supports canvas. If it needs to run on the mobile terminal, please use webview to load it.</p><h2 id="polyfill" tabindex="-1">Polyfill <a class="header-anchor" href="#polyfill" aria-label="Permalink to &quot;Polyfill&quot;">​</a></h2><h3 id="core-js" tabindex="-1"><a href="https://github.com/zloirock/core-js" target="_blank" rel="noreferrer">core.js</a> <a class="header-anchor" href="#core-js" aria-label="Permalink to &quot;[core.js](https://github.com/zloirock/core-js)&quot;">​</a></h3><p>The internal collection of the chart uses <code>Map</code> for compatibility with unsupported older browsers.</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">core.js</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> init</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">klincharts</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span></code></pre></div><h3 id="intl-js" tabindex="-1"><a href="https://github.com/andyearnshaw/Intl.js" target="_blank" rel="noreferrer">Intl.js</a> <a class="header-anchor" href="#intl-js" aria-label="Permalink to &quot;[Intl.js](https://github.com/andyearnshaw/Intl.js)&quot;">​</a></h3><p>Charts rely on <code>Intl</code>, some browsers do not have this API.</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">intl</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">intl/local-data/jsonp/en</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> init</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">klincharts</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span></code></pre></div>`,10)]))}const g=i(n,[["render",h]]);export{c as __pageData,g as default};