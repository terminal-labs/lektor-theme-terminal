## Terminal

Terminal is a simple Lektor theme made from [terminallabs.com](https://terminallabs.com), which is meant to be evocative of an old Linux terminal; boxy and green on black.

![example-site image](https://github.com/terminal-labs/lektor-theme-terminal/blob/master/images/page_with_subnav.png)

There is a fully functional example-site you can try out [here](https://github.com/terminal-labs/lektor-theme-terminal/tree/master/example-site).

## Configuration

- **404 Page**:Create a normal `Page` entitled 404.html, with `404.html/contents.lr`.
- **Static & Social Links**: Create a page of model `Social` and path `social-networks` and add social media links with flowblocks. This page is included in the page.html template and isn't meant for direct display, so it's template is in the include/ directory and it does not have normal style, so add `_hidden: yes` and `_template: includes/social_networks.html` to it's contents.lr file. In the flowblocks, add any links and they will appear in the top right corner of every page. These links can be external or internal, such as for flat pages.
- **Disqus**: Turn on add Disqus Comments on the blog posts with lektor-disqus-comments plugin. Configure it with [this](https://github.com/lektor/lektor-disqus-comments#lektor-disqus-comments).
- **RSS**: Create an Atom RSS feed setup for the blog by using the `lektor-atom` plugin. The templates are ready to go. See the example project here if you need help.

Remember, everything in this theme can be overridden.

Add params in the `.lektorproject file`. All params are optional unless otherwise specified.

```ini
[theme_settings]
  googleanalytics = "your_google_analytics_id"
  # file in assets/static/images/
  logo_file = "logo.png"
  logo_subtext = "your tagline"
  logo_width = "width for logo <img>"
```

## Contributing

In addition to being a Lektor theme and all that entails, this theme currently uses lesscss. To install it, you can do:

```shell
npm install -g less
```

and to use it to compile css:

```shell
lessc less/main.less assets/static/css/terminal.css
```


## License

Terminal is licensed under the [BSD-3-Clause license](LICENSE.md)
