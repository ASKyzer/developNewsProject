$("#submit").on("click", function() {

    var search = $("#terms").val();
    var limit = $("#limits").val();
    var start = $("#startyear").val();
    if (start == "") {
        start = "1852";
    }
    var end = $("#endyear").val();
    if (end == "") {
        end = "2017";
    }
    //var queryURL = 61672c1c287440d4a8d53b4400b9a62e
    var queryurl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    queryurl += '?' + $.param({
    'api-key': "61672c1c287440d4a8d53b4400b9a62e",
    'q': search,
    'begin_date': start + "0101",
    'end_date': end + "1231",
    'sort': "newest",
    'page': 0
    });

    $.ajax ({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        for (i=0; i<limit; i++) {
            var entry = $("<div>");
            
        }
    })
})

$("#clear").on("click", function() {

})