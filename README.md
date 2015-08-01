## Cerebral React Native iOS Demo
The awesome [Cerebral](https://github.com/christianalfoni/cerebral) by [Christian Alfoni](https://github.com/christianalfoni) running on [React Native](http://facebook.github.io/react-native/).

![Demo Gif](https://i.imgur.com/IBbPRKv.gif)

## Try it out

### 1. Install the debugger
- Install the [Chrome Cerebral Debugger](https://chrome.google.com/webstore/detail/cerebral-debugger/ddefoknoniaeoikpgneklcbjlipfedbb)

### 2. Setup the demo
- Clone this repo
- Run `npm install`

### 3. Run the demo
- Run `open CerebralReactNativeIOSDemo.xcodeproj`
- Run `npm start`
- Click `Run` in Xcode

### 4. Hook into the debugger
- In the iOS Simulator:
 - Press `Command-Option-z`
 - Click `Debug in Chrome`
   - In Chrome, press `Command-Option-j` (to open Developer Tools)
    - Navigate to the "Cerebral" tab to view your state!
    
## More Info
Right now, this is working due to a series of hacks that I put together. You can find them in my forks of [cerebral](https://github.com/dsibiski/cerebral/tree/react-native) and [cerebral-react-immutable-store](https://github.com/dsibiski/cerebral-react-immutable-store/tree/react-native). The hacks aren't too bad, so hopefully we'll see support for React Native officially very soon.

If you have any trouble getting the demo running, please create an issue or find me in the #reactnative channel on freenode or [Reactiflux](https://reactiflux.slack.com/).

### What's Cerebral?!
If you haven't checked out [Cerebral](https://github.com/christianalfoni/cerebral), please do! Check out the wonderful set of videos that Christian has recorded [here](https://www.youtube.com/user/chjo2113/videos) and give it a try!
