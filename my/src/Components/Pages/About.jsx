import React from 'react'
import "../styles/About.css"

const About = () => {
  return (
    <>
    <div className='firstimgmaincontainer'>
        <div className='firstimgcontainer' >
          <img src="https://cdn.modesens.com/static/img/20221009_bg1.png" alt="error" />

        </div>

       <div className='secondimgmaincontainer'>
         <h1>CHECK MODESENS BEFORE YOU BUY</h1>

     <h4>We’re not a store. We are your fashion shopping assistant.</h4>
      <button>JOIN NOW FOR FREE</button>
       </div>

    </div>

{/* partners related part start */}
   <div className='partnersmaincontainer'>
    <h1>500+ PREMIUM PARTNERS</h1>
    <p>We only partner with the most reputable stores and brands to offer you the largest selections and most trustworthy shopping experience online.</p>

    <div className="partnersmultipledivcontainer">
        <div>
            <img src="https://cdn.modesens.com/banner/20220708-SSENSE-logo.png" alt="err" />
        </div>
        <div>
            <img src="https://cdn.modesens.com/banner/20220708-NET-A-PORTER-logo.png" alt="err" />
        </div>
        <div>
            <img src="https://cdn.modesens.com/banner/20220708-FARFETCH-logo.png" alt="err" />
        </div>
        <div>
            <img src="https://cdn.modesens.com/banner/20220708-NORDSTROM-logo.png" alt="err" />
        </div>
        <div>
            <img src="https://cdn.modesens.com/banner/20220708-MATCHESFASHION-logo.png" alt="err" />
        </div>
        <div>
            <img src="https://cdn.modesens.com/banner/20220708-SAKS-FIFTH-AVENUE-logo.png" alt="err" />
        </div>
        <div>
            <img src="https://cdn.modesens.com/banner/20220708-BROWNSFASHION-logo.png" alt="err" />
        </div>
        <div>
            <img src="https://cdn.modesens.com/banner/20220708-LUISAVIAROMA-logo.png" alt="err" />
        </div>
        <div>
            <img src="https://cdn.modesens.com/banner/20220708-CETTIRE-logo.png" alt="err" />
        </div>
        <div>
            <img src="https://cdn.modesens.com/banner/20220708-ITALIST-logo.png" alt="err" />
        </div>
        <div>
            <img src="https://cdn.modesens.com/banner/20220708-SHOPBOP-logo.png" alt="err" />
        </div>
        <div>
            <img src="https://cdn.modesens.com/banner/20220708-MYTHERESA-logo.png" alt="err" />
        </div>
        <div>
            <img src="https://cdn.modesens.com/banner/20211014-GUCCI-logo.png" alt="err" />
        </div>
        <div>
            <img src="https://cdn.modesens.com/banner/20211014-PRADA-logo.png" alt="err" />
        </div>
        <div>
            <img src="https://cdn.modesens.com/banner/20211014-SAINT-LAURENT-logo.png" alt="err" />
        </div>
        <div>
            <img src="https://cdn.modesens.com/banner/20211014-BOTTEGA-VENETA-logo.png" alt="err" />
        </div>
        <div>
            <img src="https://cdn.modesens.com/banner/20211014-BURBERRY-logo.png" alt="err" />
        </div>
        <div>
            <img src="https://cdn.modesens.com/banner/20211014-FENDI-logo.png" alt="err" />
        </div>
        <div>
            <img src="https://cdn.modesens.com/banner/20211014-VALENTINO-logo.png" alt="err" />
        </div>
        <div>
            <img src="https://cdn.modesens.com/banner/20211014-OFF-WHITE-logo.png" alt="err" />
        </div>
        <div>
            <img src="https://cdn.modesens.com/banner/20211014-LOEWE-logo.png" alt="err" />
        </div>
        <div>
            <img src="https://cdn.modesens.com/banner/20211014-GIVENCHY-logo.png" alt="err" />
        </div>
        <div>
            <img src="https://cdn.modesens.com/banner/20211014-BALENCIAGA-logo.png" alt="err" />
        </div>
        <div>
            <img src="https://cdn.modesens.com/banner/20211014-VERSACE-logo.png" alt="err" />
        </div>
    </div>



   </div>
   <hr /><hr />


{/* partners related part ends */}

    {/* compare and shop part start*/}
      <div className="compareandshopcontainer">
        <h1>
        COMPARE AND SHOP WHEREVER YOU GO
        </h1>
        <p>To unlock all of ModeSens' features and functionality, simply download our App and Browser Extension.</p>
        <div className='compareandshopsubcontainer'>
            <div>
               <h2>Install the ModeSens Browser Extension</h2>
               <p>Automatically compare products across 500+ stores while you browse at any of our partner stores’ websites.</p>
               <button>Install now</button>
            </div>
            <div>
            <img src="https://cdn.modesens.com/static/img/20220921_install_img.png" alt="err" />
            </div>

        </div>
      </div>

 <hr />
 <br />
    {/* compare and shop part ends*/}

{/* lastpart start */}
<div className="lastpartmaincontainer">
<div className="lastpartcontainer">
    <div className="imagecontainer">
    <img src="https://cdn.modesens.com/static/img/20220915-bg3.png" alt="err" />
    </div>
    <div className='imagedetails'>
        <h1>Built By Shoppers For Shoppers</h1>
        <h5>Our mission is to develop the future of shopping. You only need to know what you like. We’ll handle the rest.</h5>
        <a href="/">READ OUR STORY</a>
    </div>
  </div>
</div>
  
  <br />

{/* lastpart ends */}
    
    </>
  )
}

export default About