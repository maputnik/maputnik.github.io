FROM ruby

# https://github.com/jekyll/jekyll/issues/6181
RUN gem install jekyll -v "3.4.5"
RUN gem install jekyll-redirect-from -v "0.11.0"

RUN apt-get update \
  && apt-get install -y \
    libjpeg-turbo-progs \
    unzip \
  && apt-get purge -y --auto-remove

