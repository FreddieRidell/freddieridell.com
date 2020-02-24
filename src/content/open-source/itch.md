---
title: Itch 
abstract: A cli tool for converting between different seralised data formats
crates: itch
repo: FreddieRidell/hypertask
tags: [rust, cli, json, tool, yaml, xml, toml]
type: open-source
---

> InTerCHanges one data format into another

A very simple cli to convert between some of the most common plain-text data formats. It can't perform every conversion that might be theoretically possible, but it tries its best

<!-- vim-markdown-toc GFM -->

* [Overview](#overview)
   * [Formats](#formats)
* [Installation](#installation)
* [Implementation](#implementation)

<!-- vim-markdown-toc -->

# Overview

```
USAGE:
    itch [OPTIONS]

FLAGS:
    -h, --help       Prints help information
    -V, --version    Prints version information

OPTIONS:
    -f, --from <from-type>    Format of the input, will be derived if possible
    -i, --input <input>       Path to the input file, leave empty for stdin
    -o, --output <output>     Path to the output file, leave empty for stdout
    -t, --to <to-type>        Format of the output, will be derived if possible
```

## Formats

- JSON
- YAML
- TOML
- XML
- Url query strings

# Installation

[rustup][rustup]

```bash
cargo install --force --git https://github.com/FreddieRidell/itch.git
```

# Implementation

Uses [serde][serde] and it's own internal data representation format

[rustup]: https://rustup.rs/
[serde]: https://serde.rs/
