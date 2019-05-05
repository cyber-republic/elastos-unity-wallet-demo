const { config } = require('./wdio.shared.conf');

// ============
// Specs
// ============
config.specs = [
    './test/specs/*.js',
];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities

//Need to make ANDROID_HOME system variable something like following
//export ANDROID_HOME=/usr/local/opt/android-sdk
//Need to run react native cli
config.capabilities = [
    {
        platformName: 'Android',
        deviceName: 'Android Emulator',
        app: './android/app/build/outputs/apk/debug/app-debug.apk',
    },
];

exports.config = config;