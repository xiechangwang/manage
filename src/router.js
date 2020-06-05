import React,{Component} from 'react';
import {HashRouter,Route,Switch, Redirect} from 'react-router-dom';
import App from './App'; 	//最大的组件；包含所有组件
//login
import Login from './pages/login';
import Admin from './Admin'

//home
import Home from './pages/home';
//ui
//button
import Buttons from './pages/ui/buttons';
//modal
import Modals from './pages/ui/modals';
//loading
import Loadings from './pages/ui/loadings';
//notifications
import Notifications from './pages/ui/notifications';
//meaasges
import Meaasges from './pages/ui/meaasges';
//tabs
import Tabs from './pages/ui/tabs';
//tabs
import Carousels from './pages/ui/carousel';

//form
//login
import Logins from './pages/form/login';

//table
import Tables from './pages/table';
//Resizables
import Resizables from './pages/table/resizable'

//404
import NoMatch from './pages/noMatch';

class IRouter extends Component{
	render(){
		// const loginType=true;
		// if(!loginType){
		// 	return(
		// 		<HashRouter>
		// 			<App>
		// 				<Route path="/login" component={Login}></Route>
		// 				{/* 默认只输入名进来的时候，路由重定向 */}
		// 				<Route path="/" render={() => <Redirect to="/login" push />} />        
		// 			</App>
		// 	</HashRouter>
		// 	)
		// }else{
			return(
				<HashRouter>
						<App>
								<Route path="/login" component={Login}></Route>
								<Route path="/admin" render={()=>	
										//路由嵌套
										<Admin>
												<Switch>
													<Route path="/admin/home" component={Home}/>
													<Route path="/admin/ui/buttons" component={Buttons}/>
													<Route path="/admin/ui/modals" component={Modals}/>
													<Route path="/admin/ui/loadings" component={Loadings}/>
													<Route path="/admin/ui/notifications" component={Notifications}/>
													<Route path="/admin/ui/meaasges" component={Meaasges}/>
													<Route path="/admin/ui/tabs" component={Tabs}/>
													<Route path="/admin/ui/carousel" component={Carousels}/>
													<Route path="/admin/table/tables" component={Tables}/>
													<Route path="/admin/table/resizables" component={Resizables}/>
													{/* form */}
													<Route path="/admin/form/logins" component={Logins}/>
													{/* 404 */}
													<Route component={NoMatch} />
											  </Switch>
										</Admin>
								}></Route>
								{/* 默认只输入名进来的时候，路由重定向 */}
								<Route exact path="/" render={() => <Redirect to="/admin/home" push />} />     
						</App>
        </HashRouter>
			)
		// }
	}
}

export default IRouter;