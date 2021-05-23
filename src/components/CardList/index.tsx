import CardItem from "../CardItem";
import Carousel, { slidesToShowPlugin, arrowsPlugin} from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { Context } from './styles';

import arrowright from '../../assets/arrow-right.png';
import arrowleft from '../../assets/arrow-left.png';

type CardProps = {
  name: string;
  description: string;
  thumbnail: string;
}

type CardListProps = {
  value: CardProps[];
}

export default function CardList({value}: CardListProps) {
  
  return (
    <Context>
      <Carousel
        plugins={[
          'infinite',
          {
            resolve: slidesToShowPlugin,
            options: {
             numberOfSlides: 3
            }
          },
          {
            resolve: arrowsPlugin,
            options: {
              arrowRight: <button><img src={arrowright} alt="" /></button>,
              arrowLeft: <button><img src={arrowleft} alt="" /></button>,
              
              addArrowClickHandler: true,
            }
          }
        ]}
    >
      {value.map(value => {
        return (
          <CardItem value={value} key={value.name}/>
        )
      })}
    </Carousel>
    </Context>
    
  )
}