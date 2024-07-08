from app import app, db
from sqlalchemy import Column, ForeignKey, Integer, Table
from sqlalchemy.orm import declarative_base, relationship

# defino las tablas
class Api(db.Model):
    id=db.Column(db.Integer, primary_key=True)
    carta=db.Column(db.String(100))
    significado=db.Column(db.String(500))
    imagen=db.Column(db.String(400))
    precio=db.Column(db.Integer)
    stock=db.Column(db.Integer)
    def __init__(self,carta,significado,imagen,precio,stock):
        self.carta=carta
        self.significado=significado
        self.imagen=imagen
        self.precio=precio
        self.stock=stock


with app.app_context():
    db.create_all()
#  ************************************************************
