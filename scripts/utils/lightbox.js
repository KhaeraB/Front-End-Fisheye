function openLightbox(index, title) {
    const  $lightbox__content =  document.getElementById("lightbox__content")

    document.getElementById("lightbox").style.display = "flex";
    /* total de photos */
    const totalMedia = document.querySelectorAll(".lightbox__container").length;
    console.log(totalMedia)
    
    /* Obtient la source du media */
    let mediaSrc = document.getElementsByClassName("src-content")[0].getAttribute("src");
    console.log(mediaSrc)
    let mediaType = mediaSrc.split('.').pop();
   console.log(mediaType)
    let format = ""
    if (mediaType === "jpg" || mediaType === "jpeg" || mediaType == "gif" || mediaType === "png") {
        format = "image";
    } else if (mediaType === "mp4" || mediaType === "mkv" || mediaType === "avi") {
        format = "video";
    }
   
    /* Affiche la photo */
    if (format === "image") {
       $lightbox__content.innerHTML = "<img alt='" + title + "' id='content-lightbox' src=" + mediaSrc + ">";
    } else {
       $lightbox__content.innerHTML = "<video title='" + title + "' id='content-lightbox' controls><source src=" + mediaSrc + ">";
    }


}
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}
