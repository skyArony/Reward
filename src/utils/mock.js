// home 页顶部广场数据
const HomeSquare = [
  {
    img: 'url(http://www.qiqiboy.com/wp-content/uploads/2017/11/icon.png)',
    title: '项目外包求大神',
    tagText: '程序员',
    tagColor: '#2d8cf0',
    type: 'tag',
    isOnline: true,
    isMulti: true
  },
  {
    img: 'url(https://img.shouji.com.cn/simg/20170515/9158059049.png)',
    title: '帮我拿个快递',
    tagText: '龙门镖局',
    tagColor: '#2d8cf0',
    type: 'tag',
    isOnline: false,
    isMulti: false
  },
  {
    img: 'url(http://pic.downcc.com/upload/2016-3/20163251455124365.png)',
    title: '帮我带个东西',
    tagText: '龙门镖局',
    tagColor: '#2d8cf0',
    type: 'tag',
    isOnline: false,
    isMulti: false
  },
  {
    img: 'url(http://www.panindiagoodbooks.com/images/slider/img-2.png)',
    title: '此问何解',
    tagText: '博物学会',
    tagColor: '#2d8cf0',
    type: 'tag',
    isOnline: true,
    isMulti: true
  },
  {
    img: 'url(https://i.loli.net/2017/08/21/599a521472424.jpg)',
    title: '明基商务广场',
    tagText: '悬赏榜',
    tagColor: '#f90',
    type: 'area',
    isOnline: null,
    isMulti: null
  },
  {
    img: 'url(http://img1.gtimg.com/rushidao/pics/hv1/226/194/2245/146030821.png)',
    title: '旧物市场',
    tagText: '永安当',
    tagColor: '#2d8cf0',
    type: 'tag',
    isOnline: true,
    isMulti: false
  },
  {
    img: 'url(https://i.loli.net/2017/08/21/599a521472424.jpg)',
    title: '长宁区',
    tagText: '悬赏榜',
    tagColor: '#f90',
    type: 'area',
    isOnline: null,
    isMulti: null
  },
  {
    img: 'url(https://is5-ssl.mzstatic.com/image/thumb/Purple122/v4/83/87/cf/8387cfb8-f19b-641d-93bb-83716e511f74/mzl.ojtisolp.png/246x0w.jpg)',
    title: '数码产品维修',
    tagText: '工巧',
    tagColor: '#2d8cf0',
    type: 'tag',
    isOnline: false,
    isMulti: false
  },
  {
    img: 'url(http://pic.downcc.com/upload/2015-11/20151125161946.png)',
    title: '一起约篮球',
    tagText: '组团',
    tagColor: '#2d8cf0',
    type: 'tag',
    isOnline: false,
    isMulti: true
  }
]

