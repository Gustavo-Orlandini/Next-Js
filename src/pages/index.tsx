import React from "react";
import Image from 'next/image'
import { HomeContainer, Product } from "../styles/pages/home";
import camiseta1 from '../assets/Tshirts/tshirtOne.png'
import camiseta2 from '../assets/Tshirts/tshirtTwo.png'
import camiseta3 from '../assets/Tshirts/tshirtThree.png'
import camiseta4 from '../assets/Tshirts/tshirtFour.svg'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

export default function Home(props) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })

  return (
    <HomeContainer ref={sliderRef}>
      <pre>{JSON.stringify(props.list)}</pre>

      <Product className="keen-slider__slide">
        <Image src={camiseta2} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta Mui Loka</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta3} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta Mui Loka</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta1} width={520} height={380} alt="" />

        <footer>
          <strong>Camiseta Mui Loka</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta4} width={520} height={380} alt="" />

        <footer>
          <strong>Camiseta Mui Loka</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}

export const getServerSideProps = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000))

  return {
    props: {
      list: [1, 2, 3]
    }
  }
}
