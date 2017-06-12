from aiohttp import web
from routes import set_routes

def init_function(argv):
    app = web.Application()
    set_routes(app)
    return app

# web.run_app(app, host='0.0.0.0', port=8000)
