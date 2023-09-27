import { FileVideo, Upload } from "lucide-react";
import { Separator } from "./ui/separator";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { ChangeEvent, FormEvent, useMemo, useRef, useState } from "react";

export function VideoInputForm() {

    const [videoFile, setVideoFile] = useState<File | null>(null)
    const promptInputRef = useRef<HTMLTextAreaElement>(null)

    function handleFileSelected(event: ChangeEvent<HTMLInputElement>) {
        const { files } = event.currentTarget

        if (!files) {
            return
        }

        const selectedFile = files[0]

        setVideoFile(selectedFile)
    }

    function handleUploadVideo(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const prompt = promptInputRef.current?.value

        if (!videoFile){
            return
        }

    }

    const previewURL = useMemo(() => {
        if (!videoFile) {
            return null
        }

        return URL.createObjectURL(videoFile)

    }, [])

    console.log('previewURL', previewURL)


    return (
        <form onSubmit={handleUploadVideo} className="space-y-6">
            <label htmlFor="video" className="relative border flex rounded-md aspect-video 
  cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center
  text-muted-foreground hover:bg-primary/5">


                {previewURL ? (<video src={previewURL} controls={false} className="pointer-events-nome absolute inset-0" />) : (
                    <>
                        <FileVideo className="w-4 h-4" />
                        Selecione um video
                    </>
                )}
            </label>
            <input type="file" id="video" accept="video/mp4" className="sr-only" onChange={handleFileSelected} />
            <Separator />

            <div className="space-y-1">
                <label htmlFor="transcription_prompt">Prompt de transcrição</label>
                <Textarea ref={promptInputRef} id="transcription_prompt" className="h-20 leading-relaxed resize-none"
                    placeholder="Inclua palavras-chave mencionadas no video separadas por virgula (,)" />
            </div>
            <Button type="submit" className="w-full">
                Carregar video
                <Upload className="w-4 h-4 ml-2" />
            </Button>
        </form>
    )
}