# Quickstart: Login Page

This guide explains how to use the login page.

## Prerequisites

- The application must be running (`pnpm dev`).
- You must have a registered user account.

## Steps to Log In

1.  **Navigate to the login page**:
    Open your web browser and go to `http://localhost:3000/login`.

2.  **Enter your credentials**:
    - In the "Username or Email" field, enter your username or email address.
    - In the "Password" field, enter your password.

3.  **Click the "Log In" button**:
    If your credentials are correct, you will be redirected to your dashboard.
    If your credentials are incorrect, you will see an "Invalid credentials" error message.

## API Usage

You can also authenticate by sending a `POST` request to the `/api/login` endpoint:

```bash
curl -X POST http://localhost:3000/api/login \
  -H "Content-Type: application/json" \
  -d '{
    "usernameOrEmail": "your-username-or-email",
    "password": "your-password"
  }'
```

**Successful Response (200 OK)**:

```json
{
  "session": {
    "id": "session-id",
    "userId": "user-id"
  }
}
```

**Error Response (401 Unauthorized)**:

```
Invalid credentials
```
