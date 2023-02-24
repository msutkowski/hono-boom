## hono-boom

### Installation

```
npm install hono-boom
```

### Overview

A simple `Boom` wrapper for hono to provide a `hapi`-er experience!

### Usage

```ts
// Use a guard and resconstruct the error. Useful if you're narrowing against multiple error types like ZodError, FetchError, etc.
if (Boom.isBoom(error)) {
  return c.json(
    {
      error: {
        type: error.type,
        message: error.message,
        details: error.details,
      },
    },
    error.statusCode
  );
}

// If we don't have a current user, throw an unauthorized Boom error
if (!currentUser) {
  throw Boom.unauthorized();
}
```
