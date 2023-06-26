import React from "react";
import { styled } from "../styles";

const Button = styled('button', {
  backgroundColor: '$green500',
  borderRadius: 8,
  padding: '1rem 2rem',
  cursor: 'pointer',

  span: {
    fontWeight: 'bold'
  },

  '&:hover': {
    filter: 'brightness(0.8)'
  }
})

export default function Home() {
  return (
    <Button>
      Hello World!
      <span>teste</span>
    </Button>
  )
}
