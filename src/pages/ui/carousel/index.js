import React,{Component} from 'react';
import {Card,Carousel} from 'antd';
import './index.less';

class Carousels extends Component{
	render(){
		return(
			<div style={{'width':'100%','textAlign':'left'}}>
					<Card title="轮播">
            <Carousel >
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
            </Carousel>
          </Card>
			</div>
		)
	}	
}

export default Carousels;