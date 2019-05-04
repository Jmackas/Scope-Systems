general();
MiningLifeCycle();
explorationStage();

function general() {
    let targettedNode = document.querySelector("body");

    // Insert the stylesheet
    targettedNode.insertAdjacentHTML('beforeend', '<link href="https://jmackas.github.io/Scope-Systems/mockup_injection/styles.css" rel="stylesheet">');
}

function MiningLifeCycle() {
    if (window.location.href == "https://www.scopesystems.com.au/industries/mining-software/") {
        document.querySelector("#hotspot-5781").remove();

        let targettedNode = document.querySelector(".wrap").innerHTML = '<iframe class="lifecycle_accordion" src="https://jmackas.github.io/Scope-Systems/accordion_prototype/"></iframe>';

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
