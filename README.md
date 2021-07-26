`mongodb` `#assembler-school` `#master-in-software-engineering`

# Assembler School: Node.js REST API Design Intro Workshop - Part 2 <!-- omit in toc -->

In this workshop you will learn how to implement authentication using JSON Web Tokens.

## Table of Contents <!-- omit in toc -->

- [Workshop Material](#workshop-material)
- [Workflow](#workflow)
- [Dependencies](#dependencies)
- [Why don't we use cookies as Token-based Authentication?](#why-dont-we-use-cookies-as-token-based-authentication)
- [Authentication vs Authorization](#authentication-vs-authorization)
- [Types of Authorization Protocols/Standards](#types-of-authorization-protocolsstandards)
- [Types of Token](#types-of-token)
- [Token Authentication Steps](#token-authentication-steps)
- [Jsonwebtoken](#jsonwebtoken)
  - [Generate Token](#generate-token)
    - [Params](#params)
  - [Verify Token](#verify-token)
- [CRUD API Exercises](#crud-api-exercises)
  - [Step-By-Step](#step-by-step)
  - [1. Implement an authorization controller in the `/src/routes/auth-controller.js` file](#1-implement-an-authorization-controller-in-the-srcroutesauth-controllerjs-file)
  - [2. Implement an auth-middleware for token verification, in the `/src/middlewares/auth-middleware.js` file](#2-implement-an-auth-middleware-for-token-verification-in-the-srcmiddlewaresauth-middlewarejs-file)

## Workshop Material

- [Getting Started](docs/getting_started.md)
- [MVC Refresher](docs/mvc_refresher.md)
- [REST API in Nodejs](docs/rest_api_starter.md)

## Workflow

In the previous stage of the workshop you built a basic REST API, however no authentication was needed in order to fetch data.
Because sometimes you may need to deal with sensitive data or may want to limit access to the content you are offering, for instance, to registered users only, an authorization method needs to be implemented.

When it comes to user authentication, there are several approaches that can be followed:

- Server-based Authentication
  - Hard to scale
  - Hard to share session data between different frameworks
- Token-based Authentication
  - Easier to scale
  - Reusability (shared permissions between applications)

In this workshop we will focus on implementing a Token-based Authentication service using JSON Web Tokens.

## Dependencies

Before we can get started you will need to make sure that all the necessary dependencies are installed in your system.

```bash
$ npm install
```

## Why don't we use cookies as Token-based Authentication?

Reminder:

- Browser automatically sends cookies.
- Bearer Tokens need to be added explicitly.

Cookies Security Issue:

- CSRF Attack

Interesting Article:
[Cookies vs. Tokens: The Definitive Guide ](https://dzone.com/articles/cookies-vs-tokens-the-definitive-guide)

## Authentication vs Authorization

- Authentication:
  - Proving correct identity
- Authorization:
  - Allowing certain actions

## Types of Authorization Protocols/Standards

[Reference](https://idratherbewriting.com/learnapidoc/docapis_more_about_authorization.html)

- API Keys
  - Sign up for an API key in order to use the API.
- Basic Auth
  - Sending username:password (encoded in Base64) into the request header.
- HMAC (Hash-based message authorization code)
  - With HMAC, both the sender and receiver know a secret key that no one else does. More common in financial APIs.
- OAuth 2.0
  - Relies on an authentication server to communicate with the API server to grant access.

The implementation you are going to

## Types of Token

- ID Token:
  - Used to retrieve user's basic profile information. Should not be used to gain access to an API.
- Access Token:
  - Can be used for authentication and authorization to get access to the resources
- Refresh Token:
  - Used to get a new Access Token, when the old expires.

## Token Authentication Steps

<img src='docs\images\TokenBasedAuthentication.png' width='600' alt='promise states'>

- 1. Request
  - User logs in to a service using their login credentials.
- 2. Verification
  - The server verifies the login information, for instance, comparing password values.
- 3. Token Submission
  - The server generates a token for the user for a specific period of time.
- 4. Client Storage
  - The user's browser stores it for future website requests.
- 5. Expiration
  - The token will be valid until the users logs out, closes the server or the specified validity time has elapsed.

## Jsonwebtoken

### Generate Token

```js
// imports
const jwt = require("jsonwebtoken");
// funcs
function generateAccessToken(data) {
  return jwt.sign(data, ACCESS_TOKEN_SECRET, { expiresIn: "60s" });
}
```

#### Params

- "data"
  - an object literal or string representing valid JSON
- "ACCESS_TOKEN_SECRET":
  - string or object containing a secret key
- "expiresIn"
  - expressed in seconds or a string describing a time span

### Verify Token

```js
// imports
const jwt = require("jsonwebtoken");
// funcs
async function verifyAuthToken(token) {
  return new Promise(function verifyAuthTokenHandler(resolve, reject) {
    const res = jwt.verify(token, ACCESS_TOKEN_SECRET);
    if (!res) reject("JWT validation error!");
    resolve(res);
  });
}
```

## CRUD API Exercises

In this step we will create the CRUD endpoints for the Movie schema. You will have to create endpoints and controllers so that you can create, read, modify and delete movie resources.

The schema can be found in the `src/models/movie-model.js` file.

### Step-By-Step

- If you get stuck you can find the answers in the `02-jwt-pagination-solution` branch
- Try not to peek at the solutions and solve them with your pair programming partner
- To finish this part you have 25-30 minutes

### 1. Implement an authorization controller in the `/src/routes/auth-controller.js` file

### 2. Implement an auth-middleware for token verification, in the `/src/middlewares/auth-middleware.js` file

## Author <!-- omit in toc -->

[Joan Carrion](https://github.com/JCarri14)

## License <!-- omit in toc -->

[MIT](https://choosealicense.com/licenses/mit/)
