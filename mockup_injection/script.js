general();
MiningLifeCycle();
explorationStage();
developmentStage();
constructionStage();
productionStage();

function general() {
    let targettedNode = document.querySelector("body");

    // Insert the stylesheet
    targettedNode.insertAdjacentHTML('beforeend', '<link href="https://jmackas.github.io/Scope-Systems/mockup_injection/styles.css" rel="stylesheet">');
}

function MiningLifeCycle() {
    if (window.location.href == "https://www.scopesystems.com.au/industries/mining-software/") {
        document.querySelector("#hotspot-5781").remove();

        let targettedNode = document.querySelector(".wrap").innerHTML = '<h2>Mining Software for the Mining Industry</h2><p>The mining industry has always had to manage a certain level of volatility, from fluctuating ore prices to high labour costs and the uncertainty of what is actually in the ground, however as we move in to more uncertain times, raising capital and moving an asset through to production has never been harder.</p><p>Over 22 years’ experience delivering mining business management software solutions, Scope Systems understand these issues and with this&nbsp; knowledge have developed a scalable solution to support you through each phase of your entire mine life-cycle.</p><h3>The Mining Life-cycle</h3><p>Scope Systems have utilised decades of experience in the mining sector to select solutions to meet challenges at every stage of the mining life-cycle.</p><p>Click on the diagram to expand out information.</p><iframe class="lifecycle_accordion" src="https://jmackas.github.io/Scope-Systems/accordion_prototype/"></iframe>';

    }

}

function explorationStage() {
    if (window.location.href == "https://www.scopesystems.com.au/single-touch-payroll-scopetalk/") {
        // Styles of the stage
        let targettedNode = document.querySelector("body");
        targettedNode.insertAdjacentHTML('beforeend', '<style>.title.blog {background-image: url("https://jmackas.github.io/Scope-Systems/mockup_injection/images/exploration_darker.jpg");}</style>');

        // Header of the stage
        document.querySelector('[typeof="v:Breadcrumb"]').innerHTML = 'Mining Lifecycle / <strong>Exploration</strong>';
        document.querySelector(".mainTitle").innerHTML = 'Exploration Stage';
        document.querySelector('[datetime="2018-02-14T09:38:54+00:00"]').innerHTML = '';

        // Content of the stage
        document.querySelector("#post-5163 .blog-content").innerHTML = '';
        document.querySelector("#post-5163 .blog-content").innerHTML = '<p>The exploration stage of the Mining Lifecycle consists of the initial analysis of prospective territory, determining if it contains a worthwhile amount of minerals to be mined. The analysis of the territory can take between two to eight years and can cost up to $15 million – a value which may yield little return. A feasibility report will need to be generated from the geologists, determining if the prospective site has mining potential. </p><br><p>The various activities within this stage are conducted by professional Geologists, facilitating the use of modern tools and methodologies to measure the strength of mineral deposits in potential mining areas.</p><p>The activities that transpire throughout this phase consist of:</p><br><h2>Activities</h2><ol><li>Searching – sweeping land reserves to determine mining potential.</li><li>Sampling – retrieving soil and rock samples from the area for further investigations.</li><li>Ore reserve analysis – analyzing the samples to determine if an ore reserve is present and exhibits traits of potential profitability.</li><li>Feasibility report – this is a collated study determines whether it is economically worthwhile to pursue the mining deposit.</li></ol><br><h2>Operational Activities</h2><p>The finance department is involved quite heavily throughout this stage, as it can be extremely expensive yet yield little return. The legal and compliance department is also heavily involved, as social, and environmental factors need to be considered when mining within this area. </p><br><h2>Western Australia</h2><p>The exploration phase within Western Australia is controlled by the provisions of the Mining Act of 1978 and the Offshore Minerals Act of 1994. WA promotes measures of seeking prospective mine sites as it assists with stimulating the economy. A state government initiative called the Exploration Incentive Scheme (EIS) promotes the pursual of mining endeavors within WA. </p><br><h2>Infographic</h2><p>The below infographic assesses the confidence level of ore reserves throughout a geologist’s examination of a potential mine site. If a rich ore reserve is proven to be present on the prospective mine site, then an organization can safely agree it is an economically feasible mining endeavor. </p><img src="https://superfund.arizona.edu/sites/superfund.arizona.edu/files/mineral_resource_vs_ore_resevre.png" alt="Exploration stage diagram" style="float: left;"><br><br><h2>References</h2><p>https://superfund.arizona.edu/learning-modules/tribal-modules/copper/mine-life-cycle</p><p>Infographic: https://superfund.arizona.edu/sites/superfund.arizona.edu/files/mineral_resource_vs_ore_resevre.png</p>';

    }

}

