<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Portfolio</title>
    <style>body{font-family:system-ui, -apple-system, sans-serif;padding:24px;}h1{margin-bottom:8px;}ul{margin:8px 0 24px 20px}</style>
</head>
<body>
    <h1>Portfolio</h1>

    <h2>Projects</h2>
    @if($portfolios->isEmpty())
        <p>No projects yet.</p>
    @else
        <ul>
            @foreach($portfolios as $p)
                <li><strong>{{ $p->title }}</strong> — {{ $p->category }}</li>
            @endforeach
        </ul>
    @endif

    <h2>Skills</h2>
    @if($skills->isEmpty())
        <p>No skills yet.</p>
    @else
        <ul>
            @foreach($skills as $s)
                <li>{{ $s->name }} ({{ $s->percentage }}%)</li>
            @endforeach
        </ul>
    @endif

</body>
</html>
