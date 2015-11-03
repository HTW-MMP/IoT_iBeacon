MMP iBeacon
============================
A simple nodeJS project that uses the bleacon node module on Intel IoT platforms to scan for iBeacons.

## Getting started
1. Install bleacon on your Edison
2. Enable BLE on Edison
3. Copy code into your own XDK Project.
4. Deploy to Edison
5. See iBeacons getting logged to the console.

## Enabling BLE
Within a SSH or Serial Terminal connection, type the following commands,
```
rfkill unblock bluetooth 
hciconfig hci0 up
