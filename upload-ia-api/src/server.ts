import { fastify } from 'fastify'
import { getAllPropmtsRoute } from './routes/get-all-propmts'
import { uploadVideoRoute } from './routes/upload-video'
import { createTranscriptionRoute } from './routes/create-transcription'
import { generateAiCompletionRoute } from './routes/generate-ai-completion'
import fastifyCors from '@fastify/cors'


const app = fastify()


app.register(fastifyCors, {
    origin: '*'
})


app.register(getAllPropmtsRoute)
app.register(uploadVideoRoute)
app.register(createTranscriptionRoute)
app.register(generateAiCompletionRoute)


app.listen({
    port: 3333,

}).then(() => {
    console.log('HTTP Server Running!')
})