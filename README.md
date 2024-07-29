# url-shortener

This is a URL shortener. Here's how to run this project locally.

### Prerequisites

This project runs on **Node 22.5.1**. It is recommended to use _nvm_ to install this version of Node. Documentation on how to do so [can be found here](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating).

A Macintosh **Terminal** is also recommended for use.

### Installation

This project has a client and server side. The following steps are necessary for installation.

1. Open two windows in the _Terminal_. In both Terminal windows, go to the root folder of the project.

##### Server-Side

2. In the first Terminal window, run the following code.

```
cd server
npm i
npm run build
npm start
```

(If the above does not work, try running `npm run dev`.)

##### Client-Side

3. In the second Terminal window, run the following code.

```
cd client
yarn
yarn start
```

4. The local version of "url-shortener" should start at `http://localhost:3000/`.