const TaskList = [
  {
    id: 1,
    img: 'url(http://www.orczhou.com/wp-content/uploads/2016/03/TB11e2VJXXXXXXtaXXXXXXXXXXX_0-item_pic.jpg)',
    title: 'cherry 键盘进了点水,有个按键不灵了,求个会修键盘的大神',
    desc:
      'cherry 键盘进了点水,有个按键不灵了,求个会修键盘的大神',
    reward: 120,
    square: {
      text: '工巧',
      color: '#2d8cf0'
    },
    status: {
      text: '无人问津',
      color: '#8d6e63'
    }
  },
  {
    id: 2,
    img: null,
    title: '上海市长宁区明基广场求修挡风玻璃',
    desc:
      '昨天开车挡风玻璃划到树枝了，有点点划痕，去4s店修复有点溢价，有没有自己修复过的兄弟啊！',
    reward: 300,
    square: {
      text: '工巧',
      color: '#2d8cf0'
    },
    area: {
      text: '明基广场',
      color: '#f90'
    },
    status: {
      text: '已完成',
      color: '#e0e0e0'
    }
  },
  {
    id: 3,
    img: null,
    title: '重庆解放碑有本地人一起约饭吗 AA',
    desc: '楼主一个人到了重庆想吃苍蝇馆子呀！有本地人来推荐吗！',
    reward: 0.01,
    square: {
      text: '组团',
      color: '#2d8cf0'
    },
    area: {
      text: '重庆解放碑',
      color: '#f90'
    },
    status: {
      text: '无人问津',
      color: '#8d6e63'
    }
  },
  {
    id: 4,
    img: null,
    title: '前端问题求解答！',
    desc:
      '最近在学前端 发现要学的东西太多了！而且也很杂！想找个可以随时请教问题的老师,问题按此付钱',
    reward: 50,
    square: {
      text: '博物学会',
      color: '#2d8cf0'
    },
    status: {
      text: '被揭榜',
      color: '#ef5350'
    }
  },
  {
    id: 5,
    img: 'url(https://is5-ssl.mzstatic.com/image/thumb/Purple122/v4/83/87/cf/8387cfb8-f19b-641d-93bb-83716e511f74/mzl.ojtisolp.png/246x0w.jpg)',
    title: 'ps学习视频',
    desc: '最近在学习ps,有什么书籍和教程推荐吗?',
    reward: 30,
    square: {
      text: '求资源',
      color: '#2d8cf0'
    },
    status: {
      text: '12人揭榜',
      color: '#ef5350'
    }
  },
  {
    id: 6,
    img: null,
    title: '设计logo',
    desc: '我们团队最近开发了个新游戏需要个logo 有学设计的朋友吗 酬劳可以另议',
    reward: 1200,
    square: {
      text: '设计',
      color: '#2d8cf0'
    },
    status: {
      text: '待完成',
      color: '#ef5350'
    }
  },
  {
    id: 7,
    img: 'url(http://img.kaopu001.com/2017-10-24/ebdc6505-d20e-41e6-83cf-051532b39c28.png)',
    title: '王者荣耀代练代练代练！',
    desc:
      '几个赛季没打段位降了好多！不想自己再慢慢打上去了！希望有王者选手来帮忙打到钻石呀！',
    reward: 999,
    square: {
      text: '技能',
      color: '#2d8cf0'
    },
    status: {
      text: '12人揭榜',
      color: '#ef5350'
    }
  },
  {
    id: 8,
    img: null,
    title: '明基广场的快递',
    desc: '下班忘了领快递,哪位加班的同事下班帮我领一下,我住 XXX, 顺路的接.',
    reward: 10,
    square: {
      text: '龙门镖局',
      color: '#2d8cf0'
    },
    area: {
      text: '明基广场',
      color: '#f90'
    },
    status: {
      text: '被揭榜',
      color: '#ef5350'
    }
  },
  {
    id: 9,
    img: null,
    title: '周末有打篮球的吗,组三队,还少4个人',
    desc: '17号,地点 XXX,还少四个人.',
    reward: 0.01,
    square: {
      text: '组团',
      color: '#2d8cf0'
    },
    area: {
      text: '闵行',
      color: '#f90'
    },
    status: {
      text: '3人揭榜',
      color: '#ef5350'
    }
  },
  {
    id: 10,
    img: 'url(https://wx3.sinaimg.cn/nmw690/005M94J9ly4frul3r7k45j3074074t99.jpg)',
    title: '店铺要做一个小程序,价格好说',
    desc: '本店要做个小程序,有蛮多需求,求个小程序开发者,价格好说.',
    reward: 1200,
    square: {
      text: '程序员',
      color: '#2d8cf0'
    },
    status: {
      text: '3人揭榜',
      color: '#ef5350'
    }
  },
  {
    id: 11,
    img: null,
    title: '明基广场的快递',
    desc: '下班忘了领快递,哪位加班的同事下班帮我领一下,我住 XXX, 顺路的接.',
    reward: 10,
    square: {
      text: '龙门镖局',
      color: '#2d8cf0'
    },
    area: {
      text: '明基广场',
      color: '#f90'
    },
    status: {
      text: '被揭榜',
      color: '#ef5350'
    }
  }
]

export { HomeSquare, TaskList }
