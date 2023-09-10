import { useEffect } from 'react';
import './Events.css'


import underline from './underline.svg'

export const Events = ({ page, setPage }) => {

    useEffect(() => {
        document.title = "Events - DCC"
        window.scrollTo(0, 0);
        setPage('events')
        document.getElementById("navbarNav").classList.remove("show")
    })



    return (
        <div className='events-wrapper'>
            <div className='underline-header'>
                <span>Events</span>
                <img src={underline} alt='' />
            </div>
            {/* <div class="card">
                <img
                    class="eventImg hidden"
                    src='https://firebasestorage.googleapis.com/v0/b/dcc-nita.appspot.com/o/2.png?alt=media&token=3ab8069b-e0b3-4e23-b1b0-cae7dd8602d0'
                    alt="event img"
                />
                <img
                    class='eventImg eventImgAlt'
                    src='https://firebasestorage.googleapis.com/v0/b/dcc-nita.appspot.com/o/poster1.png?alt=media&token=17fc460d-7945-47bf-888b-9aff12ad54ee'
                    alt=''
                />
                <div class="text-content">
                    <div class="text-container">
                        <h4 class="heading">Hack the Future: HACK-NITA</h4>
                        <p>


                            A statewide hackathon coming to Aayam 8.0, and it's sure to be a smashing success! Teams from all corners of the state will come together to collaborate and create groundbreaking projects. Participants will have the chance to demonstrate their abilities, network with peers, and make invaluable connections.

                        </p>
                    </div>
                    <a href="https://hacknita.dccnita.tech/" class="btn">Know more</a>
                </div>
            </div> */}
            <div class="card card-2 upcoming">
                <img
                    class="eventImg hidden"
                    src='https://res.cloudinary.com/dhzod7y8u/image/upload/v1693606077/final_maadhyam_p2ktr5.jpg'
                    alt="event img"
                />
                <img
                    class='eventImg eventImgAlt'
                    src='https://res.cloudinary.com/dhzod7y8u/image/upload/v1693606077/final_maadhyam_p2ktr5.jpg'
                    alt=''
                />
                <div class="text-content">
                    <div class="text-container">
                        <h2 class="heading">Maadhyam 3.0</h2>
                        <p>

                        Ignite Your Tech Journey at the orientation event for first-year students, brought to you by the powerhouse clubs DCC and GDSC at NITA! Join us for an exciting ride through boundless opportunities and tech innovation. Get ready to embark on this exhilarating journey and witness the unveiling of DCC & GDSC Orientation 2023, exclusively for 1st years.

                        </p>
                        <div>
                            <b>
                            September 3rd, Sunday
                            <br />
                            Visvesvaraya Auditorium
                            <br />
                             2:30 - 5:30 PM
                            </b>
                        </div>
                    </div>
                    <a href="#" target="_blank" class="btn">UPCOMING</a>
                </div>

            </div>
            <h2 class="heading">Past Events</h2>
            <div class="card card-2">
                <img
                    class="eventImg hidden"
                    src='https://firebasestorage.googleapis.com/v0/b/smart-naka-lifetime-error.appspot.com/o/GOC%20Banner%20Final.jpg?alt=media&token=c362fc18-b294-4cdc-8d90-503762c4dd2b '
                    alt="event img"
                />
                <img
                    class='eventImg eventImgAlt'
                    src='https://firebasestorage.googleapis.com/v0/b/smart-naka-lifetime-error.appspot.com/o/GOC%20Banner%20Final.jpg?alt=media&token=c362fc18-b294-4cdc-8d90-503762c4dd2b '
                    alt=''
                />
                <div class="text-content">
                    <div class="text-container">
                    <h2 class="heading">The Game of Codes</h2>
                        <p>


                            The Game of Codes is an open-for-all coding contest where all participants are invited to code solutions for a set of problems in any programming language of their choice. It is an excellent opportunity for beginners to gain valuable coding experience and compete for prizes. This is a great chance to hone your coding skills and potentially take home a reward!

                        </p>
                    </div>
                    <a href="https://goc.dccnita.tech" target="_blank" class="btn">Know more</a>
                </div>

            </div>
            <div class="card">
                <img
                    class="eventImg hidden"
                    src='https://firebasestorage.googleapis.com/v0/b/smart-naka-lifetime-error.appspot.com/o/ctf%20banner2.jpg?alt=media&token=e8a44013-1ae6-4c6b-a6f9-98251475c2e9'
                    alt="event img"
                />
                <img
                    class='eventImg eventImgAlt'
                    src='https://firebasestorage.googleapis.com/v0/b/smart-naka-lifetime-error.appspot.com/o/ctf%20poster2.jpg?alt=media&token=fc5158d1-5cb1-4e7e-b65e-22ab76a331d4'
                    alt=''
                />
                <div class="text-content">
                    <div class="text-container">
                        <h2 class="heading">Capture The Flag (CTF)</h2>
                        <p>

                            Capture the Flag (CTF) is a two-day event packed with stimulating puzzles and riddles to solve and enjoy as you progress through the game. It will be an exhilarating experience to explore and demistify various challenges with your skills and ingenuity, ultimately culminating in victory.
                        </p>
                    </div>
                    <a href="https://ctf.dccnita.tech" target="_blank" class="btn">Know more</a>
                </div>
            </div>
        </div>
    )
};