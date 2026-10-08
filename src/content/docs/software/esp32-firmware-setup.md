---
title: ESP32 Firmware Setup
category: software
summary: A starting checklist for documenting a reproducible ESP32 firmware environment.
order: 3
starter: true
---

## Record the environment

Before publishing setup instructions, specify the ESP32 board variant, operating system, toolchain and version, repository revision, and any required USB-to-serial driver.

## Typical workflow

1. Install the project's chosen ESP32 toolchain using its official installation guide.
2. Clone the project and check out the documented revision.
3. Copy the example configuration and set device-specific values locally.
4. Build and run the project's tests before connecting hardware.
5. Confirm the target board and serial port, then flash using the project's documented command.
6. Open the serial monitor at the configured baud rate and record the expected first-boot output.

## Keep setup reproducible

Pin dependency versions, commit non-secret defaults, and explain how to recover or erase a device. Never commit Wi-Fi credentials, tokens, or private keys.

> This generic checklist is not a tested command sequence. Replace it with the toolchain and commands used by the specific firmware project.