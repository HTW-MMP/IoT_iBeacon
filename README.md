Internet of Things - iBeacon
============================
A simple nodeJS project that uses the bleacon node module on Intel IoT platform to scan for iBeacons.

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
```
## Bleacon Documentation
[Bleacon Github Documentation](https://github.com/sandeepmistry/node-bleacon)

## Create an iBeacon

You can use one of the following apps to create an iBeacon on your iPhone.
[Estimote](https://itunes.apple.com/ch/app/estimote/id686915066?l=en&mt=8)
[myBeacon - Best Beacon Manager](https://itunes.apple.com/ch/app/my-beacon-best-beacon-manager/id850255614?l=en&mt=8)

Android (only on compatible devices)
[Locate Beacon](https://play.google.com/store/apps/details?id=com.radiusnetworks.locate&hl=en)
