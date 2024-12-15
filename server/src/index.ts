import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { styleText } from 'util'

process.loadEnvFile('.env')

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(morgan('dev'))

app.listen(PORT, () => {
	console.log(
		styleText('blue', `Server Listen in: `),
		styleText('green', `http://localhost:${PORT}`)
	)
})
