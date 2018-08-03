webpackJsonp([0xfbec223d1a99],{523:function(n,a){n.exports={data:{markdownRemark:{html:'<p>Compose handlers.\nSometimes you may want to use multiple handlers to handle one event so you can reuse each of them on different situation. We provide <code class="language-text">middleware</code> method which enables you to compose multiple handlers in a functional style.</p>\n<blockquote>\n<p>Middleware are simple functions which return a MiddlewareFunction with signature (ctx, next). When the middleware is run, it must manually invoke next() to run the "downstream" middleware.</p>\n<p>-- <cite>koa</cite></p>\n</blockquote>\n<h2 id="api"><a href="#api" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>API</h2>\n<h3 id="middlewarehandler1-handler2-"><a href="#middlewarehandler1-handler2-" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>middleware([handler1, handler2, ...])</h3>\n<p>Compose the given handlers as a middleware and return a composed handler.</p>\n<p>Handlers is an array of functions with args like below:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">/**\n * @param {Object} context - A context can use all methods in client (see {@link\n *     https://github.com/Yoctol/messaging-apis}|messaging-apis}) and sessions.\n * @param {Function} next - call `next()` to pass control to the next handler.\n */</span>\n<span class="token keyword">function</span> <span class="token function">handler</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> next<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">/* ... */</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token punctuation">{</span> middleware <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'bottender\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token operator">...</span>\n\n<span class="token keyword">const</span> composedHandler <span class="token operator">=</span> <span class="token function">middleware</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token keyword">function</span> <span class="token function">handler1</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> next<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token keyword">function</span> <span class="token function">handler2</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> next<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token operator">...</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nbot<span class="token punctuation">.</span><span class="token function">onEvent</span><span class="token punctuation">(</span>composedHandlers<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token operator">...</span></code></pre>\n      </div>\n<p>Each event came from bot will be handled by function handler1.</p>\n<p>Call <code class="language-text">next()</code> in function handler1 and it will go to function handler2.</p>\n<p>more <a href="https://github.com/Yoctol/bottender/tree/master/examples/middleware">example</a> for middleware.</p>',frontmatter:{title:"Middleware",date:"October 11, 2017",author:null},fields:{path:"docs/Guides-Middleware.md"}},site:{siteMetadata:{title:"Bottender"}}},pathContext:{slug:"/docs/Guides-Middleware/"}}}});
//# sourceMappingURL=path---docs-guides-middleware-4bb2145cb243f7f20289.js.map