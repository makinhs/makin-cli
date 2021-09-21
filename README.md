# Makin-cli

makin-cli is a minimalist cli for Node.JS that makes it easy to add Prettier, ESLint and even Typescript into your Node.JS project 

I created this cli more out of curiosity on how to build and use a cli with node.js 
and since currently there are still frameworks/projects that doesn't support out 
of the box prettier and eslint, 
I decided to add these two basic features out of the box for the majority of Typescript projects.

Feel free to contribute with other command tools!


## Installation 

Just run `npm i -g makin-cli`

## Basic usage 

Usage: index [options]

A CLI that scaffolds some quality gates in your app

Options:

  -V, --version      output the version number
  
  -p, --prettier     add prettier to package.json, with a format script and a generic configuration
                     file (.prettierrc)
                     
  -l, --lint         add eslint to package.json, with a lint script and a generic configuration
                     file (.eslintrc.js)
                     
  -ts, --typescript  add typescript related packages to package.json, and a generic configuration
                     file (.tsconfig.json), using src/index.ts as the main entrance of your app.
                     Change it in package.json after the build if yours is different
                     
  -h, --help         display help for command

  
  
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

### Adding Typescript to your Javascript project:

In the root of your Javascript project, run `makin-cli -ts`

It is set to use the entry point of your application as `src/index.ts`. If you use a different one you might need to change your 
generated tsconfig.json and the added information on package.json 

```
➜  makin-cli -ts
[11:15:29] [info]                       _      _                          _   _ 
  _ __ ___     __ _  | | __ (_)  _ __             ___  | | (_)
 | '_ ` _ \   / _` | | |/ / | | | '_ \   _____   / __| | | | |
 | | | | | | | (_| | |   <  | | | | | | |_____| | (__  | | | |
 |_| |_| |_|  \__,_| |_|\_\ |_| |_| |_|          \___| |_| |_|
                                                              
[11:15:29] [info] Welcome back ;)
[11:15:29] [info] Configuring typescript...
[11:15:29] [info] Installing typescript @types/node ts-node
[11:15:34] [info] Adding tsconfig.json
[11:15:34] [info] Adding format script to package.json

```