# TargetProcess impediment widget

Author: [Julian Kleinhans](https://github.com/kj187) · Blog: [http://blog.kj187.de](http://blog.kj187.de)

[Dashing-JS](https://github.com/fabiocaseri/dashing-js) is a NodeJS port of [Dashing](http://dashing.io/), an Sinatra based framework that lets you build beautiful dashboards.

The [TargetProcess](https://www.targetprocess.com/) impediment widget is a small widget which provides the total amount of impediments of a specific sprint (acid). 
Below this amount a profile image of the responsible persons are shown.
 
## Preview 

![Zero Impediments](http://res.cloudinary.com/kj187/image/upload/v1452805854/targetprocess_impediments_no_gaaaoj.png)
![Three Impediments](http://res.cloudinary.com/kj187/image/upload/v1452805855/targetprocess_impediments_yes_djxeos.png)

## Requirements

[Dashing-JS](https://github.com/fabiocaseri/dashing-js)
```ssh
$ npm install -g dashing-js
```

Widget dependencies
```shell
$ npm install tp-api
$ npm install cron
```

## Installation
```shell
$ dashing-js install https://github.com/kj187/dashing-targetprocess_impediments/archive/master.zip
``` 
Create a new directory `config` on your root directory.
Move the `widgets/targetprocess_impediments/config.targetprocess_impediments.sample.js` file to this directory and rename it to `config.targetprocess_impediments.js`.
 
```
assets/
  ...
config/
  config.targetprocess_impediments.js
  ...
dashboards/
  ...
jobs/
  ...
...
```

## Usage
To include the widget on your dashboard, add the following snippet to the dashboard layout file:

```html
<li data-row="1" data-col="1" data-sizex="1" data-sizey="1">
  <div data-title="Impediments" data-id="targetprocess_impediments" data-view="TargetprocessImpediments"></div>
  <i class="fa fa-clock-o icon-background"></i>
</li>
```
Or if you use Jade as your favorite template engine 
```jade
li(data-row='1', data-col='1', data-sizex='1', data-sizey='1')
  div(data-title='Impediments', data-id='targetprocess_impediments', data-view='TargetprocessImpediments', class='widget')
  i(class='fa fa-exclamation-triangle icon-background')
```

## Settings

```javascript
module.exports = {

    eventName: 'targetprocess_impediments',
    cronInterval: '15 * * * * *',

    api: {
        host: 'www.host.com',
        acid: '2439DD66D093095E290CF98FB987D4B7',
        version: '1',
        protocol: 'https',
        token: 'bcdefabcdefabcdefgbcdefabcdefabcdefg'
        // or instead of an API token
        // username: '',
        // password: '',
    },

    profileImageMapping: {
        // targetprocess user id : Profile image URL
        '85861': 'https://avatars0.githubusercontent.com/u/1647861?v=3&s=96',
    }
}
```

### Global settings
| Setting       | Example              | Description                |
| ------------- |----------------------| ---------------------------|
| eventName     | targetprocess_impediments  | Event name, must be the same as the `data-id` attribute |
| cronInterval     | 1 * * * * *  | Click [here](https://github.com/ncb000gt/node-cron) for available cron patterns |

### API settings
| Setting       | Example              | Description                |
| ------------- |----------------------| ---------------------------|
| host     | www.host.com  | Host of your TargetProcess |
| protocol     | https  | Http or https |
| acid     | 2439DD66D093095E290CF98FB987D4B7 | ACID ID of the specific project from where you fetch the impediments count |
| version     | 1  | TargetProcess API version, dont change |
| token     | bcdefabcdefabcdefgbcdefabcdefabcdefg  | TargetProcess API token |
| username     | julian.kleinhans  | If you dont have an API token, you can also use your username/password. But I highly recommend to use an API token |
| password     | xxxxxxx  | Your TargetProcess password |

### profileImageMapping settings
| TargetProcess user id       | Profile image URL |
| ------------- |----------------------|
| 85861     | https://avatars0.githubusercontent.com/u/1647861?v=3&s=96 |

## Changelog

### release-1.0.0
* First release

## Other Dashing-JS widgets
Do you know that I also created some other Dashing-JS widgets? Try out

* [Jenkins Job widget](http://goo.gl/X3WM3r)
* [GitHub PullRequest widget](http://goo.gl/QqEVkl)
* [TargetProcess sprint widget]()
