
/*
*项目名: 个人简历
*创建者: Edit
*创建时间:2020.2.15 20:40:41
*联系方式:15622749328(微信同号)
*描述: 酷炫个人简历
*/

let textArr = [
    {
        name: 'h2',
        class: 'inten',
        text: '求职意向：前端开发工程师'
    }, {
        name: 'h4',
        class: 'text-title',
        text: '基本信息'
    }, {
        name: 'div',
        class: 'base-info',
        children: [{
            name: 'div',
            children: [{
                name: 'div',
                text: '姓名:王苏'
            }, {
                name: 'div',
                text: '年龄：24'
            }]
        }, {
            name: 'div',
            children: [{
                name: 'div',
                text: '毕业院校：淮北师范大学(一本)'
            }, {
                name: 'div',
                text: '联系电话：13329111665'
            }]
        }]
    }, {
        name: 'h4',
        class: 'text-title',
        text: '教育背景'
    }, {
        name: 'div',
        class: 'school',
        children: [{
            name: 'span',
            class: 'mr',
            text: '学校：淮北师范大学'
        }, {
            name: 'span',
            text: '专业：计算机科学与技术'
        }, {
            name: 'div',
            text: '主修课程：C++、数据结构、MySQL、JavaScript、计算机网络、设计模式',
        }]
    }, {
        name: 'h4',
        class: 'text-title',
        text: '专业技能'
    },
    {
        name: 'ul',
        class: 'ul-list',
        children: [
            {
                name: 'li',
                text: '熟练掌握',
                children: [{
                    name: 'span',
                    class: 'tag',
                    text: 'H5、CSS3、ES6'
                }]
            },
            {
                name: 'li',
                text: '熟练掌握',
                children: [{
                    name: 'span',
                    text: 'UI组件库：'
                }, {
                    name: 'span',
                    class: 'tag',
                    text: 'ElementUI、VantUI、AntDesign、NaiveUI'
                }]
            },
            {
                name: 'li',
                text: '能熟练运用',
                children: [{
                    name: 'span',
                    class: 'tag',
                    text: 'Echarts,ucharts做pc端以及移动端得数据展示'
                }]
            },
            {
                name: 'li',
                text: '掌握',
                children: [{
                    name: 'span',
                    text: 'Jquery: '
                }
                    , {
                    name: 'span',
                    class: 'tag',
                    text: 'zepto、Layui、Bootstrap、X-admin'
                }]
            },
            {
                name: 'li',
                text: '掌握',
                children: [{
                    name: 'span',
                    text: 'Vue: '
                }
                    , {
                    name: 'span',
                    class: 'tag',
                    text: 'Vue2.0、Vue3.0、Vuex、VueRouter、ElementUI'
                }]
            },
            {
                name: 'li',
                text: '掌握',
                children: [{
                    name: 'span',
                    text: 'React: '
                }
                    , {
                    name: 'span',
                    class: 'tag',
                    text: 'React、redux、mobx、Dva、reactRouter、Umi、reactRouter、ReactNative'
                }]
            },
            {
                name: 'li',
                text: '熟练掌握',
                children: [{
                    name: 'span',
                    text: 'H5混合APP开发: '
                }, {
                    name: 'span',
                    class: 'tag',
                    text: '跨多端技术uni-app、taro'
                }]
            },
            {
                name: 'li',
                text: '精通微信小程序开发部署，熟悉公众号开发流程',
            },
            {
                name: 'li',
                text: '熟悉后端语言',
                children: [
                    {
                        name: 'span',

                        text: 'Node: '
                    },
                    {
                        name: 'span',
                        class: 'tag',
                        text: 'Express、'
                    }, {
                        name: 'span',
                        class: 'tag',
                        text: 'Koa'
                    }]
            },
            {
                name: 'li',
                text: '熟悉',
                children: [{
                    name: 'span',

                    text: '前端构建工具: '
                }, {
                    name: 'span',
                    class: 'tag',
                    text: 'webpack、vite、gulp'
                }]
            },
            {
                name: 'li',
                text: '熟练使用',
                children: [{
                    name: 'span',
                    text: 'css预处理器: '
                }, {
                    name: 'span',
                    class: 'tag',
                    text: 'less、sass、stylus'
                }]
            },
            {
                name: 'li',
                text: '熟练使用',
                children: [{
                    name: 'span',
                    text: '版本控制工具: '
                }, {
                    name: 'span',
                    class: 'tag',
                    text: 'Git、Svn'
                }]
            },
        ]
    },
    {
        name: 'h4',
        class: 'text-title',
        text: '工作经历'
    }, {
        name: 'div',
        class: 'work',
        children: [{
            name: 'span',
            class: 'mr',
            text: '2020.12 — 至今'
        }, {
            name: 'span',
            text: 'web前端开发'
        }]
    }
    , {
        name: 'ul',
        class: 'ul-list',
        children: [{
            name: 'li',
            text: '担任华住集团技术部前端工程师',
            children: [{
                name: 'span',
                class: 'tag',
                text: '项目上线、项目迭代、BUG解决、产品优化'
            }]
        }, {
            name: 'li',
            text: '负责公司项目开发，其他公司基础项目开发，如微信小程序，企业响应式网站，中台管理系统！'
        }]
    }, {
        name: 'h4',
        class: 'text-title',
        text: '项目经验'
    }, {
        name: 'div',
        class: 'item-lv',
        children: [{
            name: 'ul',
            class: 'ul-list',
            children: [{
                name: 'li',
                class: 'project-title',
                text: '项目一：华住会官网'
            }, {
                name: 'li',
                text: '项目时间:',
                children: [{
                    name: 'span',
                    class: 'tag',
                    text: '2020-12到2020-3'
                }]
            },
            {
                name: 'li',
                text: '使用技术栈：',
                children: [{
                    name: 'span',
                    class: 'tag',
                    text: 'jQuery、bootstrap、zepto'
                }]
            }, {
                name: 'li',
                text: '项目描述：为了满足用户对本公司得熟悉与支持，构建官网供用户查看信息以及进行一些'
            }]
        }, {
            name: 'ul',
            class: 'ul-list',
            children: [{
                name: 'li',
                class: 'project-title',
                text: '项目二：智慧通行（混合APP开发）'
            }, {
                name: 'li',
                text: '使用技术栈：',
                children: [{
                    name: 'span',
                    class: 'tag',
                    text: 'Vue全家桶、webpack、vedio.js'
                },{
                    name: 'span',
                    class: 'tag',
                    text: 'cube-ui'
                }, {
                    name: 'span',
                    text: '腾讯地图api'
                }, {
                    name: 'span',
                    class: 'tag',
                    text: 'ApiCloud跨多端打包'
                }]
            }, {
                name: 'li',
                text: '项目描述：1.使用vue-socket.io模块实现socket长连接，搭建客服中心页面。'
            },
            {
                name: 'li',
                text: '2.使用contenthash缓存以及babel缓存的方式实现对webpack性能的优化。'
            },
            {
                name: 'li',
                text: '3.对cube-ui 进行全局样式修改,完成 tabbar 的封装，轮播图自动播放等功能。'
            },
            {
                name: 'li',
                text: '4.使用webpack5联邦模块实现微前端构建。'
            },
            {
                name: 'li',
                text: '5. 使用 video.js 解决 m3u8 音频播放格式问题。'
            },
           
        ]
        }, {
            name: 'ul',
            class: 'ul-list',
            children: [{
                name: 'li',
                class: 'project-title',
                text: '项目三：微信小程序'
            }, {
                name: 'li',
                text: '使用技术栈：',
                children: [{
                    name: 'span',
                    class: 'tag',
                    text: 'wxs、Less、cos-wx-sdk-v5.js、wxml、'
                }, {
                    name: 'span',
                    text: 'vant-weapp、Krpano'
                }]
            }, {
                name: 'li',
                text: '项目描述：1. 使用微信小程序原生语法创建项目，使用flex布局构建页面，使用VantWeapp美化页面'
            }, {
                name: 'li',
                text: '2. 使用腾讯云第三方存储桶cos-wx-sdk-v5.js进行存储，配合微信小程序原生api 实现上传修改功能'
            }, {
                name: 'li',
                text: '3. 使用crypt.js对小程序接口进行加密解密防止非法注入。'
            }, {
                name: 'li',
                text: '4. 使用CSS预处理器less简化CSS代码编写，浏览器兼容前缀，rem函数封装。'
            }, {
                name: 'li',
                text: '5. 使用UI框架YDUI，减少不必要的造轮子，提高代码编写效率，用户体验。'
            }, {
                name: 'li',
                text: '6. 使用Krpano实现VR全景展示。'
            }]
        },
            , {
            name: 'ul',
            class: 'ul-list',
            children: [{
                name: 'li',
                class: 'project-title',
                text: '项目三：数控传媒后台管理系统（后台管理系统）'
            }, {
                name: 'li',
                text: '使用技术栈：',
                children: [{
                    name: 'span',
                    text: 'react、typescript、echarts'
                },
                {
                    name: 'span',
                    class: 'tag',
                    text: 'umi、ant design pro V4、dva、Sass'
                }]
            }, {
                name: 'li',
                text: '项目描述：1. 使用Dva实现多个组件间的状态管理，实现登录鉴权操作。 '
            }, {
                name: 'li',
                text: '2. 使用腾讯云第三方存储桶cos-wx-sdk-v5.js进行存储视频和图片，结合ant degin封装上传组件'
            }, {
                name: 'li',
                text: '3.使用原生qrcode.js生成二维码，实现pc端扫码进入h5移动端的预览功能，使用高阶组件与组件继承的方式实现多个组件的复用化。'
            }, {
                name: 'li',
                text: '4. 使用Echarts对数据进行整合挖掘，实现数据可视化。'
            }, {
                name: 'li',
                text: '5. 使用umi.js实现路由级别的按需加载。'
            }, {
                name: 'li',
                text: '6. 使用组件化思想 + React.memo优化渲染速度。'
            },
            {
                name: 'li',
                text: '7. 使用typesctipt封装接口类型，实现静态类型检查，并结合eslint规范提高代码可读性。'
            }
            ]
        }]
    }, {
        name: 'h4',
        class: 'text-title',
        text: '自我评价'
    }, {
        name: 'ul',
        class: 'ul-list',
        children: [{
            name: 'li',
            text: '具有',
            children: [{
                name: 'span',
                class: 'tag',
                text: '团队管理经验'
            }, {
                name: 'span',
                text: '，拥有良好的'
            }, {
                name: 'span',
                class: 'tag',
                text: '团队协调能力'
            }, {
                name: 'span',
                text: '，工作当中和同事融洽相处'
            }]
        }, {
            name: 'li',
            text: '常混迹于',
            children: [{
                name: 'span',
                class: 'tag',
                text: '前端主流社区'
            }, {
                name: 'span',
                text: '（github、掘金、知乎、简书），翻阅前端'
            }, {
                name: 'span',
                class: 'tag',
                text: '大咖'
            }, {
                name: 'span',
                text: '博客（张鑫旭、阮一峰、黄轶）'
            }]
        }, {
            name: 'li',
            text: '热爱前端、思维活跃、学习能力强，抗压能力强。'
        }, {
            name: 'li',
            text: '性格随和、诚恳稳重、身体素质较好、能够很快地适应新环境。'
        }]
    }
]
let style = `
    /*
    * 面试官你好，我是王苏，来自安徽省宣城市
    * 为您精心准备一份不一样的简历来介绍自己
    * 首先准备一些样式
    */
    *{
        transition: all .8s;
    }
    /* 稍等，我给自己的简历添加点样式 */
    #codeEdit{
        color: #fff;
        background: #1E1E1E;
    }
    #resume{
        box-shadow: -1px 4px 9px 3px rgba(0, 0, 0, .15);
    }
    /* 我需要一点代码高亮 */
    pre#codeEdit{
        color: #CE9e78;
    }
    .token.selector{
        color: rgb(230, 155, 43);
    }
    .token.comment{
        color: #6A9955;
        font-size: 14px;
    }
    .token.property{
        color: #60C8FE;
    }
    .token.function {
        color: #DD4A68;
    }
    /* 接下来请欣赏我的个人简历吧 */
`
let balloon = `
    <div class="balloon-wrap">
        <img src="static/images/balloon.png" id="bg-balloon-small">
        <img src="static/images/balloon.png" id="bg-balloon-large">
        <img src="static/images/logo.png" id="bg-balloon-logo">
    </div>
    <div class="connect" style="width: 100%; display: flex;"></div>`
let line = `
    <div class="line-wrap">
        <div class="line-left"></div>
        <div class="line-right">
            <p class="line-defColor line-item1"></p>
            <p class="line-darkColor line-item2"></p>
            <p class="line-defColor line-item3"></p>
            <p class="line-midColor line-item4"></p>
            <p class="line-darkColor line-item5"></p>
            <p class="line-midColor line-item6"></p>
            <p class="line-darkColor line-item7"></p>
            <p class="line-midColor line-item7"></p>
        </div>
    </div>
    <div class="connect"></div>`
let text = `
    <div class="text-wrap"></div>
`


