// Copyright Owen Flaherty 2022. All Rights Reserved.
// Contact `fl@herty.xyz` for licensing - you are not authorized to use this
// code *AT ALL* unless authorized by Owen Flaherty.

import express from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet'
import bodyparser from 'body-parser'
import { ILogObject, Logger } from 'tslog'
import { appendFileSync } from 'fs'
import { google } from 'googleapis'


dotenv.config()
// Validate & handle config file
const LISTEN_PORT = process.env.PORT;
const JOTFORM_KEY = process.env.JF_KEY;
// Initialize logger
const log: Logger = new Logger()
const logToTransport = (logObject: ILogObject) => {
    appendFileSync('jci.log', JSON.stringify(logObject) + "\n")
}
log.attachTransport({
    silly: logToTransport,
    debug: logToTransport,
    trace: logToTransport,
    info: logToTransport,
    warn: logToTransport,
    error: logToTransport,
    fatal: logToTransport
}, "debug")
log.info(`Logging to ${'jci.log'}`)

// Set up express
const app: express.Express = express()
log.silly('Express initialised')
// Attach plugins to express
app.use(helmet())
log.silly('Attached helmet to express')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))
log.silly('Attached ')
// Register express routes
app.post('/jf/:hookid', (q, s) => {
    if (q.params.hookid !== JOTFORM_KEY) return s.status(401).json({ success: false, message: 'Unauthorized' })
    s.status(200).json({ success: true, message: 'Ok, I\'ll send that on to Google :)' })
})
// Authenticate with Google
const auth = new google.auth.GoogleAuth({
    keyFilename: 'SA_KEY.json',
    scopes: [
        'https://www.googleapis.com/auth/calendar',
        'https://www.googleapis.com/auth/calendar.events',
        'https://www.googleapis.com/auth/calendar.settings.readonly',
    ]
})
const authClient = auth.getClient()

// Start express listener
app.listen(LISTEN_PORT, () => {
    log.info(`Server is running at https://localhost:${LISTEN_PORT}`)
})

// Shut down express and flush files to disk

