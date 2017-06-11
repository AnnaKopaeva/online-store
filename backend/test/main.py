from aiohttp import web
from routes import set_routes

app = web.Application()
set_routes(app)
web.run_app(app, host='0.0.0.0', port=8000)
