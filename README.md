Live Site: [Allium](https://www.alliumkitchen.com/)

A home site for the food blog and clothing brand, Allium. The site features a blog, recommended kitchen products page, and a links to their external clothing store. Designed in Canva, and built with Next.js and TailwindCSS.

Future plans are to incorporate shopify store directly into the site.

### Next.js Starter Template

This is the existing [blog-starter](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) plus TypeScript.
This example showcases Next.js's [Static Generation](https://nextjs.org/docs/basic-features/pages) feature using Markdown files as the data source.
The blog posts are stored in `/_posts` as Markdown files with front matter support. Adding a new Markdown file in there will create a new blog post.
To create the blog posts we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.
