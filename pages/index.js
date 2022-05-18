import MeetupList from "../components/meetups/MeetupList"
function WelcomePage(){
    const Dummy_Data = [
        {
            id:123,
            image: "https://media.timeout.com/images/105809427/750/422/image.jpg",
            title:"İstanbul Meetup",
            adress:"Eyup/Istanbul"
        },
        {
            id:1234,
            image: "https://media.timeout.com/images/105809427/750/422/image.jpg",
            title:"Ankara Meetup",
            adress:"Alsancak/Ankara"
        },
        {
            id:12345,
            image: "https://media.timeout.com/images/105809427/750/422/image.jpg",
            title:"Kayseri Meetup",
            adress:"Cumhuriyet Meydani/Kayseri"
        },
        
    ]
 return (
     <>
         <MeetupList  meetups={Dummy_Data} />
     </>

 )
}

export default WelcomePage