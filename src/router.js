import React,{Component} from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom';
import App from './App'; 	//最大的组件；包含所有组件
//login
import Login from './pages/login';
import Admin from './Admin'
//ui
import Button from './pages/ui/buttons';
//404
import NoMatch from './pages/noMatch';

class IRouter extends Component{
	render(){
		return(
				<HashRouter>
						<App>
							<Switch>
								<Route path="/login" component={Login}></Route>
								<Route path="/admin" render={()=>	
										//路由嵌套
										<Admin>
												<Switch>
													<Route path="/admin/ui/buttons" component={Button}/>
													{/* 404 */}
													<Route component={NoMatch} />
											  </Switch>
										</Admin>
								}></Route>
							</Switch>
						</App>
        </HashRouter>
		)
	}
}

export default IRouter;