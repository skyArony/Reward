// home 页顶部广场数据
const HomeSquare = [
  {
    img: 'url(https://i.loli.net/2017/08/21/599a521472424.jpg)',
    title: '帮我拿个快递',
    tagText: '龙门镖局',
    tagColor: '#039be5',
    type: 'tag',
    isOnline: false,
    isMulti: false
  },
  {
    img: 'url(https://i.loli.net/2017/08/21/599a521472424.jpg)',
    title: '帮我带个东西',
    tagText: '龙门镖局',
    tagColor: '#039be5',
    type: 'tag',
    isOnline: false,
    isMulti: false
  },
  {
    img: 'url(https://i.loli.net/2017/08/21/599a521472424.jpg)',
    title: '此问何解',
    tagText: '博物学会',
    tagColor: '#039be5',
    type: 'tag',
    isOnline: true,
    isMulti: true
  },
  {
    img: 'url(https://i.loli.net/2017/08/21/599a521472424.jpg)',
    title: '明基商务广场',
    tagText: '悬赏榜',
    tagColor: '#fbc02d',
    type: 'area',
    isOnline: null,
    isMulti: null
  },
  {
    img: 'url(https://i.loli.net/2017/08/21/599a521472424.jpg)',
    title: '旧物市场',
    tagText: '永安当',
    tagColor: '#039be5',
    type: 'tag',
    isOnline: true,
    isMulti: false
  },
  {
    img: 'url(https://i.loli.net/2017/08/21/599a521472424.jpg)',
    title: '长宁区',
    tagText: '悬赏榜',
    tagColor: '#fbc02d',
    type: 'area',
    isOnline: null,
    isMulti: null
  },
  {
    img: 'url(https://i.loli.net/2017/08/21/599a521472424.jpg)',
    title: '数码产品维修',
    tagText: '工巧',
    tagColor: '#039be5',
    type: 'tag',
    isOnline: false,
    isMulti: false
  },
  {
    img: 'url(https://i.loli.net/2017/08/21/599a521472424.jpg)',
    title: '一起约篮球',
    tagText: '组团',
    tagColor: '#039be5',
    type: 'tag',
    isOnline: false,
    isMulti: true
  }
]

const TaskList = [
  {
    id: 1,
    img: 'url(https://i.loli.net/2017/08/21/599a521472424.jpg)',
    title: '明基广场快递',
    desc: '明基广场快递明基广场快递明基广场快递明基广场快递明基广场快递',
    reward: 1.2,
    square: {
      text: '龙门镖局',
      color: '#039be5'
    },
    area: {
      text: '明基广场',
      color: '#fbc02d'
    },
    status: {
      text: '待完成',
      color: '#66bb6a'
    }
  },
  {
    id: 2,
    img: null,
    title: '明基广场快递',
    desc: '明基广场快递明基广场快递明基广场快递明基广场快递明基广场快递',
    reward: 1.2,
    square: {
      text: '龙门镖局',
      color: '#039be5'
    },
    area: {
      text: '明基广场',
      color: '#fbc02d'
    },
    status: {
      text: '已完成',
      color: '#e0e0e0'
    }
  },
  {
    id: 3,
    img: 'url(https://i.loli.net/2017/08/21/599a521472424.jpg)',
    title: '明基广场快递',
    desc: '明基广场快递明基广场快递明基广场快递明基广场快递明基广场快递',
    reward: 1.2,
    square: {
      text: '龙门镖局',
      color: '#039be5'
    },
    area: {
      text: '明基广场',
      color: '#fbc02d'
    },
    status: {
      text: '无人问津',
      color: '#8d6e63'
    }
  },
  {
    id: 4,
    img: null,
    title: '明基广场快递',
    desc: '明基广场快递明基广场快递明基广场快递明基广场快递明基广场快递',
    reward: 1.2,
    square: {
      text: '龙门镖局',
      color: '#039be5'
    },
    area: {
      text: '明基广场',
      color: '#fbc02d'
    },
    status: {
      text: '被揭榜',
      color: '#ef5350'
    }
  },
  {
    id: 5,
    img: 'url(https://i.loli.net/2017/08/21/599a521472424.jpg)',
    title: '明基广场快递',
    desc: '明基广场快递明基广场快递明基广场快递明基广场快递明基广场快递',
    reward: 1.2,
    square: {
      text: '龙门镖局',
      color: '#039be5'
    },
    area: {
      text: '明基广场',
      color: '#fbc02d'
    },
    status: {
      text: '12人揭榜',
      color: '#ef5350'
    }
  },
  {
    id: 6,
    img: 'url(https://i.loli.net/2017/08/21/599a521472424.jpg)',
    title: '明基广场快递',
    desc: '明基广场快递明基广场快递明基广场快递明基广场快递明基广场快递',
    reward: 1.2,
    square: {
      text: '龙门镖局',
      color: '#039be5'
    },
    area: {
      text: '明基广场',
      color: '#fbc02d'
    },
    status: {
      text: '12人揭榜',
      color: '#ef5350'
    }
  },
  {
    id: 7,
    img: 'url(https://i.loli.net/2017/08/21/599a521472424.jpg)',
    title: '明基广场快递',
    desc: '明基广场快递明基广场快递明基广场快递明基广场快递明基广场快递',
    reward: 1.2,
    square: {
      text: '龙门镖局',
      color: '#039be5'
    },
    area: {
      text: '明基广场',
      color: '#fbc02d'
    },
    status: {
      text: '12人揭榜',
      color: '#ef5350'
    }
  }
]

export { HomeSquare, TaskList }
