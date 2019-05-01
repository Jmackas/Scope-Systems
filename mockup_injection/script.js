MiningLifeCycle();

function MiningLifeCycle() {
    document.querySelector("#hotspot-5781").remove();

    let targettedNode = document.querySelector(".wrap");

    // Insert the button for downloading the button
    targettedNode.insertAdjacentHTML('beforeend', '<iframe class="lifecycle_accordion" src="https://jmackas.github.io/Scope-Systems/accordion_prototype/"></iframe>');
    
    // Insert the iframe styling
    targettedNode.insertAdjacentHTML('beforeend', 'iframe.lifecycle_accordion {width: 100%;height: 1500px;}');

}
