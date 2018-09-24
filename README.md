# `@usertech/neutrino-preset-graphql`

> Work in Progress

Preset for neutrino which sets up `graphql-tag/loader` from files in `src` folder
matching `*.graphql` or `*.gql`

## Installation

Run

    $ yarn add --dev usertech/neutrino-preset-graphql#0.0.1

and then **manually install missing peer dependencies**.

## Usage

    // .neutrinorc.js
    module.exports = {
        use: [
            ['@usertech/neutrino-preset-graphql'],
            ...
        ],
    }
