from flask import Flask ,jsonify ,request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
app=Flask(__name__)
CORS(app)


app.config['SQLALCHEMY_DATABASE_URI']='mysql+pymysql://Wingedmenace:Python12@Wingedmenace.mysql.pythonanywhere-services.com/Wingedmenace$default'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False
app.config['SQLALCHEMY_POOL_RECYCLE']=299
app.config['SQLALCHEMY_POOL_TIMEOUT']=30
db= SQLAlchemy(app)
ma=Marshmallow(app)

from controladores.producto_controlador import *