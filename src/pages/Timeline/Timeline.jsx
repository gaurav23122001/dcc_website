import React, { useEffect } from 'react'
import underline from './underline.svg'
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import Events from './timelineData.json'
import './timeline.css'
import { faHourglass1 } from '@fortawesome/free-solid-svg-icons';

function Timeline({page,setPage}) {
    
    const {events}= Events; 

    useEffect(() => {
        document.title = "Timeline - DCC"
        window.scrollTo(0, 0);
        setPage('timeline')
        document.getElementById("navbarNav").classList.remove("show")
    })

  return (
    <>
        <div className='teams-page '>

        <div className="underline-header">
          <span>Timeline</span>
          <img src={underline} alt='' />
        </div>
        <VerticalTimeline>
            {
                events.map((event,index)=>{
                    return (
                        <VerticalTimelineElement
                            key={index}
                            className="vertical-timeline-element--work noPadding"
                            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<></>}
                        >
                            <h3 className="vertical-timeline-element-title">{event.name}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{event.date}</h4>
                            <p className="vertical-timeline-element-subtitle">R-116, CSE Department, NIT Agartala </p>
                        </VerticalTimelineElement>
                    )
                })
            }
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                icon={<></>}
            />
        </VerticalTimeline>

        </div>
    </>
  )
}

export default Timeline