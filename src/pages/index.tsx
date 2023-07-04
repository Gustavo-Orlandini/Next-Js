import { GetServerSideProps } from "next";
import Image from 'next/image'
import { HomeContainer, Product } from "../styles/pages/home";
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { stripe } from "../lib/stripe";
import camiseta2 from '../assets/Tshirts/tshirtTwo.png'
import camiseta3 from '../assets/Tshirts/tshirtThree.png'
import camiseta4 from '../assets/Tshirts/tshirtFour.svg'
import camiseta1 from '../assets/Tshirts/tshirtOne.png'

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

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list()

  console.log(response.data)

  const products = response.data.map(product => {
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],

    }

  })
  return {
    props: {
      list: products
    }
  }
}
