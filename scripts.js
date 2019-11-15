var entry = document.getElementById('search-bar');
var items = document.getElementsByTagName('a');
var itemsParent = document.getElementsByClassName('flex-item')

entry.addEventListener('keyup', myFunction);

function myFunction() {
    entry.value = entry.value.toLowerCase();
    var myEntry = entry.value;
    console.log(myEntry);

    for (var i = 0; i < items.length; i += 1) {
        var title = items[i].getAttribute('data-caption');
        console.log(title);
        
     // fix this last part, currently hides with any entry bc 1 and 1 is 2.   
        if (title.indexOf(myEntry) > -1) {
            itemsParent[i].style.display = "";
        } else {
            itemsParent[i].style.display = "none";
        }
}
}


$('[data-fancybox="gallery"]').fancybox({
    loop: 'true',
    transitionEffect: 'slide'
});

