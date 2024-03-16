const { OpenAI } = require('openai');
const express = require('express');


const router = express.Router();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});


router.get('/', function(req, res){
    res.send('Hey this is my API running 🥳')
})


router.post('/generate-image', async (req, res) => {
    const { prompt, size } = req.body;

    const imageSize =
        size === 'small' ? '256x256' : size === 'medium' ? '512x512' : '1024x1024';
    try {
        const options = ["vivid", "natural"]
        const randomIndex = Math.floor(Math.random() * options.length);
        const response = await openai.images.generate({
            prompt: prompt,
            model: "dall-e-3",
            response_format: 'url',
            size: imageSize ? imageSize : "1024x1024",
            style: options[randomIndex],
            quality: "hd"

        })
        const imageUrl = response.data.map(elm => elm.url)

        res.status(200).json({
            success: true,
            data: imageUrl[0],
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: 'The image could not be generated',
        });
    }
})

module.exports = router