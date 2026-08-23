const $=(s,p=document)=>p.querySelector(s);const $$=(s,p=document)=>[...p.querySelectorAll(s)];
const nav=$('.nav');window.addEventListener('scroll',()=>nav?.classList.toggle('scrolled',scrollY>20),{passive:true});
const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('show')),{threshold:.12});$$('.reveal').forEach(x=>io.observe(x));
$('.menu')?.addEventListener('click',()=>$('.links')?.classList.toggle('open'));
const API=(window.ROBO_CONFIG?.API_BASE||'').replace(/\/$/,'');
window.roboApi=async(path,options={})=>{const r=await fetch(API+path,{credentials:'include',headers:{'Content-Type':'application/json',...(options.headers||{})},...options});const data=await r.json().catch(()=>({}));if(!r.ok)throw new Error(data.error||'Request failed');return data};
