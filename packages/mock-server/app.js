import express from 'express'
import bodyParser from 'body-parser'
import {writeFile, readFile} from "./util.js"

const app = express()
const port = 8062

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

/**
 * 保存表单数据
 */
app.post('/api/form/action/saveRevision', (req, res) => {
  let content = req.body
  if (content && typeof content === 'object') {
    content = JSON.stringify(content)
  }
  writeFile('/files/formData.db', content).then(() => {
    res.status(200).send({message: '保存成功'})
  }).catch(err => {
    console.error(err)
    res.status(500).send({invalid: err, message: '保存失败'})
  })
})

/**
 * 获取表单数据
 */
app.post('/api/form/action/getFormData', (req, res) => {
  readFile('/files/formData.db').then(data => {
    res.status(200).send(data)
  }).catch(err => {
    res.status(500).send({message: err})
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
