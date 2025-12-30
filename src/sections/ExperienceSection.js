import { primaryColor } from "../colors";
import DateLocationInfo from "../components/DateLocationInfo";
import List from "../components/List";
import Section from "../components/Section";

const ExperienceSection = () => {
    return (
        <Section title="Experience">
            <List>
                <Job
                    title="Co-founder / CEO / CTO"
                    company="Savvy"
                    dates="02/2024 - Present"
                    location="Santa Monica, CA"
                    href="https://trysavvy.co/"
                >
                    <li>
                        Founded and built AI-powered recruiting platform from
                        scratch, leading all aspects of product strategy,
                        engineering execution, and team building to reach 1000+
                        weekly active users and multiple pilot companies.
                    </li>
                    <li>
                        Hired and managed team of 4 (3 engineers, web designer),
                        establishing engineering practices (daily standups,
                        biweekly 1:1s, performance reviews) that enabled team to
                        ship features weekly while maintaining code quality.
                    </li>
                    <li>
                        Architected and scaled microservice network processing
                        ~50K jobs/candidates weekly, building AI-searchable
                        database of 5M+ candidates with automated matching and
                        outreach.
                    </li>
                    <li>
                        Implemented dynamic recommendation systems inspired by
                        TikTok and Netflix, creating personalized, adaptive
                        experiences based on continuous user feedback.
                    </li>
                    <li>
                        Established tight customer feedback loops with pilot
                        companies, incorporating insights into sprint planning
                        to rapidly ship requested features and improvements.
                    </li>
                    <li>
                        Developed comprehensive business strategy including
                        financial models, pitch deck, and business plans;
                        executed go-to-market approach targeting startups/SMBs,
                        translating technical architecture into market
                        positioning.
                    </li>
                    <li>
                        Led technical architecture decisions across full stack
                        (React, NextJS, PostgreSQL, AWS), establishing reusable
                        platform components that accelerated feature development
                        while maintaining 99.9% uptime.
                    </li>
                </Job>
                <Job
                    title="Lead Software Engineer - New Product Initiative"
                    company="Radical Semiconductor"
                    dates="08/2023 - 01/2024"
                    location="Pasadena, CA"
                    href="https://www.linkedin.com/company/radical-semiconductor/"
                >
                    <li>
                        Hired as technical lead for new product initiative,
                        driving direction for team of 2 engineers and rapidly
                        shipping customer-ready products in 2-week sprint
                        cycles.
                    </li>
                    <li>
                        Quickly ramped on specialized technology stack (Java
                        Card, NFC protocols, OAuth integration, smart contracts)
                        to establish technical direction for crypto hardware
                        wallet ecosystem.
                    </li>
                    <li>
                        Delivered 3 interconnected products from concept to
                        customer deployment in under 6 months: hardware wallet
                        (LiteCard), mobile NFC application, and web-based
                        distributor management platform.
                    </li>
                    <li>
                        Collaborated with founding team on product strategy and
                        technical priorities, balancing aggressive timelines
                        with hardware constraints and user experience
                        requirements.
                    </li>
                </Job>
            </List>
        </Section>
    );
};

