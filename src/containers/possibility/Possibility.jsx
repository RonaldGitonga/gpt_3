import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png';

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility"/>
      </div>

      <div className='gpt3__possibility-content'>
        <h4>Request Early Access to Get Started</h4>
        
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Discover possibilities for ChatGPT and large language models,uncover pitfalls and avoid missteps as you integrate this new frontier in AI into organizations of all types and learn actionable suggestions on dealing with large datasets and data augmentation, various model architectures, domain adaptation, and inference challenges</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    
    
    
    
    </div>
  )
}

export default Possibility;