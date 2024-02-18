import{a as u,S as h,i as p}from"./assets/vendor-da186403.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))m(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&m(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function m(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const n={key:"42379891-9b2b3e5f2dd038df1d72b79a3",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:1};async function A(){const t=new URLSearchParams(n);return(await u.get(`https://pixabay.com/api/?${t}`)).data}const y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgBrZXtEcIgDIZTzp5/3URHcSPpJLpBXcVd+FPwiqQt1y+SUNv3DuUkvA+0SQQg5Jx7WOt8zsBYyudEmXsPuijg3bbtB1ipa/jQYQ+UZVmBpHjyprEvyBTGSjf52zwbssdchBxhTkI4c2vtTTJMxcwgw6RObZReXDycMSYBcTWuQX/6RqcMQpCmIOPNHbG30SKAgkjmU8AJBJ3PpQ5GOO2KCYVFGEaFa9J+EbCEDIAsc5SCTCkFPjWXlHWD2Jvw5MNP2b1HBEzN42OZvhMRwmURly1cCvfrszSlC41PxR6SKjQs3g4Qg6z9PpdBxsitIhWDXrPDcZCtWplHHQEhzY+AiOZ7IJz5qg5iWygK/wjfFwD+T18pdfXe37e0j07jTeTBPZYfWztI8097RKsAAAAASUVORK5CYII=",f=new h(".gallery-link",{captionsData:"alt",captionDelay:250}),i=document.querySelector(".loader"),c=document.querySelector(".gallery"),a=document.querySelector(".load-more-btn");i.style.display="none";function w(t){if(!t.hits.length)c.innerHTML="",setTimeout(()=>{p.show({iconUrl:y,message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"})},200);else{t.totalHits;const s=t.hits.map(r=>`<li class="gallery-item">
				<a class="gallery-link" href="${r.largeImageURL}" >
					<img class="gallery-image" src="${r.webformatURL}" alt="${r.tags}"/>
				</a>
				<div class="image-description">
					<div class="decsription-item">
						<h3>Likes</h3>
						<p> ${r.likes}</p>
					</div>
					<div class="decsription-item">
						<h3>Views</h3>
						<p> ${r.views}</p>
					</div>
					<div class="decsription-item">
						<h3>Comments</h3>
						<p> ${r.comments}</p>
					</div>
					<div class="decsription-item">
						<h3>Downloads</h3>
						<p> ${r.downloads}</p>
					</div>
				</div>
			</li>`).join(`

`);c.innerHTML+=s,f.refresh(),a.style.display="block"}i.style.display="none"}const d=document.querySelector(".search-form");d.addEventListener("submit",async t=>{t.preventDefault();const s=d.elements.searchInput.value.trim();s?(c.innerHTML="",a.style.display="none",n.q=s,n.page=1,await g()):setTimeout(()=>{p.show({iconUrl:y,message:"Please enter what you want to find!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"})},200)});async function g(){i.style.display="block";try{const t=await A();w(t),a.style.visibility="visible"}catch{a.style.display="none",p.show({iconUrl:y,message:"You have reached the end of search results.",messageColor:"#FAFAFB",backgroundColor:"#3498db",position:"topRight"}),i.style.display="none"}d.reset()}a.addEventListener("click",async()=>{a.style.visibility="hidden",i.style.position="fixed",i.style.bottom="0",n.page++,await g(),b()});function b(){const s=document.querySelector(".gallery-item").getBoundingClientRect().height*2;window.scrollBy({top:s,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
