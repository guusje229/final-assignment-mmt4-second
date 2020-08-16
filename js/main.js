$('video').each(function() {
    var player = videojs(this.id);
    let geklikt = false;



    $(this).parents(".videoContainer,.videoContainer1, .videoContainer2 ").find(".rewind").click(function() {
        player.currentTime(player.currentTime() - 10);
    });
    $(this).parents(".videoContainer,.videoContainer1, .videoContainer2r").find(".forward").click(function() {
        player.currentTime(player.currentTime() + 10);
    });

    $(this).parents('.videoContainer,.videoContainer1, .videoContainer2 ').find('.toggle').click(function() {
        if (!geklikt) {
            player.play();
            $('.toggle').addClass('pause');
            geklikt = true;
        } else {
            player.pause();
            $('.toggle').removeClass('pause');
            geklikt = false;
        }
    })



})


//dit is de attempt tot het naar voor komen van de videos
$('videoContainer2 toggle').click(function(event) {
    event.preventDefault();


    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $('video3').css({ 'z-index': '999' });


    }
});


var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);



function myFunction() {
    var x = document.getElementById("my-video2").autoplay;

}


function NetflixAccount(evt, option) {

    var i, informatie, linkjes;


    informatie = document.getElementsByClassName("informatie");
    for (i = 0; i < informatie.length; i++) {
        informatie[i].style.display = "none";
    }


    linkjes = document.getElementsByClassName("linkjes");
    for (i = 0; i < linkjes.length; i++) {
        linkjes[i].className = linkjes[i].className.replace(" active", "");
    }


    document.getElementById(option).style.display = "block";
    evt.currentTarget.className += " active";
}