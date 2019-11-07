# awesome-talks

> A curated list of free web development resources.

## Add resource

Add your resource at [resources.json](https://github.com/Edouardbozon/awesome-talks/blob/master/static/resources.json), this can be done directly via the GitHub UI in the browser or you can also fork and clone this project locally.

Before adding your resource at [resources.json](https://github.com/Edouardbozon/awesome-talks/blob/master/static/resources.json), please search whether the title of the resource already exists in the file to avoid duplicates. Please make this check before submitting a Pull Request.

> If this is your first time I can recommend [How to Contribute to an Open Source Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github) by [Kent C. Dodds](https://kentcdodds.com/).

### The structure of a resource

A resource has to look a certain way, here below you can find an example:

```json
{
  "lang": "en",
  "title": "The title",
  "description": "A short description",
  "author": {
    "name": "The author's name",
    "profile": "A link to the author's bio"
  },
  "url": "The url to the resource",
  "tags": ["Angular"],
  "contributor": {
    "name": "Your name",
    "profile": "A link to your bio"
  }
}
```

Or take a look at the [schema](https://github.com/Edouardbozon/awesome-talks/blob/master/static/resources-schema.json).

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```
