const chalk = require('chalk');
const dayjs = require('dayjs');

// Extend logger to handle levels properly
const LEVELS = {
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3,
};

let currentLevel = LEVELS.INFO;

const formatJson = (data) => JSON.stringify(data, null, 2);

const setLevel = (level) => {
  if (LEVELS[level] !== undefined) currentLevel = LEVELS[level];
};

const debug = (message) => {
  if (currentLevel <= LEVELS.DEBUG) {
    console.log(chalk.gray(`[DEBUG] ${dayjs().format('HH:mm:ss')} ${message}`));
  }
};

const info = (message, data) => {
  if (currentLevel <= LEVELS.INFO) {
    console.log(chalk.blue(`[INFO] ${dayjs().format('HH:mm:ss')} ${message}`));
    if (data) console.log(chalk.gray(formatJson(data)));
  }
};

const warn = (message) => {
  if (currentLevel <= LEVELS.WARN) {
    console.log(chalk.yellow(`[WARN] ${dayjs().format('HH:mm:ss')} ${message}`));
  }
};

const error = (message, err) => {
  if (currentLevel <= LEVELS.ERROR) {
    console.log(chalk.red(`[ERROR] ${dayjs().format('HH:mm:ss')} ${message}`));
    if (err.response) {
      console.log(chalk.red('Status:'), err.response.status);
      console.log(chalk.red('Data:'), formatJson(err.response.data));
    } else if (err.message) {
      console.log(chalk.red('Message:'), err.message);
    }
  }
};

module.exports = {
  debug,
  info,
  warn,
  error,
  setLevel,
};
