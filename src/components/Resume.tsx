import React from 'react';
import './css/Resume.css';

const Resume: React.FC = () => {
    return (
        <div className="container">
            {/* Main Content Column */}
            <div className="main-content">
                <header>
                    <h1>Lubomir Kopnicky</h1>
                    <p className="tagline">Data Specialist @ The LEGO Group</p>
                </header>

                <section className="aboutMe">
                    <h2>About Me</h2>
                    <p>I am a person passionate about data, throughout my career I have touched upon different flavors of jobs in the ever changing world of data, and I believe that is one of my strengths, along with strong desire to learn new things. As a person, I am easy-going, I like challenges and I do enjoy doing sports in my free time. I had been playing ice hockey for over 17 years, and recently, I have started to learn some martial arts.</p>
                </section>

                <section className="experience">
                    <h2>Experience</h2>

                    <div className="cv-event">
                        <h3>Data Specialist</h3>
                        <p className="role">the LEGO group</p>
                        <p className="location">June 2024 -- present | Billund, Denmark</p>
                        <ul>
                            <li>Co-developing Docubot, which is an internal chatbot. The application served to help leverage information in the documentations, by using RAG and vector database on Databricks (Langchain, Langfuse, Databricks, Github)</li>
                            <li>Driving efforts to increase adoption of Docubot - (suggesting and developing features to improve user experience)</li>
                            <li>Supporting users who wanted to build similar chatbot PoCs for different purpose (mostly with RAGs since Databricks apps comes with a nice template)</li>
                            <li>Driving a pilot for data modelling feature to collect feedback and figure out what are improvements needed to increase adoption of the chatbot as an internal tool.</li>
                            <li>Internal consulting / hands-on enablement of migration of the data to NEXUS (data platform build around Databricks).</li>
                            <li>Guided student workers with finding meaningful tasks for their development</li>
                        </ul>
                    </div>
                    
                    <hr />

                    <div className="cv-event">
                        <h3>Associate Data Specialist</h3>
                        <p className="role">the LEGO group</p>
                        <p className="location">October 2023 -- present | Billund, Denmark</p>
                        <ul>
                            <li>collaborated on creating internal data product by ingesting the data from Jira API and transforming in accordance with medallion architecture</li>
                            <li>collaborated on creation of another data product with focus on monitoring Impala usage</li>
                            <li>helping set up data products to track KPI around migration effort</li>
                            <li>experimenting with databricks features like liquid clustering or asset bundles</li>
                        </ul>
                    </div>

                    <hr />

                    <div className="cv-event">
                        <h3>Student worker - Data Science</h3>
                        <p className="role">the LEGO group</p>
                        <p className="location">April 2022 -- September 2023 | Billund, Denmark</p>
                        <ul>
                            <li>Involved in the development of the internal CoC app to track changes in the forecast deliveries (R, Shiny, Git)</li>
                            <li>Experimenting with conformal prediction intervals, creating intervals from the point forecast models (Python, MAPIE, LightGBM, Databricks)</li>
                        </ul>
                    </div>

                    <hr />

                    <div className="cv-event">
                        <h3>Student worker - Data analyst</h3>
                        <p className="role">the LEGO group</p>
                        <p className="location">Nov 2020 -- April 2022 | Billund, Denmark</p>
                        <ul>
                            <li>Creating automated dashboards for KPI tracking (Shiny, R)</li>
                            <li>Developing Dash application allowing its users to investigate the clusters, generated to help analyze descriptions of a large number of IT incidents (Dash, scikit-learn, pandas)</li>
                            <li>Analyzing the data from a questionnaire about the satisfaction of the IT product customers, using exploratory factor analysis to identify latent variables and customer segmentation based on the responses. (Python, scikit-learn, pandas)</li>
                        </ul>
                    </div>

                    <hr />

                    <div className="cv-event">
                        <h3>Student worker - BI analyst</h3>
                        <p className="role">Department of Digital Business Development - Aarhus University</p>
                        <p className="location">Feb 2020 -- Oct 2021 | Herning, Denmark</p>
                        <ul>
                            <li>Developing a Power BI dashboard from the data generated by IoT devices collecting various information about the machinery. - developing simple measures to detect machine downtime. (Power BI, Node-RED)</li>
                            <li>Small tasks related to particle (IoT device) and various sensors.</li>
                        </ul>
                    </div>
                </section>

                <section className="education">
                    <h2>Education</h2>
                    <div className="cv-event">
                        <h3>MSc Business Intelligence</h3>
                        <p className="role">Aarhus University</p>
                        <p className="location">Sep 2021 -- present | Aarhus, Denmark</p>
                        <div className="tag-container">
                            <span className="tag">Machine Learning Methods in Empirical Economics</span>
                            <span className="tag">Financial Econometrics</span>
                            <span className="tag">Mathematical Analysis</span>
                            <span className="tag">Business Intelligence and Data Management</span>
                        </div>
                    </div>
                </section>
            </div>

            {/* Sidebar Column */}
            <div className="sidebar">
                <section className="personal-info">
                    <h2>Contact</h2>
                    <ul>
                        <li><strong>Email:</strong> lubomir.kopnicky@LEGO.com</li>
                        <li><strong>Email:</strong> lubomir.kopnicky@gmail.com</li>
                        <li><strong>Phone:</strong> +45-50155758</li>
                        <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/lubomir-kopnicky/">linkedin.com/in/lubomir-kopnicky/</a></li>
                        <li><strong>GitHub:</strong> <a href="https://github.com/lubo-kopnicky">github.com/lubo-kopnicky</a></li>
                    </ul>
                </section>

                <section className="skills">
                    <h2>Strengths & Skills</h2>
                    <div className="tag-container">
                        <span className="tag">Databricks</span>
                        <span className="tag">Machine Learning</span>
                        <span className="tag">Data Handling</span>
                        <span className="tag">Inferential analysis</span>
                        <span className="tag">Network analysis</span>
                        <span className="tag">Forecasting/ Predictive analysis</span>
                        <span className="tag">Python</span>
                        <span className="tag">R</span>
                    </div>
                    <hr />
                    <div className="tag-container">
                        <span className="tag">Analytical mindset</span>
                        <span className="tag">Agile methodologies</span>
                    </div>
                </section>

                <section className="certificates">
                    <h2>Certificates</h2>
                    <ul>
                        <li><a href="https://credentials.getdbt.com/af0e3a58-074e-4aee-8b7e-c08e089e757f#gs.7rhbmq">DBT Fundamentals</a></li>
                        <li><a href="https://courses.edx.org/certificates/8aab3c26d97941d184abe4137c23c92a">MITx 18.6501x Fundamentals of Statistics (edX)</a></li>
                        <li><a href="https://courses.edx.org/certificates/2dcb011c4e274fa88c91cfe42896e9f0">MITx 6.419x Data Analysis: Statistical Modeling and Computation in Applications (edX)</a></li>
                        <li><a href="https://courses.edx.org/certificates/8e117f5d3e1e40389df61f60bbe4cca1">MITx 6.86x Machine Learning with Python-From Linear Models to Deep Learning (edX)</a></li>
                    </ul>
                </section>

                <section className="projects">
                    <h2>Projects</h2>
                    <ul>
                        <li>
                            FACCA - Danske Commodities Forecasting Competition (Tensorflow, Keras)
                            <ul>
                                <li>Competition aimed at predicting the electricity consumption</li>
                            </ul>
                        </li>
                        <li>
                            BCG Competition - Predicting customer churn rate (R, glmnet)
                            <ul>
                                <li>The competition about predicting the customer churn and suggesting which customers to incentives using the limited number of coupons to maximize overall customer lifetime value</li>
                            </ul>
                        </li>
                        <li>
                            <a href="https://github.com/lubo-kopnicky/Criminal-network-analysis">Criminal Network Analysis (NetworkX)</a>
                            <ul>
                                <li>Analysis of the criminal network of the CAVIAR operation (dataset and introduction was part of the 6.419 listed in the certificates section )</li>
                            </ul>
                        </li>
                        <li>
                            <a href="https://github.com/lubo-kopnicky/kaggle-projects">House Price Prediction (Keras, Tensorflow, LightGBM, scikit-learn, Optuna)</a>
                            <ul>
                                <li>Predicting the house price using various models and comparing their performance</li>
                            </ul>
                        </li>
                    </ul>
                </section>

                <section className="languages">
                    <h2>Languages</h2>
                    <ul>
                        <li>English</li>
                        <li>Slovak</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default Resume;