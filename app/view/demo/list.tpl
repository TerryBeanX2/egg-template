<html>
<head>
    <title>Hacker News</title>
    <link rel="stylesheet" href="../assets/css/bootstrap.min.css?version={{ version }}">
</head>
<body>
<h2>用户列表</h2>
<table class="table table-striped">
    <thead>
        <th>id</th>
        <th>姓名</th>
        <th>电话</th>
        <th>公司名称</th>
        <th>预算</th>
        <th>领域</th>
        <th>项目类型</th>
        <th>投放目的</th>
        <th>意向平台</th>
        <th>项目描述</th>
        <th>创建时间</th>
    </thead>
    <tbody>
        {% for item in data %}
        <tr>
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.phone}}</td>
            <td>{{item.company_name}}</td>
            <td>{{item.budget}}</td>
            <td>{{item.field}}</td>
            <td>{{item.project_type}}</td>
            <td>{{item.ad_aim}}</td>
            <td>{{item.like_platform}}</td>
            <td>{{item.tip}}</td>
            <td>{{helper.relativeTime(item.created_at)}}</td>
        </tr>
        {% endfor %}
    </tbody>
</table>
<script src="../assets/js/jquery.min.js?version={{ version }}"></script>
<script src="../assets/js/bootstrap.min.js?version={{ version }}"></script>
</body>
</html>
