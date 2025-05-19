const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, '../../data.json');

class ApiController {
    // Helper to read data from file
    readDataFromFile() {
        try {
            if (!fs.existsSync(DATA_FILE)) {
                return [];
            }
            const data = fs.readFileSync(DATA_FILE, 'utf8');
            return data ? JSON.parse(data) : [];
        } catch (err) {
            return [];
        }
    }

    // Helper to write data to file
    writeDataToFile(data) {
        fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
    }

    getData(req, res) {
        const data = this.readDataFromFile();
        res.json(data);
    }

    postData(req, res) {
        const newData = req.body;
        this.writeDataToFile(newData); // Overwrite file with new payload
        res.status(201).json(newData);
    }
}

module.exports = new ApiController();