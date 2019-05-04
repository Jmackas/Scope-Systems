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

        let targettedNode = document.querySelector(".wrap");

        // Insert the button for downloading the button
        targettedNode.insertAdjacentHTML('beforeend', '<iframe class="lifecycle_accordion" src="https://jmackas.github.io/Scope-Systems/accordion_prototype/"></iframe>');
    }

}

function explorationStage() {
    if (window.location.href == "https://www.scopesystems.com.au/single-touch-payroll-scopetalk/") {
        let targettedNode = document.querySelector(".title .blog");

    }

}
