# vimeo-regex [![NPM version][npmjs-img]][npmjs-url] [![Build Status][travis-img]][travis-url] [![Coveralls][coveralls-img]][coveralls-url] 
> The correct Vimeo video id regex.


## Install [![Nodei.co stats][npmjs-ico]][npmjs-url] 
> Install with [npm](https://npmjs.org)

```
$ npm install vimeo-regex
$ npm test
```


## Play online
 - https://regex101.com/r/uW5oK9/4
 - http://regexr.com/3bdug

## Usage
> All use-cases are avaliable in [tests](./test.js)

```
var vimeoRegex = require('youtube-regex');

// plain link
vimeoRegex().test('https://vimeo.com/62092214');
//=> true

// groups link
vimeoRegex().test('http://vimeo.com/groups/musicvideo/videos/126199390');
//=> true
```



## Thanks
> You can match Vimeo due to these people:

<table>
<thead>
<tr><th align="left">Name</th><th>GitHub</th><th>Twitter</th></tr>
</thead>
<tbody>
<tr><td align="left">Ruslan Ismagilov</td><td><a href="https://github.com/isRuslan">@isRuslan</a></td><td><a href="http://twitter.com/is_ruslan">@is_ruslan</a></td></tr>
</tbody>
</table>

## License
MIT © [Ruslan Ismagilov](https://github.com/isRuslan)
