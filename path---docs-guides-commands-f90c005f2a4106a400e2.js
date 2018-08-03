webpackJsonp([0x5c1635df931f],{518:function(e,a){e.exports={data:{markdownRemark:{html:'<p>The following introduction shows the Bottender command-line interface usage.</p>\n<h2 id="setup"><a href="#setup" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Setup</h2>\n<p>To use Bottender CLI tools, you need to install <code class="language-text">bottender</code> globally:</p>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code class="language-sh">npm install -g bottender</code></pre>\n      </div>\n<p>Or use <a href="https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b"><code class="language-text">npx</code></a>(already installed in <code class="language-text">npm@5.2.0</code> or greater) to get local <code class="language-text">bottender</code> installation:</p>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code class="language-sh">npx bottender</code></pre>\n      </div>\n<p>Some commands will need a <code class="language-text">bottender.config.js</code> file to be properly configured.</p>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p>The command-line interface included within bottender provides a number of helpful commands.</p>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code class="language-sh">bottender</code></pre>\n      </div>\n<p>Or use <code class="language-text">btd</code> shorthand:</p>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code class="language-sh">btd</code></pre>\n      </div>\n<p>To see all of the available commands, simply use the <code class="language-text">--help</code> option:</p>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code class="language-sh">bottender --help</code></pre>\n      </div>\n<p>Every command has a "help" screen which displays and describes the command\'s available arguments and options. To view them, simply precede the name of the command with <code class="language-text">--help</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code class="language-sh">bottender init --help</code></pre>\n      </div>\n<h2 id="create-bot"><a href="#create-bot" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Create Bot</h2>\n<p>You can use interactive CLI to create your bots:</p>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code class="language-sh">bottender init</code></pre>\n      </div>\n<p>After answer a few questions, a new bot will be ready for you.</p>\n<h2 id="platform-specific-commands"><a href="#platform-specific-commands" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Platform Specific Commands</h2>\n<p>To use platform specific commands, just type name of platform behind the <code class="language-text">bottender</code> command.</p>\n<p>For example, to set Messenger profile for your bots:</p>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code class="language-sh">bottender messenger profile set</code></pre>\n      </div>\n<p>Or to get Telegram webhook information:</p>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code class="language-sh">bottender telegram webhook get</code></pre>\n      </div>\n<p>Provide <code class="language-text">--help</code> to see the details.</p>',frontmatter:{title:"Commands",date:"October 17, 2017",author:null},fields:{path:"docs/Guides-Commands.md"}},site:{siteMetadata:{title:"Bottender"}}},pathContext:{slug:"/docs/Guides-Commands/"}}}});
//# sourceMappingURL=path---docs-guides-commands-f90c005f2a4106a400e2.js.map