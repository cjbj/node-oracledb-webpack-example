# Node-oracledb 5.0 Webpack Example

christopher.jones@oracle.com, April 2020

# Introduction

This is an example that creates a webpack package for a Node.js application that
uses node-oracledb.  It is based on
https://github.com/MisterMX/node-oracledb-webpack-example by
https://github.com/MisterMX created as part of the collaboration to improve
node-oracledb for webpack users.

The example application simply inserts and selects some rows from an Oracle
Database table.

This examples requires node-oracledb 5.0, which is currently in development at
time of writing.  As such, installation will build the driver so you will need
all the compiler prerequisites satisfied, see
https://oracle.github.io/node-oracledb/INSTALL.html#githubtags.  This also means
that your final package will only run on the same computer architecture that you
build the package on.

If you are using this example this after node-oracledb 5 has been released, you
can modify the package.json dependency to be:

```
  "dependencies": {
    "oracledb": "^5.0"
  },
```

Using the production node-oracledb 5 will allow the webpack package to be copied
to all architectures that node-oracledb supplies pre-built binaries for.

# To create the webpack bundle,

1. Run:

```
npm run build
```

2. Copy `dist` to your target computer.  That computer must have Oracle Client
libraries (e.g. Oracle Instant Client), installed.

3. Set these environment variables to your credentials and connection string:

```
NODE_ORACLEDB_USER
NODE_ORACLEDB_PASSWORD
NODE_ORACLEDB_CONNECTIONSTRING
```

4. Run the application:

```
node dist/index.js
```
