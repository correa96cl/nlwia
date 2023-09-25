import { fastify } from 'fastify'
import { getAllPropmtsRoute } from './routes/get-all-propmts'
import { uploadVideoRoute } from './routes/upload-video'
import { createTranscriptionRoute } from './routes/create-transcription'


const app = fastify()


app.register(getAllPropmtsRoute)
app.register(uploadVideoRoute)
app.register(createTranscriptionRoute)


app.listen({
    port: 3333,

}).then(() => {
    console.log('HTTP Server Running!')
})