export const ExperienceContinuedSection = () => {
    return (
        <Section title="Experience (continued)">
            <List>
                <Job
                    title="Co-founder / CTO"
                    company="Bazar"
                    location="Los Angeles, CA"
                    dates="11/2020 - 08/2023"
                    href="https://bazar.earth/"
                >
                    <li>
                        Co-founded mobile e-commerce SaaS platform, leading
                        technical strategy and engineering execution from
                        concept to 10,000+ downloads across iOS and Android.
                    </li>
                    <li>
                        Hired, managed, and mentored engineering team of 5,
                        establishing development processes (standups, 1:1s, code
                        reviews) that enabled rapid feature delivery while
                        maintaining team culture and code quality, including
                        shipping complex features like in-app chat and
                        bargaining system in under one month from start to
                        deployment.
                    </li>
                    <li>
                        Architected scalable e-commerce platform with ML-powered
                        recommendations and advanced search/filtering across
                        tens of thousands of products, making key technical
                        decisions on stack and infrastructure (React Native,
                        Django, PostgreSQL, AWS).
                    </li>
                    <li>
                        Designed novel seed-random home page pagination system
                        that balanced recency, relevance, and popularity for
                        infinite-scroll discovery, driving user engagement
                        across product catalog.
                    </li>
                    <li>
                        Implemented comprehensive caching strategy (local +
                        backend) that transformed app performance from sluggish
                        to lightning-fast response times, significantly
                        improving user experience.
                    </li>
                    <li>
                        Owned all technical decision-making as CTO, partnering
                        with co-founder on product strategy through multiple
                        pivots while translating customer needs into engineering
                        priorities.
                    </li>
                </Job>
                <Job
                    title="Software Engineer - Simulations & Optimization"
                    company="Areté"
                    dates="08/2021 - 08/2023"
                    location="Los Angeles, CA"
                    href="https://www.arete.com/"
                >
                    <li>
                        Led team of 3 engineers through complete product
                        overhaul, migrating legacy Fortran codebase to
                        GPU-optimized C++/CUDA, reducing simulation runtime by
                        10-20x.
                    </li>
                    <li>
                        Selected as technical lead for simulation products
                        requiring deep physics domain knowledge and software
                        engineering expertise, serving as primary liaison
                        between research and engineering teams.
                    </li>
                    <li>
                        Identified gaps in team development and created
                        mentorship program for junior engineers on classified
                        project, establishing onboarding processes and technical
                        training that became standard practice.
                    </li>
                    <li>
                        Built internal developer tools (dashboards, debugging
                        interfaces) that improved productivity for both
                        engineering and research teams, reducing development
                        cycle times and establishing workflows that became
                        standard practice.
                    </li>
                    <li>
                        Developed novel simulation capabilities including
                        generalized arbitrary-order physics solver (previously
                        limited to order 4), presenting technical approach and
                        results to DoD stakeholders.
                    </li>
                </Job>
                <Job
                    title="Software Engineer - Verification"
                    company="Abbott"
                    dates="01/2021 - 08/2021"
                    location="Los Angeles, CA"
                    href="https://www.abbott.com/"
                >
                    <li>
                        Developed automated testing for FDA-regulated medical
                        devices; gained experience with enterprise-scale
                        development processes before transitioning to more
                        product-focused roles with greater technical ownership
                        and direct impact.
                    </li>
                </Job>
                {/* <Job
                    title="Software Engineer Intern"
                    company="Automated Living"
                    dates="05/2020 - 08/2020"
                    location="Los Angeles, CA"
                    achievements={[
                        "Prototyped IOT products using Raspberry Pi's, utilizing LoRaWAN as well as 4G Modem technologies",
                        "Spearheaded backend and database messaging using MQTT",
                    ]}
                /> */}
                {/* <Job
                    title="Physics & Mathematics Tutor"
                    company="LMU College of Science & Engineering"
                    dates="08/2017 - 12/2019"
                    location="Los Angeles, CA"
                    href="https://cse.lmu.edu/"
                >
                    <li>
                        Provided weekly tutoring for upper and lower-division
                        students enrolled in a variety of different Mathematics
                        & Physics courses.
                    </li>
                    <li>
                        Improved grades of students as well as deepened their
                        understanding of the topics at hand, with several
                        positive testimonies from professors.
                    </li>
                </Job> */}
                {/* <Job
                    title="Technical Assistant"
                    company="Pixelgate Networks"
                    dates="05/2015 - 08/2016"
                    location="Los Angeles, CA"
                    achievements={[
                        "Organized company's server facility to optimize process improvement and minimize supply costs",
                        "Built and performed maintenance on servers to establish internet security systems and optimize power supplies",
                        "Worked on technical projects to improve computing performance"
                    ]}
                /> */}
            </List>
        </Section>
    );
};

export const Job = ({ title, company, dates, location, href, children }) => {
    return (
        <div>
            <a href={href}>
                <h3>{title}</h3>
                <h4 style={{ color: primaryColor }}>{company}</h4>
            </a>
            <DateLocationInfo dates={dates} location={location} />
            <ul>{children}</ul>
        </div>
    );
};

export default ExperienceSection;
