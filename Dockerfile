FROM ruby

# https://github.com/jekyll/jekyll/issues/6181
RUN gem install jekyll -v "3.9.4"
RUN gem install jekyll-redirect-from -v "0.16.0"
RUN gem install kramdown-parser-gfm -v "1.1.0"
RUN gem install webrick -v "1.3.1"

RUN apt-get update \
  && apt-get install -y \
    libjpeg-turbo-progs \
    unzip \
  && apt-get purge -y --auto-remove

