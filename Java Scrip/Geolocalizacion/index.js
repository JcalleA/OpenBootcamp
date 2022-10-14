function  initMap(){
    const position = {
        lat: 4.393515830571322, 
        lng: -76.07700011332089,
    }
    const map = new google.maps.Map(document.getElementById("map"),{
        zoom: 15,
        center: position,
    })

    const marker = new google.maps.Marker({
        position: position,
        map,
        title:"Posiciojn 1"
    })
    const marker2 = new google.maps.Marker({
        position: {
            lat: 4.693515830571322, 
            lng: -77.07700011332089,
        },
        map,
        title:"Posiciojn 1"
    })
    const marker3 = new google.maps.Marker({
        position: {
            lat: 4.593515830571322, 
            lng: -76.07700011332089,
        },
        map,
        title:"Posiciojn 1"
    })
    
}

