from app import app, db
from sqlalchemy import Column, ForeignKey, Integer, Table
from sqlalchemy.orm import declarative_base, relationship

# defino las tablas
class Api(db.Model):
    id=db.Column(db.Integer, primary_key=True)
    carta=db.Column(db.String(100))
    significado=db.Column(db.String(500))
    imagen=db.Column(db.String(400))
    def __init__(self,carta,significado,imagen):
        self.carta=carta
        self.significado=significado
        self.imagen=imagen


with app.app_context():
    db.create_all()
#  ************************************************************
