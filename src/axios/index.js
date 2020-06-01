import JsonP from 'jsonp';
//封装jsonp，解决跨域
export default class Axios{
	static jsonp(options){
		console.log(options)
		new Promise((resolve,reject)=>{
			JsonP(options.url,{
				param:'callback'
			},function(err,res){
				//to-do;
				// if(res.status == 'success'){
				// 	resolve(res);
				// }else{
				// 	reject(err);
				// }
			})
		})
	}	
}	