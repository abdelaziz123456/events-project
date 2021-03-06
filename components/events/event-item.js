import Link from 'next/link';
import React from 'react'
import DateIcon from '../icons/date-icon';
import Button from '../ui/button';
import classes from './event-item.module.css'
export default function EventItem(props) {
  const {title,image,date,location,id}=props.event;
  const readableDate=new Date(date).toLocaleDateString('en-US',{
      day:'numeric',
      month:'long',
      year:'numeric',

  })

  const formattedAddress=location.replace(', ','\n');

  const exploreLink=`/events/${id}`
    return (
    <li className={classes.item}>
      <img src={'/'+image} alt="" />  
      <div className={classes.content}>
          <div className={classes.summary}>
              <h2>{title}</h2>
              <div className={classes.date}>
                  <DateIcon/>
                  <time>{readableDate}</time>
              </div>
              <div className={classes.address}>
                  <address>{formattedAddress}</address>
              </div>
          </div>
          <div className={classes.actions}>

              <Button  link={exploreLink}>Explore Event</Button>
           
          </div>
      </div>
    </li>
  )
}
