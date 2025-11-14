import { primaryColor } from "../colors";
import DateLocationInfo from "../components/DateLocationInfo";
import List from "../components/List";
import Section from "../components/Section";

const ExperienceSection = () => {
    return (
        <Section title="Experience">
            <List>
                <Job
                    title="Founder / CEO / CTO"
                    company="Savvy"
                    dates="02/2024 - Present"
                    location="Santa Monica, CA"
                    href="https://trysavvy.co/"
                >
                    <li>
                        Leading the design and development of an AI-powered,
                        fully autonomous recruiting platform that automates
                        end-to-end hiring: sourcing, screening, outreach,
                        pitching, and interview scheduling.
                    </li>
                    <li>
                        Built a scalable background agent network that
                        continuously scrapes and analyzes public job and
                        candidate data to find optimal matches.
                    </li>
                    <li>
                        Designed an intuitive job board interface that empowers
                        candidates and employers to interact with matches,
                        provide feedback, and refine AI recommendations over
                        time.
                    </li>
                    <li>
                        Implemented dynamic recommendation systems inspired by
                        TikTok and Netflix to deliver personalized, adaptive
                        hiring experiences.
                    </li>
                    <li>
                        Managed full deployment and ongoing maintenance of the
                        platform, ensuring reliability and scalability.
                    </li>
                    <li>
                        Created comprehensive business plan and financial model
                        to guide growth and fundraising.
                    </li>
                    <li>
                        Developed investor pitch deck and led fundraising
                        presentations.{" "}
                    </li>
                    <li>
                        Managing go-to-market strategy and customer acquisition,
                        targeting startups and SMBs to disrupt traditional
                        recruiting agencies with faster, cheaper, and
                        higher-quality hiring solutions.
                    </li>
                </Job>
                <Job
                    title="Founding Engineer"
                    company="Radical"
                    dates="08/2023 - 01/2024"
                    location="Pasadena, CA"
                    href="https://www.arete.com/"
                >
                    <li>
                        Led product engineering with a customer-centric focus,
                        driving key product development and delivery.
                    </li>
                    <li>
                        Developed Radical LiteCard, a credit-card hardware
                        wallet leveraging Java Card technology.
                    </li>
                    <li>
                        Built Radical Wallet, a mobile app built in Expo and
                        React Native enabling secure NFC interactions and token
                        trading with the LiteCard.
                    </li>
                    <li>
                        Created LiteCard Manager, a web platform built in NextJS
                        + TypeScript for distributors and vendors to manage
                        LiteCard batches and NFT token transactions.
                    </li>
                    <li>
                        Delivered impactful startup experience building funded,
                        innovative crypto hardware and software products from
                        concept through launch.
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
                        Co-Engineered a mobile application-based SaaS business
                        with professional-level implementation and integration
                        with large APIs. App available in the App Store and
                        Google Play Stores
                    </li>
                    <li>
                        Designed and implemented a complex E-commerce API with
                        Sorting, Searching, Filtering, Pagination, and Advanced
                        Recommendations across 10s of thousands of products
                    </li>
                    <li>
                        Hired, trained, and managed a small team of engineers
                        across the stack in order to produce a functional and
                        aesthetically pleasing customer-facing product
                    </li>
                    <li>
                        Programmed frontend using React Native and backend with
                        Django REST framework on a AWS Elastic Beanstalk
                        environment talking to a Postgres instance running on
                        AWS RDS
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
                        Designed, developed, and helped maintain several
                        customer-facing products for use in far-reaching
                        distributed environments
                    </li>
                    <li>
                        Took charge of multiple projects and acted as primary
                        integrator and person of contact
                    </li>
                    <li>
                        Led a small team to fully overhaul an existing product
                        for GPU optimization (Fortran -&gt; C++/Cuda) and
                        brought it to usability by research teams
                    </li>
                    <li>
                        Received high praise for ability to take on several
                        projects with little to no supervision and bring them to
                        high-quality completion
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
                        Developed software for improving the efficiency and
                        efficacy of healthcare machinery and patient-facing
                        mobile applications
                    </li>
                    <li>
                        Collaborated with developers in extremely large
                        streamlined code repositories and databases
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
