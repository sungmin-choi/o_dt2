
class Kakao{
    getMap(kakao){
        const container = document.getElementById("kakaomap");
        const options = {
         center: new kakao.maps.LatLng(37.796054, 128.917442),
         level: 2,
        };
        const control = new kakao.maps.ZoomControl();
        const map = new kakao.maps.Map(container, options);
        map.addControl(control, kakao.maps.ControlPosition.TOPRIGHT); 
        const markerPosition  = new kakao.maps.LatLng(37.796054, 128.917442); 
        const marker = new kakao.maps.Marker({
                position: markerPosition
        });
        marker.setMap(map);
    }
}
export default Kakao;