import React from 'react'
import './style.css'

import Card from '../../components/UI/Card'
import Sidebar from '../../components/Sidebar';

const Home = props => {
    const galleryHeight = 450;

    const galleryStyle = {
        height: galleryHeight + 'px',
        overflow: 'hidden',

    }

    const sideImageHeight = galleryHeight / 3

    return (
        <div>
            <Card>
                <div className="galleryPost" style={galleryStyle}>
                    <section style={{ width: '65%' }}>
                        <div>
                            <img src={"https://3.bp.blogspot.com/-5m7-CKx68VA/W6rjU5sHfrI/AAAAAAAAUIA/5npgP79WoOIcjs9vWvhXbZmgCToFT594gCLcBGAs/w650/free-stock-photos.jpg"} alt="Popular Post" />
                        </div>
                    </section>
                    <section className={'sideImageWrapper'} style={{ width: '35%' }}>
                        <div style={{ height: `${sideImageHeight}px` }}>
                            <img src={"https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"} alt="Popular Post" />
                        </div>
                        <div style={{ height: `${sideImageHeight}px` }}>
                            <img src={"https://images.pexels.com/photos/1153370/pexels-photo-1153370.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"} alt="Popular Post" />
                        </div>
                        <div style={{ height: `${sideImageHeight}px` }}>
                            <img src={"https://images.pexels.com/photos/113734/pexels-photo-113734.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"} alt="Popular Post" />
                        </div>
                    </section>
                </div>

            </Card>
            <section className='homePage'>
                <div style={{ width: '65%' }}>
                    <Card style={{ marginBottom: '20px' }}>
                        Post1
        </Card>

                    <Card style={{ marginBottom: '20px' }}>
                        Post2
        </Card>
                </div>
                <Sidebar />

            </section>


        </div>
    )
}

export default Home; 