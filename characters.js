const FIGHTERS = [
['9ef7dbea47854f49b496e8c0a8332157','Anna Ipati (animated)'],['36bc284bf5b84a6597db8f6db053c095','Robot Police Unit (animated)'],['2d4cd8f8528846fcb9b06697e8d2b1de','Atomic B-Boy'],['18feb3c805c44b98bfa62a9a00886ece','Le Epic Mech'],['af8cb56cc7a549fba70d4e1512dd9a15','Dancing Sam Cabinet'],['73a61cb728854620b1c2a10ae88eecf0','Fat Alien'],['06d83fb6d2aa408385aebefff128d454','Akira Guy On Motorcycle'],['573b6706f178489094a19869545472ba','Pepe the Gangster Frog'],['b026b514c7254f399238b22a1f94fe0a','Construction Workers'],['6c112bed707b4444864b606299f8b85a','Stylized Zombies'],['fd8716ffced7423580db46aa53cd8915','Zarazat of Zanzibus'],['6e49b05d268b4da79c9ff17b398cbcf8','The Eternal Knight'],['99328ff45b374248998c53b7813c8b65','Wacky Waving Tube Man'],['9e19e517429c4077b800273890186456','Stylized Sci-Fi Soldier'],['350be2b14c01429e9cd75d0b2fe25d2b','One-Eyed Monster'],['6c0764c2bc4c4aaa8e03ba1653f455a6','O.B. Robot Unit TH-ICC02'],['2852c49c10594898a59b7ea8e8a9314b','Elvis Presley Dancing'],['9f59e01c9bd945359ea46ad5437bf1cb','Soldier vs Boulder'],['2a09b2bf20a04cf390720f671397a8ae','Cartoon Mobster Boss'],['96ae6f2dc4864a2bacd7a39b7d4ae5d9','PSX Pilot'],['8663b124b5a242608ebd923842904985','Small Italian Restaurant'],['58d86d56f74a4d34963bdec5c52bb5f9','Flesh-Eating Plant'],['a8f0d843735047b2999fbe4a9d7a1245','Silver Soldier'],['5f0f9dbd32924110bec853ef76d977ba','Paintball Player'],['ca41c91f9e314199a43095db2da351df','Robot Worker'],['434f2d2eaf874d5ab70373cc27709b11','Sci-Fi Worker'],['85ae18b625e9447dad1a3f4b88fabcd5','Potato Warrior Behemoth'],['abe7334fe40b48879155c3ecea3805cb','Old Man Spice'],['09f2ef270158451f9f3427c54df84d5c','Sci-Fi Pilot'],['6b957a886a3445ffb816a47a78b14ac2','Elite Cyborg'],['68948670fba84a14b51811e9fa680764','Antonio Brutucelli'],['4680fc69d16147199f7a538ef0905903','Astronaut Redux'],['c3f8a53b834d4ae9b4e7a9c017d9b550','Angel of Death'],['df722667b7d346e4ae4b98f4b8b5455b','Bob Bobalino'],['ea2b996c62024746adb892b2faf08223','Sci-Fi Officer'],['53b6bcec677d4853bc55c11bca9a9f4b','Emperor of Zanzibus'],['7b62e6e1b58c476f8b421dd007a4ff90','Low-Poly Construction Crew'],['dca0708b0944428386c83b875d7e5547','Angry Mob'],['c7a8be84db914b39be345e013f72660a','Alligator Man'],['c888523f5d5748799170e94e701987aa','Bull Man Warrior'],['dfa60c2109bb4723b8b10ae52a98f85e','Monkey DJ'],['5bb75116e37d475abce48c9bb2d5a305','Cartoon Crab'],['809f9c1ff06143a2a53fc55b4c7980ef','Cyborg Cowboy Potato'],['043f4dec01dc4f41a193d83df2ac516b','Rodin Sci-Fi Trooper'],['1395d89d457b47c69a46d1b021a11804','Alien Tentacle Fish'],['8293bad9869e4a4d8a5f864c58b25a40','Zombie Hitman'],['31662c5ba7f54b66974780f0466124a7','Proletheus'],['a6c665e96e964a3b9dbcd1705b7376a6',"Your Ex-Wife's New Husband"],['600d4d4aa71c4181b2567a3605ce8c57','Alina Ip'],['07eebda99199441fbefd9a3f988d4165','Arianna Iglesias'],['06d56efabf7445e89bb1bf41a99d08cc','The Strangler'],['03274bbaf8f1463bad686b95dd487e29','John McStrong'],['fe594ac4364942e8abad34744e507038','Tripo Astronaut 2'],['ffb50bc159ea47dea6cc78bd49389c5f',"Alien N'tar"],['3707c17278564f3495434eff68f663ec','The Blasian'],['208a196974c849b58f1bd1ac0df0728b','Evil Old Lady'],['981bf7f35397460e9876a19573d79ec1','Potato Who Has Seen Too Much 2'],['d1ce2b8009b8401481408aeecea903d0','Realistic Woman Walking'],['f4e94f09cc004cf49fe53017ccea1c61','Potato Who Has Seen Too Much'],['ca03f0708e114d2b8e3326fe877faad8','Jaxon Mullet'],['1aeed15974ab4fc2b819e30df6347334','Henry'],['dbf9fe0cb81d4758ad2525a56d10e2fc','Balthazar'],['3e5726e863ee4d2d9b0e6312078e9f10','Martian Midget'],['bf065335fc194bfeac12439b804f6135','Tripo Astronaut'],['818349b1f6e9401e833027675cf6055c','Bupolt the Grumpy Alien'],['0e54c85179004f0cabe3d17f16554f47','Korkunç: Turkish Destroyer'],['2f0e4ca307fa4b0c915099b399aaabe2','Alien Creature Klirtza'],['127cc242790c422fb9599f774b1c9642','Mr Sexy Man'],['6b8009a6e4f747f59ccadb121adc3679','Old Russian Guy'],['259a0dd771db49c58ffc6e3cc31bbf45','Bounty Hunter Anton'],['cfc5c63585c44761aba020e6aa2868d8','Mourning Potato Warrior'],['b7266ced32d347ad8ab6c6fe8a14e767','Beach Fighter'],['1518e6b525464003ae757d4ee5dd2b9b','Self-Powered Potato Cyborg'],['ab38162659024aa491908d4993d8331a','Ed Stronaut']
].map(([id,name])=>({id,name}));
const metadataReady=window.MODEL_METADATA?Promise.resolve():new Promise(resolve=>{const s=document.createElement('script');s.src='model-metadata.js';s.onload=resolve;s.onerror=resolve;document.head.appendChild(s)});
const FALLBACK_THUMBS={a6c665e96e964a3b9dbcd1705b7376a6:'https://media.sketchfab.com/models/a6c665e96e964a3b9dbcd1705b7376a6/thumbnails/fd9760a688d34389a7c6f31f504eda38/88e7a2b4040e4e6dbf42c66018c336d5.jpeg',ffb50bc159ea47dea6cc78bd49389c5f:'https://media.sketchfab.com/models/ffb50bc159ea47dea6cc78bd49389c5f/thumbnails/4b013f078d59448385bb5b1d2b399d40/cb9cd8f299804efd9077f6598fa6ad07.jpeg'};

