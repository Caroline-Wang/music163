
//使用LeanCloud进行歌曲信息的初始化上传

//创建歌曲信息数据
noinspection JSAnnotator
let songsInfo=[
    {
        singer:'薛之谦',
        songs:[
            {name:'丑八怪',url:'http://ov9xs8ajf.bkt.clouddn.com/%E4%B8%91%E5%85%AB%E6%80%AA.mp3'},
            {name:'刚刚好',url:'http://ov9xs8ajf.bkt.clouddn.com/%E5%88%9A%E5%88%9A%E5%A5%BD.mp3'},
            {name:'演员',url:'http://ov9xs8ajf.bkt.clouddn.com/%E6%BC%94%E5%91%98.mp3'},
            {name:'我好像在哪见过你',url:'http://ov9xs8ajf.bkt.clouddn.com/%E6%88%91%E5%A5%BD%E5%83%8F%E5%9C%A8%E5%93%AA%E8%A7%81%E8%BF%87%E4%BD%A0.mp3'},
            {name:'意外',url:'http://ov9xs8ajf.bkt.clouddn.com/%E6%84%8F%E5%A4%96.mp3'},
            {name:'绅士',url:'http://ov9xs8ajf.bkt.clouddn.com/%E7%BB%85%E5%A3%AB.mp3'},
            {name:'你还要我怎样',url:'http://ov9xs8ajf.bkt.clouddn.com/%E4%BD%A0%E8%BF%98%E8%A6%81%E6%88%91%E6%80%8E%E6%A0%B7.mp3'}
        ]
    },
    {
        singer:'周杰伦',
        songs:[
            {name:'安静',url:'http://ov9xs8ajf.bkt.clouddn.com/%E5%AE%89%E9%9D%99.mp3'},
            {name:'彩虹',url:'http://ov9xs8ajf.bkt.clouddn.com/%E5%BD%A9%E8%99%B9.mp3'},
            {name:'稻香',url:'http://ov9xs8ajf.bkt.clouddn.com/%E7%A8%BB%E9%A6%99.mp3'},
            {name:'搁浅',url:'http://ov9xs8ajf.bkt.clouddn.com/%E6%90%81%E6%B5%85.mp3'},
            {name:'明明就',url:'http://ov9xs8ajf.bkt.clouddn.com/%E6%98%8E%E6%98%8E%E5%B0%B1.mp3'},
            {name:'七里香',url:'http://ov9xs8ajf.bkt.clouddn.com/%E4%B8%83%E9%87%8C%E9%A6%99.mp3'},
            {name:'夜曲',url:'http://ov9xs8ajf.bkt.clouddn.com/%E5%A4%9C%E6%9B%B2.mp3'},
            {name:'一路向北',url:'http://ov9xs8ajf.bkt.clouddn.com/%E4%B8%80%E8%B7%AF%E5%90%91%E5%8C%97.mp3'}
        ]
    }
];

var SongObject = AV.Object.extend('Song');
var songsList=[];
for(let i=0;i<songsInfo.length;i++){    //每一项为歌手和相应歌曲的对象
    let songs=songsInfo[i];
    for(let j=0;j<songs["songs"].length;j++){
        let eachSong=songs["songs"][j];
        let songObject = new SongObject();
        songObject.set('singer',songs["singer"]);
        songObject.set('name',eachSong["name"]);
        songObject.set('url',eachSong["url"]);
        songsList.push(songObject);
    }
}
console.log(songsList);
AV.Object.saveAll(songsList).then(function(objects) {
    console.log('初始化成功！');
},function(error){
    console.log('初始化失败！');
});

//创建歌单信息数据
let songsCollection=[
    {
        title:"「想在秋天和你一起做的事情」",
        image:"http://ov9xs8ajf.bkt.clouddn.com/%E6%AD%8C%E5%8D%95%E4%B8%80.jpg"
    },
    {
        title:"avex 到底藏了多少动漫歌 ？",
        image:"http://ov9xs8ajf.bkt.clouddn.com/%E6%AD%8C%E5%8D%95%E4%BA%8C.jpg"
    },
    {
        title:"中文说唱及中国HipHop制作人采样探寻",
        image:"http://ov9xs8ajf.bkt.clouddn.com/%E6%AD%8C%E5%8D%95%E4%B8%89.jpg"
    },
    {
        title:"R&B柔情男嗓丨萦绕心间的温暖细腻",
        image:"http://ov9xs8ajf.bkt.clouddn.com/%E6%AD%8C%E5%8D%95%E5%9B%9B.jpg"
    },
    {
        title:"医生说我的抖腿已经无药可治了",
        image:"http://ov9xs8ajf.bkt.clouddn.com/%E6%AD%8C%E5%8D%95%E4%BA%94.jpg"
    },
    {
        title:"那些在你酩酊大醉后嘶吼出来的心事",
        image:"http://ov9xs8ajf.bkt.clouddn.com/%E6%AD%8C%E5%8D%95%E5%85%AD.jpg"
    }
];

var Collection = AV.Object.extend('Collection');
var collectionList=[];
for(let i=0;i<songsCollection.length;i++){    //每一项为歌手和相应歌曲的对象
    let collection=songsCollection[i];
    let collectionObject = new Collection();
    collectionObject.set('title',collection["title"]);
    collectionObject.set('image',collection["image"]);
    collectionList.push(collectionObject)
}
console.log(collectionList);
AV.Object.saveAll(collectionList).then(function(objects) {
    console.log('初始化成功！');
},function(error){
    console.log('初始化失败！');
});