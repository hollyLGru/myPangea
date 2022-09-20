import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './carousel.css';


function CarouselCard(props) {

    return(
        <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/305164238_532524808678311_6797750261834955110_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aee45a&_nc_ohc=cYc0a564j3cAX_PoK8X&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLwUqWYcRietegKTwXjz27l_6w1ZAIz2CehWmrtp49ooA&oe=634EB18F" />
          <div className="myCarousel">
            <h3>Tuesday, January 15th, 2020</h3>
            <h4>Chiang Mai, Thailand</h4>
            <h4>Asia</h4>
            <p>
              "Today we visited the elephant sanctuary in the jungles of Chiang Mai where we were greeted by five ...."
            </p>
          </div>
        </div>

        <div>
          <img src="https://scontent-hou1-1.xx.fbcdn.net/v/t1.6435-9/87799459_1115454738796495_5639911604385480704_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=vjmnOC-QwhEAX-bXAlV&_nc_ht=scontent-hou1-1.xx&oh=00_AT937ui4ttSy3KVQUAIZ8rXqfgrotwJOQKD_P2NY4E_fmA&oe=63504C02" />
          <div className="myCarousel">
          <h3>Friday, March 5th, 2021</h3>
            <h4>Cape Town, South Africa</h4>
            <h4>Africa</h4>
            <p>
              "Not a cloud in the sky as we made our way towards the torquiose waters surrounding Cape Town penninsula..."
            </p>
          </div>
        </div>

        <div>
          <img src="https://scontent-hou1-1.xx.fbcdn.net/v/t1.18169-9/12963766_261603677514943_4359166766615038717_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=dF5m8k8sEFcAX_lCU0S&_nc_ht=scontent-hou1-1.xx&oh=00_AT-VMJIj2903TTPYgc3PJqSuk350cVEIdMJ1_oFhjYWvDw&oe=635016B0" />
          <div className="myCarousel">
            <h3>Saturday, April 10th, 2016</h3>
            <h4>Amsterdam, Netherlands</h4>
            <h4>Europe</h4>
            <p>
              "There is no smell sweeter than a field of freshly bloomed tulips nestled in the dutch countryside in April...."
            </p>
          </div>
        </div>
        </Carousel>

            
    
    )
    
};

export default CarouselCard; 
