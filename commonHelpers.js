import{a as u,S as A,i as n}from"./assets/vendor-da186403.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))g(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&g(d)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function g(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const c={key:"42379891-9b2b3e5f2dd038df1d72b79a3",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:1};async function f(){const e=new URLSearchParams(c);return(await u.get(`https://pixabay.com/api/?${e}`)).data}const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgBrZXtEcIgDIZTzp5/3URHcSPpJLpBXcVd+FPwiqQt1y+SUNv3DuUkvA+0SQQg5Jx7WOt8zsBYyudEmXsPuijg3bbtB1ipa/jQYQ+UZVmBpHjyprEvyBTGSjf52zwbssdchBxhTkI4c2vtTTJMxcwgw6RObZReXDycMSYBcTWuQX/6RqcMQpCmIOPNHbG30SKAgkjmU8AJBJ3PpQ5GOO2KCYVFGEaFa9J+EbCEDIAsc5SCTCkFPjWXlHWD2Jvw5MNP2b1HBEzN42OZvhMRwmURly1cCvfrszSlC41PxR6SKjQs3g4Qg6z9PpdBxsitIhWDXrPDcZCtWplHHQEhzY+AiOZ7IJz5qg5iWygK/wjfFwD+T18pdfXe37e0j07jTeTBPZYfWztI8097RKsAAAAASUVORK5CYII=",b=new A(".gallery-link",{captionsData:"alt",captionDelay:250}),l=document.querySelector(".loader"),p=document.querySelector(".gallery"),r=document.querySelector(".load-more-btn");l.style.display="none";function w(e){if(!e.hits.length)p.innerHTML="",r.style.display="none",setTimeout(()=>{n.show({iconUrl:a,message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"})},200);else{e.totalHits;const s=e.hits.map(i=>`<li class="gallery-item">
				<a class="gallery-link" href="${i.largeImageURL}" >
					<img class="gallery-image" src="${i.webformatURL}" alt="${i.tags}"/>
				</a>
				<div class="image-description">
					<div class="decsription-item">
						<h3>Likes</h3>
						<p> ${i.likes}</p>
					</div>
					<div class="decsription-item">
						<h3>Views</h3>
						<p> ${i.views}</p>
					</div>
					<div class="decsription-item">
						<h3>Comments</h3>
						<p> ${i.comments}</p>
					</div>
					<div class="decsription-item">
						<h3>Downloads</h3>
						<p> ${i.downloads}</p>
					</div>
				</div>
			</li>`).join(`

`);p.innerHTML+=s,b.refresh(),r.style.display="block"}l.style.display="none"}const h=document.querySelector(".search-form");let y=0;h.addEventListener("submit",async e=>{e.preventDefault();const s=h.elements.searchInput.value.trim();s?(y=0,p.innerHTML="",r.style.display="none",c.q=s,c.page=1,await m()):setTimeout(()=>{n.show({iconUrl:a,message:"Please enter what you want to find!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"})},200)});async function m(){l.style.display="block";try{const e=await f();y+=e.hits.length,e.hits.length>0?(w(e),y>=e.totalHits?(r.style.visibility="hidden",n.show({iconUrl:a,message:"You have reached the end of the search results.",messageColor:"#FAFAFB",backgroundColor:"#3498db",position:"topRight"})):r.style.visibility="visible"):(r.style.display="none",n.show({iconUrl:a,message:"No more images found.",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"}))}catch{r.style.display="none",n.show({iconUrl:a,message:"You have reached the end of the search results.",messageColor:"#FAFAFB",backgroundColor:"#3498db",position:"topRight"})}finally{l.style.display="none"}h.reset()}r.addEventListener("click",async()=>{r.style.visibility="hidden",l.style.position="fixed",l.style.bottom="0",c.page++,await m(),v()});function v(){const s=document.querySelector(".gallery-item").getBoundingClientRect().height*2;window.scrollBy({top:s,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
