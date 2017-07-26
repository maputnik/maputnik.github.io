# website
The website for the maputnik editor


## Development
The easiest way to get started is with `docker-compose` you'll need to install it from <https://docs.docker.com/compose/install/>.

Then run

```
docker-compose up web
```

The site will be available at <http://localhost:4000/>

If you change the images you can rebuild / compress them with

```
docker-compose run build-images
```

