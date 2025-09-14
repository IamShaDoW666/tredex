# Research: Login Page

This document addresses the open questions from the implementation plan.

## `better-auth` Usage

**Decision**: Use the `better-auth` library for handling authentication.

**Rationale**: The user has explicitly requested to use `better-auth`. It provides a simple and secure way to handle user authentication.

**Implementation Sketch**:

```typescript
// app/api/auth/login/route.ts
import { BetterAuth } from 'better-auth';
import { db } from '@/lib/db';

const auth = new BetterAuth(db);

export async function POST(req: Request) {
  const { usernameOrEmail, password } = await req.json();

  const user = await auth.login(usernameOrEmail, password);

  if (!user) {
    return new Response('Invalid credentials', { status: 401 });
  }

  // Create a session and return it to the user
  const session = await auth.createSession(user.id);

  return new Response(JSON.stringify({ session }), { status: 200 });
}
```

## Security: Rate Limiting and CAPTCHA

**Decision**: Implement rate limiting on the login endpoint. Defer CAPTCHA implementation.

**Rationale**: Rate limiting is a crucial security measure to prevent brute-force attacks. CAPTCHA adds friction to the user experience and should only be implemented if necessary.

**Recommendation**: Use a middleware to apply rate limiting to the login endpoint. A library like `express-rate-limit` can be adapted for Next.js API routes.

## Logging

**Decision**: Log basic authentication events to the console.

**Rationale**: Logging is essential for monitoring and debugging. For now, console logging is sufficient. A more robust logging solution (e.g., sending logs to a service like Datadog or Sentry) can be implemented later.

**Implementation Sketch**:

```typescript
// app/api/auth/login/route.ts
// ...

if (!user) {
  console.error(`Failed login attempt for ${usernameOrEmail}`);
  return new Response('Invalid credentials', { status: 401 });
}

console.log(`User ${user.username} logged in successfully`);
// ...
```

## Testing Strategy

**Decision**: Write integration tests for the login API endpoint and unit tests for the login page UI.

**Rationale**: This ensures that the authentication flow is working correctly from end to end, and that the UI components are rendering as expected.

**Recommendation**:
-   Use a testing framework like `jest` with `supertest` to test the API endpoint.
-   Use `jest` and `@testing-library/react` to test the React components.

## Scale and Scope

**Assumption**: The application is expected to have a small to medium user base (up to 10,000 users) with moderate load on the authentication system.

**Rationale**: Without specific numbers from the user, we assume a standard load. The proposed solution with `better-auth` and SQLite is suitable for this scale.

**Recommendation**: If the expected load is significantly higher, consider using a more scalable database like PostgreSQL and implementing more advanced security measures.
