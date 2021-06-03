# Memory consumer API
API to consume extra memory for testing use cases.

### Installation

Install dependencies

```
npm install
```

```
npm start
```
the API runs on port 3000.

### Usage

* `localhost:3000/`: returns current memory usage.
* `localhost:3000/memory?mb=number`: consume extra memory using the mb query param.
* `localhost:3000/clean`: cleans all the memory used.
