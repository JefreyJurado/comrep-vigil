const { withAppBuildGradle } = require('@expo/config-plugins');

// Swaps the default release ProGuard base file from proguard-android.txt to
// proguard-android-optimize.txt. The plain "proguard-android.txt" template
// ships with `-dontoptimize`, which disables R8's optimization pass entirely
// (shrink + obfuscate only) — the "-optimize" variant removes that flag.
// Runs on every `expo prebuild`, since that command regenerates android/
// from scratch each time.
function withR8FullOptimization(config) {
  return withAppBuildGradle(config, (config) => {
    config.modResults.contents = config.modResults.contents.replace(
      /getDefaultProguardFile\("proguard-android\.txt"\)/,
      'getDefaultProguardFile("proguard-android-optimize.txt")'
    );
    return config;
  });
}

module.exports = withR8FullOptimization;
