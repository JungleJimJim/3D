const products = window.PRODUCTS;
const grid = document.querySelector('#product-grid');
const search = document.querySelector('#search');
const empty = document.querySelector('#empty');
const categoryLabels = window.CATEGORIES || {software:'Add-ons / Software',models:'3D Models'};
let activeFilter = 'all';

const art = (type) => {
  const forms = {
    people:'◉ ◉ ◉', library:'▦', wave:'∿', animal:'◇', bool:'◐', frames:'▱', bundle:'⬡', business:'♙',
    trees:'♠', things:'✦', rocks:'◆', plants:'♧', alien:'⌁', scifi:'▧', space:'◌'
  };
  return `<div class="product-art art-${type}"><span>${forms[type] || '⬡'}</span><i></i><i></i><i></i></div>`;
};

const preview = (p) => p.image
  ? `<figure class="product-preview"><img src="${p.image}" alt="Preview of ${p.name}" loading="lazy" decoding="async" onerror="this.closest('figure').classList.add('failed')"><span>OFFICIAL PREVIEW</span></figure>`
  : art(p.icon);

function render() {
  const query = search.value.trim().toLowerCase();
  const visible = products.filter(p => (activeFilter === 'all' || p.category === activeFilter) && `${p.name} ${p.tag} ${p.desc}`.toLowerCase().includes(query));
  grid.innerHTML = visible.map((p, i) => `
    <article class="product-card ${p.featured ? 'featured' : ''}" style="--delay:${i * 35}ms">
      <a class="card-hit" href="${p.url}" target="_blank" rel="noopener" aria-label="View ${p.name} on Gumroad"></a>
      <div class="card-top"><span class="pill">${categoryLabels[p.category] || '3D ASSET'}</span><span class="arrow">↗</span></div>
      ${preview(p)}
      <div class="card-info"><small>${p.tag}</small><h3>${p.name}</h3><p>${p.desc}</p><div class="card-foot"><strong>${p.price}</strong><span>VIEW PRODUCT ↗</span></div></div>
    </article>`).join('');
  empty.hidden = visible.length !== 0;
  bindTilt();
}

document.querySelector('#product-count').textContent = products.length.toString().padStart(2, '0');
const filters = document.querySelector('#catalog-filters');
filters.innerHTML = `<button class="active" data-filter="all">All <b>${products.length}</b></button>` +
  Object.entries(categoryLabels).map(([key,label]) => `<button data-filter="${key}">${label} <b>${products.filter(p => p.category === key).length}</b></button>`).join('');
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelector('[data-filter].active').classList.remove('active');
  button.classList.add('active'); activeFilter = button.dataset.filter; render();
}));
search.addEventListener('input', render);

function bindTilt() {
  if (matchMedia('(pointer: coarse), (prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('pointermove', e => {
      const r = card.getBoundingClientRect(), x = (e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
      card.style.setProperty('--rx', `${-y*5}deg`); card.style.setProperty('--ry', `${x*6}deg`);
    });
    card.addEventListener('pointerleave', () => { card.style.setProperty('--rx','0deg'); card.style.setProperty('--ry','0deg'); });
  });
}

// Lightweight dependency-free canvas sculpture.
const canvas = document.querySelector('#scene'), ctx = canvas.getContext('2d');
let mx=0, my=0, time=0;
function resize(){ const r=canvas.getBoundingClientRect(), d=Math.min(devicePixelRatio,2); canvas.width=r.width*d; canvas.height=r.height*d; ctx.setTransform(d,0,0,d,0,0); }
function draw(){
  const w=canvas.clientWidth,h=canvas.clientHeight,cx=w/2,cy=h/2; ctx.clearRect(0,0,w,h); time+=.006;
  const pts=[]; for(let i=0;i<18;i++){ const a=i/18*Math.PI*2+time; const z=Math.sin(a*3+time*2); const rad=Math.min(w,h)*(.25+.045*z); pts.push({x:cx+Math.cos(a+mx*.25)*rad,y:cy+Math.sin(a)*rad*.54+z*34+my*18,z}); }
  ctx.lineWidth=1; ctx.strokeStyle='rgba(141,153,164,.20)';
  for(let i=0;i<pts.length;i++){ for(let j=i+1;j<pts.length;j++){ if((j-i)%4===0 || j===i+1){ctx.beginPath();ctx.moveTo(pts[i].x,pts[i].y);ctx.lineTo(pts[j].x,pts[j].y);ctx.stroke();}}}
  pts.sort((a,b)=>a.z-b.z).forEach((p,i)=>{ const r=6+(p.z+1)*4; const g=ctx.createRadialGradient(p.x-r*.3,p.y-r*.3,1,p.x,p.y,r); g.addColorStop(0,'#fff2d7');g.addColorStop(.25,i%3?'#ff9d3d':'#5be7e0');g.addColorStop(1,'rgba(16,17,19,.2)');ctx.fillStyle=g;ctx.beginPath();ctx.arc(p.x,p.y,r,0,Math.PI*2);ctx.fill(); });
  ctx.font=`700 ${Math.min(w,h)*.14}px Space Grotesk`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle='#f4f1ea';ctx.fillText('B',cx+mx*12,cy+my*8);
  requestAnimationFrame(draw);
}
canvas.addEventListener('pointermove',e=>{const r=canvas.getBoundingClientRect();mx=(e.clientX-r.left)/r.width*2-1;my=(e.clientY-r.top)/r.height*2-1;});
addEventListener('resize',resize); resize(); draw(); render();

