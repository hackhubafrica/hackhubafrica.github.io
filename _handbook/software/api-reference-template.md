---
title: API Reference Template
category: software
summary: A concise template for documenting endpoint behavior, payloads, and failures.
order: 4
starter: true
---

## Endpoint record

For each endpoint, document method and path, purpose, authentication requirements, request fields, response shape, and expected errors. Include units and timestamp conventions for telemetry.

| Method | Path | Purpose | Authentication |
| --- | --- | --- | --- |
| Replace | `/replace` | Describe the operation | State the requirement |

Add representative request and response bodies once the API contract is stable. Remove secrets and personal data from examples.

## Compatibility

Record API version, deprecation policy, rate limits, and links to contract tests or an OpenAPI specification.