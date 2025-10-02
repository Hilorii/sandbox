//////////////\\\\\\\\\\\\\\ 
Welcome to Sandbox! (～￣▽￣)～
\\\\\\\\\\\\\\//////////////

A personal web application for experimenting and learning.
Here are some notes I thought might be helpful:



///////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
                       SMALL NEXT.JS GUIDE
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\//////////////////////////////////
https://nextjs.org/docs/app/getting-started/project-structure

////////////////|
  ROUTING FILES |
////////////////|
layout	         .js .jsx .tsx	    Layout
page	         .js .jsx .tsx	    Page
loading	         .js .jsx .tsx	    Loading UI
not-found        .js .jsx .tsx	    Not found UI
error	         .js .jsx .tsx	    Error UI
global-error	 .js .jsx .tsx	    Global error UI
route	         .js .ts	        API endpoint
template	     .js .jsx .tsx	    Re-rendered layout
default	          .js .jsx .tsx	    Parallel route fallback page

_fileName - makes folder private (non routable)

Route groups can be created by wrapping a folder in parenthesis: (folderName)

By default, layouts in the folder hierarchy are also nested, which means they wrap child layouts via their children prop. 
You can nest layouts by adding layout inside specific route segments (folders).
For example, to create a layout for the /blog route, add a new layout file inside the blog folder.

import Link from 'next/link'
<Link href={`/blog/${post.slug}`}>{post.title}</Link>


//////////////////////|
  Component hierarchy | 
//////////////////////|
layout.js
template.js
error.js (React error boundary)
loading.js (React suspense boundary)
not-found.js (React error boundary)
page.js or nested layout.js



///////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
                      THE END OF NEXT.JS GUIDE
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\//////////////////////////////////

