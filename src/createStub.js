const fs = require('fs')
const path = require('path')
const resolvePaths = require('./resolvePaths.js')

const jsonStub = {
  "photo-log": 'Created with photo-log utility',
  "workshop": {
    "title": "Demo Innovation Workshop",
    "subtitle": "01./02. Januar 2018, K-Town",
    "moderators": [
      "Max Mustermann",
      "Maria Musterfrau"
    ],
    "parts": [
      {
        "title": "Participants",
        "showInIndex": true
      },
      {
        "title": "Motivation",
        "showInIndex": true
      },
      {
        "title": "Problemsammlung",
        "showInIndex": true
      },
      {
        "title": "Problemdetails",
        "showInIndex": true
      },
      {
        "title": "Kaffeepause",
        "showInIndex": false
      }
    ]
  }
}

const createStub = (folderPath, mainFileName) => {
  if(fs.existsSync(folderPath)) {
    return false
  }
  let targetPath = resolvePaths.sanitizeHomePath(folderPath)
  fs.mkdirSync(targetPath)
  fs.writeFileSync(path.join(targetPath , mainFileName), JSON.stringify(jsonStub, null, 4), 'utf-8')
  return true
}
exports.createStub = createStub