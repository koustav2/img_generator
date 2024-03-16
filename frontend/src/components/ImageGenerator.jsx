/* eslint-disable no-unused-vars */
import React from 'react'
import generateImg from '../utils/generateImg'
import { toast } from "react-hot-toast"
const ImageGenerator = () => {
  const [prompt, setPrompt] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false);
  const [imgUrl, setImageUrl] = React.useState('')

  const handleGenerate = () => {
    setIsLoading(true);
    const promise = generateImg(prompt)
    toast.promise(
      promise,
      {
        loading: "Generating image...",
        success: (data) => {
          setImageUrl(data.data);
          console.log(data)
          return "Image generated successfully.";
        },
        error: "An error occurred while generating the image.",
      }
    )
      .finally(() => {
        // End loading in any case
        setIsLoading(false);
      });
  };

  return (
    <div>
      <h1 className='text-center text-2xl font-semibold text-violet-950'>Image Generator</h1>
      <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-400 dark:border-gray-600">
        <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
          <label htmlFor="comment" className="sr-only">Your comment</label>
          <textarea
            id="comment"
            value={prompt}
            rows="4"
            className="outline-none w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write somthing in prompt to generate" required
            onChange={(e) => setPrompt(e.target.value)}
          >
          </textarea>
        </div>
        <div className="flex items-center justify-end px-3 py-2 border-t dark:border-gray-600">
          <button
            onClick={handleGenerate}
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
          >
            Generate
          </button>
        </div>
      </div >
    </div>
  )
}

export default ImageGenerator