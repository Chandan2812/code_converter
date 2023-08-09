const express = require('express');
const cors = require('cors');
const axios=require("axios")
const {Configuration,OpenAIApi}=require("openai")

require("dotenv").config()
const app = express();
// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors())

const configuration=new Configuration({
    apiKey:process.env.OPENAIKEY,
})

const openai=new OpenAIApi(configuration)

app.post('/convert', async (req, res) => {
    try {
       const { sourceCode, targetLanguage } = req.body;
       const prompt= `${sourceCode}\n\n# Convert the above code to ${targetLanguage}\n`
       const chatCompletion=await openai.createChatCompletion({
            model:"gpt-3.5-turbo",
            messages:[{role:"user",content:prompt}]
       })

       let data=chatCompletion.data.choices[0].message;
    //    console.log(data)

       res.status(200).send(data)
    } catch (error) {
        console.log(error)
        res.send({msg:error})
    }
   
});

app.post('/debug', async (req, res) => {
    try {
        const { sourceCode } = req.body;
        const prompt= `${sourceCode}\n\n# Find errors in the above code\n`
        const chatCompletion=await openai.createChatCompletion({
             model:"gpt-3.5-turbo",
             messages:[{role:"user",content:prompt}]
        })
 
        let data=chatCompletion.data.choices[0].message;
     //    console.log(data)
 
        res.status(200).send(data)
     } catch (error) {
         console.log(error)
         res.send({msg:error})
     }
   
});


app.post('/quality', async (req, res) => {
    try {
        const { sourceCode } = req.body;
        const prompt= `${sourceCode}\n\n# Comment on the quality of the above code\n`
        const chatCompletion=await openai.createChatCompletion({
             model:"gpt-3.5-turbo",
             messages:[{role:"user",content:prompt}]
        })
 
        let data=chatCompletion.data.choices[0].message;
     //    console.log(data)
 
        res.status(200).send(data)
     } catch (error) {
         console.log(error)
         res.send({msg:error})
     }
   
});

  
 
  

app.listen(process.env.PORT, () => {
  console.log('Server is running');
});
