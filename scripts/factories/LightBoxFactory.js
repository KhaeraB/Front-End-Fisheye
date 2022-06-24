
export class LightboxFactory {
  constructor(extension, mediaLink, title) {
    const showMedia = document.querySelector("#modal-lightbox .content #lightbox__container #lightbox__content") 
    switch (extension) {
      case "jpg":
        return contentMedia.innerHTML = `<img class='src-content' src="../../assets/photographers/media/${mediaLink}" alt="${title}" >
        <p id="lightbox__title"> ${title}</p>`
      case "mp4":
        return contentMedia.innerHTML = `<video  title="${title}" controls  >
        <source class="src-content"  src="../../assets/photographers/media/${mediaLink}" type="video/mp4" >
      </video> 
    <p id="lightbox__title"> ${title}</p>`
    }
  }
}