from aiohttp import web
import os

__all__ = ['index', ]

async def index(request):
    mode = os.environ["TEXT"]
    return web.Response(text=f"Hello world: {mode}")
