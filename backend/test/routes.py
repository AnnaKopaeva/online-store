from views import index


__all__ = ['set_routes', ]

def set_routes(app):
    app.router.add_get('/', index)
