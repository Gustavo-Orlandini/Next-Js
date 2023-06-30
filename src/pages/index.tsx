import React from "react";
import Image from 'next/image'
import { HomeContainer, Product } from "../styles/pages/home";
import camiseta1 from '../assets/Tshirts/tshirtOne.png'
import camiseta2 from '../assets/Tshirts/tshirtTwo.png'
import camiseta3 from '../assets/Tshirts/tshirtThree.png'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={camiseta2} width={520} height={480} />

        <footer>
          <strong>Camiseta Mui Loka</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image src={camiseta3} width={520} height={480} />

        <footer>
          <strong>Camiseta Mui Loka</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
