import React from 'react'
import './features.css'
import Feature from '../../components/feature/Feature';

const Features = () => {
  return (
    <div className= 'gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started </p>
      </div>

      <div className='gpt3__features-container'>
      <Feature title="Increased Productivity " text="Productivity is what all business owners seek in their employees. Having Chat GPT implemented can help businesses improve their efficiency, allowing them to provide better and faster service to their clients."/>
      <Feature title='Improved Customer Service' text="Providing your customers with timely support can help you have them for a very long time. Having Chat GPT implemented in your customer support systems can help you provide your customers with a more individualized experience. This won’t be possible in the case of traditional methods of customer assistance.
                                                        Providing your customers with timely and tailored responses can help you in the long run. A satisfied customer will always remain loyal to you."/>
      <Feature title='Reduced Expenses' text='Providing support and customer care using ChatGPT can be accomplished at a very reasonable cost. Having ChatGPT will allow businesses to hire less number of customer care personnel to handle client inquiries, which in turn will lower the overhead costs of the firm.'/>
      <Feature title=' Increased Accuracy' text='As more data is gathered and the model is fine-tuned on specific tasks, the generated text is expected to increase in both its accuracy and its coherence.Chat GPT improves multitask training accuracy since it allows models to pick up on and naturally express more than one aim at a time. Companies that take advantage of this shift will have the edge over their competitors, leading to improved chatbot performance and happier customers.'/>
      
      </div>
      
    </div>
  )
}

export default Features