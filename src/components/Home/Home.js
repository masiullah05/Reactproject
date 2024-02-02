import React from 'react'
import "./Home.css"
import Datahome from '../Datas/Datahome'
import Card_container from '../card_container/Card_container'
import sd1 from '../Assets/slider1.jpg'
import sd2 from '../Assets/Slider5.jpg'
import sd3 from '../Assets/slider3.jpg'
import sd4 from '../Assets/slider2.jpg'
import sd5 from '../Assets/Slider4.jpg'
import fas1 from '../Assets/img1.jpg'
import fas2 from '../Assets/men1.jpg'
import fas3 from '../Assets/img3.jpg'
import blog1 from '../Assets/Home-blog1.jpg'
import blog2 from '../Assets/Home-blog2.jpg'
import blog3 from '../Assets/Home-blog4.jpg'
import blog4 from '../Assets/Home-blog5.jpg'
import pd11 from '../Assets/product-11.jpg'
import blog5 from '../Assets/Home-blog3.jpg'
import Logo from '../logo/logo'

const Home = () => {
  return (
    <>
       <div className="container-fluid">
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
          <li data-target="#myCarousel" data-slide-to="3"></li>
          <li data-target="#myCarousel" data-slide-to="4"></li>
          
        </ol>
        <div className="carousel-inner">
          <div className="item active">
            <img src={sd1} alt="Dress1"/>
          </div>
          <div className="item">
            <img src={sd2} alt="Dress2"/>
          </div>
          <div className="item">
            <img src={sd3} alt="Dress3"/>
          </div>
          <div className="item">
            <img src={sd4} alt="Dress4"/>
          </div>
          <div className="item">
            <img src={sd5} alt="Dress5"/>
          </div>

          
        </div>


        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
     </div>
     <div className="container-fluid ">
       <div className="imgdown">
         <p>ONLY THE BEST</p>
         <h2>NEW ARRIVALS</h2>
       </div>
       <div className="img__slide">
          <div className="slide">
            <img src={fas1} alt="Fashion" height={400}/>
          </div>
          <div className="slide">
            <img src={fas2} alt="Fashion" height={400}/>
          </div>
          <div className="slide">
            <img src={fas3} alt="Fashion" height={400}/>
          </div>   
       </div>
       
     </div>
     <div className="container-fluid ">
       <h5>LATEST NEWS</h5>
       <p className='new_trend'> FASHION NEW TRENDS</p>
        <div className="row">
           <div className="col-lg-12 blogs "> 
              <div className='blogs1'>
                <img src={blog1} alt='fashion'/>
              </div>
              <div className='blogs1'>
                <img src={blog2} alt='fashion'/>
              </div>
              <div className='blogs1'>
                <img src={blog3} alt='fashion'/>
              </div>
              <div className='blogs1'>
                <img src={blog4} alt='fashion'/>
              </div>
              <div className='blogs1'>
                <img src={blog5} alt='fashion'/>
              </div>
              <div className='blogs_text'>
                 <h2>Green <span> Trends</span></h2>
                 <p>Lorem ipsum dolor sit amet,consectetur <br/>adipiscingelit, sed do eiusmod tempor<br/>
                    incididunt ut labore et dolore magna<br/>aliqua sed do eiusmod tempor
                 </p>
                 <h3>#Men Fashion</h3>
              </div> 
              <div className='blogs1'>
                <img src={pd11} alt='fashion'/>
              </div>
           </div>
        </div>
     </div>
     <div className='sales'>
     <p>HOT SALES</p>
     </div>
     
      <div className='ab'>
        {
          Datahome.map((product,index) => (
            <Card_container key={index} img={product.img} name={product.name} new_price={product.new_price} old_price={product.old_price} />
          ))
        }
      </div>
      <Logo/>
    
    </>
  )
}

export default Home