const viewer=document.querySelector('#fighter-viewer'), nameEl=document.querySelector('#fighter-name'), numberEl=document.querySelector('#fighter-number'), currentEl=document.querySelector('#selection-current'), totalEl=document.querySelector('#selection-total'), roster=document.querySelector('#roster-grid'), sourceLink=document.querySelector('#sketchfab-link'), loading=document.querySelector('#fighter-loading'), descriptionEl=document.querySelector('#model-description'), vertexEl=document.querySelector('#vertex-count'), triangleEl=document.querySelector('#triangle-count'), barsEl=document.querySelector('#power-bars');
const tagsEl=document.createElement('div');tagsEl.className='model-tags';descriptionEl.after(tagsEl);
const downloadsEl=document.createElement('a');downloadsEl.className='download-counter is-loading';downloadsEl.target='_blank';downloadsEl.rel='noopener';downloadsEl.innerHTML='<span>SKETCHFAB DOWNLOADS</span><strong>•••</strong><small>VIEW MODEL ↗</small>';sourceLink.after(downloadsEl);
const likesEl=document.createElement('a');likesEl.className='download-counter like-counter is-loading';likesEl.target='_blank';likesEl.rel='noopener';likesEl.innerHTML='<span>SKETCHFAB LIKES</span><strong>•••</strong><small>VIEW MODEL ↗</small>';downloadsEl.after(likesEl);
let selected=0;
totalEl.textContent=FIGHTERS.length;
roster.innerHTML=FIGHTERS.map((f,i)=>`<button type="button" data-fighter="${i}" aria-label="Select ${f.name}"><img alt="" loading="lazy"><span>${String(i+1).padStart(2,'0')}</span><b>${f.name}</b><i></i></button>`).join('');

