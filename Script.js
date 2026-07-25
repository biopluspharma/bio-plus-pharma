// ===============================
// BioPlus Pharmaceuticals
// script.js
// ===============================

function showProduct(product) {

    const info = document.getElementById("productInfo");

    switch(product){

        case "minvin":

            info.innerHTML = `
            <h3>Minvin B</h3>

            <p><strong>Category:</strong> Multivitamin Tablets & Syrup</p>

            <p>
            Supports healthy growth, improves immunity,
            enhances energy production and helps maintain
            overall wellbeing.
            </p>
            `;
            break;


        case "laczint":

            info.innerHTML = `
            <h3>LacZint</h3>

            <p><strong>Category:</strong> Probiotic Sachet</p>

            <p>
            Advanced probiotic formulation that restores
            intestinal flora, improves digestion and supports
            gastrointestinal health.
            </p>
            `;
            break;


        case "oscad":

            info.innerHTML = `
            <h3>Osca-D</h3>

            <p><strong>Category:</strong> Calcium + Vitamin D3</p>

            <p>
            Helps maintain strong bones and teeth while
            supporting calcium absorption and preventing
            Vitamin D deficiency.
            </p>
            `;
            break;


        case "zefacid":

            info.innerHTML = `
            <h3>Zefacid</h3>

            <p><strong>Category:</strong> Antibiotic</p>

            <p>
            Broad spectrum antibacterial formulation used
            for the treatment of susceptible bacterial infections.
            </p>
            `;
            break;


        case "dovd3":

            info.innerHTML = `
            <h3>DOV-D3</h3>

            <p><strong>Category:</strong> Vitamin D3</p>

            <p>
            Supports bone strength, immunity and muscle
            function while correcting Vitamin D deficiency.
            </p>
            `;
            break;


        case "demos":

            info.innerHTML = `
            <h3>DEMOS</h3>

            <p><strong>Category:</strong> Healthcare Product</p>

            <p>
            Premium BioPlus pharmaceutical product designed
            to provide quality healthcare with trusted
            international standards.
            </p>
            `;
            break;

    }

}


// Contact Form

document.querySelector("form").addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank you for contacting BioPlus Pharmaceuticals. We will contact you soon.");

    this.reset();

});


// Smooth fade-in animation

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});
