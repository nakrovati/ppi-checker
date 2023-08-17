# PPI Checker

A serial service for checking PPI/DPI of monitors and checking the compatibility of their PPI with various operating systems.

## How PPI compatibility is calculated

The compatibility of displays with different OS is checked in the following way:

- Windows: resolution >=720p.
- Linux: resolution >= 720p and PPI is a multiple of 110+-10.
- MacOS: resolution >= 720p and monitor manufactured by Apple or PPI multiple of 110+-10.

## Install

```sh
pnpm install
```

## Development

```sh
pnpm dev
```

Open http://localhost:5173 with your browser to see the result.