const metadataCache=new Map();
const hashNumber=(text,salt=0)=>{let h=2166136261+salt;for(const ch of text){h^=ch.charCodeAt(0);h=Math.imul(h,16777619)}return Math.abs(h)};
function renderStats(f){
  const labels=['STYLE','CHAOS','ENERGY','POWER','AGILITY','DEFENSE'];
  barsEl.innerHTML=labels.map((label,i)=>{const value=38+(hashNumber(f.id,i*997)%61);return `<label>${label}<i><b style="width:${value}%"></b></i><strong>${value}</strong></label>`}).join('');
}
async function getMetadata(f){
  if(metadataCache.has(f.id))return metadataCache.get(f.id);
  const request=metadataReady.then(()=>window.MODEL_METADATA?.[f.id]||(FALLBACK_THUMBS[f.id]?{thumb:FALLBACK_THUMBS[f.id]}:null));
  metadataCache.set(f.id,request);return request;
}
async function hydrateActive(f,index){
  descriptionEl.textContent='Scanning Sketchfab model data…';tagsEl.innerHTML='';vertexEl.textContent='—';triangleEl.textContent='—';
  const data=await getMetadata(f);if(index!==selected)return;
  descriptionEl.textContent=data?.desc||'No model description has been provided for this character.';
  vertexEl.textContent=data?.vert||'Not published';
  triangleEl.textContent=data?.tri||'Not published';
  tagsEl.innerHTML=(data?.tags||[]).slice(0,14).map(t=>`<span>${t}</span>`).join('');
}
const socialCache=new Map();
function animateCounter(el,value){const target=Number(value)||0,start=Number(el.dataset.value)||0,began=performance.now();el.dataset.value=String(target);el.classList.remove('is-loading','is-unavailable');el.classList.add('is-live');const tick=now=>{const p=Math.min(1,(now-began)/750),e=1-Math.pow(1-p,3);el.querySelector('strong').textContent=Math.round(start+(target-start)*e).toLocaleString();if(p<1)requestAnimationFrame(tick)};requestAnimationFrame(tick)}
async function hydrateSocial(f,index){const url=`https://sketchfab.com/3d-models/${f.id}`;[downloadsEl,likesEl].forEach(el=>{el.href=url;el.classList.add('is-loading');el.classList.remove('is-live','is-unavailable');el.querySelector('strong').textContent='•••'});try{if(!socialCache.has(f.id))socialCache.set(f.id,fetch(`https://api.sketchfab.com/v3/models/${f.id}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}));const data=await socialCache.get(f.id);if(index!==selected)return;animateCounter(downloadsEl,data.downloadCount);animateCounter(likesEl,data.likeCount)}catch{if(index!==selected)return;[downloadsEl,likesEl].forEach(el=>{el.classList.remove('is-loading');el.classList.add('is-unavailable');el.querySelector('strong').textContent='NOT PUBLISHED'})}}
const portraitObserver=new IntersectionObserver(entries=>entries.forEach(async entry=>{
  if(!entry.isIntersecting)return;portraitObserver.unobserve(entry.target);const index=Number(entry.target.dataset.fighter),f=FIGHTERS[index],data=await getMetadata(f);
  const image=data?.thumb||FALLBACK_THUMBS[f.id];if(image){const img=entry.target.querySelector('img');img.src=image;img.alt=`Preview of ${f.name}`;entry.target.classList.add('has-portrait')}
}),{rootMargin:'300px'});
document.querySelectorAll('[data-fighter]').forEach(tile=>portraitObserver.observe(tile));
// Continue filling the entire roster in a small background queue, so every tile
// receives a portrait without flooding Sketchfab with 74 simultaneous requests.
const portraitTiles=[...document.querySelectorAll('[data-fighter]')];let portraitCursor=0;
async function portraitWorker(){
  while(portraitCursor<portraitTiles.length){const index=portraitCursor++,tile=portraitTiles[index],f=FIGHTERS[index],data=await getMetadata(f);const image=data?.thumb||FALLBACK_THUMBS[f.id];if(image&&!tile.classList.contains('has-portrait')){const img=tile.querySelector('img');img.src=image;img.alt=`Preview of ${f.name}`;tile.classList.add('has-portrait')}}
}
setTimeout(()=>Array.from({length:6},portraitWorker),50);

function holdViewport(y){scrollTo(0,y);const lock=setInterval(()=>scrollTo(0,y),50);setTimeout(()=>clearInterval(lock),1800)}
function selectFighter(index,scroll=false){
  const stableY=scrollY;
  selected=(index+FIGHTERS.length)%FIGHTERS.length; const f=FIGHTERS[selected], num=String(selected+1).padStart(2,'0');
  loading.classList.remove('hidden'); viewer.src=`https://sketchfab.com/models/${f.id}/embed?autostart=1&ui_theme=dark&ui_infos=0&ui_watermark=0&ui_hint=0`;
  nameEl.textContent=f.name; numberEl.textContent=num; currentEl.textContent=num; sourceLink.href=`https://sketchfab.com/3d-models/${f.id}`;
  renderStats(f);hydrateActive(f,selected);hydrateSocial(f,selected);
  document.querySelector('[data-fighter].active')?.classList.remove('active'); const tile=document.querySelector(`[data-fighter="${selected}"]`); tile.classList.add('active'); if(scroll)tile.scrollIntoView({behavior:'smooth',block:'nearest'});
  if(!scroll)holdViewport(stableY);
  document.documentElement.style.setProperty('--fighter-hue',String((selected*37)%360));
}
viewer.addEventListener('load',()=>loading.classList.add('hidden'));
document.querySelector('#prev-fighter').addEventListener('click',()=>selectFighter(selected-1,false));
document.querySelector('#next-fighter').addEventListener('click',()=>selectFighter(selected+1,false));
roster.addEventListener('click',e=>{const b=e.target.closest('[data-fighter]');if(b)selectFighter(Number(b.dataset.fighter),false)});
addEventListener('keydown',e=>{if(e.key==='ArrowLeft')selectFighter(selected-1,false);if(e.key==='ArrowRight')selectFighter(selected+1,false);if(e.key==='Enter'&&document.activeElement?.dataset?.fighter)viewer.focus()});
selectFighter(0);
