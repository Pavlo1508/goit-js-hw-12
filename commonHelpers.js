import{a as h,S as u,i as a}from"./assets/vendor-da186403.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))m(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&m(d)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function m(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const l={key:"42379891-9b2b3e5f2dd038df1d72b79a3",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:200,page:1};async function A(){const t=new URLSearchParams(l);return(await h.get(`https://pixabay.com/api/?${t}`)).data}const c="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgBrZXtEcIgDIZTzp5/3URHcSPpJLpBXcVd+FPwiqQt1y+SUNv3DuUkvA+0SQQg5Jx7WOt8zsBYyudEmXsPuijg3bbtB1ipa/jQYQ+UZVmBpHjyprEvyBTGSjf52zwbssdchBxhTkI4c2vtTTJMxcwgw6RObZReXDycMSYBcTWuQX/6RqcMQpCmIOPNHbG30SKAgkjmU8AJBJ3PpQ5GOO2KCYVFGEaFa9J+EbCEDIAsc5SCTCkFPjWXlHWD2Jvw5MNP2b1HBEzN42OZvhMRwmURly1cCvfrszSlC41PxR6SKjQs3g4Qg6z9PpdBxsitIhWDXrPDcZCtWplHHQEhzY+AiOZ7IJz5qg5iWygK/wjfFwD+T18pdfXe37e0j07jTeTBPZYfWztI8097RKsAAAAASUVORK5CYII=",f=new u(".gallery-link",{captionsData:"alt",captionDelay:250}),n=document.querySelector(".loader"),p=document.querySelector(".gallery"),r=document.querySelector(".load-more-btn");n.style.display="none";function w(t){if(!t.hits.length)p.innerHTML="",r.style.display="none",setTimeout(()=>{a.show({iconUrl:c,message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"})},200);else{t.totalHits;const s=t.hits.map(i=>`<li class="gallery-item">
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

`);p.innerHTML+=s,f.refresh(),r.style.display="block"}n.style.display="none"}const y=document.querySelector(".search-form");y.addEventListener("submit",async t=>{t.preventDefault();const s=y.elements.searchInput.value.trim();s?(p.innerHTML="",r.style.display="none",l.q=s,l.page=1,await g()):setTimeout(()=>{a.show({iconUrl:c,message:"Please enter what you want to find!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"})},200)});async function g(){n.style.display="block";try{const t=await A();t.hits.length>0?(w(t),r.style.visibility="visible"):(r.style.display="none",a.show({iconUrl:c,message:"No more images found.",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"}))}catch{r.style.display="none",a.show({iconUrl:c,message:"You have reached the end of the search results.",messageColor:"#FAFAFB",backgroundColor:"#3498db",position:"topRight"})}finally{n.style.display="none"}y.reset()}r.addEventListener("click",async()=>{r.style.visibility="hidden",n.style.position="fixed",n.style.bottom="0",l.page++,await g(),b()});function b(){const s=document.querySelector(".gallery-item").getBoundingClientRect().height*2;window.scrollBy({top:s,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
