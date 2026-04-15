import http from 'http';

const PORT = process.env.PORT || 10000;

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/index.html') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>BTCUSDT Live Monitor Status</title>
        <style>
          body { font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background-color: #f0f2f5; }
          .card { background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); text-align: center; }
          h1 { color: #1a73e8; }
          .status { color: #34a853; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>BTCUSDT 實時監控系統</h1>
          <p>服務狀態：<span class="status">運行中</span></p>
          <p>後台監控任務已啟動，Telegram 通知正常運作。</p>
          <p>更新時間：${new Date().toLocaleString()}</p>
        </div>
      </body>
      </html>
    `);
  } else if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', timestamp: new Date().toISOString() }));
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Web Status Server is running on port ${PORT}`);
});
