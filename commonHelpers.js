import{a as u,S as A,i as n}from"./assets/vendor-da186403.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))y(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&y(p)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function y(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const d={key:"42379891-9b2b3e5f2dd038df1d72b79a3",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:1};async function f(){const e=new URLSearchParams(d);return(await u.get(`https://pixabay.com/api/?${e}`)).data}const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgBrZXtEcIgDIZTzp5/3URHcSPpJLpBXcVd+FPwiqQt1y+SUNv3DuUkvA+0SQQg5Jx7WOt8zsBYyudEmXsPuijg3bbtB1ipa/jQYQ+UZVmBpHjyprEvyBTGSjf52zwbssdchBxhTkI4c2vtTTJMxcwgw6RObZReXDycMSYBcTWuQX/6RqcMQpCmIOPNHbG30SKAgkjmU8AJBJ3PpQ5GOO2KCYVFGEaFa9J+EbCEDIAsc5SCTCkFPjWXlHWD2Jvw5MNP2b1HBEzN42OZvhMRwmURly1cCvfrszSlC41PxR6SKjQs3g4Qg6z9PpdBxsitIhWDXrPDcZCtWplHHQEhzY+AiOZ7IJz5qg5iWygK/wjfFwD+T18pdfXe37e0j07jTeTBPZYfWztI8097RKsAAAAASUVORK5CYII=",b=new A(".gallery-link",{captionsData:"alt",captionDelay:250}),l=document.querySelector(".loader"),g=document.querySelector(".gallery"),r=document.querySelector(".load-more-btn");l.style.display="none";function w(e){if(!e.hits.length)g.innerHTML="",r.style.display="none",setTimeout(()=>{n.show({iconUrl:a,message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"})},200);else{e.totalHits;const o=e.hits.map(i=>`<li class="gallery-item">
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

`);g.innerHTML+=o,b.refresh(),r.style.display="block"}l.style.display="none"}const h=document.querySelector(".search-form");let c=0;h.addEventListener("submit",async e=>{e.preventDefault();const o=h.elements.searchInput.value.trim();o?(c=0,g.innerHTML="",r.style.display="none",d.q=o,d.page=1,await m()):setTimeout(()=>{n.show({iconUrl:a,message:"Please enter what you want to find!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"})},200)});async function m(){l.style.display="block";try{const e=await f();c+=e.hits.length,console.log(typeof e.hits.length),console.log(c),console.log(e),console.log(e.totalHits),e.hits.length>0?(w(e),c>=e.totalHits?(r.style.visibility="hidden",n.show({iconUrl:a,message:"You have reached the end of the search results.",messageColor:"#FAFAFB",backgroundColor:"#3498db",position:"topRight"})):r.style.visibility="visible"):(r.style.display="none",n.show({iconUrl:a,message:"No more images found.",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"}))}catch{r.style.display="none",n.show({iconUrl:a,message:"You have reached the end of the search results.",messageColor:"#FAFAFB",backgroundColor:"#3498db",position:"topRight"})}finally{l.style.display="none"}h.reset()}r.addEventListener("click",async()=>{r.style.visibility="hidden",l.style.position="fixed",l.style.bottom="0",d.page++,await m(),v()});function v(){const o=document.querySelector(".gallery-item").getBoundingClientRect().height*2;window.scrollBy({top:o,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
