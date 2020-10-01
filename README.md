## Welcome
This is the public repo for the Destined for X website. It launched in April 2020 as an initiative to move away from alternative website providers and have more creative control over functionality as we grow. We're always looking for people who are interested in helping us grow. Check out our ongoing Projects and reach out to us if you'd like to contribute!

## About Destined for X
Our mission is to empower underreprented students to confidently craft a fulfilling future. 

We were founded in 2017 here in the San Francisco, Bay Area by a few motivated early career professionals who were looking to give back to students and teach them the tools that are necessary for personal success. What started off as a fun, immersive, week-long program every summer has turned into a movement and year-round community of motivated individuals looking to improve their lives through experiential learning and mentorship.

### Destined for X 2019 Class at Stanford University
![Destined for X 2019 Class at Stanford University](https://res.cloudinary.com/dwgvb9rdh/image/upload/c_scale,w_919/v1601585387/69467973_10221088037697044_5505520613109792768_o_m4pjkg.jpg)

## 👉 Get Started 
Install dependencies
```
npm install
```
Install the Netlify CLI
```
npm install netlify-cli -g
```
Run the development server
```
netlify dev
```
When the above command completes you'll be able to view your website at `http://localhost:8888`

_Note: You can run just the front-end with `npm run start`, but `netlify dev` also handles running your API endpoints (located in the `/api` directory)._

## 🥞 Stack
This project uses the following libraries and services:
- Framework - [Create React App](https://create-react-app.dev) with React Router
- Styling - [Bootstrap](https://getbootstrap.com) with custom SASS styles
- Authentication - [Firebase Auth](https://firebase.google.com/products/auth)
- Newsletter - [Mailchimp](https://mailchimp.com)
- Analytics - [Google Analytics](https://googleanalytics.com)
- Hosting - [Netlify](https://netlify.com)


## 📚 Guide
<details>
  <summary><b>Styles</b></summary>
  <p>
    You can edit Bootstrap SASS variables in the global stylesheet located at <code><a href="src/styles/global.scss">src/styles/global.scss</a></code>. Variables allow you to control global styles (like colors and fonts), as well as element specific styles (like button padding). Before overriding Bootstrap elements with custom style check the <a href="https://getbootstrap.com/docs/4.3/getting-started/introduction/">Bootstrap docs</a> to see if you can do what need by tweaking a SASS variable.
  </p>
  <p>
    Custom styles are located in their related component's directory. For example, if any custom style is applied to the Navbar component you'll find it in <code>src/components/Navbar.scss</code>. We ensure custom styles are scoped to their component by prepending the classname with the component name (such as <code>.Navbar__brand</code>). This ensures styles never affect elements in other components. If styles need to be re-used in multiple components consider creating a new component that encapsulates that style and structure and using that component in multiple places.
  </p>
</details>

<details>
  <summary><b>Routing</b></summary>
  <p>
    This project uses <a target="_blank" href="https://reacttraining.com/react-router/web/guides/quick-start">React Router</a> and includes a convenient <code>useRouter</code> hook (located in <code><a href="src/util/router.js">src/util/router.js</a></code>) that wraps React Router and gives all the route methods and data you need.
  
  ```jsx
  import { Link, useRouter } from './../util/router.js';

  function MyComponent(){
    // Get the router object
    const router = useRouter();

    // Get value from query string (?postId=123) or route param (/:postId)
    console.log(router.query.postId);

    // Get current pathname
    console.log(router.pathname)

    // Navigate with the <Link> component or with router.push()
    return (
      <div>
        <Link to="/about">About</Link>
        <button onClick={(e) => router.push('/about')}>About</button>
      </div>
    );
  }
  ```
  </p>
</details>

<details>
  <summary><b>Authentication</b></summary>

  <p>
    This project uses <a href="https://firebase.google.com">Firebase Auth</a> and includes a convenient <code>useAuth</code> hook (located in <code><a href="src/util/auth.js">src/util/auth.js</a></code>) that wraps Firebase and gives you common authentication methods. Depending on your needs you may want to edit this file and expose more Firebase functionality.

  ```js
  import { useAuth } from './../util/auth.js';

  function MyComponent(){
    // Get the auth object in any component
    const auth = useAuth();

    // Depending on auth state show signin or signout button
    // auth.user will either be an object, null when loading, or false if signed out
    return (
      <div>
        {auth.user ? (
          <button onClick={(e) => auth.signout()}>Signout</button>
        ) : (
          <button onClick={(e) => auth.signin('hello@divjoy.com', 'yolo')}>Signin</button>
        )}
      </div>
    );
  }
  ```
  </p>
</details>

<details>
  <summary><b>Deployment</b></summary>
  <p>
  Build for production

```
npm run build
```

Install the Netlify CLI
```
npm install netlify-cli -g
```

Then run this command in your project directory to deploy to Netlify
```
netlify deploy
```

See the <a target="_blank" href="https://docs.netlify.com/cli/get-started/#manual-deploys">Netlify docs</a> for more details.
  </p>
</details>

<details>
  <summary><b>Other</b></summary>
  <p>
    The <a href="https://create-react-app.dev">Create React App documention</a> covers many other topics.
    This project was initially created using <a href="https://divjoy.com?ref=readme_other">Divjoy</a>, a React codebase generator. 
  </p>
</details>
