# ©️ [CYPRESS](https://www.cypress.io/)

Design Page Objects and run Tests using Javascript. The project contains integration with Allure. The report can be viewed from the following [link](https://gequise.github.io/challenge-automation)

## Prerequisites

- [Node.js](https://nodejs.org/)

## Installing


[![npm version](https://badge.fury.io/js/cypress.svg)](https://badge.fury.io/js/cypress)



Install Cypress for Mac, Linux, or Windows, then [get started](https://on.cypress.io/install).

```bash 
git clone https://github.com/gequise/challenge-automation.git
```

Install dependencies:

```sh
npm install
```

## Run Tests

Run e2e tests(Chrome by default)

```sh
npm run cy:run:test
```
run e2e tests in other browsers
```sh
npm run cy:run:edge
npm run cy:run:electron
npm run cy:run:firefox
```

Open Allure Report

```sh
npm run allure:serve
```

## URL REPORT
https://gequise.github.io/cy-challenge-automation/

## CI
See [github.com/gequise/challenge-automation/actions](https://github.com/gequise/challenge-automation/actions).




