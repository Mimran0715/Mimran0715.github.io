# Mimran's Technical Blog

A Jekyll technical blog based on [Poole](https://github.com/poole/poole), deployed to GitHub Pages with GitHub Actions.

## Local development

```sh
bundle install
bundle exec jekyll serve --livereload
```

Open <http://localhost:4000>. Add posts to `_posts` using Jekyll's `YYYY-MM-DD-title.md` filename convention.

## Deployment

Pushes to `main` run `.github/workflows/jekyll.yml`. In the repository's **Settings → Pages**, set **Source** to **GitHub Actions** once before the first deployment.
