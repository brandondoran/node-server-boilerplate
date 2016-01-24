import convict from 'convict';
import environments from './environments';

// Default  configuration - environment specific configs are in ./environments
// Note: env will overide default value
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

// load environment dependent configuration
const env = environments[config.get('env')];
if (env) {
  config.load(env);
}

// perform validation
config.validate();

export default config;
