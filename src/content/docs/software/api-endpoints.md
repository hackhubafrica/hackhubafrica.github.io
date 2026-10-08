---
title: API Reference Template
category: software
summary: A concise template for documenting endpoint behavior, payloads, and failure cases.
order: 4
starter: true
---

## Endpoint record

For each endpoint, document its method and path, purpose, authentication requirement, request fields, response shape, and expected error responses. Include units and timestamp conventions for telemetry values.

## Example

| Method | Path | Purpose | Authentication |
| --- | --- | --- | --- |
| Replace | `/replace` | Describe the operation | State the requirement |

Add representative request and response bodies once the API contract is stable. Remove secrets and personal data from examples.

## Compatibility

Record the API version, deprecation policy, rate limits, and links to contract tests or an OpenAPI specification.