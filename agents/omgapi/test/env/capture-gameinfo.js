const https=require('https'),fs=require('fs'),path=require('path');
const gid=process.argv[2],gc=process.argv[3];
function req(m,h,p,b,hd){return new Promise((res,rej)=>{const d=b?(typeof b==='string'?b:JSON.stringify(b)):null;const r=https.request({method:m,hostname:h,path:p,port:443,timeout:15000,rejectUnauthorized:false,headers:{...(d?{'Content-Length':Buffer.byteLength(d)}:{}),...hd}},x=>{let s='';x.on('data',c=>s+=c);x.on('end',()=>res({status:x.statusCode,body:s}))});r.on('error',rej);r.on('timeout',()=>{r.destroy();rej(new Error('to'))});if(d)r.write(d);r.end()})}
const form=o=>Object.entries(o).map(([k,v])=>k+'='+encodeURIComponent(v)).join('&');
(async()=>{
  const g=await req('GET','api.omgapi.cc','/api/v1/pg/live-api/games',null,{Origin:'https://omgapi.cc',Referer:'https://omgapi.cc/'});
  const tok=JSON.parse(g.body).data.token;
  const ig=await req('POST','api.omgapi.cc','/api/usr/ingame?trace_id=t'+Date.now(),{app_id:'10013',gameid:gid,token:tok,lang:'zh',nick:'demo',cid:0},{'Content-Type':'application/json',sign:'x',Origin:'https://omgapi.cc',Referer:'https://omgapi.cc/'});
  const u=new URL(JSON.parse(ig.body).data.gameurl);const P=Object.fromEntries(u.searchParams);
  const gh={'Content-Type':'application/x-www-form-urlencoded',Origin:`https://${P.__refer}`,Referer:`https://${P.__refer}/`};
  const vr=await req('POST',P.ao,'/web-api/auth/session/v2/verifyOperatorPlayerSession?traceId=V'+Date.now(),form({cp:P.op,btt:P.btt||'1',vc:'2',pf:'5',l:P.l||'zh',gi:P.gi,os:P.ops,otk:P.ot}),gh);
  const atk=JSON.parse(vr.body).dt.tk;
  const gi=await req('POST',P.ao,`/game-api/${gc}/v2/GameInfo/Get?traceId=GI${Date.now()}`,form({atk}),gh);
  const gij=JSON.parse(gi.body);
  const dir=path.join(__dirname,'mock',gid,'api');fs.mkdirSync(dir,{recursive:true});
  fs.writeFileSync(path.join(dir,`game-api_${gc}_v2_GameInfo_Get.json`),JSON.stringify({request:{method:'POST'},response:{status:gi.status,body:gij}}));
  // 同时写 omgapi 风格 config.json(供 generate 读 rtp;GameInfo 无 rtp 就用默认)
  fs.writeFileSync(path.join(__dirname,'mock',gid,'config.json'),JSON.stringify({provider:'pg',gid,gameCode:gc,rtp:96.0,cs:gij.dt.cs,ml:gij.dt.ml},null,2));
  console.log('GameInfo 已抓:', gi.status, '| dt字段:', Object.keys(gij.dt||{}).join(','));
})().catch(e=>console.log('ERR',e.message));
