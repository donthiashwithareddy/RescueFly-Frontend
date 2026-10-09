const API=(localStorage.getItem('rescuefly_api')||(location.protocol==='file:'?'http://localhost:8080/api':`${location.origin}/api`)).replace(/\/$/,'');
const token=()=>localStorage.getItem('rescuefly_token');
async function api(path,options={}){const headers={'Content-Type':'application/json',...(options.headers||{})};if(token())headers.Authorization=`Bearer ${token()}`;const r=await fetch(API+path,{...options,headers});let data=null;try{data=await r.json()}catch{}if(r.status===401){localStorage.removeItem('rescuefly_token');localStorage.removeItem('rescuefly_user');if(!location.pathname.endsWith('login.html')&&!location.pathname.endsWith('register.html'))location.href='login.html'}if(!r.ok)throw new Error(data?.message||'Request failed');return data}
function saveAuth(d){localStorage.setItem('rescuefly_token',d.token);localStorage.setItem('rescuefly_user',JSON.stringify(d.user))}
function logout(){localStorage.clear();location.href='login.html'}
function guard(){if(!token())location.href='login.html'}
function toast(m){const x=document.querySelector('.toast');if(x){x.textContent=m;x.classList.add('show');setTimeout(()=>x.classList.remove('show'),2600)}}
function setupNav(){const u=JSON.parse(localStorage.getItem('rescuefly_user')||'null');document.querySelectorAll('[data-user-name]').forEach(x=>x.textContent=u?.name||'Traveler');document.querySelectorAll('[data-logout]').forEach(x=>x.onclick=logout)}
