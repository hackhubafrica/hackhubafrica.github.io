---
title: Schematic Guidelines
category: hardware
summary: A practical checklist for readable schematics and review-ready hardware designs.
order: 1
starter: true
---

## Before drawing

Write down the electrical requirements, operating environment, interfaces, and constraints. Choose parts with documented ratings and confirm that the selected footprint matches the exact manufacturer package.

## Make the circuit readable

- Group functional blocks and label the purpose of each block.
- Name power rails and signals consistently across sheets.
- Show connector pin numbers, signal names, and mating-part information.
- Add decoupling, protection, and test points where the design needs them.
- Include part numbers and notes for components with polarity or assembly constraints.

## Review before layout

Check ERC results, pin mappings, net names, connector orientation, and power sequencing. Review the schematic with another person and record unresolved questions.

> Starter checklist: adapt it to the project, component datasheets, and applicable safety standards before using it as a sign-off process.