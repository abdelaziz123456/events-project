const DUMMY_EVENTS=[
    {
        id:'e1',
        title:'Programming for everyone ',
        description:'Everyone can learn code!  Yes , everyone! in this live event,we are going to  bla bla bla',
        location:'Somestreet 25,12345 San Somewhero',
        date:'2021-05-12',
        image:'images/coding-event.jpg',
        isFeatured:true
    },
    {
        id:'e2',
        title:'Networking for everyone ',
        description:'Everyone can learn code!  Yes , everyone! in this live event,we are going to  bla bla bla',
        location:'Somestreet 25,12345 San Somewhero',
        date:'2021-05-12',
        image:'images/coding-event.jpg',
        isFeatured:false
    },
    {
        id:'e3',
        title:'Programming for introverts ',
        description:'Everyone can learn code!  Yes , everyone! in this live event,we are going to  bla bla bla',
        location:'Somestreet 25,12345 San Somewhero',
        date:'2021-05-12',
        image:'images/coding-event.jpg',
        isFeatured:true
    },
    {
        id:'e4',
        title:'Programming for extroverts ',
        description:'Everyone can learn code!  Yes , everyone! in this live event,we are going to  bla bla bla',
        location:'Somestreet 25,12345 San Somewhero',
        date:'2021-05-12',
        image:'images/coding-event.jpg',
        isFeatured:false
    },
    

]

export function getAllEvents(){
    return DUMMY_EVENTS
}
export function getFeaturedEvents(){
    return DUMMY_EVENTS.filter((event)=>event.isFeatured)
}

export function getFilteredEvents(dataFilter){
    const {uear,month}=dataFilter


let filteredEvents=DUMMY_EVENTS.filter((event)=>{
    const eventDate=new Date(event.date);
    return eventDate.getFullYear()===year & eventDate.getMonth()==month-1
});
return filteredEvents;

}


export function getEventsById(id){
    return DUMMY_EVENTS.find((event)=> event.id ===id)
}