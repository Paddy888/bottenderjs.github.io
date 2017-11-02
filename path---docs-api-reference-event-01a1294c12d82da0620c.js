webpackJsonp([0xd010cb940411],{636:function(n,t){n.exports={data:{markdownRemark:{html:'<p>A Bottender Event helps you determine what kind of message is sent from user.</p>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<h3 id="contextevent"><a href="#contextevent" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>context.event</h3>\n<p>You can access <code>context.event</code> object within your handlers as the following example shows.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>bot<span class="token punctuation">.</span><span class="token function">onEvent</span><span class="token punctuation">(</span><span class="token keyword">async</span> context <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>context<span class="token punctuation">.</span>event<span class="token punctuation">.</span>isText<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">sendText</span><span class="token punctuation">(</span><span class="token string">\'I know you sent text message.\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">sendText</span><span class="token punctuation">(</span><span class="token string">\'I know you did not send text message.\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<h2 id="methods"><a href="#methods" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Methods</h2>\n<ul>\n<li><strong>M</strong>: Messenger</li>\n<li><strong>L</strong>: LINE</li>\n<li><strong>S</strong>: Slack</li>\n<li><strong>T</strong>: Telegram</li>\n<li><strong>C</strong>: Console</li>\n</ul>\n<table>\n<thead>\n<tr>\n<th align="center">Name</th>\n<th align="center">M</th>\n<th align="center">L</th>\n<th align="center">S</th>\n<th align="center">T</th>\n<th align="center">C</th>\n<th align="center">Return</th>\n<th align="center">Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="center">rawEvent</td>\n<td align="center">✅</td>\n<td align="center">✅</td>\n<td align="center">✅</td>\n<td align="center">✅</td>\n<td align="center">✅</td>\n<td align="center">M: MessengerRawEvent\n<br>\nL: LineRawEvent\n<br>\nS: SlackRawEvent\n<br>\nT: TelegramRawEvent\n<br>\nC: ConsoleRawEvent</td>\n<td align="center">Underlying raw event.\n<br>\n \n<strong>Return value depends on your platform</strong>\n.</td>\n</tr>\n<tr>\n<td align="center">isMessage</td>\n<td align="center">✅</td>\n<td align="center">✅</td>\n<td align="center">✅</td>\n<td align="center">✅</td>\n<td align="center">✅</td>\n<td align="center">boolean</td>\n<td align="center">Determine if the event is a \n<strong>message</strong>\n event.</td>\n</tr>\n<tr>\n<td align="center">message</td>\n<td align="center">✅</td>\n<td align="center">✅</td>\n<td align="center">✅</td>\n<td align="center">✅</td>\n<td align="center">✅</td>\n<td align="center">Message</td>\n<td align="center">The \n<strong>message</strong>\n object from raw event.</td>\n</tr>\n<tr>\n<td align="center">isText</td>\n<td align="center">✅</td>\n<td align="center">✅</td>\n<td align="center">✅</td>\n<td align="center">✅</td>\n<td align="center">✅</td>\n<td align="center">boolean</td>\n<td align="center">Determine if the event is a message event which includes \n<strong>text</strong>\n.</td>\n</tr>\n<tr>\n<td align="center">text</td>\n<td align="center">✅</td>\n<td align="center">✅</td>\n<td align="center">✅</td>\n<td align="center">✅</td>\n<td align="center">✅</td>\n<td align="center">string</td>\n<td align="center">The \n<strong>text string</strong>\n from message.</td>\n</tr>\n<tr>\n<td align="center">isAudio</td>\n<td align="center">✅</td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center">boolean</td>\n<td align="center">Determine if the event is a message event which includes \n<strong>audio</strong>\n attachment.</td>\n</tr>\n<tr>\n<td align="center">isVideo</td>\n<td align="center">✅</td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center">boolean</td>\n<td align="center">Determine if the event is a message event which includes \n<strong>video</strong>\n attachment.</td>\n</tr>\n<tr>\n<td align="center">isLocation</td>\n<td align="center">✅</td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center">boolean</td>\n<td align="center">Determine if the event is a message event which includes \n<strong>location</strong>\n attachment.</td>\n</tr>\n<tr>\n<td align="center">isSticker</td>\n<td align="center">✅</td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center">boolean</td>\n<td align="center">Determine if the event is a message event which includes \n<strong>sticker</strong>\n.</td>\n</tr>\n<tr>\n<td align="center">isImage</td>\n<td align="center">✅</td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">boolean</td>\n<td align="center">Determine if the event is a message event which includes \n<strong>image</strong>\n attachment.</td>\n</tr>\n<tr>\n<td align="center">isFile</td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">boolean</td>\n<td align="center">Determine if the event is a message event which includes \n<strong>file</strong>\n attachment.</td>\n</tr>\n<tr>\n<td align="center">isFallback</td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">boolean</td>\n<td align="center">Determine if the event is a message event which includes \n<strong>fallback</strong>\n attachment.</td>\n</tr>\n<tr>\n<td align="center">isChannelsMessage</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">boolean</td>\n<td align="center">Determine if the event is a message event sent from \n<strong>channels</strong>\n.</td>\n</tr>\n<tr>\n<td align="center">isGroupsMessage</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">boolean</td>\n<td align="center">Determine if the event is a message event sent from \n<strong>groups</strong>\n.</td>\n</tr>\n<tr>\n<td align="center">isImMessage</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">boolean</td>\n<td align="center">Determine if the event is a message event sent from \n<strong>instant messaging</strong>\n.</td>\n</tr>\n<tr>\n<td align="center">isMpimMessage</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">boolean</td>\n<td align="center">Determine if the event is a message event sent from \n<strong>multiple people instant messaging</strong>\n.</td>\n</tr>\n<tr>\n<td align="center">isDocument</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center">boolean</td>\n<td align="center">Determine if the event is a message event which includes \n<strong>document</strong>\n.</td>\n</tr>\n<tr>\n<td align="center">isGame</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center">boolean</td>\n<td align="center">Determine if the event is a message event which includes \n<strong>game</strong>\n.</td>\n</tr>\n<tr>\n<td align="center">isPhoto</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center">boolean</td>\n<td align="center">Determine if the event is a message event which includes \n<strong>photo</strong>\n.</td>\n</tr>\n<tr>\n<td align="center">isVoice</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center">boolean</td>\n<td align="center">Determine if the event is a message event which includes \n<strong>voice</strong>\n.</td>\n</tr>\n<tr>\n<td align="center">isVideoNote</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center">boolean</td>\n<td align="center">Determine if the event is a message event which includes \n<strong>video note</strong>\n.</td>\n</tr>\n<tr>\n<td align="center">isContact</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center">boolean</td>\n<td align="center">Determine if the event is a message event which includes \n<strong>contact</strong>\n.</td>\n</tr>\n<tr>\n<td align="center">isVenue</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center">boolean</td>\n<td align="center">Determine if the event is a message event which includes \n<strong>venue</strong>\n.</td>\n</tr>\n<tr>\n<td align="center">isPostback</td>\n<td align="center">✅</td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">boolean</td>\n<td align="center">Determine if the event is a \n<strong>postback</strong>\n event.</td>\n</tr>\n<tr>\n<td align="center">postback</td>\n<td align="center">✅</td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">Postback</td>\n<td align="center">The \n<strong>postback</strong>\n object from raw event.</td>\n</tr>\n<tr>\n<td align="center">hasAttachment</td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">boolean</td>\n<td align="center">Determine if the event has any \n<strong>attachments</strong>\n.</td>\n</tr>\n<tr>\n<td align="center">attachments</td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">Array</td>\n<td align="center">The \n<strong>attachments array</strong>\n from Messenger raw event.</td>\n</tr>\n<tr>\n<td align="center">isLikeSticker</td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">boolean</td>\n<td align="center">Determine if the event is a message event which includes \n<strong>\'like\' sticker</strong>\n.</td>\n</tr>\n<tr>\n<td align="center">isQuickReply</td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">boolean</td>\n<td align="center">Determine if the event is a message event triggered from \n<strong>quick reply</strong>\n.</td>\n</tr>\n<tr>\n<td align="center">quickReply</td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">QuickReply</td>\n<td align="center">The \n<strong>quick reply</strong>\n object from Messenger raw event.</td>\n</tr>\n<tr>\n<td align="center">isEcho</td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">boolean</td>\n<td align="center">Determine if the event is a message event sent from \n<strong>our side</strong>\n.</td>\n</tr>\n<tr>\n<td align="center">isPayment</td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">boolean</td>\n<td align="center">Determine if the event is a \n<strong>payment</strong>\n event.</td>\n</tr>\n<tr>\n<td align="center">payment</td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">Payment</td>\n<td align="center">The \n<strong>payment</strong>\n object from Messenger raw event.</td>\n</tr>\n<tr>\n<td align="center">isRead</td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">boolean</td>\n<td align="center">Determine if the event is a message \n<strong>read</strong>\n event.</td>\n</tr>\n<tr>\n<td align="center">isDelivery</td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">boolean</td>\n<td align="center">Determine if the event is a \n<strong>message delivery</strong>\n event.</td>\n</tr>\n<tr>\n<td align="center">isPayload</td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">boolean</td>\n<td align="center">Determine if the event is a postback or quick reply which includes \n<strong>payload</strong>\n.</td>\n</tr>\n<tr>\n<td align="center">payload</td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">string</td>\n<td align="center">The \n<strong>payload</strong>\n received from postback or quick reply.</td>\n</tr>\n<tr>\n<td align="center">isPolicyEnforcement</td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">boolean</td>\n<td align="center">Determine if the event is a \n<strong>policy enforcement</strong>\n event.</td>\n</tr>\n<tr>\n<td align="center">policyEnforcement</td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">PolicyEnforcement</td>\n<td align="center">The \n<strong>policy enforcement</strong>\n object from Messenger raw event.</td>\n</tr>\n<tr>\n<td align="center">isAppRoles</td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">boolean</td>\n<td align="center">Determine if the event is an \n<strong>app roles</strong>\n event.</td>\n</tr>\n<tr>\n<td align="center">appRoles</td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">AppRoles</td>\n<td align="center">The \n<strong>app roles</strong>\n object from Messenger raw event.</td>\n</tr>\n<tr>\n<td align="center">isStandby</td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">boolean</td>\n<td align="center">Determine if the event is a \n<strong>standby</strong>\n event.</td>\n</tr>\n<tr>\n<td align="center">isOptin</td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">boolean</td>\n<td align="center">Determine if the event is an \n<strong>opt-in</strong>\n event.</td>\n</tr>\n<tr>\n<td align="center">isCheckoutUpdate</td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">boolean</td>\n<td align="center">Determine if the event is a \n<strong>checkout update</strong>\n event.</td>\n</tr>\n<tr>\n<td align="center">isPreCheckout</td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">boolean</td>\n<td align="center">Determine if the event is a \n<strong>pre-checkout</strong>\n event.</td>\n</tr>\n<tr>\n<td align="center">isPassThreadControl</td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">boolean</td>\n<td align="center">Determine if the event is a \n<strong>pass thread control</strong>\n event.</td>\n</tr>\n<tr>\n<td align="center">passThreadControl</td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">PassThreadControl</td>\n<td align="center">The \n<strong>pass thread control</strong>\n object from Messenger raw event.</td>\n</tr>\n<tr>\n<td align="center">isTakeThreadControl</td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">boolean</td>\n<td align="center">Determine if the event is a \n<strong>take thread control</strong>\n event.</td>\n</tr>\n<tr>\n<td align="center">takeThreadControl</td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">TakeThreadControl</td>\n<td align="center">The \n<strong>take thread control</strong>\n object from Messenger raw event.</td>\n</tr>\n<tr>\n<td align="center">replied</td>\n<td align="center"></td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">boolean</td>\n<td align="center"><strong>Underlying raw event</strong>\n from LINE.</td>\n</tr>\n<tr>\n<td align="center">replyToken</td>\n<td align="center"></td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">ReplyToken</td>\n<td align="center">The \n<strong>reply token</strong>\n from LINE raw event. Only present on message, follow, join, postback, beacon events.</td>\n</tr>\n<tr>\n<td align="center">isFollow</td>\n<td align="center"></td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">boolean</td>\n<td align="center">Determine if the event is a \n<strong>follow</strong>\n event.</td>\n</tr>\n<tr>\n<td align="center">isUnfollow</td>\n<td align="center"></td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">boolean</td>\n<td align="center">Determine if the event is an \n<strong>unfollow</strong>\n event.</td>\n</tr>\n<tr>\n<td align="center">isJoin</td>\n<td align="center"></td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">boolean</td>\n<td align="center">Determine if the event is a \n<strong>join</strong>\n event.</td>\n</tr>\n<tr>\n<td align="center">isLeave</td>\n<td align="center"></td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">boolean</td>\n<td align="center">Determine if the event is a \n<strong>leave</strong>\n event.</td>\n</tr>\n<tr>\n<td align="center">date</td>\n<td align="center"></td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">string</td>\n<td align="center">The \n<strong>date string</strong>\n from LINE postback event.</td>\n</tr>\n<tr>\n<td align="center">time</td>\n<td align="center"></td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">string</td>\n<td align="center">The \n<strong>time string</strong>\n from LINE postback event.</td>\n</tr>\n<tr>\n<td align="center">datetime</td>\n<td align="center"></td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">string</td>\n<td align="center">The \n<strong>datetime string</strong>\n from LINE postback event.</td>\n</tr>\n<tr>\n<td align="center">isBeacon</td>\n<td align="center"></td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">boolean</td>\n<td align="center">Determine if the event is a \n<strong>beacon</strong>\n event.</td>\n</tr>\n<tr>\n<td align="center">isCallbackQuery</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center">boolean</td>\n<td align="center">Determine if the event is a \n<strong>callback query</strong>\n event.</td>\n</tr>\n</tbody>\n</table>',frontmatter:{title:"Event",date:"October 17, 2017",author:null},fields:{path:"docs/APIReference-Event.md"}},site:{siteMetadata:{title:"Bottender"}}},pathContext:{slug:"/docs/APIReference-Event/",_PARENT:"SOURCE"}}}});
//# sourceMappingURL=path---docs-api-reference-event-01a1294c12d82da0620c.js.map