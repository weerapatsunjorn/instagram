$(function () {

    $("#searchrealreal").click(function () {
        var answer = $("#realsearch").val();
        insearch(answer);
    });

    function insearch(answer2) {

        $.get(https://www.instagram.com/explore/tags/${answer2}/?__a=1, function (data, status) {
            console.log("\nStatus: " + status);
            console.log(data);
            $("#name").text(data.graphql.hashtag.name);
            $("#numberpost").text(data.graphql.hashtag.slug);
            $("#count").text(" = " + data.graphql.hashtag.edge_hashtag_to_media.count);

            for (node in data.graphql.hashtag.edge_hashtag_to_top_posts.edges) {

                var post = data.graphql.hashtag.edge_hashtag_to_top_posts.edges[node];
                console.log(post.node.display_url);

                var like = post.node.edge_liked_by.count;
                var commentCount =post.node.edge_media_to_comment.count;
                var caption = post.node.edge_media_to_caption.edges[0].node.text;
                var row = `<div class="col-4">
                                <img src = "${post.node.display_url}" alt="" width='250px' height='250px'> 
                                <br><br>  Like : ${like}<br> comment : ${commentCount}<br> | <br> | <br>                           
                                <div class="card border-0" >  ${caption}<div>              
                           <div>`
                $('#posts').append(row);
            }
        });
    }
});