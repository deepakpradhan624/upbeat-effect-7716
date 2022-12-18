import "../styles/Home.css"

function Home(){
    let box=document.querySelector(".newtosalecontainer");
  
    const btnpressprev=()=>{
      let width=box.clientWidth;
      box.scrollLeft=  box.scrollLeft - width    
    }
    const btnpressnext=()=>{
        let width=box.clientWidth;
        box.scrollLeft=  box.scrollLeft + width 
    }


    return (
        <div>
        <h1>Home Page</h1>

        <div className="imgSlider">
         
        </div>
           {/* Shop women section  */}

              <h1> <hr/> Shop Women <hr /> </h1>


         <div className="shopwomensectioncontainer">
            <div>
                <img className="shopwomensectionimg" style={{borderRadius:"50%"}} src="https://cdn.modesens.com/banner/20220919-W-Sale.jpg" alt="sale" />
                <h3>SALE</h3>
            </div>
            <div>
            <img className="shopwomensectionimg" src="https://cdn.modesens.com/banner/20220919-W-New.jpg" alt="NEW ARRIVALS" />
                <h3>NEW ARRIVALS</h3>
            </div>
            <div>
            <img className="shopwomensectionimg" src="https://cdn.modesens.com/banner/20220919-W-Jackets.jpg" alt="JACKETS" />
                <h3>JACKETS</h3>
            </div>
            <div>
            <img className="shopwomensectionimg" src="https://cdn.modesens.com/banner/20220919-W-Dresses.jpg" alt="DRESSES" />
                <h3>DRESSES</h3>
            </div>
            <div>
            <img className="shopwomensectionimg" src="https://cdn.modesens.com/banner/20220919-W-Tops.jpg" alt="TOPS" />
                <h3>TOPS</h3>
            </div>
            <div>
            <img className="shopwomensectionimg" src="https://cdn.modesens.com/banner/20220919-W-Pants.jpg" alt="PANTS" />
                <h3>PANTS</h3>
            </div>
            <div>
            <img className="shopwomensectionimg" src="https://cdn.modesens.com/banner/20220919-W-Shoes.jpg" alt="SHOES" />
                <h3>SHOES</h3>
            </div>
            <div>
            <img className="shopwomensectionimg" src="https://cdn.modesens.com/banner/20220919-W-Bags.jpg" alt="BAGS" />
                <h3>BAGS</h3>
            </div>
            <div>
            <img className="shopwomensectionimg" src="https://cdn.modesens.com/banner/20221207-W-PreOwned_1670402059.jpg" alt="PRE-OWNED" />
                <h3>PRE-OWNED</h3>
            </div>
             

         </div>





           {/* shop women section ends */}

           {/* products visual hover starts */}
         
           <h1> <hr/> New to Sale <hr /> </h1>
           <div>
           <div className="product-carousel" >
                <button className="pre-btn" onClick={btnpressprev} ><p>&lt;</p></button>
               <button className="next-btn" onClick={btnpressnext} ><p>&gt;</p></button>           
          

   <div className="newtosalecontainer" >

     <div className="newtosalesubdiv"> 
     <img src="https://cdn.modesens.com/availability/54528593?w=400" alt="error" />
     <h4>BALBAIL</h4>
     <h5>$1476</h5>
      <h6>Compare 13 stores</h6>
      </div>
     <div className="newtosalesubdiv"> 
     <img src="https://cdn.modesens.com/availability/56830338?w=400" alt="error" />
     <h4>BALBAIL</h4>
     <h5>$1476</h5>
      <h6>Compare 13 stores</h6>
      </div>
     <div className="newtosalesubdiv"> 
     <img src="https://cdn.modesens.com/product/10881690_51?w=400" alt="error" />
     <h4>BALBAIL</h4>
     <h5>$1476</h5>
      <h6>Compare 13 stores</h6>
      </div>
     <div className="newtosalesubdiv"> 
     <img src="https://cdn.modesens.com/product/21755026_234?w=400" alt="error" />
     <h4>BALBAIL</h4>
     <h5>$1476</h5>
      <h6>Compare 13 stores</h6>
      </div>
     <div className="newtosalesubdiv"> 
     <img src="https://cdn.modesens.com/product/3469145_255?w=400" alt="error" />
     <h4>BALBAIL</h4>
     <h5>$1476</h5>
      <h6>Compare 13 stores</h6>
      </div>
     <div className="newtosalesubdiv"> 
     <img src="https://cdn.modesens.com/product/40828647_1?w=400" alt="error" />
     <h4>BALBAIL</h4>
     <h5>$1476</h5>
      <h6>Compare 13 stores</h6>
      </div>
     <div className="newtosalesubdiv"> 
     <img src="https://cdn.modesens.com/product/22158392_111?w=400" alt="error" />
     <h4>BALBAIL</h4>
     <h5>$1476</h5>
      <h6>Compare 13 stores</h6>
      </div>
     <div className="newtosalesubdiv"> 
     <img src="https://cdn.modesens.com/product/10881690_51?w=400" alt="error" />
     <h4>BALBAIL</h4>
     <h5>$1476</h5>
      <h6>Compare 13 stores</h6>
      </div>
     <div className="newtosalesubdiv"> 
     <img src="https://cdn.modesens.com/product/10881690_51?w=400" alt="error" />
     <h4>BALBAIL</h4>
     <h5>$1476</h5>
      <h6>Compare 13 stores</h6>
      </div>

   </div>
   </div>
           </div>
           
           



               {/* products visual hover ends */}

          {/* special offers part start */}
          <h1> <hr/> Special Offers <hr /> </h1>
            
        <div className="specialoffercontainer" >
            <div className="specialoffersubdivs">
                <img src="https://cdn2.jomashop.com/media/catalog/product/cache/df24c858758eb768757877f23cd17493/c/r/creed-green-irish-tweed-creed-edp-spray-33-oz-100-ml-m-3508441001022.jpg?width=350&height=350" alt="error" />
                <h3>Love at first scent</h3>
                <p>Upto 70% off on designer perfume</p>
                <button>SHOP NOW</button>
            </div>
            <div className="specialoffersubdivs">
                <img src="https://th.bing.com/th/id/R.de04c9c155596793e34e0c38c982d6db?rik=6%2f4NUO6HWs%2fFbA&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fsale-transparent-background%2fsale-transparent-background-2.png&ehk=NVO7fpq0QQK1ee%2bFavP6Ziq46zjk2h9ITgAwVgTxwlY%3d&risl=&pid=ImgRaw&r=0" alt="sale" />
                <h3>OMG! So Fresh!</h3>
                <p>Shop New to Sale Now</p>
                <button>SHOP NOW</button>
            </div>
            <div className="specialoffersubdivs">
                <img src="https://static.thcdn.com/images/small/webp/productimg/1600/1600/11418649-2134474458384024.jpg" alt="error" />
                <h3>Last-Minute Gift Guide</h3>
                <p>Her most wanted under $100</p>
                <button>SHOP NOW</button>
            </div>

        </div>

          {/* special offers part ends */}

          {/* Community Post part start */}
          <h1> <hr/> Community Posts <hr /> </h1>


          <div>
           <div className="product-carousel" >
                <button className="pre-btn" onClick={btnpressprev} ><p>&lt;</p></button>
               <button className="next-btn" onClick={btnpressnext} ><p>&gt;</p></button>           
          

   <div className="newtosalecontainer" >

     <div className="newtosalesubdiv"> 
     <img src="https://cdn.modesens.com/umedia/1707018s?w=400" alt="error" />
     
      </div>
     <div className="newtosalesubdiv"> 
     <img src="https://cdn.modesens.com/umedia/1707030s?w=400" alt="error" />
  
      </div>
     <div className="newtosalesubdiv"> 
     <img src="https://cdn.modesens.com/umedia/1707011s?w=400" alt="error" />
     
      </div>
     <div className="newtosalesubdiv"> 
     <img src="https://cdn.modesens.com/umedia/1686127s?w=400" alt="error" />
     
      </div>
     <div className="newtosalesubdiv"> 
     <img src="https://cdn.modesens.com/umedia/1685556s?w=400" alt="error" />
     
      </div>
     <div className="newtosalesubdiv"> 
     <img src="https://cdn.modesens.com/umedia/1685542s?w=400" alt="error" />
   
      </div>
     <div className="newtosalesubdiv"> 
     <img src="https://cdn.modesens.com/umedia/1684927s?w=400" alt="error" />
   
      </div>
     <div className="newtosalesubdiv"> 
     <img src="https://cdn.modesens.com/umedia/1684387s?w=400" alt="error" />
     
      </div>
     <div className="newtosalesubdiv"> 
     <img src="https://cdn.modesens.com/product/10881690_51?w=400" alt="error" />
   
      </div>

   </div>
   </div>
           </div>


          {/* Community Post part ends */}
          {/* instalation part start */}

         <div className="installationpartcontainer">
            <div className="installationpartsubdivs">
                <h3>Download the ModeSens App</h3>
                <p>A seamless experience that takes your style to the next level.</p>
                <button>DOWNLOAD NOW</button>
                <img src="https://cdn.modesens.com/static/img/20220826appdownload_en.svg" alt="error" />
            </div>
            <div className="installationpartsubdivs">
                <h3>Install the ModeSens
Browser Extension</h3>
                <p>Get timely, accurate product information
every time you browse.</p>
                <button>INSTALL NOW</button>
                <img src="https://cdn.modesens.com/static/img/20211109downloadright.png" alt="error" />
            </div>
         </div>
         <br /><br />
         <hr />
         <br />


          {/* instalation part ends */}

        </div>
    )
}
export default Home;