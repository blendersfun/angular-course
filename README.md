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

VS Code Typescript Importer: https://marketplace.visualstudio.com/items?itemName=pmneo.tsimporter

## Angular Concepts

It is often the case that the API docs are clearer and more usable than the guides. You have to dig a bit, but you'll run across wonderful examples like this if you do: https://angular.io/api/router/Routes

Immese thanks to Thoughtram. I utilized their free tutorials heavily to gain the understanding I have. They are to-the-point, detailed, and clear. Highly recommended for furthering learnings after this course if you're interested: https://blog.thoughtram.io/all/

Exception that proves the rule. The cheat sheet is actually really great: https://angular.io/guide/cheatsheet

I like this hello world. I just use it for the code snippits: https://thinkster.io/tutorials/angular-2-hello-world

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
## Routes

As befored mentioned, this is a great hidden gem in the API docs: https://angular.io/api/router/Routes

This is a deeper dive, written by the author of the Router module in Angular. It's very good: https://vsavkin.com/angular-2-router-d9e30599f9ea

Here's an already setup service for getting a list of a couple messages for populating your email client:
```typescript
import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export class Message {
  private constructor(
    private from: string,
    private to: string[],
    private subject: string,
    private body: string,
    private attachments: string[],
    private sentDate: Date
  ) {}

  static from(json): Message {
    return new Message(
      json.from,
      json.to,
      json.subject,
      json.body,
      json.attachments,
      new Date(json.sentDate + ' GMT-0800')
    );
  }


}

@Injectable()
export class MessagesService {
  constructor(private http: Http) {}

  getMessages(): Observable<Message[]> {
    return this.http.get('https://raw.githubusercontent.com/blendersfun/angular-course/716bf3c1016ed9faac74a3618047c022c8e22c17/03-get-messages-call.json')
                    .map((response: Response) => 
                      (response.json() || []).map(messageData => Message.from(messageData))
                    )
  }
}
```
A nice guide to setting up lazy-loading with the CLI: https://keathmilligan.net/lazy-loading-content-with-angular-cli/
