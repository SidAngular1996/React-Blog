import React from 'react'
import Card from '../../../components/UI/Card'
import './style.css'
import Sidebar from '../../../components/Sidebar'

/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
  return(
      

    <div style={{width:'70%'}}>
        <Card style={{ marginBottom: '20px' }}>
            <div className='postImageWrapper'>
                <img src={'https://3.bp.blogspot.com/-5m7-CKx68VA/W6rjU5sHfrI/AAAAAAAAUIA/5npgP79WoOIcjs9vWvhXbZmgCToFT594gCLcBGAs/w950/free-stock-photos.jpg'} alt="Post 1" />
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
   


   )

 }

export default RecentPosts