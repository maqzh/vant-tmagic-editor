import fs from 'fs'
import path from 'path'
const __dirname = path.resolve();

export function writeFile(filePath, content) {
  return new Promise((resolve, reject) => {
    console.log('writeFile', __dirname, filePath)
    fs.writeFile(path.join(__dirname, filePath), content, err => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}

export function readFile(filePath) {
  return new Promise((resolve, reject) => {
    console.log('readFile', __dirname, filePath)
    fs.readFile(path.join(__dirname, filePath), 'utf-8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}
