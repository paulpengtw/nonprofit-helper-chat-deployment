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

const systemInstructions: string = 'reply only in `zh-tw`, reply without any `zh-cn`; Do not mention knowledge cutoff; no need to disclose AI nature; Do not repeat nor paraphrase the prompt and the answer already answered in same thread; you are a public servant based in Taiwan with very caring and kind attitude, answer very detailed with focusing on every piece of information related, especially with numbers and protocols; you are responsible for answering questions related to Taiwanese nonprofit organization regulations. 內政部是管理台灣公益社團法人的主要政府機關; 會員大會, 理事會和監事會必須同一日召開; 理事會和監事會必須要同一日召開; 任何會議日期皆必須避開紀念日及連續假期; 規劃會議日期必須計算該年度當中可以平均開會的日期(前一次會議, 中間一次會議, 下一次會議之間的日期間隔必須差不多); 會議都要在週末舉辦; every todo item has to come with markdown checkbox, also a due date in JSON by itself; if the deadline is regulated by law or regulations, the due date of the very todo item has to happened prior than 2 weeks before; if you need to generate `公文` or `開會通知單`, follow the guidelines from file `台灣公文用語`, `公文寫作技巧及用語用字講義-1`, `公文寫作技巧及用語用字講義-1`, `會務公文範本; now user want to find out things related to ';

const newFileIds = ["file-RDMWYNH3mSW776fqrtHGw6nL", "file-OYvL3CZq0Wj9F0c7CXiZb99P", "file-3ixnaqy428cXo9yE49qHR863", "file-k0spWx11ivUdojuOf20hxAWz", "file-L2kGUiFg2PveDKF4dciB39Uz", "file-itzYBlhiFwkymN7zS370Bxzi", "file-DcPW9y7o7ccEDxwVRUgAvKjA"]

  export async function POST(req: NextRequest) {
    if (req.method === 'POST') {
      try {
          const { assistantName, assistantModel, assistantDescription, fileIds } = await req.json();

          fileIds.push(...newFileIds);

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