function developmentStage() {
    if (window.location.href == "https://www.scopesystems.com.au/update-single-touch-payroll-announcement/") {
        // Styles of the stage
        let targettedNode = document.querySelector("body");
        targettedNode.insertAdjacentHTML('beforeend', '<style>.title.blog {background-image: url("https://jmackas.github.io/Scope-Systems/mockup_injection/images/development_darker.jpg");}</style>');

        // Header of the stage
        document.querySelector('[typeof="v:Breadcrumb"]').innerHTML = 'Mining Lifecycle / <strong>Development</strong>';
        document.querySelector(".mainTitle").innerHTML = 'Development Stage';
        document.querySelector('[datetime="2018-05-14T10:45:33+00:00"]').innerHTML = '';

        // Content of the stage
        document.querySelector("#post-5331 .blog-content").innerHTML = '';
        document.querySelector("#post-5331 .blog-content").innerHTML = '<p>The Development stage of the Mining Lifecycle consists of the commencement of the mining activities. This activity can take between 4 – 12 years and can cost anywhere between one million to one billion (depending on the mine type and size). The construction of the mine site occurs within this stage – signaling the commencement of the mineral extraction.</p><br><h2>Activities</h2><p>At the development stage, the activities aim to ensure that there is no interruption happening in the period of performing the productive for the life of the mine.</p><br><p>The activities in this stage involves:</p><ol><li>Defining - determine the mining technology that will be used.</li><li>Constructing - building of access roads for transportation.</li><li>Identifying – recognizing resources including electricity, water sources etc.</li><li>Building – constructing ore processing facilities as well as the waste disposal areas.</li></ol><br><h2>Operational Activities</h2><p>The financial and accounting departments are heavily involved within this stage. An analysis of the overall costs regarding the mining endeavor needs to be stringently assessed, and the social and environmental impacts needing to be considered.</p><p>The primary operation activities should include:</p><ol><li>Obtaining water and mineral rights</li><li>Purchasing surface lands</li><li>Arranging for financing</li><li>Preparing permit applications and environment impact statement (EIS)</li></ol><br><h2>Western Australia</h2><p>In general, the expenditure of mining is between $1 million to $1 billion, which depends to the type and size. As part of budget, environmental rehabilitation occupies a non-negligible proportion. Based on diverse category of land disturbances, the MRF (Mining Rehabilitation Fund) levy has different fund contribution rate.</p><br><h2>Infographic</h2><p>The below infographic shows the relationship between project value and time taken to complete the mining lifecycle. The risk of a project gradually decreasing from exploration to closure while the project value presents the reverse trend. At the development stage, risk is the dominant element to determine the success of the whole mining project.</p><img src="https://image.slidesharecdn.com/topic2-theminingcycle-160201214947/95/topic-2-the-mining-cycle-6-638.jpg?cb=1488552082" alt="development stage diagram"><br><h2>References</h2><p>https://docplayer.net/55092979-Hassan-z-harraz-topic-2-the-mining-cycle.html</p><p>http://www.dmp.wa.gov.au/Documents/Environment/MRF_The_First_Two_Years.pdf</p>';

    }

}

