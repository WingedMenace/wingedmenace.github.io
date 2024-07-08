from flask import jsonify, request
from app import app, db, ma
from modelos.producto_modelo import *

class ApiSchema(ma.Schema):
    class Meta:
        fields=('id','carta','significado','imagen','precio','stock')


producto_schema=ApiSchema()
productos_schema=ApiSchema(many=True)


@app.route('/api',methods=['GET'])
def get_Productos():
    all_productos=Api.query.all()
    result=productos_schema.dump(all_productos)
    return jsonify(result)

@app.route('/api/<id>',methods=['GET'])
def get_producto(id):
    producto=Api.query.get(id)
    return producto_schema.jsonify(producto)

@app.route('/api/<id>',methods=['DELETE'])
def delete_producto(id):
    producto=Api.query.get(id)
    db.session.delete(producto)
    db.session.commit()
    return producto_schema.jsonify(producto)

@app.route('/api', methods=['POST'])
def create_producto():
    carta=request.json['carta']
    significado=request.json['significado']
    imagen=request.json['imagen']
    precio=request.json['precio']
    stock=request.json['stock']
    new_producto=Api(carta,significado,imagen,precio,stock)
    db.session.add(new_producto)
    db.session.commit()
    return producto_schema.jsonify(new_producto)


@app.route('/api/<id>', methods=['PUT'])
def update_producto(id):
    producto=Api.query.get(id)
    producto.carta=request.json['carta']
    producto.significado=request.json['significado']
    producto.imagen=request.json['imagen']
    producto.precio=request.json['precio']
    producto.stock=request.json['stock']

    db.session.commit()
    return producto_schema.jsonify(producto)

@app.route('/')
def bienvenida():
    return "Si ves esto, es el backend... Pero la tabla es en /api"
