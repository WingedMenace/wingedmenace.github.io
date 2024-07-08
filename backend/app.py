from flask import Flask ,jsonify ,request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
app=Flask(__name__)
CORS(app)


app.config['SQLALCHEMY_DATABASE_URI']='mysql+pymysql://Prueba1Ivo:Python12@Prueba1Ivo.mysql.pythonanywhere-services.com/Prueba1Ivo$default'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False
app.config['SQLALCHEMY_POOL_RECYCLE']=299
app.config['SQLALCHEMY_POOL_TIMEOUT']=3000
db=SQLAlchemy(app)
ma=Marshmallow(app)

from controladores.cartas_controlador import *

if __name__=='__main__':
    app.run(debug=True, port=5001)    # ejecuta el servidor Flask en el puerto 5000