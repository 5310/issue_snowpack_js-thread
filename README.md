> This is a bug reproduction repository.
> 
> See 
> - https://www.pika.dev/npm/snowpack/discuss/275
> - https://github.com/5310/issue_rollup_plugins_node-resolve-w-browser

`$ npm run snowpack` with `rollup-plugin-node-polyfills` added as advised by Snowpack itself fails to build anything in this project (with or without the polyfills):

    ⠹ snowpack installing... @textile/threads-database, @textile/threads-idThe 'this' keyword is equivalent to 'undefined' at the top level of an ES module, and has been rewritten
    The 'this' keyword is equivalent to 'undefined' at the top level of an ES module, and has been rewritten
    ⠼ snowpack installing... @textile/threads-database, @textile/threads-idError when using sourcemap for reporting an error: Can't resolve original location of error.
    ⠼ snowpack installing... Warning: 1+ circular dependencies found via "node_modules/readable-stream/lib/_stream_readable.js".
    ✖ snowpack failed to load node_modules/node-forge/lib/baseN.js
      'Buffer' is not exported by node-resolve:empty.js, imported by node_modules/node-forge/lib/baseN.js

However, `$ npm run rollup` can build it just fine with the minimal config and no polyfill save for `plugin-node-resolve`.
