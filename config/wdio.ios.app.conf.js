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
config.capabilities = [
    {
        maxInstances: 1,
        automationName: 'XCUITest',
        platformName: 'iOS',
        platformVersion: '12.1',
        deviceName: 'iPhone XR',
        app: './ios/RNMainchainDemoArchive/RNMainchainDemo.ipa',
        noReset: true,
        newCommandTimeout: 50,
    },
];

exports.config = config;