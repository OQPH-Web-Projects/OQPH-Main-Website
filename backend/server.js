const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse');
const { stringify } = require('csv-stringify/sync');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// CSV file path
const csvFilePath = path.join(__dirname, 'subscribers.csv');

// Ensure the CSV file exists with headers
if (!fs.existsSync(csvFilePath)) {
  fs.writeFileSync(csvFilePath, 'email,subscribeDate\n');
}

// Helper function to check if email exists in CSV
function checkEmailExists(email) {
  return new Promise((resolve, reject) => {
    fs.createReadStream(csvFilePath)
      .pipe(parse({ columns: true, trim: true }))
      .on('data', (row) => {
        if (row.email.toLowerCase() === email.toLowerCase()) {
          resolve(true);
        }
      })
      .on('end', () => resolve(false))
      .on('error', reject);
  });
}

// Helper function to append subscriber to CSV
function appendSubscriber(email) {
  const newRow = stringify([[email, new Date().toISOString()]], { header: false });
  fs.appendFileSync(csvFilePath, newRow);
}

// New route for newsletter subscription
app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const existingSubscriber = await checkEmailExists(email);
    if (existingSubscriber) {
      return res.status(409).json({ error: 'Email already subscribed' });
    }

    appendSubscriber(email);

    res.status(201).json({ message: 'Subscription successful' });
  } catch (error) {
    console.error('Error processing subscription:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));