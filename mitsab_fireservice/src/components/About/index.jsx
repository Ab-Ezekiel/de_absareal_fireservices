import React, { useRef } from 'react'
import "./About.css"
import { infras, infras2, mgt, mgt1, fireservice, fireservice1, fireservice3, fireservice4, fireservice2, fireservice5, fireservice6 } from "../../assets"
import { FaCheck } from 'react-icons/fa6'
import { Link } from 'react-scroll'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);



const About = () => {

  const container = useRef(null) 
  useGSAP(()=>{
    const timeline = gsap.timeline({
      delay:.5,
      scrollTrigger:{
        trigger:container.current,
        start:"20% bottom",
        end:"bottom top",
      },
    });
    timeline
    .from(
      ".company_photo",
      {x:-50, opacity:0}
    )
    .from(
      ".g-text",
      {y:50, opacity:0}
    )
    .from(
      ".sub_title",
      {y:50, opacity:0}
    )
    .from(
      ".box",
      {x:50, opacity:0, stagger:.5}
    )
    .from(
      ".para ",
      {y:50, opacity:0}
    )
    .from(
      ".group",
      {y:50, opacity:0}
    )
    .from(
      ".buttons_container",
      {y:50, opacity:0}
    )
  },{scope:container})

  return (
    <section id='about' ref={container}>
      <div className="container">
        <div className="column company_photo">
          <img src={fireservice6} alt="Mitsab" />
        </div>
        <div className="column">
          <h1 className='title'>
            <span className='g-text'>About Us</span>
          </h1>
          <h3 className='sub_title'>Where Vision Meets Unwavering Focus</h3>
          <div className="company_media_container">
            <div className="box">
              <img src={mgt1} alt="" />
            </div>
            <div className="box">
              <img src={fireservice} alt="" />
            </div>
            <div className="box">
              <img src={fireservice3} alt="" />
            </div>
          </div>
          <div className="para">
            <p className="text_muted description">
              De Absareal Fire Services is a dedicated subsidiary of MITSAB RESOURCES GLOBAL LIMITED, committed to 
              excellence in fire protection, prevention, and emergency response. Specializing in delivering innovative 
              fire safety solutions, the company offers a wide range of services including fire risk assessment, installation 
              of firefighting systems, safety audits, and routine maintenance for both commercial and industrial facilities.
            </p>
            <p className="text_muted description">
              With a strong emphasis on safety, compliance, and reliability, De Absareal supports critical infrastructure and 
              businesses across Nigeria by ensuring they meet the highest fire safety standards. Backed by the trusted reputation 
              and strategic leadership of its parent company, the firm operates with a skilled team of professionals and modern 
              equipment, delivering services that protect lives, property, and the environment.
            </p>
            <p className="text_muted description">
              Driven by a mission to foster safer communities and workspaces, De Absareal Fire Services continues to innovate 
              and uphold the core values of quality, integrity, and resilience within the fire safety industry.
            </p>
          </div>
          <div className="group" >
            <div className="row">
              <div className="icon_container">
                <FaCheck/>
              </div>
              <div className="details">
                <p className="text_muted">Consultation</p>
                <h3>Free</h3>
              </div>
            </div>

            <div className="row">
              <div className="icon_container">
                <FaCheck/>
              </div>
              <div className="details">
                <p className="text_muted">Expert</p>
                <h3>Workforces</h3>
              </div>
            </div>

            <div className="row">
              <div className="icon_container">
                <FaCheck/>
              </div>
              <div className="details">
                <p className="text_muted">Clients</p>
                <h3>Support</h3>
              </div>
            </div>

            <div className="row">
              <div className="icon_container">
                <FaCheck/>
              </div>
              <div className="details">
                <p className="text_muted">Quality</p>
                <h3>Service</h3>
              </div>
            </div>
          </div>
          <div className="buttons_container">
            <Link to="project" smooth={true} className="btn">Explore</Link>
            <Link to="contact" smooth={true} className="btn btn_primary">Get a qoute</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