function constructionStage() {
    if (window.location.href == "https://www.scopesystems.com.au/21-tips-tricks-qlik-scopetalk/") {
        // Styles of the stage
        let targettedNode = document.querySelector("body");
        targettedNode.insertAdjacentHTML('beforeend', '<style>.title.blog {background-image: url("https://jmackas.github.io/Scope-Systems/mockup_injection/images/construction_darker.jpg");}#wa_table td {border: 1px solid #777;}</style>');

        // Header of the stage
        document.querySelector('[typeof="v:Breadcrumb"]').innerHTML = 'Mining Lifecycle / <strong>Construction</strong>';
        document.querySelector(".mainTitle").innerHTML = 'Construction Stage';
        document.querySelector('[datetime="2017-11-15T11:42:27+00:00"]').innerHTML = '';

        // Content of the stage
        document.querySelector("#post-5002 .blog-content").innerHTML = '';
        document.querySelector("#post-5002 .blog-content").innerHTML = '<p>Before the construction stage of the Mining Lifecycle can begin, all the necessary documentation, permits, and capital investments must be approved. The construction phase itself is comprised of the preliminary construction and mine construction phases. The construction phase of the Mine Lifecycle can cost upwards of $1.5 billion and usually lasts for over 3 years depending on the size of the project.</p><br><h2>Activities</h2><p>The activities that make up the preliminary construction phase includes:</p><ul> <li>Staffing – the recruitment of appropriate professionals for on site management.</li> <li>Demolition – removal of old structures and buildings.</li> <li>Building transportation infrastructure – this includes different modes of transport like roads, bridges, railways and ports.</li> <li>Environmental and land management – begins during the preliminary construction phase and consists of the activity’s miners must adhere to pertaining to the relocation of wildlife and plantation.</li> <li>Procurement of equipment – ordering and obtaining mining equipment such as drill rigs, mills, and light and heavy diesel vehicles. </li></ul><br><p>Some of the activities in the mine construction phase will change across different projects depending on the type of mine to be constructed. The two different mines are an open pit (surface) or an underground mine. The common activities of the mine construction phase include:</p><ul> <li>Construction of facilities – development of specific facilities for:</li> <ul> <li>Mineral and ore processing.</li> <li>Disposables and waste management.</li> <li>On-site power generation.</li> <li>Permanent employee housing and emergency response.</li> <li>Equipment and vehicle storage and maintenance.</li> </ul></ul><p>Activities included in the construction of an open pit mine consist of:</p><ul> <li>Drilling holes and placing explosives into them.</li> <li>After detonating the explosives, the broken rock is loaded into trucks.</li> <li>The ores and minerals are sent to the processing facilities.</li></ul><br><p>Activities included in the construction of underground mines consist of:</p><ul> <li>Drilling holes to make a tunnel, shaft or decline.</li> <li>Removal of any loose rock in mining areas termed "stopes".</li> <li>Developing ground support in stopes to ensure flooring stability.</li> <li>After mining in each stope is complete, a mixture is used to backfill the open area.</li></ul><br><h2>Operational Activities</h2><p>All phases of the mine lifecycle have operational requirements that may overlap with other stages while also having a specific focus on specific operational activities. Operational activities that are required in the construction stage include:</p><ul> <li>Capital asset management – as the construction phase is the most capital-intensive stage in the mine lifecycle, being able to track assets ensures that there is optimal uptime and use of all equipment as well as ensuring assets are maintained.</li> <li>Human resource management – mining projects, especially in the construction phase will require the employment of many workers no matter the size of the mine being developed. Implementing effective processes in to manage workers is key to any organisation’s success.</li> <li>Financial reporting – reporting and purchasing controls are required during this phase as it can be the most expensive stage in the mine lifecycle.</li> <li>Recruitment – having the most technically skilled personnel ensures that all employees are competent to meet requirements.</li> <li>Regulation – all operations during the construction phase must adhere to specific guidelines pertaining to environmental and waste management as well as occupational and mine safety management.</li></ul><br><h2>Western Australia</h2><p>According to the Department of Jobs and Small Business, the mining industry employs around 250,000 people which makes up for approximately 2.0% of Australia’s total workforce. As more projects obtain the green light, Australia will face an economic boom as more jobs for the population is created. The table below illustrate some examples of mine projects that have been approved in Western Australia.</p><table id="wa_table"> <tbody> <tr> <td> <p align="center"><strong>Project description</strong></p> </td> <td> <p align="center"><strong>Sponsor</strong></p> </td> <td> <p align="center"><strong>Estimated project value ($)</strong></p> </td> <td> <p align="center"><strong>Estimated construction jobs</strong></p> </td> <td> <p align="center"><strong>Estimated operational jobs</strong></p> </td> </tr> <tr> <td> <p align="center"><strong>South Flank project</strong></p> <p align="center">&nbsp;</p> </td> <td> <p align="center">BHP Billiton</p> </td> <td> <p align="center">4.7 billion</p> </td> <td> <p align="center">2500</p> </td> <td> <p align="center">600</p> </td> </tr> <tr> <td> <p align="center"><strong>Koodaideri iron ore mine</strong></p> <p align="center">&nbsp;</p> </td> <td> <p align="center">Rio Tinto</p> </td> <td> <p align="center">2.6 billion</p> </td> <td> <p align="center">1600</p> </td> <td> <p align="center">600</p> </td> </tr> <tr> <td> <p align="center"><strong>Pilgangoora project</strong></p> <p align="center">&nbsp;</p> </td> <td> <p align="center">Pilbara Minerals</p> </td> <td> <p align="center">235 million</p> </td> <td> <p align="center">400</p> </td> <td> <p align="center">150</p> </td> </tr> <tr> <td> <p align="center"><strong>Cataby mineral sands project</strong></p> <p align="center">&nbsp;</p> </td> <td> <p align="center">Iluka</p> </td> <td> <p align="center">250 million</p> </td> <td> <p align="center">220</p> </td> <td> <p align="center">120</p> </td> </tr> <tr> <td> <p align="center"><strong>Average</strong></p> </td> <td> <p align="center">-</p> </td> <td> <p align="center">1.95 billion</p> </td> <td> <p align="center">1180</p> </td> <td> <p align="center">368</p> </td> </tr> </tbody></table><p>Across the four mining projects shown in the table above, on average, 1180 construction jobs and 368 operational jobs will be in demand coming to a total of 1548 jobs required for the projects.</p>';

    }
}

