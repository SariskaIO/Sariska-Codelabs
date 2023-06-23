summary: Creating a Real-time Video calling Application using React
id:Create-A-Video-Conference-React
tags: medium
status: In Review 
authors: Dipak Sisodiya

# Tutorial: Creating a Real-time Video calling Application

## Introduction
In this tutorial, we will walk you through the process of creating your very own video calling application using React, powered by Sariska's Video Calling SDK. With Sariska's Video Calling SDK, you have access to a powerful set of tools and functionalities that will empower you to build a seamless and immersive video calling experience for your users.

This tutorial will guide you through the process of installing Sariska Media Transport and using its JavaScript APIs to develop real-time applications. We'll cover the following topics:

1. Installing Sariska Media Transport
2. Initializing the SDK
3. Creating a Connection
4. Creating a Conference
5. Playing Local Tracks
6. Playing Remote Tracks
7. Additional Methods

## Installing Sariska Media Transport

The first step is to install the Sariska Media Transport library. There are two ways to install it: using NPM or CDN.

### NPM

To install Sariska Media Transport using NPM, run the following command in your project directory:

```bash
npm i sariska-media-transport
```

### CDN

Alternatively, you can add the following script to your website's HTML head tag:

```html
<script src="https://sdk.sariska.io/umd/sariska-media-transport.min.js"></script>
```

Now you can access Sariska Media Transport APIs through the `SariskaMediaTransport` global object, enabling you to use the SDK from the browser.

## Initialize SariskaMediaTransport SDK

After installing the SDK, you need to perform initial setup tasks by running the `initialize()` method.

```javascript
import SariskaMediaTransport from "sariska-media-transport";

SariskaMediaTransport.initialize();
```

## Create A Connection

To start using the media services, the first step is to create a Media WebSocket connection. This connection will establish communication with the server.

```javascript
const token = "{your-token}";

const connection = new SariskaMediaTransport.JitsiConnection(token, "roomName", isNightly);

connection.addEventListener(SariskaMediaTransport.events.connection.CONNECTION_ESTABLISHED, () => {
  console.log('Connection successful!');
});

connection.addEventListener(SariskaMediaTransport.events.connection.CONNECTION_FAILED, (error) => {
  if (error === SariskaMediaTransport.events.connection.PASSWORD_REQUIRED) {
    // Token expired, set a new token
    connection.setToken(token);
    console.log('Connection disconnected!', error);
  } else {
    console.log('Connection failed!', error);
  }
});

connection.addEventListener(SariskaMediaTransport.events.connection.CONNECTION_DISCONNECTED, (error) => {
  console.log('Connection disconnected!', error);
});

connection.connect();
```

## Create A Conference

Once you have established a connection, you can create a conference using the `initJitsiConference()` method.

```javascript
const options = {
  startAudioMuted: true, // Join with audio muted
  startVideoMuted: true, // Join with video muted
  startSilent: true, // Join with no audio receive/send
  rtcstatsServer: "", // Enable rtcstats tracking
  callStatsID: "", // Callstats ID
  callStatsSecret: "", // Callstats secret
  channelLastN: 10, // Last N speakers
};

const conference = connection.initJitsiConference(options);
conference.join();
```

## Capture And Play Local Tracks

To capture local audio and video streams, you can use the `createLocalTracks()` method.

```javascript
const options = {
  devices: ["audio", "video"],
  resolution: 240, // Preferred resolution for the local video
  // Additional options may also be passed
};

const localTracks = await Sariska

MediaTransport.createLocalTracks(options);
```

The `localTracks` array will contain the local audio and video tracks. You can modify the local stream using the provided methods.

To play the local audio and video tracks, you can use the `attach()` method.

```javascript
const audioTrack = localTracks.find((track) => track.getType() === "audio");
const videoTrack = localTracks.find((track) => track.getType() === "video");

// Play video
videoTrack.attach(document.getElementById("videoElement"));

// Play audio
audioTrack.attach(document.getElementById("audioElement"));
```

## Play Remote Tracks

To play remote audio and video tracks, you can listen for the `TRACK_ADDED` event and attach the tracks to the corresponding HTML elements.

```javascript
const remoteTracks = [];

conference.addEventListener(SariskaMediaTransport.events.conference.TRACK_ADDED, function (track) {
  remoteTracks.push(track);
});

remoteTracks.forEach((track) => {
  if (track.getType() === "audio") {
    RemoteContainer.append(track.attach(document.getElementById("remoteAudioElemId")));
  }

  if (track.getType() === "video") {
    RemoteContainer.append(track.attach(document.getElementById("remoteVideoElemId")));
  }
});
```

## Start Application 

To start the application,

```shell

npm start

```

## Conclusion

Congratulations! You have successfully installed Sariska Media Transport and learned how to initialize the SDK, create a connection, create a conference, play local and remote tracks, and utilize additional methods. You are now ready to develop real-time applications using Sariska Media Transport APIs.

Happy coding!
