# ngx-soundmanager2

An audio player made with the SoundManager2 API for Angular (ngx Angular v4+) to play sound files.

SoundManager 2 brings reliable cross-platform audio to JavaScript.

**Requirements:** Angular 6.0+

## Features

    * Simple to use (use of directives)
    * Playlist support
    * Soundcloud support
    * Easy to understand and extend API

# How to use?

```
$ npm i ngx-soundmanager2 --save
$ npm i soundmanager2 --save
```

# Integration

Should work out of the box with webpack, respectively angular-cli. All you need to do is to include `NgxSoundmanager2Module`:

Add soundmanager2 to the .angular-cli.json scripts array:
```
 "scripts": [
    "../node_modules/soundmanager2/script/soundmanager2-jsmin.js"
  ],
```

```ts
import { NgxSoundmanager2Module } from 'ngx-soundmanager2';

@NgModule({
  imports: [NgxSoundmanager2Module.forRoot()],
  ...
})
class AppModule {}
```

## Angular Seed

```ts
// tools/config/project.ts

...
// Add packages (e.g. ngx-soundmanager2)
let additionalPackages: ExtendPackages[] = [{
  name: 'ngx-soundmanager2',
  path: 'node_modules/ngx-soundmanager2/ngx-soundmanager2.ts'
}];

this.addPackagesBundles(additionalPackages);

// Add `NPM` third-party libraries to be injected/bundled.
this.NPM_DEPENDENCIES = [
    ...this.NPM_DEPENDENCIES,
    { src: 'soundmanager2/script/soundmanager2-jsmin.js', inject: 'libs' },
];
...
```

## Running the Demo

Clone the ngx-soundmanager2 repository.

```
$ cd ngx-soundmanager2
$ cd demo
$ npm install
$ ng serve
```

Open demo at http://localhost:4200/ 

## HTML5 Audio() Support

    * 100% Flash-free MP3 + MP4/AAC where supported
    * Compatible with Apple iPad 3.2, iPhone/iOS 4 and newer
    * Fallback to Flash for MP3/MP4 support, as needed
    * SM2 API is transparent; HTML5/flash switching handled internally
    * HTML5 API support approximates Flash 8 API features
    * Some other formats (WAV/OGG) supported via HTML5, depending on browser
    * See "useHTML5Audio" property for implementation details
    
## Credits:
Credit goes to:

[Scott Schiller](https://github.com/scottschiller) for his excellent [SoundManager2](https://github.com/scottschiller/SoundManager2).

[Parminder Klair](https://github.com/perminder-klair) for his AngularJS (v1.x) [angular-soundmanager2](https://github.com/perminder-klair/angular-soundmanager2) that this project is based on.

## License:
Licensed under the MIT license
