import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, time, work, address }) => {
    const ref = useRef(null);

	return (
		<li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between
        md:w-[80%]
        ">
            <LiIcon reference={ref}/>
			<motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.8,type:"spring"}}   
            >
				<h3 className="capitalize font-bold text-2xl
                sm:text-xl xs:text-lg
                ">
					{position} 
					<span className="text-primary dark:text-primaryDark capitalize">@{company}</span>
				</h3>
				<span className="capitalize font-medium text-dark/75 dark:text-light/75 
                xs:text-sm
                ">
					{time} | {address}
				</span>
				<p className="font-medium w-full md:text-sm">{work}</p>
			</motion.div>
		</li>
	);
};

const Experience = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "center start"],
	});
	return (
		<div className="my-64">
			<h2 className="font-bold text-8xl mb-32 w-full text-center
            md:text-6xl xs:text-4xl md:mb-16
            ">
				Experience
			</h2>
			<div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full" ref={ref}>
				<motion.div 
                style={{scaleY:scrollYProgress}}
                className="absolute left-8 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]" />
                    <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                        {/* Internship Experience */}
                        <Details
                            position="AI/ML Intern"
                            company="Ethx Softcon Pvt Ltd"
                            time="Jan 2025 – Feb 2025"
                            address="Bhubaneswar, India"
                            work="Designed and implemented classification and regression models to support business reporting and forecasting using ERP transactional data. Collaborated with ERP functional teams to identify automation opportunities and deploy AI-enabled solutions for improved efficiency."
                        />
                        {/* Extra-Curricular Activities - updated based on resume */}
                        <Details
                            position="Vice President & Technical Lead"
                            company='Kalinga Jyoti (Odisha Literary Club)'
                            time="2022 - Present"
                            address="VIT Chennai"
                            work="Led a technical team in creating multiple functional web platforms, including a Ticket Validation and Management System, a Blogging Platform, and a Live Voting System."
                        />
                        <Details
                            position="Web Developer"
                            company="Google Developer Student Club"
                            time="2023 - Present"
                            address="VIT Chennai"
                            work="Created user-friendly and interactive websites for conducting events and workshops, enhancing student engagement and operational efficiency."
                        />
                        <Details
                            position="Web Developer"
                            company="IEEE Robotics Automation Society"
                            time="2023 - Present"
                            address="VIT Chennai"
                            work="Developed and maintained the club's official website using Next.js, Tailwind CSS, and Framer Motion to showcase activities, events, and project portfolios."
                        />
                    </ul>
		    </div>
        </div>
	);
};

export default Experience;