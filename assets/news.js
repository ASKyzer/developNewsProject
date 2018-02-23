$("#submit").on("click", function () {
    if ($("#terms").val() == "") {
        return;
    }
    $("#articles-goes-here").empty();
    var search = $("#terms").val().trim();
    var limit = $("#limits").val();
    //var limit = 2;
    var start = $("#startYear").val().trim();
    if (start == "") {
        start = "1852";
    }
    var end = $("#endYear").val().trim();
    if (end == "") {
        end = "2017";
    }

    var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    queryUrl += '?' + $.param({
        'api-key': "61672c1c287440d4a8d53b4400b9a62e",
        'q': search,
        'begin_date': start + "0101",
        'end_date': end + "1231",
        'sort': "newest",
        'page': 0
    });

    // var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    // queryUrl += '?' + $.param({
    //     'api-key': "61672c1c287440d4a8d53b4400b9a62e",
    //     'q': "star wars",
    //     'begin_date': "19730101",
    //     'end_date': "20081231",
    //     'sort': "newest",
    //     'page': 0
    // });
    console.log(queryUrl);

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        var results = response.response.docs;
        console.log(results);
        for (i = 0; i < limit; i++) {
            var entry = $("<div>");
            //console.log(response);
            var headline = $("<h2>").text(results[i].headline.main);
            var byline = $("<h3>").text(results[i].byline.original);
            var publish = $("<h4>").text(results[i].pub_date);
            var abstract = $("<p>").text(results[i].abstract);
            var link = $("<a>").attr("href", results[i].web_url).text("Read More");
            entry.append(headline, byline, publish, abstract, link);
            $("#articles-goes-here").append(entry);
            console.log(entry);
        }
    })
})

$("#clear").on("click", function () {
    $("#articles-goes-here").empty();
    $("#terms").val("");
    $("#startYear").val("");
    $("#endYear").val("");
})