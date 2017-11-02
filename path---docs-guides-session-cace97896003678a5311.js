webpackJsonp([30531634831716],{645:function(n,s){n.exports={data:{markdownRemark:{html:'<p>A session is a place to store data that you want to access to across requests. Each user that talks to your bot has a unique session. You can use sessions to store and access user data as they talk to your bot.</p>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<h3 id="botsetinitialstateobject"><a href="#botsetinitialstateobject" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bot.setInitialState(Object)</h3>\n<p>To set the initial state of coversation.</p>\n<h3 id="contextstate"><a href="#contextstate" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>context.state</h3>\n<p>To get session data.</p>\n<h3 id="contextsetstateobject"><a href="#contextsetstateobject" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>context.setState(Object)</h3>\n<p>To store data into session which is (generally) serialized as JSON by the store, so nested objects are typically fine.</p>\n<h3 id="contextresetstate"><a href="#contextresetstate" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>context.resetState()</h3>\n<p>To reset all data in session to initial state.</p>\n<p>For example, we can put user\'s nickname in session and call it later:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>User > Hi\nBot  > Hi, what\'s your nickname?\nUser > Tim\nBot  > Hello Tim</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment" spellcheck="true">// Bot will use memory session store as default if you don\'t assign sessionStore.</span>\nbot<span class="token punctuation">.</span><span class="token function">setInitialState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  asking<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  nickname<span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nbot<span class="token punctuation">.</span><span class="token function">onEvent</span><span class="token punctuation">(</span><span class="token keyword">async</span> context <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>context<span class="token punctuation">.</span>state<span class="token punctuation">.</span>asking<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    context<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> nickname<span class="token punctuation">:</span> context<span class="token punctuation">.</span>event<span class="token punctuation">.</span>text<span class="token punctuation">,</span> asking<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">sendText</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>context<span class="token punctuation">.</span>state<span class="token punctuation">.</span>nickname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    context<span class="token punctuation">.</span><span class="token function">resetState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    context<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> asking<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">sendText</span><span class="token punctuation">(</span><span class="token string">"Hi, what\'s your nickname?"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>See more details at <a href="https://github.com/Yoctol/bottender/tree/master/examples/with-state">example</a></p>\n<h2 id="session-expiration"><a href="#session-expiration" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Session Expiration</h2>\n<p>You are able to set expired time for session optionally. The default value of expiration is <strong>one year</strong> after <code>SessionStore</code> object is created.<br>\nThe expiration should be sent as a <strong>Number of seconds</strong> when you are initializing a <code>SessionStore</code> object.</p>\n<p>Here is an example for creating a <code>MongoSessionStore</code> object with expired time:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment" spellcheck="true">// Session will expire after 10 seconds</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> ConsoleBot<span class="token punctuation">,</span> MongoSessionStore <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'bottender\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConsoleBot</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  sessionStore<span class="token punctuation">:</span> <span class="token keyword">new</span> <span class="token class-name">MongoSessionStore</span><span class="token punctuation">(</span>\n    <span class="token string">\'mongodb://localhost:27017/\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      collectionName<span class="token punctuation">:</span> <span class="token string">\'session\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token number">10</span>\n  <span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2 id="use-different-session-store"><a href="#use-different-session-store" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Use Different Session Store</h2>\n<p>Session store is a place where session data is being stored on server.</p>\n<p>We implement following kinds of session store. All kinds of bots will use memory session store as default.</p>\n<ul>\n<li><strong>memory</strong> - sessions are stored in memory with <a href="https://github.com/isaacs/node-lru-cache">LRU cache</a> and will not be persisted. See <a href="https://github.com/Yoctol/bottender/tree/master/examples/with-memory-session">example</a></li>\n<li><strong>file</strong> - sessions are stored in <code>.sessions</code> by default. See\n<a href="https://github.com/Yoctol/bottender/tree/master/examples/with-file-session">example</a></li>\n<li><strong>mongo</strong> - sessions are stored in a mongo database. See\n<a href="https://github.com/Yoctol/bottender/tree/master/examples/with-mongo-session">example</a></li>\n<li><strong>redis</strong> - sessions are stored in redis based stores. See\n<a href="https://github.com/Yoctol/bottender/tree/master/examples/with-redis-session">example</a></li>\n</ul>\n<h2 id="adding-custom-session-drivers"><a href="#adding-custom-session-drivers" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Adding Custom Session Drivers</h2>\n<p>Your custom session driver should implement the <code>SessionStore</code> interface. This interface contains just a few simple methods you need to implement. A stubbed store implementation looks something like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment" spellcheck="true">// @flow</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Store</span> <span class="token keyword">implements</span> <span class="token class-name">SessionStore</span> <span class="token punctuation">{</span>\n  <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> Promise<span class="token operator">&lt;</span>SessionStore<span class="token operator">></span> <span class="token punctuation">{</span> <span class="token comment" spellcheck="true">/* ... */</span> <span class="token punctuation">}</span>\n  <span class="token function">read</span><span class="token punctuation">(</span>sessionId<span class="token punctuation">:</span> string<span class="token punctuation">)</span><span class="token punctuation">:</span> Promise<span class="token operator">&lt;</span>Session <span class="token operator">|</span> <span class="token keyword">null</span><span class="token operator">></span> <span class="token punctuation">{</span> <span class="token comment" spellcheck="true">/* ... */</span> <span class="token punctuation">}</span>\n  <span class="token function">write</span><span class="token punctuation">(</span>sessionId<span class="token punctuation">:</span> string<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">:</span> Promise<span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">></span> <span class="token punctuation">{</span> <span class="token comment" spellcheck="true">/* ... */</span> <span class="token punctuation">}</span>\n  <span class="token function">destroy</span><span class="token punctuation">(</span>sessionId<span class="token punctuation">:</span> string<span class="token punctuation">)</span><span class="token punctuation">:</span> Promise<span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">></span> <span class="token punctuation">{</span> <span class="token comment" spellcheck="true">/* ... */</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>',frontmatter:{title:"Conversation Session",date:"October 11, 2017",author:null},fields:{path:"docs/Guides-Session.md"}},site:{siteMetadata:{title:"Bottender"}}},pathContext:{slug:"/docs/Guides-Session/",_PARENT:"SOURCE"}}}});
//# sourceMappingURL=path---docs-guides-session-cace97896003678a5311.js.map