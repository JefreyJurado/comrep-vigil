const { withAppBuildGradle } = require('@expo/config-plugins');
const fs = require('fs');
const path = require('path');

// Injects a release signingConfig into android/app/build.gradle, pointed at
// the local (gitignored) release keystore. Runs on every `expo prebuild`,
// since that command regenerates android/ from scratch each time — without
// this plugin, the signing config would need to be re-added by hand after
// every prebuild.
function withReleaseSigning(config) {
  return withAppBuildGradle(config, (config) => {
    const credentialsPath = path.join(config.modRequest.projectRoot, 'keystore', 'credentials.txt');
    if (!fs.existsSync(credentialsPath)) {
      console.warn(
        '[withReleaseSigning] keystore/credentials.txt not found — release build will fall back to the debug keystore.'
      );
      return config;
    }

    const raw = fs.readFileSync(credentialsPath, 'utf8');
    const get = (key) => {
      const match = raw.match(new RegExp(`^${key}=(.*)$`, 'm'));
      return match ? match[1].trim() : null;
    };
    const keystoreFile = get('KEYSTORE_FILE');
    const storePassword = get('STORE_PASSWORD');
    const keyAlias = get('KEY_ALIAS');
    const keyPassword = get('KEY_PASSWORD');

    if (!keystoreFile || !storePassword || !keyAlias || !keyPassword) {
      console.warn('[withReleaseSigning] Incomplete credentials.txt — release build will fall back to the debug keystore.');
      return config;
    }

    const keystoreAbsPath = path.join(config.modRequest.projectRoot, 'keystore', keystoreFile).replace(/\\/g, '/');

    let contents = config.modResults.contents;

    // Add a `release` signingConfig alongside the existing `debug` one.
    contents = contents.replace(
      /signingConfigs\s*\{\s*debug\s*\{[^}]*\}\s*\}/,
      (match) =>
        match.replace(
          /\}\s*\}$/,
          `}
        release {
            storeFile file('${keystoreAbsPath}')
            storePassword '${storePassword}'
            keyAlias '${keyAlias}'
            keyPassword '${keyPassword}'
        }
    }`
        )
    );

    // Point the release build type at the new signingConfig instead of debug.
    contents = contents.replace(
      /(release\s*\{\s*(?:\/\/[^\n]*\n\s*)*)signingConfig signingConfigs\.debug/,
      '$1signingConfig signingConfigs.release'
    );

    config.modResults.contents = contents;
    return config;
  });
}

module.exports = withReleaseSigning;
