# Rick and Morty App

```
Welcome to my tech assessment about Rick and Morty.

Technical stack : 
- Vue.js 2 with Options API / VueX / Vue Router
- Axios to make HTTP requests to API (cf. https://rickandmortyapi.com/documentation/)
- Tailwind CSS
- Cypress for e2e tests
```

```
- All characters are visible on http://localhost:3000/#/characters
- Details of one character visible on http://localhost:3000/#/characters/:id
```

#### To install and run project
```
npm install
npx tailwindcss -i ./src/input.css -o ./dist/output.css
npm run serve
```

#### To launch Cypress tests
```
npx cypress open

Default url is set to localhost:3000, but it can be updated in cypress.json file (baseUrl)
```
