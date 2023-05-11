import React from 'react'
import './whatGPT3.css'
import Feature from '../../components/feature/Feature';



const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id="wgpt3">
      <div className='gpt3__whatgpt3-feature'>
      <Feature title="What is GPT-3?" text="ChatGPT is a natural language processing tool driven by AI technology that allows you to have human-like conversations and much more with the chatbot. The language model can answer questions and assist you with tasks, such as composing emails, essays, and code."/>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className='gradient__text'>The possibilities are beyond your Imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
      <Feature title="Chatbots" text="You can use ChatGPT to create a chatbot that can conduct interviews and ask applicants questions."/>
      <Feature title="Knowledgebase" text="ChatGPT is highly adept at providing general information, albeit with some limitations. Meanwhile, internal knowledge management is becoming more and more critical in a post-pandemic world with hybrid working and higher employee turnover, according to Gartner. How can we bring the power of ChatGPT to internal knowledge management?"/>
      <Feature title="Education" text="Its capabilities go beyond answering simple questions. It is able to hold more complex conversations, learn from them and improve its ability to communicate. This makes ChatGPT a valuable tool for those who need help on a variety of topics, from trivia questions to more specific tasks."/>



      </div>
        
        
      </div>
    
    )
}

export default WhatGPT3