# OpenAPI Backend POC

## Goals

1. use the same OpenAPI description document as in the [OpenAPI backend POC](https://github.com/richi0/openapi-backend-poc) 
2. use a code generator to create the SDK providing a typed fetcher based on the description document
3. Use the SDK to load, add and delete pets

## Results

### Goal 1
The same OpenAPI description document could be used. No changes were made.

### Goal 2
The [openapi-codgen](https://github.com/fabien0102/openapi-codegen) project generated all the needed code for the SDK

```shell
npx @openapi-codegen/cli init
npm install -D @openapi-codegen/{cli,typescript}
npx openapi-codegen gen generated
```

### Goal 3
The generated SDK was used. Type checks worked out of the box. Fetching, pushing and deleting data was simple.