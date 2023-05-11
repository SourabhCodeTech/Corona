import React from 'react';
import './About.css'
import cov from './image/cov.png'

import fever from './image/fever.jpeg'
import cough from './image/cough.jpeg'
import breath from './image/breath.jpeg'
import taste from './image/taste.jpeg'
import runny_nose from './image/runny_nose.jpeg'
import ashes from './image/ashes.jpeg'
import headache from './image/headache.jpeg'
import sore from './image/sore.jpeg'
import fatigue from './image/fatigue.jpeg'
import diarrhea from './image/diarrhea.jpeg'

// images for precaustions
import wash from './image/wash.gif'
import mask from './image/mask.gif'
import home from './image/stay-home.gif'
import distance from './image/distance.gif'
import crowd from './image/crowd.jpeg'
import touch from './image/touch.jpeg'
import cover from './image/cover.jpeg'
import clean from './image/clean.gif'
import consult from './image/doctor.gif'

// images for vaccination 
import one from './image/one.jpeg'
import two from './image/two.jpeg'
import three from './image/three.jpeg'
import four from './image/four.jpeg'


const About = (props) => {

    return (
        <>
            {/* covid section code... */}
            <section id="about">
                <h1>Covid-19</h1>
                <div className="box_cov">
                    <div className="protectChild small" id="rot-img">
                        <img src={cov} alt="Corona Virus" className="img" />
                    </div>
                    <div className="protectChild cap">
                        <p>
                            <strong>COVID-19</strong> is defined as disease caused by a Novel Corona-Virus, formally called <span> <em>SARS-CoV-2(2019-nCoV),</em></span>
                            which was first identified illness case in Wuhan City, Hubei Province, China. It was initially reported to the World Health Organization (WHO) on <em> December 31, 2019.</em>
                            It can affect our upper and lower respiratory tract.

                        </p>
                        <button className="btn btn-outline-danger"><a href="https://www.who.int/health-topics/coronavirus#tab=tab_1"> Learn More</a></button>
                    </div>

                </div>
            </section>
            <hr />
            {/* Symptoms code start.... */}
            <section id="symptoms">
            <br />
                <u><h2 className='h2'>&nbsp;Symptoms&nbsp;</h2></u>
            <br />
                <div className="box_cov sym">
                    <div className="child sympt">
                        <img src={fever} alt="FEVER" className="sym-img" />
                        <br />
                        <span>Fever or Chills</span>
                    </div>
                    <div className="child sympt">
                        <img src={cough} alt="COUGH" className="sym-img" />
                        <br />
                        <span>Cough</span>
                    </div>
                    <div className="child sympt">
                        <img src={breath} alt="BREATH PROBLEM" className="sym-img" />
                        <br />
                        <span>Shortness of breath </span>
                    </div>
                    <div className="child sympt">
                        <img src={taste} alt="NO TASTE" className="sym-img" />
                        <br />
                        <span>loss of taste or smell</span>
                    </div>
                    <div className="child sympt">
                        <img src={runny_nose} alt="RUNNY NOSE" className="sym-img" />
                        <br />
                        <span>Congestion or runny nose</span>
                    </div>
                    <div className="child sympt">
                        <img src={ashes} alt="BODY PAIN AND ASHES IN MUSCLES" className="sym-img" />
                        <br />
                        <span>Muscle or body ashes</span>
                    </div>
                    <div className="child sympt">
                        <img src={headache} alt="HEADACHE" className="sym-img" />
                        <br />
                        <span>Headache</span>
                    </div>
                    <div className="child sympt">
                        <img src={sore} alt="SORE THROATH" className="sym-img" />
                        <br />
                        <span>Sore throat</span>
                    </div>
                    <div className="child sympt">
                        <img src={fatigue} alt="FATIGUE" className="sym-img" />
                        <br />
                        <span>Fatigue</span>
                    </div>
                    <div className="child sympt">
                        <img src={diarrhea} alt="DIARRHEA AND STOMACH PAIN" className="sym-img" />
                        <br />
                        <span>Diarrhea</span>
                    </div>
                </div>

            </section>
            {/* Precaustions section start  */}
            <section id="protect">
            <br />
                <u><h2>&nbsp;How to protect yourself ?&nbsp;</h2></u>
            <br />
                <span className=" v-span" >"Precautions is better than cure"</span>
                <div className="box_cov">
                    <div className="protectChild small">
                        <img src={wash} alt="Wash your hands" className="img img-pre" />
                    </div>
                    <div className="protectChild large-pre">
                        <p className="p-pre">
                            ▶Wash your hands frequently with soap and water.
                            <br />
                            ▶Washing hands with soap and water is the best way to get rid of germs in most situations.
                            <br />
                            ▶Sanitize your hands with an alcohol-based hand sanitizer that contains at least 60% alcohol.
                        </p>

                    </div>
                </div>
                <div className="box box_cov">
                    <div className="protectChild small">
                        <img src={mask} alt="Wear a mask" className="img img-pre" />
                    </div>
                    <div className="protectChild large-pre">
                        <p className="p-pre">
                            ▶Wear a mask which should have two or more layers of washable, breathable fabric
                            <br />
                            ▶Choose masks that completely cover your nose and mouth.
                        </p>
                    </div>
                </div>
                <div className="box_cov">
                    <div className="protectChild small">
                        <img src={home} alt="Stay at home" className="img img-pre" />
                    </div>
                    <div className="protectChild large-pre">
                        <p className="p-pre">
                            ▶Don't go outside untill its emergency.
                            <br />
                            ▶Stay home stay safe. Stay physically fit. Eat a nutritious diet.
                            <br />
                            ▶Be happy and avoid alarmist news.
                        </p>

                    </div>

                </div>
                <div className="box box_cov">
                    <div className="protectChild small">
                        <img src={distance} alt="Maintain distance" className="img img-pre" />
                    </div>
                    <div className="protectChild large-pre">
                        <p className="p-pre">
                            ▶Avoid close contact with people and maintain a <em>6 feet</em> distance.
                            <br />
                            ▶Always Follow social distancing and try to connect with family and friends virtually.
                            <br />
                            ▶Maintain a safe distance from animals and avoid unnecessary contact.
                        </p>
                    </div>
                </div>
                <div className="box_cov">
                    <div className="protectChild small">
                        <img id="crowd" style={{width: '14rem', height: '11rem'}} src={crowd} alt="Stay away from crowd areas" className="img img-pre" />
                    </div>
                    <div className="protectChild large-pre">
                        <p className="p-pre">
                            ▶Avoid crowds areas like markets, restaurants, bars, movie theaters etc.
                            <br />
                            ▶Being in crowd can put you at higher risk for COVID-19.
                            <br />
                            ▶Avoid indoor spaces that do not offer fresh air from the outdoors.
                        </p>
                    </div>
                </div>
                <div className=" box box_cov">
                    <div className="protectChild small">
                        <img src={touch} id="touch" alt="Don't touch" className="img img-pre" />
                    </div>
                    <div className="protectChild large-pre">
                        <p className="p-pre">
                            ▶Keep your hands away from your eyes, nose, and mouth.
                            <br />
                            ▶When you touch your face, the germs on your hands can take up residence in your mucous membranes and cause infections.
                            <br />
                            ▶Try to clean your hands properly before touching your face.
                        </p>
                    </div>
                </div>
                <div className="box_cov">
                    <div className="protectChild small">
                        <img src={cover} id="cover" alt="Cover your mouth" className="img img-pre" />
                    </div>
                    <div className="protectChild large-pre">
                        <p className="p-pre">
                            ▶Cover your mouth and nose with a tissue paper or masks when coughing or sneezing.
                            <br />
                            ▶You can also use your elbow to sneez and immediately wash your hands with soap and water for at least 20 seconds.
                        </p>
                    </div>
                </div>
                <div className="box box_cov">
                    <div className="protectChild small">
                        <img src={clean} style={{width: '6.5rem',height: '9rem'}} alt="Keep clean environment" className="img img-pre" />
                    </div>
                    <div className="protectChild large-pre">
                        <p className="p-pre">
                            ▶Keep clean environment around yourself.
                            <br />
                            ▶Regularly clean and disinfect frequently touched surfaces like phones , doorknobs, lights etc.
                        </p>
                    </div>
                </div>
                <div className="box_cov">
                    <div className="protectChild small">
                        <img src={consult} alt="Consult to your doctor" className="img img-pre" />
                    </div>
                    <div className="protectChild large-pre">
                        <p className="p-pre">
                            ▶Moniter your health daily and consult to the doctor.
                            <br />
                            ▶Seek medical care early if you have a fever, cough or difficulty in breathing.
                        </p>
                    </div>
                </div>
            </section>
            {/* vaccination section start  */}
            <section id="vaccine">
                <br />
                <u><h2 className='h2'>&nbsp;Vaccination&nbsp;</h2></u>
                <br />
                <div className="para-vaccine">
                    <span className="v-span">
                        "When it comes to vaccines decision, there is no dilemma"

                    </span>
                    <br />
                    <br />
                    <p>
                        Covid-19 vaccines are now widely available. Vaccines are safe and effective.
                        Vaccination will help you to protect yourself from several deseases and viruses.
                        They can keep you from getting and spreading the virus that causes COVID-19.
                        Everyone 18 years of age and older is now eligible to get a COVID-19 vaccination.

                    </p>

                </div>

                <div className="vaccine-images">

                    <div className="first-img-vaccine"> <img src={one} alt="" className="img-vacc" /> </div>
                    <div className="second-img-vaccine"> <img src={two} alt="" className="img-vacc" id="two" /> </div>
                    <div className="three-img-vaccine"> <img src={three} alt="" className="img-vacc" /> </div>
                    <div className="four-img-vaccine"> <img src={four} alt="" className="img-vacc" id="four" /> </div>
                </div>

                <br />
                <div className="v-steps">
                    <em>
                        <h3><span >Steps to get Vaccinated </span></h3>
                    </em>
                    <div className="steps-vacc">
                        <p>
                            (1)
                            Book An Appointment on
                            <a href="https://www.cowin.gov.in/"><span> CoWIN</span> </a> or Walk Into Any
                            Vaccination Center
                            👨‍⚕️
                        </p>
                        <p>
                            (2) Get Your Vaccination Safely at the Time of Your Appointment 🕕
                        </p>
                        <p>
                            Download Your Vaccination
                            Certificate from <a href="https://www.cowin.gov.in/"> <span>CoWIN</span> </a>
                            and Wait for <span>Dose #2</span>   🏅                       </p>
                    </div>
                </div>

                <br /><br />
                <div className="effect">
                    <div className="side-eff">
                        <h3> <span>  Common Side Effects
                        </span>
                        </h3>
                        <p className="p-v"> You may have some side effects after vaccination. But don't worry, these are normal and
                            should go away in a few days. Example :

                            <em> <span className="eff"> Fever, Weakness, Swelling, Redness, Headache, Muscles or joint pain, Fatigue, Chills, Nausea and vomiting</span> </em>
                        </p>
                    </div>
                    <br /><br />
                    <div className="thingstodo">
                        <h3> <span>Things To Do</span></h3>
                        <p>If you are facing any side-effects due to vaccination, You should do these things to get relief.
                        </p>

                        <em>
                            <p>1. Apply a clean, cool, wet washcloth over the shot area.</p>
                            <p>2. Do some normal movements or exercise with your arm.</p>
                            <p>3. Drink plenty of water, fluids or juices.</p>
                            <p>4. Wear light cloths instead of heavy cloths.</p>
                            <p>5. Consult to your doctor, if redness or Swelling get increased after 24 hour.</p>
                            <p>6.Don't go outside and follow all the safety rules too.</p>
                        </em>
                    </div>
                </div>






            </section>
            {/* pandemic code  */}
            <section id="pandemic">
            <br />
                <u><h2 className='h2'>&nbsp;Pandemic Situation : Lockdown&nbsp;</h2></u>
            <br />
                <div className="pand">
                    <p className="v-pan"> A pandemic is the global outbreak of a disease.
                        COVID-19 began as an epidemic in China, before making its way around the world in a matter of months and becoming a pandemic.
                        Covid-19 pandemic affected our lives too much in both positive and negative way. It was declared on March 12, 2020 in India.
                        Due to Covid-19 virus, We all faced many problems, we lose our friends, family as well as our jobs and many more.
                        It was tough time for everyone. Our work culture, studies, way of living all gets changed.
                        <br />
                        <br />
                        Lockdown has drastic effects on social and economic fronts. However, this lockdown also has some positive effect on natural environment.
                        Recent data released by NASA and ESA indicates that pollution in some of the epicenters of COVID-19 such as Wuhan, Italy, Spain and USA etc. has reduced up to 30%.

                        <br />
                        <br />
                        Lockdown affects our college studies.
                        Schools and families had to react rapidly to a new teaching and learning platform.
                        Suspension of face-to-face instruction in schools during the COVID-19 pandemic has led to concerns about consequences for students’ learning.  The findings imply that students made little or no progress while learning from home and suggest losses even larger in countries with weaker infrastructure or longer school closures.
                        <br />
                        <br />
                        The first thought that came to our mind was whether we would ever be able to go back to school and meet our friends and teachers. Soon our doubts were laid to rest when our esteemed teachers called and explained that virtual classes will be conducted through digital platforms.
                        <br />
                        <br />
                        The pandemic gave many of us a taste of too much unstructured time. During the lockdown, We all have lot of time to explore ourself and lean new skills. Many of us was busy in life due to job, colleges etc, But Lockdown gives us time to connect with our parents and to care them.
                        <br />
                        <br />
                        The lockdown has given us the opportunity to value the quality time that we can spend with the family. We can engage ourselves in doing some interesting activities like washing the car with dad, watering the plants with grandfather, cooking delicious snacks with mom and listening to fun stories from grandmother.

                        <br />
                        <br />
                        The Lockdown has taught us how to adapt to the challenging circumstances and learn to deal with the ordeals effectively.
                        <br />
                        <span>
                            <em>Anyone should must do these things in the lockdown period :</em>
                        </span>
                        <li>Make a goal to learn new skills</li>
                        <li>Spend your time with nature, plants new trees</li>
                        <li>Explore your creative thoughts and make a project or anything</li>
                        <li>Read a new book or novel. By reading books we get lot of knowledge and motivation.</li>
                        <li>Set a workout routine and try to be regular</li>
                        <li>You should enroll yourself some free online courses to gain a new skill</li>
                        <li>Solve some puzzles like sudoku. It sharp our problem solving skill and improve memory</li>
                        <li>Meditation is one of the best things to do. It help us to  relieve stress and improve our wellbeing. </li>
                        <li>Keep yourself in the touch of family, friend and past colleagues virtully.
                        </li>
                        <li>Learn a new language. It will help you to connect with foreign people</li>
                    </p>
                </div>

            </section>
        </>
    );
};

export default About