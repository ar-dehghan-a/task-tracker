import path from 'path'
import fs from 'fs'

export const jsonPath = path.join(process.cwd(), 'tasks.json')

const initTasksFile = () => {
  if (!fs.existsSync(jsonPath))
    try {
      fs.writeFileSync(jsonPath, JSON.stringify({tasks: []}, null, 2), 'utf8')
    } catch (err) {
      console.error('Error writing the file:', err)
    }
}

export default initTasksFile
