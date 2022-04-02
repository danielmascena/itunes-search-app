const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export const logService = function(message) {
  console.info('**********');
  console.info(message);
  console.info('**********');
};

const config = {
  port: env.PORT || 8080,
  host: env.HOST || '0.0.0.0',
  get serverUrl() {
    return `http://${this.host}:${this.port}`;
  },
  get endpoint() {
    return ` https://itunes.apple.com/search`
  }
};

export default config;