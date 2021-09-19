# Makin-cli

makin-cli is a self service cli for Node.JS Typescript 
applications which gives generic quality gates configurations 
uch as prettier and eslint.

I created this cli more out of curiosity on how to build and use a cli with node.js and since currently there are still frameworks/projects that doesn't support out of the box prettier and eslint I decided to add these two basic features out of the box for the majority of Typescript projects.

Feel free to contribute with other similar tools!


## Installation 

Just run `npm i -g makin-cli`

## Basic usage 

Usage: index [options]

A CLI that scaffolds some quality gates in your app

Options:

  -V, --version   output the version number
  
  -p, --prettier  add prettier to package.json, with a format script and a generic configuration file (.prettierrc)

  -l, --lint      add eslint to package.json, with a lint script and a generic configuration file (.eslintrc.js)

  -h, --help      display help for command
  
  
### Auto Prettier
So, in a project that doesn't have prettier you can run in the root of it:

`makin-cli -p`

Expected result:

```
➜  makin-cli -p

   [22:00:24] [info]                       _      _                          _   _ 
     _ __ ___     __ _  | | __ (_)  _ __             ___  | | (_)
    | '_ ` _ \   / _` | | |/ / | | | '_ \   _____   / __| | | | |
    | | | | | | | (_| | |   <  | | | | | | |_____| | (__  | | | |
    |_| |_| |_|  \__,_| |_|\_\ |_| |_| |_|          \___| |_| |_|
                                                                 
   [22:00:24] [info] Welcome back ;)
   [22:00:24] [info] Configuring prettier...
   [22:00:24] [info] Installing prettier
   [22:00:26] [info] Adding .prettierrc
   [22:00:26] [warn] .prettierrc added

```

It adds to your package json prettier, a script called `format` which uses the pattern `src/**/*.ts` to auto format, and a .prettierrc file with a generic configuration that you can change as you wish.

### Auto Lint

Similar to prettier, but running with `makin-cli -l`

Expected result:

```
➜  makin-cli -l

[22:03:12] [info]                       _      _                          _   _ 
  _ __ ___     __ _  | | __ (_)  _ __             ___  | | (_)
 | '_ ` _ \   / _` | | |/ / | | | '_ \   _____   / __| | | | |
 | | | | | | | (_| | |   <  | | | | | | |_____| | (__  | | | |
 |_| |_| |_|  \__,_| |_|\_\ |_| |_| |_|          \___| |_| |_|
                                                              
[22:03:12] [info] Welcome back ;)
[22:03:12] [info] Configuring lint...
[22:03:12] [info] Installing eslint
[22:03:16] [info] Configuring .eslintrc
[22:03:16] [info] Adding lint script to package.json

```
