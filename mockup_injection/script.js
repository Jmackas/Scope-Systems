general();
MiningLifeCycle();
explorationStage();
developmentStage()

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
        document.querySelector("#post-5163 .blog-content").innerHTML = '<p>The exploration stage of the Mining Lifecycle consists of the initial analysis of prospective territory, determining if it contains a worthwhile amount of minerals to be mined. The analysis of the territory can take between two to eight years and can cost up to $15 million – a value which may yield little return. A feasibility report will need to be generated from the geologists, determining if the prospective site has mining potential. </p><br><p>The various activities within this stage are conducted by professional Geologists, facilitating the use of modern tools and methodologies to measure the strength of mineral deposits in potential mining areas.</p><p>The activities that transpire throughout this phase consist of:</p><br><ol><li>Searching – sweeping land reserves to determine mining potential.</li><li>Sampling – retrieving soil and rock samples from the area for further investigations.</li><li>Ore reserve analysis – analyzing the samples to determine if an ore reserve is present and exhibits traits of potential profitability.</li><li>Feasibility report – this is a collated study determines whether it is economically worthwhile to pursue the mining deposit.</li></ol><br><h2>Operational Activities</h2><p>The finance department is involved quite heavily throughout this stage, as it can be extremely expensive yet yield little return. The legal and compliance department is also heavily involved, as social, and environmental factors need to be considered when mining within this area. </p><br><h2>Western Australia</h2><p>The exploration phase within Western Australia is controlled by the provisions of the Mining Act of 1978 and the Offshore Minerals Act of 1994. WA promotes measures of seeking prospective mine sites as it assists with stimulating the economy. A state government initiative called the Exploration Incentive Scheme (EIS) promotes the pursual of mining endeavors within WA. </p><br><h2>Infographic</h2><p>The below infographic assesses the confidence level of ore reserves throughout a geologist’s examination of a potential mine site. If a rich ore reserve is proven to be present on the prospective mine site, then an organization can safely agree it is an economically feasible mining endeavor. </p><img src="https://superfund.arizona.edu/sites/superfund.arizona.edu/files/life_cycle_of_a_mine.png" alt="Exploration stage diagram" style="float: left;">';

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
        document.querySelector("#post-5331 .blog-content").innerHTML = '<p>The Development stage of the Mining Lifecycle consists of the commencement of the mining activities. This activity can take between 4 – 12 years and can cost anywhere between one million to one billion (depending on the mine type and size). The construction of the mine site occurs within this stage – signaling the commencement of the mineral extraction.</p><br><h2>Activities</h2><p>At the development stage, the activities aim to ensure that there is no interruption happening in the period of performing the productive for the life of the mine.</p><br><p>The activities in this stage involves:</p><ol><li>Defining - determine the mining technology that will be used.</li><li>Constructing - building of access roads for transportation.</li><li>Identifying – recognizing resources including electricity, water sources etc.</li><li>Building – constructing ore processing facilities as well as the waste disposal areas.</li></ol><br><h2>Operational Activities</h2><p>The financial and accounting departments are heavily involved within this stage. An analysis of the overall costs regarding the mining endeavor needs to be stringently assessed, and the social and environmental impacts needing to be considered.</p><p>The primary operation activities should include:</p><ol><li>Obtaining water and mineral rights</li><li>Purchasing surface lands</li><li>Arranging for financing</li><li>Preparing permit applications and environment impact statement (EIS)</li></ol><br><h2>Infographic</h2><p>The below infographic shows the relationship between project value and time taken to complete the mining lifecycle. The risk of a project gradually decreasing from exploration to closure while the project value presents the reverse trend. At the development stage, risk is the dominant element to determine the success of the whole mining project.</p><h2>Mine Budget Control in WA</h2><p>In general, the expenditure of mining is between $1 million to $1 billion, which depends to the type and size. As part of budget, environmental rehabilitation occupies a non-negligible proportion. Based on diverse category of land disturbances, the MRF (Mining Rehabilitation Fund) levy has different fund contribution rate as the table shown below.</p><h2>References</h2><p>https://docplayer.net/55092979-Hassan-z-harraz-topic-2-the-mining-cycle.html</p>';

    }

}
