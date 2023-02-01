import React from 'react'
import UncontrolledExample from "../components/carousel"
import ImgOverlayExample from "../components/cards"
import FooterApp from "../components/footer"

function Home() {
  return (
    <div>
        
      <h1>Hi am working</h1>
      <UncontrolledExample />
      <div className="d-flex flex-wrap container container-fluid" >
        <ImgOverlayExample />
        <ImgOverlayExample />
        <ImgOverlayExample />
        <ImgOverlayExample />
        <ImgOverlayExample />
        <ImgOverlayExample />
      </div>
      <FooterApp />
    </div>
  )
}

export default Home
