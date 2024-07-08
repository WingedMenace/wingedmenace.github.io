from flask import jsonify, request
from app import app, db, ma
from modelos.producto_modelo import *

class ApiSchema(ma.Schema):
    class Meta:
        fields=('id','carta','significado','imagen','precio','stock')


cartas_schema=ApiSchema()
cartas_schema=ApiSchema(many=True)


@app.route('/api',methods=['GET'])
def get_Cosos():
    all_cosos=Api.query.all()
    result=cartas_schema.dump(all_cosos)
    return jsonify(result)

@app.route('/api/<id>',methods=['GET'])
def get_coso(id):
    coso=Api.query.get(id)
    return producto_schema.jsonify(coso)

@app.route('/api/<id>',methods=['DELETE'])
def delete_coso(id):
    coso=Api.query.get(id)
    db.session.delete(coso)
    db.session.commit()
    return cartas_schema.jsonify(coso)

@app.route('/api', methods=['POST'])
def create_coso():
    carta=request.json['carta']
    significado=request.json['significado']
    imagen=request.json['imagen']
    new_producto=Api(carta,significado,imagen)
    db.session.add(new_coso)
    db.session.commit()
    return cartas_schema.jsonify(new_coso)


@app.route('/api/<id>', methods=['PUT'])
def update_coso(id):
    coso=Api.query.get(id)
    coso.carta=request.json['carta']
    coso.significado=request.json['significado']
    coso.imagen=request.json['imagen']

    db.session.commit()
    return cartas_schema.jsonify(coso)

@app.route('/')
def bienvenida():
    return "Si ves esto, es el backend... Pero la tabla es en /api"
