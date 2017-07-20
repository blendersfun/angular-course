# angular-course
Code snippits for the angular 4 course I'm presenting at the Vertafore code camp.

## Typescript

```bash
cd tsc-play
# Initialize an npm module in non-interactive mode:
npm init -y
# Install typescript. Save to package.json as a dev-dependency 
#  pegged to the exact version number (so-as not to auto-upgrade 
#  on re-installs if they were to occur. 
npm i -DE typescript 
./node_modules/.bin/tsc --version
```

Make a file called `tsconfig.json` in the project root directory and put this minimalist project config in it:
```json
{
    "compilerOptions": {
        "outDir": "build-artifacts"
    },
    "include": [
        "src/**/*"
    ]
}
```

