
## The node.js example app

## Requirements

* Node 8
* Git
* Contentful CLI (only for write access)

Without any changes, this app is connected to a Contentful space with read-only access. To experience the full end-to-end Contentful experience, you need to connect the app to a Contentful space with read _and_ write access. This enables you to see how content editing in the Contentful web app works and how content changes propagate to this app.

## Common setup

```bash
npm install
```

## Steps for read-only access

To start the express server, run the following

```bash
npm start
```

Open [http://localhost:3002](http://localhost:3002) and take a look around.


## Steps for read and write access (recommended)

Step 1: Install 

Step 2: Open `.env` and inject your credentials so it looks like this

```
NODE_ENV=development
CONTENTFUL_SPACE_ID=<SPACE_ID>
CONTENTFUL_DELIVERY_TOKEN=<DELIVERY_ACCESS_TOKEN>
CONTENTFUL_PREVIEW_TOKEN=<PREVIEW_ACCESS_TOKEN>
PORT=3000
```

Step 3: To start the express server, run the following
```bash
npm start
```
Final Step:

## Deploy to Heroku
You can also deploy this app to Heroku:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)


## Use Docker
You can also run this app as a Docker container:

Step 1: Clone the repo

```bash
git clone https://github.com/toanvan273/nodejs_mongodb.git
```

Step 2: Build the Docker image

```bash
docker build -t nodejs_mongodb .
```

Step 3: Run the Docker container locally:

```bash
docker run -p 3000:3000 -d nodejs_mongodb
```

If you created your own Contentful space, you can use it by overriding the following environment variables:

```bash
docker run -p 3000:3000 \
  -e CONTENTFUL_SPACE_ID=<SPACE_ID> \
  -e CONTENTFUL_DELIVERY_TOKEN=<DELIVERY_ACCESS_TOKEN> \
  -e CONTENTFUL_PREVIEW_TOKEN=<PREVIEW_ACCESS_TOKEN> \
  -d nodejs_mongodb
```

1. Để làm gì?
2. Làm như nào?
3. Có đủ năng lực làm ko?