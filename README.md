
# ray-tracer

Ray tracer for Node.js in TypeScript.

This is based off of
_[Ray Tracing in One Weekend](http://in1weekend.blogspot.com/2016/01/ray-tracing-in-one-weekend.html)_ by Peter Shirley.

## Setup

Install the TypeScript compiler globally:

```shell
$ npm i -g typescript
```

## Build the demo PPM (Chapter 1)

```shell
$ npm run demo-ppm
```

Note that this only works in macOS Sierra 10.12 because the script uses the `open` bash command to open the output.
Preview in Sierra knows how to open this file, but previous versions of Preview don't. Older versions of macOS will
need to open this file some other way.
