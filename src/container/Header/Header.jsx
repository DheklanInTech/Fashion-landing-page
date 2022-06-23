import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
       <div className='app__wrapper_info'>
         <SubHeading title='Chase the new Trend'/>
         <h1 className='app__header-h1'>Fashion Made Sleek </h1>
         <p className='p__opensans' style={{margin: '2rem 0'}}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione nemo numquam voluptatibus modi ex ducimus veritatis, ipsum fuga error, deserunt natus nostrum pariatur? Beatae voluptatum distinctio illo placeat dignissimos! Voluptatum! </p>
         <button type='button' className='custom__button'>Explore Trends</button>
       </div>
       <div className='app__wrapper_img'>
          <img src={images.findus} alt="welcome" />
       </div>
  </div>
);

export default Header;
