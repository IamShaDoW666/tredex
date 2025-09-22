# Research: Order on WhatsApp

This document outlines the research tasks required to resolve ambiguities and make informed decisions for the "Order on WhatsApp" feature.

## Research Tasks

### 1. Observability

- **Task**: Research structured logging requirements for this feature.
  - **Question**: What specific events should be logged (e.g., modal open, form submission, API call success/failure)?
  - **Question**: What is the required log level for each event (e.g., INFO, WARN, ERROR)?

- **Task**: Research the necessity of forwarding frontend logs to the backend.
  - **Question**: Are there existing patterns in the project for this?
  - **Question**: What are the trade-offs in terms of performance and observability?

- **Task**: Research the required level of error context for logging.
  - **Question**: What information should be included in error logs to facilitate debugging (e.g., user ID, product ID, request body)?

### 2. WhatsApp Integration

- **Task**: Research best practices for using the `api.whatsapp.com/send` URL.
  - **Question**: How should the message text be URL-encoded?
  - **Question**: Are there any limitations on message length or format?
  - **Question**: What is the expected user experience on different devices (desktop vs. mobile)?