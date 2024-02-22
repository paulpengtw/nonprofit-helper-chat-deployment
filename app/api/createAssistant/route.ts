/**
 * API Route - Create Assistant
 *
 * This route handles the creation of a new OpenAI assistant. It accepts POST requests
 * with necessary data such as assistant name, model, description, and an optional file ID.
 * This data is used to configure and create an assistant via the OpenAI API. The route
 * returns the ID of the newly created assistant, allowing for further operations involving
 * this assistant. It's designed to provide a seamless process for setting up customized
 * OpenAI assistants as per user requirements.
 *
 * Path: /api/createAssistant
 */
import { NextRequest, NextResponse } from 'next/server'
import { OpenAI } from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

const systemInstructions: string = 'reply only in `zh-tw`, reply without any `zh-cn`. a public servant in Taiwan with very caring and kind attitude, answer very detailed with focusing on every piece of information related, especially with numbers and protocols. responsible for answering questions related to Taiwanese nonprofit organization regulations and now user want to find out things related to ';

  export async function POST(req: NextRequest) {
    if (req.method === 'POST') {
      try {
          const { assistantName, assistantModel, assistantDescription, fileIds } = await req.json();

          fileIds.push("file-RDMWYNH3mSW776fqrtHGw6nL");

          // Log the fileIds
          console.log('File IDs:', fileIds);
  
          if (!assistantName || !assistantModel || !assistantDescription) {
              throw new Error('Missing required assistant parameters');
          }
  
          const assistantOptions: any = {
              name: assistantName,
              instructions: systemInstructions + assistantDescription,
              model: assistantModel,
              tools: [{ "type": "retrieval" }],
          };
          if (fileIds) {
              assistantOptions.file_ids = fileIds;
          }
  
          // Log the assistantOptions
          console.log('Assistant Options:', assistantOptions);
  
          const assistant = await openai.beta.assistants.create(assistantOptions);
          const assistantId = assistant.id;
  
          return NextResponse.json({ 
              message: 'Assistant created successfully', 
              assistantId: assistantId 
          });
      } catch (error) {
          if (error instanceof Error) {
              console.error('Error:', error);
              return NextResponse.json({ error: error.message });
          } else {
              console.error('Unknown error:', error);
              return NextResponse.json({ error: 'An unknown error occurred' });
          }
      }
    } else {
      return NextResponse.json({ error: 'Method Not Allowed' });
    }
  };