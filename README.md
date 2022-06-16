#Image Finder

## How to run on local environment

1. Install dependencies
2. make a copy of `.env.example` file and rename it to `.env`
3. insert a valid key for `REACT_APP_UNSPLASH_API_KEY`
4. Run `npm install`
5. Run `npm start`
6. for tests run `npm test`

##Task

Write a small React JS Web application with the following functionality:

- Allow the user to enter their Name, Surname, and a Preferred Topic. Possible values for the topic are:
  Travel, Cars, Wildlife, Technology and Other.
- When ‘Other’ is selected as a topic, allow the user to enter their preferred topic in free text.
- Once the topic has been specified, fetch a matching image from Unsplash.com. You can use any free /
  opensource package or an API; for example: https://www.npmjs.com/package/unsplash-react
- Present the image to the user on a new view along with two buttons Accept and Reject.
- If the user rejects the picture, carry out another search.
- If the user accepts the picture, present them with a new view with a "card" displaying Name, Surname and a thumbnail of the image selected.

# Notes

- You are free to choose how you create the project (create-react-app, next.js, Gatsby...) and there is no
  expectation to write server-side code for the purpose of this exercise.
- Keep the page styling simple using standard user-experience and design guidelines.
- Where possible, avoid "prop drilling" and utilize a state management solution.
- Apply good coding practices and design patterns as you’d do in a production application, you are free
  to utilize any libraries/frameworks of your choice.
