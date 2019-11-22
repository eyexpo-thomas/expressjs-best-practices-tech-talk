ExpressJS Best Practices

The obvious stuff
- [] Don't block the event loop. Use async/await everywhere.
- [] Use ESLint and prettier for auto-magic code completion (TSLint was depreceated in January 2019)
- [] No anonymous functions!
- [] In microservices, export everything inside a folder via index.ts
- [] lock dependencies (remove the tilde~!)
- [] Provide a healthz endpoint and have it return stats like CPU usage and memory usage for your DevOps!
- [] No magic numbers/config in code
- [] Server must be stateless so it can be scaled up.
- [] Use elasticsearch instead of console.log
- [] Sanitize input to prevent query injection (knex/TypeORM/Mongoose)
- [] Use JSON Web Tokens. Make sure you can blacklist them.
- [] Run node.js as a non-root user
- [] Avoid `eval`.
- [] Don't send error stack traces to the front-end.


Architecture
- [x] Use services
- [] Dependency injection.
- [] External libraries almost always belong in a service
- [] Know about libuv before using NodeJS

Security
- [x] Use helmet
- [x] Ensure all middleware is called before router.
- [x] Ryn `snyk test`
- [x] Dependabot/Greenkeeper
- [x] Logging user credentials
- [ ] Validate incoming JSON requests.
- [ ] Don't run regex on user input to avoid DDoS attacks

Internals
- [] You could pass data between middlewares with res.locals https://youtu.be/zPYmM9K8-g8?t=304
- [] If you're using a library that mutates Request/Response directly, use declaration merging (globals.d.ts).
- [] Use bodyParser
- [] Use compression
- [] Don't use synchronous functions - "The only time when a synchronous function can be justified is upon initial startup." - [] https://expressjs.com/en/advanced/best-practice-performance.html
  - [] Enable `node src/server.ts --trace-sync-io` flag in development to find any uses of non async functions. EVERY FUNCTION MUST BE ASYNC. This includes console.log! Use an async logger like debug: https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/debug/debug-tests.ts
- [] Use PM2
    - [] Can auto detect number of processors!:
      `$ pm2 start app.js -i max`
    - [] Make app stateless

More: https://expressjs.com/en/advanced/best-practice-performance.html


Documentation
- [] TypeDoc
- [] Every function should be documented
- [] Format (new line before comment)

GraphQL
- [] If request for a field has an error, return `null` and add the error to the errors list in the graphql response https://graphql.github.io/graphql-spec/draft/#sec-Errors-and-Non-Nullability

Testing
- [] Tests must run fast.
- [] Tests must run every time a developer saves a file
    - [] If tests do _not_ run fast, then run only some tests using mocha's grep or the green arrow in webstorm.
    - [] Suggestion: We could also tag our tests #smoke #sanity #quick and use mocha grep.
- [] You should not have to read the parent describe block to know what a test is testing. Use a fully descriptive sentance, describe blocks denote the section of the tests that are being run.
- [] In unit tests, all services must be stubbed.
- [] Run e2e tests and have them pass before code is merged. Any failing test that does not block code merging should be deleted. This means that devs and QA must share ownership of e2e tests!
- [] If it is difficult to test a function, the function must be refactored before it is ready to go into the code base.
- [] BDD test report should resemble the combined acceptance criteria from each completed user story.
- [] Use Arrange, Act, Assert comments in each test to make tests readable
-

TypeScript
- [] Use TypeScript
- [] Use typed config file library.
- [] Type everything (inferred typing is okay as long as you check).
- `any` typing is a code smell, and should be treated as an error.
- `import` allows us to use type definitions - the time spent figuring out how to use it will save time in the future when you have an untyped module.
- [] Declaration merging of Request in typings.d.ts
- [] TSLint is depreceated, use ESLint
  npm i -D eslint
  npm i -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
  eslint --init
  prettier eslint-config-prettier eslint-plugin-prettier
Imports
- [] Use `import` over `require` because import allows for tree-shaking. ESM has been un-flagged as experimental for over a month now! https://github.com/nodejs/node/commit/796f3d0af49164314868c4778af90eca356f1fef
