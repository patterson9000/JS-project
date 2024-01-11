$(document).ready(function() {
    function updateElement() {
        const $element1 = $('#element1');
        const $element2 = $('.element2');
        const $element3 = $('.element3');

        $element1.parent().addClass('parent-element');
        $element2.next().addClass('next-element');
        $element3.prev().addClass('previous-element');

        $element1.css('color', 'red');
        $element2.css('color', 'blue');
        $element3.css('color', 'green');
    }

    // Call the function when the page is ready
    updateElement();

    function fetchData() {
        const apiToken = 'apify_api_jWRnnkeO4dritiqX3defozHZwI81yT3BQmbM';
        const apiUrl = `https://api.apify.com/v2/acts/mshopik~bjj-fanatics-scraper/run-sync?token=${apiToken}`;

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({}),
        };

        $.ajax({
            url: apiUrl,
            method: requestOptions.method,
            headers: requestOptions.headers,
            data: requestOptions.body,
            dataType: 'json',
            success: function(data) {
                if (data && Object.keys(data).length > 0) {
                    // Update the HTML with the retrieved data
                    $('#output').text(JSON.stringify(data));
                } else {
                    console.error('AJAX Error: Empty response or invalid JSON format.');
                }
            },
            error: function(xhr, status, error) {
                console.error('AJAX Error:', error);
            }
        });
    }

    // Event listener for the button click
    $('#fetch-button').click(function() {
        fetchData();
    });
});
