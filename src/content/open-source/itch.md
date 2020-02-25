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
   * [Behaviour](#behaviour)
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

`itch` can take input from a file or std in, and output to a file or std out. If given a file as input or output it will try to detect the format automatically. `itch` doesn't do any manipulation to data to satisfy the different constructs that different formats can express; so there's no guarantee that a conversion will work.

## Formats

- JSON
- YAML
- TOML
- XML
- Url query strings

## Behaviour

`itch` should always produce the same output when given the same input:

**input**

```shell
echo '<element key="value"><child/></element>'
   | itch -f xml -t json
```

**output**

```json
{ "key": "value", "child": {} }
```

`itch` will not necessarily produce output that can automatically be reversed:

**input**

```shell
echo '<element key="value"><child/></element>'
   | itch -f xml -t json
   | itch -f json -t xml
```

**output**

```xml
<key>value</key><child></child>
```

# Installation

`itch` currently does not offer binary downloads, and must instead be built from source. You can use [rustup][rustup] to get the rust toolchain, the run the following command to download and install itch:

```bash
cargo install --force --git https://github.com/FreddieRidell/itch.git
```

`itch` is currently not available on [crates.io][crates], as it relies on [clap v3][clap] which currently hasn't been published.

# Implementation

Uses [serde][serde] and it's own internal data representation format to act as an intermediary between the different data formats:

```rust
enum Itch {
    Obj(IndexMap<String, Itch>),
    Array(Vec<Itch>),
    Bool(bool),
    Int(i64),
    Float(f64),
    Text(String),
}
```

Each deserialization step converts to this type, and each serialisation step converts from it.

[clap]: https://github.com/clap-rs/clap
[crates]: https://crates.io/
[rustup]: https://rustup.rs/
[serde]: https://serde.rs/
