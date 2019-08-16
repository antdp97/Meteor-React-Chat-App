## A Meteor 1.8, React 16, React Router 5, Bootstrap 4 template

Based off the official meteor scaffolding, with accounts, login and a demo collection that persists on login/logout.

Current routes setup:

- landing (index route)
- login
- signup
- profile
- recover-password
- reset-password
- not-found

## Quick start
Clone repository:
```
git clone https://github.com/johnwils/meteor-react-template.git
```
Install packages:
```
meteor npm install
```
Start Meteor:
```
meteor
```

Navigate to [http://localhost:3000](http://localhost:3000) in any browser.


## Routing and redirects
React Router 5 `props` are accessible in every top level 'page' component. This allows any page to access react router's 'redirect' functions and url params, etc. These can be passed onto any further components.

Also React Router's `withProps` HOC provides the same functionality to any component.

When logged in, users are redirected to the '/profile' route.

When logged out, users are redirect to the '/login' route.

## Folder structure

The folder structure is modular, developer friendly, easy to navigate and follows the import structure of the official Meteor docs.

### Pages
Each 'route' is represented by a folder in the 'pages' directory. Most data fetching is done at this top page level. These pages are the 'smart' or 'container' components. They fetch data and pass it as props to presentational components.

### Components
Reusable components in the 'components' directory are 'dumb' or ''presentational' components. These are mostly functional, stateless components. If a component requires data, it is passed as props from it's page component.

*Note:* Meteor's reactive `withTracker` can also fetch data in any sub component (if really needed).

### Note 
There is no state management package included.

