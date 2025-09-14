# Data Model: User

This document describes the data model for the `User` entity.

## Entity: User

Represents an individual with an account in the system.

### Fields

| Name          | Type   | Description                  |
|---------------|--------|------------------------------|
| `id`          | `string` | Unique identifier for the user.|
| `username`    | `string` | User's unique username.      |
| `email`       | `string` | User's unique email address. |
| `password_hash` | `string` | Hashed version of the user's password.|

### Relationships

- A `User` can have multiple `Session`s.
