<html>
<head>
    <title>Hacker News</title>
</head>
<body>
<h2>{{publicPath}}</h2>
<ul class="news-view view">
    {% for item in data %}
    <li class="item">
        {{helper.relativeTime(item.create_at)}}
    </li>
    {% endfor %}
</ul>
</body>
</html>