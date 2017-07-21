# angular-course
Code snippits for the angular 4 course I'm presenting at the Vertafore code camp.

## Typescript

Paste into terminal:
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

Fairly nice: https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

## Angular Concepts

It is often the case that the API docs are clearer and more usable than the guides. You have to dig a bit, but you'll run across wonderful examples like this if you do: https://angular.io/api/router/Routes

Immese thanks to Thoughtram. I utilized their free tutorials heavily to gain the understanding I have. They are to-the-point, detailed, and clear. Highly recommended for furthering learnings after this course if you're interested: https://blog.thoughtram.io/all/

Exception that proves the rule. The cheat sheet is actually really great: https://angular.io/guide/cheatsheet

## Angular CLI

```bash
# Globally install the cli tool:
npm i -g @angular/cli
ng --version
ng new test-app --skip-install # Personally, I like to do the install seperately.
cd test-app
npm i
ng eject # This is optional. Exposes inner magics. May void warrenty. (:P)
```
