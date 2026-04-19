# PS5 Exploitation Framework

This repository contains a modified version of the `coruna` exploitation framework adapted for PS5 firmware 10.60.

## Files
- `group.html`: Main entry point for the exploit framework.
- `platform_module.js`: Handles PS5 platform-specific operations.
- `utility_module.js`: Provides helper functions for memory operations.
- `Stage1_16.2_16.5.1_terrorbird.js`: Implements the Stage 1 exploitation strategy.

## Running the Exploit
1. Host this repository on a local HTTP server (e.g., `python -m http.server`).
2. Redirect PS5 browser to the hosted `group.html` file.
3. Follow the logs to verify execution.
