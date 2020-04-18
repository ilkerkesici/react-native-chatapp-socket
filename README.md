# React Native Chat App With Socket

> Clean and minimalist React Native template for a quick start with Chat Applications with TypeScript.

## :star: Features

- Chat with users as real-time
- Take custom drop-down alert when message received
- See last seen status of the user
- See if you don't read the message

![](./assets/dropdown_usage.gif)

![](./assets/online_status.gif)

![](./assets/info_read.gif)



## :arrow_down: Installation

#### Install backend
Install Node.js API from here: <a href="https://github.com/ilkerkesici/node-chatapp-backend-socket.git">https://github.com/ilkerkesici/node-chatapp-backend-socket.git</a>

```sh
git clone https://github.com/ilkerkesici/node-chatapp-backend-socket.git
```
#### Clone this repository

```sh
git clone https://github.com/ilkerkesici/react-native-chatapp-socket.git
```

#### Install dependencies

```sh
yarn install
```

#### Link

```sh
cd ios && pod install && cd .. # CocoaPods on iOS needs this extra step
```

#### Add .env file

Create .env file on your project root directory and then add these lines:

```sh
API_KEY= YOUR_API_URL  # Add your API url
SOCKET_IP=YOUR_SOCKET_URL  # Add your socket url. If your socket backend is in your API, you can write your API url here
ENV_SECRET_KEY=YOUR_SECRET_KEY. # Add your secret key
```


#### Start

```sh
yarn ios    # For ios
yarn android    # For android
```

## :warning: Dependency

### Note on the legacy CLI
There seems to be quite some confusion about the legacy CLI. This template only works with the new CLI. Make sure you have uninstalled the legacy `react-native-cli` first (`npm uninstall -g react-native-cli`), for the below command to work. If you wish to not use `npx`, you can also install the new CLI globally (`npm i -g @react-native-community/cli` or `yarn global add @react-native-community/cli`).


## :bookmark: License

This project is [MIT](LICENSE) licensed.
