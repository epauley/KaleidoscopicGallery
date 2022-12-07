# Kaleidoscopic Gallery

## Dependencies

- Jekyll: [https://jekyllrb.com/](https://jekyllrb.com/)

### Jekyll Requirements

- Ruby version 2.5.0 or higher
```sh
ruby -v
```

- RubyGems
```sh
gem -v
```

- GCC and Make
```sh
gcc -v
g++ -v
make -v
```

## Setup Instructions


```sh
git clone git@github.com:epauley/KaleidoscopicGallery.git
gem install bundler jekyll
cd /KaleidoscopicGallery
bundle exec jekyll serve
```

Open browse and navigate to [http://localhost:4000](http://localhost:4000)

## Active Development

Run this command while developing. This will watch for changes and automatically refresh the page made to the source files.

```sh
bundle exec jekyll serve --livereload
```

## Stop Server

Press ctrl-c to stop
