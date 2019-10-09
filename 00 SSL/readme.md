# Introduction

Enable Self Signed Cert Trust in Chrome: `chrome://flags/#allow-insecure-localhost`

## Configure Angular with SSL

- Generate a Trusted SSL Certificate
- Copy Certificate to ngProject
- Register \*.crt in angular.json

### Generate a Trusted SSL Certificate

Create a certifcate for Angular: Go to `.\create-certs`. Execute:

```
bash ./generate.sh
```

> Bash is available on Windows Machines if you have installed [Git Bash](https://git-scm.com/downloads)

#### Configuration Options

You can adjust the `[dn]` part of the `openssl-custom.cnf` file to whatever you prefer.

```
[dn]
C = <COUNTRY>
ST = <STATE>
L = <LOCALITY / CITY>
O = <ORGANIZATION>
OU = <ORGANIZATION_UNIT>
emailAddress = <EMAIL_ADDRESS>
CN = <HOSTNAME / IP_ADDRESS>
```

![create-ssl](_images/create-ssl.gif)

### Register \*.crt in angular.json `"serve"-section`

```Json
"serve": {
    "builder": "@angular-devkit/build-angular:dev-server",
    "options": {
        "browserTarget": "PROJECTNAME:build",
        "ssl": true,
        "sslKey": "/ssl/server.key",
        "sslCert": "/ssl/server.crt"
    },
```

## Configure .NET Core with SSL

Create a \*.pfx certificate: Run `.\create-certs\createCert4Core.ps1` using PowerShell

Add section to `appsettings.json`:

```Json
 "Kestrel": {
    "Endpoints": {
      "HTTPS": {
        "Url": "https://*:5000",
        "Certificate": {
          "Path": "localhost.pfx",
          "Password": "password"
        }
      }
    }
  }
```

> Note: You can also use `dotnet dev-certs https` to create certs

## Machine Setup

### Angular, Cordova, Ionic

```
npm i -g @angular/cli ionic cordova
```

### Java SDK

Download & Install [Java SDK](https://www.oracle.com/technetwork/java/javase/downloads/java-archive-javase8-2177648.html)

### Xcode

[Xcode Home](https://developer.apple.com/xcode/)

### Android Studio

[Android Studio Home](https://developer.android.com/studio/)

[Create Virtual Device](https://developer.android.com/studio/run/managing-avds)

Post Installation Tasks:

Extract `Android SDK Platform Tools` -> AndroidSDKPlatformTools.rar to: `C:\Users\$env:username\AppData\Local\Android\Sdk`

### Ionic

Installl [Ionic Dev App](https://bit.ly/ionic-dev-app) on your Device

#### Setup Android Emulator

4 Steps to success:

SDK installed to User_Profile\AppData\Local\Android\Sdk by default

- Download & Install Android Studio
- Install SDK, HAXM, Build Tools, System image
- Set Path variables
- [Create Virtual Device](https://developer.android.com/studio/run/managing-avds)

> Note: You can also use Visual Studio Hyper-V Android Emulator

#### Setup Android Device

- Setup Android Device Bridge (adb)
- Configure Chrome for Remote Debugging

[Android Device Bridge - Gettings started](https://www.xda-developers.com/install-adb-windows-macos-linux/)

Open Chrome - Go to:

```
chrome://inspect/#devices
```

![Img Debugging](_Images/debug.png)
