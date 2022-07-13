function sendMail() {
    let fullName = document.getElementById('fullname');
    let emailAddress = document.getElementById('emailaddress');
    let projectSummary = document.getElementById('projectsummary');
    const SERVICE_ID = 'service_sy89ugk';
    const TEMPLATE_ID = 'template_cuhpcao';
    const TEMPLATE_PARAMS = {
        'name': fullName.value,
        'email': emailAddress.value,
        'project_description': projectSummary.value,
    };
    const PUBLIC_KEY = 'SkcIApcdBA67fNkU0';
    emailjs.send(SERVICE_ID, TEMPLATE_ID, TEMPLATE_PARAMS, PUBLIC_KEY)
    .then(
        function(response) {
            console.log('SUCCESS', response);
        },
        function(error) {
            console.error('FAILED', error);
        }
    )

    fullName.value = '';
    emailAddress.value = '';
    projectSummary.value = '';

    return false;
}