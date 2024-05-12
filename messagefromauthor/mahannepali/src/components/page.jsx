import React from 'react';
import "./page.css";
import authorimage from "../assets/directorphoto.png";
const Page = () => {
  return (
    <div className="main-div">
    <div className="lc">
        <div className="author-image">
          <img src={authorimage} alt="Author"/>
          </div>
    </div>
    <div className="rc">
        <div className='Message'>
        <h2>Message from </h2><h2 className='ab'> Author</h2>
        </div>
      <div className='para'>
      <p>First of all, I would like to express my special gratitude to everyone who directly or indirectly supported Save the Rhino Foundation (SRF) Nepal in the making. SRF Nepal was an environmental and social organization for the welfare and devotion to nature and environment conservation. </p>

<p>To motivate and inspire conservation frontline staff and activists, we must appreciate and encourage them. We have to support conservation workers, informants, and families whose members have lost their lives in the course of rhino conservation too.</p>
</div>
      <button className="see-more-button">See More</button>
    </div>
    </div>
  )
}

export default Page