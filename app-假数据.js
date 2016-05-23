var express = require('express');
var path = require('path');
var mongoose = require('mongoose'); 
var port = process.env.PORT || 3000; //端口号
var app = express();

app.set('views','views/pages');  //模版引擎目录
app.set('view engine', 'jade'); //模版引擎
// app.use(express.bodyParser()); //格式化代码
app.use(express.static(path.join(__dirname, 'bower_components'))); //bower 静态资源路径
app.use(express.static(path.join(__dirname, 'public')));
app.listen(port);

console.log('server is listing port ' + port);

app.get('/', function(req, res){

	res.render('index',
      {
		title: '首页',

		movies : [
           {
             title  : '美国队长3',
             _id    : 1,
             poster : 'http://localhost:3000/images/cover1.jpg'
           },
           {
           	title  : '超脑48小时',
             _id    : 2,
             poster : 'http://localhost:3000/images/cover2.jpg'
           },
           {
           	
           	 title  : '再见,在也不见',
             _id    : 3,
             poster : 'http://localhost:3000/images/cover3.jpg'
           }
		]
			
	  }	
		);
})


app.get('/movie/:id', function(req, res){
	res.render('detail', 
		{
			title  : '详情页',
			movie : {
				title  : '美国队长3',
				poster : 'http://localhost:3000/images/img.jpg',
				doctor : '安东尼·罗素 / 乔·罗素',
				country : '美国',
				language : '英语',
				year : '2016',
				summary  : '美国队长史蒂夫·罗杰斯（克里斯·埃文斯 Chris Evans 饰）带领着全新组建的复仇者联盟，继续维护世界和平。然而，一次执行任务时联盟成员不小心造成大量平民伤亡，从而激发政治压力，政府决定通过一套监管系统来管理和领导复仇者联盟。联盟内部因此分裂为两派：一方由史蒂夫· 罗杰斯领导，他主张维护成员自由，在免受政府干扰的情况下保护世界；另一方则追随托尼·斯塔克（小罗伯特·唐尼 Robert Downey Jr. 饰），他令人意外地决定支持政府的监管和责任制体系。神秘莫测的巴基（塞巴斯蒂安·斯坦 Sebastian Stan 饰）似乎成为内战的关键人物……'
			}
		}
		);
})

app.get('/admin/movie', function(req, res){
	res.render('admin', 
		{
			title  : '详情页',
			movie  : {
               
                title  : '',
				poster : '',
				doctor : '',
				country : '',
				language : '',
				year : '',
				summary  : ''

			}
			
	    }		
		);
})

app.get('/admin/list', function(req, res){
	res.render('list', 
		{
			title : '列表页面',
			movie : [
			  { _id    : 1,
				title  : '美国队长3',
				poster : 'http://localhost:3000/images/img.jpg',
				doctor : '安东尼·罗素 / 乔·罗素',
				country : '美国',
				language : '英语',
				year : '2016',
				summary  : '美国队长史蒂夫·罗杰斯（克里斯·埃文斯 Chris Evans 饰）带领着全新组建的复仇者联盟，继续维护世界和平。然而，一次执行任务时联盟成员不小心造成大量平民伤亡，从而激发政治压力，政府决定通过一套监管系统来管理和领导复仇者联盟。联盟内部因此分裂为两派：一方由史蒂夫· 罗杰斯领导，他主张维护成员自由，在免受政府干扰的情况下保护世界；另一方则追随托尼·斯塔克（小罗伯特·唐尼 Robert Downey Jr. 饰），他令人意外地决定支持政府的监管和责任制体系。神秘莫测的巴基（塞巴斯蒂安·斯坦 Sebastian Stan 饰）似乎成为内战的关键人物……'
	          },
	          { _id    : 3,
				title  : '美国队长3',
				poster : 'http://localhost:3000/images/img.jpg',
				doctor : '安东尼·罗素 / 乔·罗素',
				country : '美国',
				language : '英语',
				year : '2016',
				summary  : '美国队长史蒂夫·罗杰斯（克里斯·埃文斯 Chris Evans 饰）带领着全新组建的复仇者联盟，继续维护世界和平。然而，一次执行任务时联盟成员不小心造成大量平民伤亡，从而激发政治压力，政府决定通过一套监管系统来管理和领导复仇者联盟。联盟内部因此分裂为两派：一方由史蒂夫· 罗杰斯领导，他主张维护成员自由，在免受政府干扰的情况下保护世界；另一方则追随托尼·斯塔克（小罗伯特·唐尼 Robert Downey Jr. 饰），他令人意外地决定支持政府的监管和责任制体系。神秘莫测的巴基（塞巴斯蒂安·斯坦 Sebastian Stan 饰）似乎成为内战的关键人物……'
	          },
	           { _id    : 3,
				title  : '美国队长3',
				poster : 'http://localhost:3000/images/img.jpg',
				doctor : '安东尼·罗素 / 乔·罗素',
				country : '美国',
				language : '英语',
				year : '2016',
				summary  : '美国队长史蒂夫·罗杰斯（克里斯·埃文斯 Chris Evans 饰）带领着全新组建的复仇者联盟，继续维护世界和平。然而，一次执行任务时联盟成员不小心造成大量平民伤亡，从而激发政治压力，政府决定通过一套监管系统来管理和领导复仇者联盟。联盟内部因此分裂为两派：一方由史蒂夫· 罗杰斯领导，他主张维护成员自由，在免受政府干扰的情况下保护世界；另一方则追随托尼·斯塔克（小罗伯特·唐尼 Robert Downey Jr. 饰），他令人意外地决定支持政府的监管和责任制体系。神秘莫测的巴基（塞巴斯蒂安·斯坦 Sebastian Stan 饰）似乎成为内战的关键人物……'
	          }

	          			
			]
		}
		);
})