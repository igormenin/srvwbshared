import { Router } from 'express'
import multer from 'multer'

import uploadConfig from './config/upload'

const routes = Router()
const upload = multer(uploadConfig)

export default routes