function productionStage() {
    if (window.location.href == "https://www.scopesystems.com.au/converged-vs-hyperconverged-infrastructure-scopetalk/") {
        // Styles of the stage
        let targettedNode = document.querySelector("body");
        targettedNode.insertAdjacentHTML('beforeend', '<style>.title.blog {background-image: url("https://jmackas.github.io/Scope-Systems/mockup_injection/images/production_darker.jpg");}</style>');

        // Header of the stage
        document.querySelector('[typeof="v:Breadcrumb"]').innerHTML = 'Mining Lifecycle / <strong>Production</strong>';
        document.querySelector(".mainTitle").innerHTML = 'Production Stage';
        document.querySelector('[datetime="2017-08-23T09:36:20+00:00"]').innerHTML = '';

        // Content of the stage
        document.querySelector("#post-4917 .blog-content").innerHTML = '';
        document.querySelector("#post-4917 .blog-content").innerHTML = '<p>The production stage is a lengthy process that can span over a period of 16 years. The large startup costs involved from mining projects are heavily reliant on the efficiency and performance of the mineral extraction. These costs are required to generate the much-needed funds to satisfy stakeholders. The production process requires maximum utilization of specialized equipment and machinery. To ensure operations are effective, efficient and safe; important operational activities must be in place.</p><br><h2>Activities</h2><ul><li>Environmental Management Systems - Ensures operations are closely monitored and tested to local standards. For instance, in WA there are specific legislations and compliance requirements that companies must adhere too. </li><li>Safety Management - The welfare of workers is heavily dependent on high safety standards and strict auditing to maintain a safe operating environment. </li><li>Preventative Maintenance - A critical activity to ensure equipment is available, efficient and performs to the expected standard. The preventative maintenance is a process that requires continuous monitoring throughout the production stage. It is primarily focused on specialized machinery and equipment that requires preventative maintenance.</li><li>Asset Management - Tracking and monitoring the lifespan of equipment allows for better judgement in CAPEX planning and fulfilment with organising budgeting processes and stakeholders’ expectations. </li><li>Training - Ongoing training and self-development are critical in all stages of a project. It allows for reflection and preventative procedures to mitigate the damage of incident incurrence. Simulations and technology are used to ensure expensive equipment are not used by untrained personnel.</li><li>Remote Control Management - Management of automated mining machinery and equipment require specialized equipment and machinery. Also required specialised systems in place to monitor status of equipment and the state of the machinery. </li><li>Mine Production Management – Tracking and management of materials is critical for the production process to ensure data can be collated and interpreted. This includes streamlined reconciliation, reporting, auditing processes and greater visibility for stakeholders. </li></ul><br><h2>The Process</h2><p>In WA, the major commodities include; Iron ore, petroleum, and gold. Each commodity has a different process of extraction; however, similar activities are required to achieve high production rates, performance and efficiency. Safety measures not kept up to standards can lead to costly reactive measures (frequently caused by equipment failure). </p>';

    }
}