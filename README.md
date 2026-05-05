# ReactAR
_How would you react to images coming to life? :sparkles:_
React port of [EnchantAR](https://github.com/RohanVilloth/EnchantAR).

HOWTO
-----
 - Open this image on any screen: [Image](https://github.com/RohanVilloth/ReactAR/raw/main/public/assets/markers/phoenix-of-autumn.jpg)
 - Open this app on your phone and scan the screen where you have the image open: [Webapp](https://RohanVilloth.github.io/ReactAR/)
 - Watch ReactAR react to images! :sparkles:

 ![Phoenix of Autumn](https://github.com/RohanVilloth/ReactAR/raw/main/public/assets/markers/phoenix-of-autumn.jpg)
 
DEMO
----
https://user-images.githubusercontent.com/3755396/126223544-20d06e0d-e4e6-4c98-9348-39b00ae1cec2.mp4

CREDITS
-------
- [Deploying a React App (created using create-react-app) to GitHub Pages](https://github.com/gitname/react-gh-pages)
- [Deploying React Apps to GitHub Pages on Master Branch — Creating a “User Site”](https://medium.com/swlh/deploying-react-apps-to-github-pages-on-master-branch-creating-a-user-site-bc96c2a37dc8)
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
- [How to convert any web page into a React web page](https://medium.com/javascript-in-plain-english/how-to-convert-any-web-page-to-reactjs-9740f1ba15db)
- Derived from [AR.js's NFT example](https://github.com/AR-js-org/AR.js/blob/3.2.1/three.js/examples/nft.html)
- Developed using [AR.js](https://github.com/AR-js-org/AR.js) and [three.js](https://threejs.org)
- Animated 3D model from [Phoenix bird by Norberto Aguilera](https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042)
- Image marker derived from [Phoenix of Autumn by AlviaAlcedo](https://deviantart.com/alviaalcedo/art/Phoenix-of-autumn-702563565)
- GLTF to GLB conversion with [GLB Packer](https://glb-packer.glitch.me)
- Image to nft marker conversion using [NFT Marker Creator](https://carnaux.github.io/NFT-Marker-Creator/)


## Local Development

To run the application locally for development:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```
   The app will open automatically at [http://localhost:3000](http://localhost:3000). The page will reload if you make edits.

## Production Build

To ensure the application builds correctly for the server, you can generate and run a production build locally:

1. Build the app for production:
   ```bash
   npm run build
   ```
   This optimizes the app and bundles it into the `build` folder.

2. Serve the production build:
   You can use `npx serve` to serve the static files:
   ```bash
   npx serve -s build
   ```
   Then open the provided local address (usually `http://localhost:3000`) in your browser to view the production build.


LICENSE
-------
Except where otherwise noted, all original content here are released under [MIT license](https://opensource.org/licenses/MIT). However, part of the work here are derived from other open source projects and as a result
follow the licenses of their original sources.
