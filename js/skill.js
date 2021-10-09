let skillJson = [
    {
        "name": "HTML",
        "percentage": 85
    },
    {
        "name": "CSS",
        "percentage": 75
    },
    {
        "name": "JAVASCRIPT",
        "percentage": 70
    },
    {
        "name": "JQUERY",
        "percentage": 80
    },
    {
        "name": "REACT JS",
        "percentage": 30
    },
    {
        "name": "PHP Native",
        "percentage": 70
    },
    {
        "name": "CODEIGNITER",
        "percentage": 75
    },
    {
        "name": "LARAVEL",
        "percentage": 85
    },
    {
        "name": "MYSQL",
        "percentage": 80
    },
    {
        "name": "GIT & GITHUB",
        "percentage": 75
    },
    {
        "name": "REST API",
        "percentage": 65
    },
    {
        "name": "BOOTSTRAP",
        "percentage": 90
    }
];

showSkill(skillJson);

function showSkill(data) {
    let html = '';
    for (let d of data) {
    html += `
    <div class="col-md-4">
        <div class="service-box">
            <div class="service-ico">
                <span class="ico-circle"><i class="ion-code-working"></i></span>
            </div>
            <div class="service-content">
                <h2 class="s-title">${d.name}</h2>
                <p class="s-description text-center mb-0" style="font-size: 26px;">
                ${d.percentage}%
                </p>
            </div>
        </div>
    </div>
    `;
    }

    document.getElementById("skillData").innerHTML = html;
}