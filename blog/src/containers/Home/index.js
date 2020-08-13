import React from 'react'
import './style.css'

import Card from '../../components/UI/Card'
import Sidebar from '../../components/Sidebar';
import RecentPosts from './RecentPosts';


import blogData from '../../data/blog.json'
const SideImage = props => {
    return (
        <div style={props.height}>
            <img src={props.src} alt="less popular Post" />
        </div>
    )
}

const ImageGallery=props =>(

    <div className="galleryPost" style={props.galleryStyle}>


    
    <section style={{ width: '70%' }}>
        <div>
            <img src={require('../../blogPostImages/'+props.images[0])} alt="Popular Post" />
        </div>
    </section>
    <section className={'sideImageWrapper'} style={{ width: '21%' }}>
        

        <SideImage
        height={{height:props.sideImageHeight}}
        src={require('../../blogPostImages/'+props.images[1])}
        />


        <div style={{height:props.sideImageHeight}}>
            <img src={"https://images.pexels.com/photos/1153370/pexels-photo-1153370.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"} alt="less popular Post" />
        </div>
        <div style={{height:props.sideImageHeight}}>
            <img src={"https://images.pexels.com/photos/113734/pexels-photo-113734.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"} alt="less popular Post" />
        </div>

    </section>
</div>


)

const Home = props => {
    const galleryHeight = 450;

    const galleryStyle = {
        height: galleryHeight + 'px',
        overflow: 'hidden',

    }

    const sideImageHeight = galleryHeight / 3


    const imgAr=blogData.data.map(post=>post.blogImage)
    return (
        <div>
            <Card>
            <ImageGallery
                    largeWidth='70%'
                    smallWidth='30%'
                    sideImageHeight={sideImageHeight}
                    galleryStyle={galleryStyle}
                    images={imgAr}
                    />

</Card> 

        


            {/* <section className='homePage' >
                <div style={{ width: '65%' }}>
                    <Card style={{ marginBottom: '20px' }}>
                        <div className='postImageWrapper'>
                            <img src={'https://3.bp.blogspot.com/-5m7-CKx68VA/W6rjU5sHfrI/AAAAAAAAUIA/5npgP79WoOIcjs9vWvhXbZmgCToFT594gCLcBGAs/w650/free-stock-photos.jpg'} alt="Post 1" />
                        </div>

                        <div style={{ textAlign: 'center' }}>

                            <span>Featured</span>
                            <h2>Fitness Mantra To Live Fit Life</h2>
                            <span>posted on july/2020 by sid Blogging Tips </span>
                            <p>Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firmament doesn't land, isn't lesser creeping. Abundantly you called signs</p>
                            <button>Read More</button>
                        </div>
                    </Card>

                </div>
                <Sidebar />

            </section> */}
            <section className="homePage">
                <RecentPosts />
                <Sidebar />
            </section>

        </div>
    )
}

export default Home; 