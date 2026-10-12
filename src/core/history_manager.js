const fs = require('fs-extra');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const DB_PATH = path.join(process.cwd(), 'src', 'data', 'history.json');

class HistoryManager {
  constructor() {
    fs.ensureFileSync(DB_PATH);
    const existing = fs.readFileSync(DB_PATH, 'utf8');
    this.data = existing ? JSON.parse(existing) : [];
  }

  saveInteraction(prompt, response, metadata) {
    const entry = {
      id: uuidv4(),
      timestamp: new Date().toISOString(),
      request: prompt,
      response: response,
      metadata: metadata,
      status: metadata.status || 'success',
    };

    this.data.push(entry);
    this._persist();
    return entry;
  }

  getRecent(limit = 5) {
    return this.data.slice(-limit).reverse();
  }

  _persist() {
    fs.writeFileSync(DB_PATH, JSON.stringify(this.data, null, 2));
  }
}

module.exports = new HistoryManager();
