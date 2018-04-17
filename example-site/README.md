# Lektor Terminal Theme bare bones example site

Terminal is a simple Lektor theme made from [terminallabs.com](https://terminallabs.com), which is meant to be evocative of an old Linux terminal; boxy and green on black.

This is a stand-alone repository for a very simple example site that uses the Terminal theme. You can check it out and simply run `lektor server`, and it will just work. It  is pre-configured.

There are [screenshots available](screenshots), including this

![image of subnav page](https://github.com/terminal-labs/lektor-theme-terminal/blob/master/images/page_with_subnav.png)

# Configuration

None! Well, there is configuration that has already been done *for you*. Here's what happened:

See the contents of [terminal.lektorproject](terminal.lektorproject). Various theme settings were filled in.

A few images were added for the logo in the top left, and favicons. See [assets/static/images](assets/static/images).

Content was added. I added a few basic pages, [a page with sub-pages and a sub-nav bar](content/about), [a 404 page](content/404.html/contents.lr), [a blog page](content/blog) with and [some blog posts](content/blog/first-post).

The 404 page simply uses the normal `page.ini` model/template from within the theme. Most pages do. Pages that may have sub-pages that should auto-generate a subnav bar use `with_subnav.html`, the main blog page uses `blog.html`, and the blog posts use `blog-post.html`.

Disqus is enabled with terminallabs's shortname, working with our domain as seen in the project file. Simply remove the Disqus plugin to disable that.

## License

Terminal is licensed under the [BSD-3-Clause license](LICENSE.md)
