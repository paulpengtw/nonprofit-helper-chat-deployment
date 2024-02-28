

# nonprofit-helper-chat-deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fpaulpengtw%2Fnonprofit-helper-chat-deployment&env=OPENAI_API_KEY&envDescription=OpenAI%20API%20Key&envLink=https%3A%2F%2Fplatform.openai.com%2Faccount%2Fapi-keys&project-name=nonprofit-helper-chat-deployment&repository-name=nonprofit-helper-chat-deployment)
[![Live Demo](https://img.shields.io/badge/Live-Demo-green.svg)](https://nonprofit-helper-chat-deployment.vercel.app/)

## Introduction

- 作為公益組織，不僅得進行倡議工作、議題研究、運作會務，更要尋求組織生存。卻有數不清的瑣事等著組織者去處理，但處理瑣事不應該是公益組織資源集中投入的地方。

- 所以 nonprofit-helper 會務 E 化小幫手來把瑣事、會務、檢閱法規的時間，透過生成式 AI 協助處理。正是因為組織很窮，組織缺人，更需要數位工具來協助公益團體把會務做得漂亮，降低法遵成本，甚至可以輕鬆掌握政府接案的眉眉角角。

- [專案討論共筆](https://g0v.hackmd.io/@nonprofit-helper/nonprofit-helper-home)


# [Demo-URL](https://nonprofit-helper-chat-deployment.vercel.app)
<!-- <img src="Public/File_upload.gif" alt="nonprofit-helper-chat" width="600px"> -->

## Beta & Work in Progress

Please note that this application is currently in the beta phase and is continuously evolving. We are working diligently to enhance the user experience and add new features. During this phase, you may encounter some hiccups or unexpected behavior.

## Deployment

This application is ready to be deployed with Vercel, a cloud platform for static sites and Serverless Functions. Vercel provides an easy way to deploy your applications directly from your repository.

To deploy this application with Vercel, click on the "Deploy with Vercel" button below. This will take you to the Vercel platform where you'll be guided through the deployment process.

Please note that you'll need to provide your OpenAI API key during the deployment process. This key is used to authenticate your application's requests to the OpenAI API.

In addition to the OpenAI API key, you can also specify a default Assistant ID during the deployment process. This ID determines which AI assistant is used in the chat application. If you set this ID, the application will use this assistant for the chat. If you do not set this ID, the application will prompt the user to enter the assistant details.

To deploy the application with both the OpenAI API key and a hardcoded Assistant ID, click on the "Deploy with Vercel" button below. You will be prompted to enter both your OpenAI API key and your Assistant ID.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fpaulpengtw%2Fnonprofit-helper-chat-deployment&env=OPENAI_API_KEY&envDescription=OpenAI%20API%20Key&envLink=https%3A%2F%2Fplatform.openai.com%2Faccount%2Fapi-keys&project-name=nonprofit-helper-chat-deployment&repository-name=nonprofit-helper-chat-deployment)


## Getting Started

### Prerequisites
- Node.js installed on your machine.
- An active OpenAI API key.

### Installation
1. **Clone the Repository**:
   ```
   git clone https://github.com/admineral/OpenAI-Assistant-API-Chat.git
   ```
2. **Install Dependencies**:
   Navigate to the project directory and run:
   ```
   npm install
   ```
3. **Environment Setup**:
   Create a `.env` file in the root directory and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_openai_api_key
   ```
4. **Run the Application**:
   Start the server with:
   ```
   npm run dev
   ```

### acknowledgements
- [OpenAI-Assistant-API-Chat](https://github.com/admineral/OpenAI-Assistant-API-Chat)