// Jungle Jim TV — verified video files embedded on the official Gumroad pages.
const tvChannels = [
  {title:'Background People', src:'https://public-files.gumroad.com/hxq4v5n0q7qcdfk20knmlcbwyogj', poster:'https://public-files.gumroad.com/9og9925c40qn23seoa4die3yi432'},
  {title:'FBX Asset Library', src:'https://public-files.gumroad.com/i2xvsgcif942rvdka1ycxahb11xf', poster:'https://public-files.gumroad.com/l9im1o9mr4h5dgi9whzvo27elp0x'},
  {title:'Animated Animals', src:'https://public-files.gumroad.com/4sypthwijb3beb4okk8vvfmev0ry', poster:'https://public-files.gumroad.com/z2mohdrlbk2yesdufevzcseqzg04'},
  {title:'Business Bundle', src:'https://public-files.gumroad.com/wwxdqtluhuof9t76g3b3ktng5sra', poster:'https://public-files.gumroad.com/axi7se707pajsmseqx326ah838bf'},
  {title:'Business People', src:'https://public-files.gumroad.com/giuudvb8nnmot5flph86u7vve0hf', poster:'https://public-files.gumroad.com/3hk6bwk50cgk7lezcxma9bdyxg3t'},
  {title:'Indoor Plants', src:'https://public-files.gumroad.com/o45styxxcldz7wgykz550kgvw82e', poster:'https://public-files.gumroad.com/8snbgg2m7crw2zjv82wx5smtfrak'},
  {title:'Sci-fi Materials', src:'https://public-files.gumroad.com/yykuz6hjemei7t2xkq2praliesui', poster:'https://public-files.gumroad.com/mx8f7mf2ah1l6un752ks2k6ap73u'},
  {title:'Uasset to FBX', src:'https://public-files.gumroad.com/e51qm5q4ctuokqwjquau7954tgn2', poster:'https://public-files.gumroad.com/99an1fpaf7cwnkce9nk6o8kldjwn'},
  {title:'Alien Spaceship', src:'https://public-files.gumroad.com/h5xyadsdwvqeug0sz4z5b1g857ct', poster:'https://public-files.gumroad.com/z8m8pxlasiiqlxv49mieuvdxbc4o'},
  {title:'Akira Motorcycle Animation', type:'youtube', id:'l7_8FLPQcRk'},
  {title:'Background People — Features', type:'youtube', id:'KQ3GOdiJZhA'},
  {title:'5 New Blender Add-ons', type:'youtube', id:'R3vSTmi9LrY'}
];
const tvVideo=document.querySelector('#jungle-video'), ytVideo=document.querySelector('#youtube-video'), ytFallback=document.querySelector('#youtube-file-fallback'), ytFallbackLink=document.querySelector('#youtube-fallback-link'), tvList=document.querySelector('#channel-list'), tvNow=document.querySelector('#tv-now-playing'), tvStart=document.querySelector('#tv-start');
tvList.innerHTML=tvChannels.map((c,i)=>`<button type="button" data-channel="${i}" class="${i===0?'active':''}"><b>${String(i+1).padStart(2,'0')}</b><span>${c.title}</span><small>${c.type==='youtube'?'YT':'GM'}</small></button>`).join('');
function tuneTV(index, autoplay=false){
  const channel=tvChannels[index]; tvVideo.pause(); ytVideo.src=''; ytFallback.hidden=true;
  if(channel.type==='youtube'){
    tvVideo.hidden=true; tvStart.hidden=true;
    if(location.protocol==='file:'){
      ytVideo.hidden=true; ytFallback.hidden=false; ytFallbackLink.href=`https://www.youtube.com/watch?v=${channel.id}`;
    }else{
      ytVideo.hidden=false; const origin=encodeURIComponent(location.origin); ytVideo.src=`https://www.youtube.com/embed/${channel.id}?rel=0&origin=${origin}${autoplay?'&autoplay=1':''}`;
    }
  }else{
    ytVideo.hidden=true; ytFallback.hidden=true; tvVideo.hidden=false; tvVideo.src=channel.src; tvVideo.poster=channel.poster; tvVideo.load();
    tvStart.hidden=autoplay; if(autoplay) tvVideo.play().catch(()=>{tvStart.hidden=false;});
  }
  tvNow.textContent=`CH ${String(index+1).padStart(2,'0')} / ${channel.title.toUpperCase()}`;
  tvList.querySelector('.active')?.classList.remove('active'); tvList.querySelector(`[data-channel="${index}"]`).classList.add('active');
}
tvList.addEventListener('click',e=>{const button=e.target.closest('[data-channel]');if(button)tuneTV(Number(button.dataset.channel),true)});
tvStart.addEventListener('click',()=>{tvStart.hidden=true;tvVideo.play().catch(()=>{tvStart.hidden=false;})});
tvVideo.addEventListener('play',()=>tvStart.hidden=true); tuneTV(0);

const tvStage=document.querySelector('#tv-stage'), tvSet=document.querySelector('#tv-set');
if(!matchMedia('(pointer: coarse), (prefers-reduced-motion: reduce)').matches){
  tvStage.addEventListener('pointermove',e=>{const r=tvStage.getBoundingClientRect(),x=((e.clientX-r.left)/r.width-.5)*2;tvSet.style.setProperty('--tv-ry',`${x*7}deg`);tvSet.style.setProperty('--tv-x',`${x*8}px`)});
  tvStage.addEventListener('pointerleave',()=>{tvSet.style.setProperty('--tv-ry','0deg');tvSet.style.setProperty('--tv-x','0px')});
}

const observer = new IntersectionObserver(entries=>entries.forEach(e=>e.target.classList.toggle('in-view',e.isIntersecting)),{threshold:.1});
document.querySelectorAll('.section-head,.about-card').forEach(el=>observer.observe(el));
