# url-shortener

This is a URL shortener.

You can find a deployed version here: https://url-shortener-nh88.onrender.com/. (Note that you have to _wait 90 seconds_ for the instance to spin-up.)

![snapshot](/client/public/snapshot.png)

Here's how to run this project locally.

### Prerequisites

"url-shortener" runs on **Node 22.5.1** and **MongoDB Community 7.0.12**.

A **MacOS operating system** is also recommended for use.

It is recommended to use _nvm_ to install this version of Node. Documentation on how to install node, through nvm, [can be found here](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating).

Documentation on how to install MongoDB [can be found here](https://www.mongodb.com/docs/manual/administration/install-community/).

### Installation

"url-shortener" has a client, a server, and a MongoDB database. The following steps are necessary for installation.

1. Open three windows in the command-line interface (CLI), such as the MacOS _Terminal_.

#### Database

2. In the first CLI window, run the relevant command to start MongoDB.

Depending on your operating system, this command may be different. The relevant command can be found in the [MongoDB documentation](https://www.mongodb.com/docs/manual/administration/install-community/).

In MacOS, try to run the command below.

```
brew services start mongodb-community@7.0
```

If this does not work, try to run this alternative command.

```
brew services restart mongodb-community@7.0
```

#### Server-Side

3. In the second CLI window, go to the root folder of the project.
4. In the second CLI window, run the following code.

```
cd server
npm i
npm run build
npm start
```

(If the above does not work, try running `npm run dev`.)

#### Client-Side

5. In the third CLI window, go to the root folder of the project.
6. In the third CLI window, run the following code.

```
cd client
yarn
yarn start
```

7. The local version of "url-shortener" should start at `http://localhost:3000/`.
