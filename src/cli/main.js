const { Command } = require('commander');
const chalk = require('chalk');
const figlet = require('figlet');
const ora = require('ora');
const Table = require('cli-table3');
const chatService = require('../modules/chat/chat_service');
const historyManager = require('../core/history_manager');
const logger = require('../utils/logger');
const dayjs = require('dayjs');

const program = new Command();

console.log(
  chalk.cyan(
    figlet.textSync('Nexus Suite', { horizontalLayout: 'full' })
  )
);

program
  .version('2.0.0')
  .description('Enterprise Grade 1AI API Testing Suite');

program
  .command('chat')
  .description('Send a chat message to the API')
  .argument('<message>', 'The message content')
  .option('-m, --model <type>', 'Model ID to use')
  .option('-v, --verbose', 'Enable verbose logging')
  .action(async (message, options) => {
    if (options.verbose) logger.setLevel('DEBUG');
    
    const spinner = ora('Sending request to Neural Network...').start();
    try {
      const response = await chatService.sendMessage(message, options);
      spinner.succeed('Response Received');
      
      console.log(chalk.green('\n------------------------------'));
      console.log(chalk.bold('AI Response:'));
      console.log(JSON.stringify(response, null, 2));
      console.log(chalk.green('------------------------------\n'));
    } catch (error) {
      spinner.fail('Request Failed');
      // Logger already handles error printing
    }
  });

program
  .command('history')
  .description('View recent request history')
  .option('-l, --limit <number>', 'Number of entries to show', 5)
  .action((options) => {
    const history = historyManager.getRecent(options.limit);
    if (history.length === 0) {
      console.log(chalk.gray('No history found.'));
      return;
    }

    const table = new Table({
      head: [chalk.cyan('Time'), chalk.cyan('Status'), chalk.cyan('Prompt'), chalk.cyan('Response Preview')],
      colWidths: [22, 10, 30, 40]
    });

    history.forEach(entry => {
      const respPreview = JSON.stringify(entry.response).substring(0, 35) + '...';
      const statusColor = entry.status === 200 || entry.status === 'success' ? chalk.green : chalk.red;
      
      table.push([
        dayjs(entry.timestamp).format('YYYY-MM-DD HH:mm:ss'),
        statusColor(entry.status),
        entry.request.substring(0, 25),
        respPreview
      ]);
    });

    console.log(table.toString());
  });

program
  .command('probe')
  .description('Deep system probe for debugging connectivity and credits')
  .action(async () => {
    logger.info('Starting Deep Probe...');
    // A simplified probe that just sends a ping
    const spinner = ora('Probing connection...').start();
    try {
      await chatService.sendMessage("Ping");
      spinner.succeed("Connection Healthy");
    } catch (e) {
      spinner.fail("Probe Failed");
      logger.error("Diagnostic Data:", e);
    }
  });

program.parse(process.argv);
