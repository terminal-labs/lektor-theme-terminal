# Terminal

Terminal is a simple Lektor theme made from [terminallabs.com](terminallabs.com), which is meant to be evocative of an old Linux terminal; boxy and green on black.

# Configuration

Create a `404.html/contents.lr` content file pointing to 404.html, using a none model [see Lektor docs](https://www.getlektor.com/docs/guides/error-pages)

Create a `contents.lr` content file pointing to index.html, using a none model

Optionally turn on add Disqus Comments on the blog posts with lektor-disqus-comments plugin. Configure it with [this](https://github.com/lektor/lektor-disqus-comments#lektor-disqus-comments)

Add params in the `.lektorproject file`

```ini
[theme_settings]
  googleanalytics = "your_google_analytics_id"
  logo_subtext = "your tagline"
  twitterID = "your_twitter"
  linkedInURL = "your_linkedin"
  facebookID = "your_facebook"
  pinterestID = "your_pinterest"
```


## License

Terminal is licensed under the [BSD-3-Clause license](LICENSE.md)
