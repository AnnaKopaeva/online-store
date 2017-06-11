from aiohttp import web

__all__ = ['index', ]

async def index(request):
    return web.Response(text="Hello world")
