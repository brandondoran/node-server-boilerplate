import convict from 'convict';
import bulk from 'bulk-require';

// Default configuration - environment specific configs are in ./environments
// Note: process.env will overide default value
const config = convict({
  env: {
    doc: 'The applicaton environment.',
    format: String,
    default: 'development',
    env: 'NODE_ENV'
  },
  http: {
    port: {
      doc: 'HTTP port to bind.',
      format: 'port',
      default: 8001,
      env: 'PORT'
    }
  },
  compression: {
    doc: 'Enable compression.',
    format: Boolean,
    default: true
  }
});

// Load all js files from ./environments and use config for current environment
const environments = bulk(`${__dirname}/environments`, ['*.js']);
const env = environments[config.get('env')];
if (env) {
  config.load(env.default);
}

// perform validation
config.validate();

export default config;
